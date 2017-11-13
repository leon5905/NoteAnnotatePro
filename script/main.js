(function($) {
    $.QueryString = (function(paramsArray) {
        let params = {};

        for (let i = 0; i < paramsArray.length; ++i)
        {
            let param = paramsArray[i]
                .split('=', 2);

            if (param.length !== 2)
                continue;

            params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
        }

        return params;
        
    })(window.location.search.substr(1).split('&'))
})(jQuery);

$(document).ready(function(){
    var queryBool = $.QueryString.home;
    if (queryBool){
        NoteAnnotatePro.home = true;
    }

    $('#popup-setting-btn').click(function(){
        //TODO 
        //Open Setting Menu
    });

    $('#popup-text-area').change(function(){
        //TODO unfinished
        var thisObj = $(this);
        var updatedValue = thisObj.val();
        var index = thisObj.attr('data-index');

        //Save data on change
        console.log('change');
    })
    
});

var NoteAnnotatePro={ //Main Logic
    dataList:[],

    home:false,
    currentURL:null,

    getCurrentURL:function(windowInfo){
        tabInfo = windowInfo.tabs;
        for (var i = 0; i < windowInfo.tabs.length; i++) { //Search for active tabs
            if(!tabInfo[i].active) continue;
            this.currentURL = tabInfo[i].url;
            break;
        }
    },

    saveData:function(url,text){ //Empty string is global
        mainWindow.saveDataWithIndex(url,text,NoteAnnotatePro.dataList.length); //Save data using next index
    },

    saveDataWithIndex:function(url,text){
        var global=false;
        if (url==''){
            global = true;
        }

        var obj = {url,text}
        NoteAnnotatePro.dataList[index] = obj;

        // mainWindow.dataList.sort(function(a,b){ //Sort it
        //     var textA = a.name.toUpperCase();
        //     var textB = b.name.toUpperCase();

        //     var textC = a.username.toUpperCase();
        //     var textD = b.username.toUpperCase();
        //     if (textA < textB) return -1;
        //     else if (textA > textB) return 1;
        //     else if (textC < textD) return -1;
        //     else if (textC > textD) return 1;
        //     else return 0;
        // });

        browser.storage.sync.set({
            dataList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manualSyncUpdate();
    },

    saveDataAll(){
        browser.storage.sync.set({
            dataList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manualSyncUpdate();
    },

    deleteDataByIndex:function(index){
        NoteAnnotatePro.dataList.splice(index,1);

        browser.storage.sync.set({
            recordList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manualSyncUpdate();
    },

    initialize:function(){
        NoteAnnotateProHelper.getTabsInfo(this.getCurrentURL);
    }
}

var NoteAnnotateProHelper={ //Collection of Helper functions
    download:function (filename, text) { //Download text file
        var element = document.createElement('a'); //Create temp holder
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); //Download the file
        document.body.removeChild(element); //Remove Temp
    },

    getTabsInfo: function(callback){ //Get Tab information
        var getting = browser.windows.getCurrent({populate: true});
        getting.then(callback, null);
    },

    extractRootDomain:function(url) {
        var domain = mainWindow.extractHostname(url),
            splitArr = domain.split('.'),
            arrLen = splitArr.length;
    
        //extracting the root domain here
        //if there is a subdomain 
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
            //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
            if (splitArr[arrLen - 1].length == 2 && splitArr[arrLen - 1].length == 2) {
                //this is using a ccTLD
                domain = splitArr[arrLen - 3] + '.' + domain;
            }
        }
        return domain;
    },

    extractHostname:function(url) {
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
    
        if (url.indexOf("://") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }
    
        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];
    
        return hostname;
    },
}


NoteAnnotatePro.initialize(); //Initialize the variable