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
    // console.log('ready');
    var queryBool = $.QueryString.home;
    if (queryBool){
        NoteAnnotatePro.home = true;
    }

    var settingBtn = $('#popup-setting-bar-btn');
    settingBtn.click(function(){
        //TODO 
    });
    settingBtn.hover(function () {
        settingBtn.css('color','gainsboro');
    }, function () {
        settingBtn.css('color', 'whitesmoke');
    });

    var homeBtn = $('#popup-setting-bar-home');
    homeBtn.click(function(){
        //TODO open new window
        var win = window.open();
    });
    homeBtn.hover(function () {
        homeBtn.css('color','gainsboro');
    }, function () {
        homeBtn.css('color', 'whitesmoke');
    });

    var inputBtn = $('#popup-setting-bar-input2');
    inputBtn.click(function(){
        var targetStr= inputBtn.val();

        if (targetStr.toLowerCase().trim().includes('local')){
            inputBtn.val('  Global');
            NoteAnnotatePro.noteLocal = false;
            NoteAnnotatePro.editConfig(NoteAnnotatePro.noteLocal);
        }
        else{
            inputBtn.val('  Local : ' + NoteAnnotatePro.currentURL);
            NoteAnnotatePro.noteLocal = true;
            NoteAnnotatePro.editConfig(NoteAnnotatePro.noteLocal);
        }
        //Unfocus
        NoteAnnotatePro.manuallocalUpdate();
        $('#popup-text-area').focus();
    });
    inputBtn.hover(function () {
        inputBtn.css('background-color','gainsboro');
    }, function () {
        inputBtn.css('background-color', 'whitesmoke');
    });

    $('#popup-text-area').change(function(){
        //TODO unfinished
        var thisObj = $(this);
        var updatedValue = thisObj.val();

        //Save data on change
        if (NoteAnnotatePro.noteLocal){ //Local
            NoteAnnotatePro.saveDataWithIndex(NoteAnnotatePro.currentURL,thisObj.val(),NoteAnnotatePro.defaultFontSize,NoteAnnotatePro.defaultTextColor,NoteAnnotatePro.defaultBackgroundColor,NoteAnnotatePro.currentIndex);
        }
        else{ //Global
            NoteAnnotatePro.saveDataWithIndex('',thisObj.val(),NoteAnnotatePro.defaultFontSize,NoteAnnotatePro.defaultTextColor,NoteAnnotatePro.defaultBackgroundColor,0);
        }

    })
    
    NoteAnnotatePro.manuallocalUpdate(); //Ensure update
});

    // browser.storage.local.clear(); //Purge Storage

var NoteAnnotatePro={ //Main Logic
    dataList:[],

    home:false,
    currentURL:'',
    currentIndex:0,
    noteLocal:false,

    defaultFontSize:'1em',
    defaultTextColor:'black',
    defaultBackgroundColor:'#ffc',

    getCurrentURL:function(windowInfo){
        tabInfo = windowInfo.tabs;
        for (var i = 0; i < windowInfo.tabs.length; i++) { //Search for active tabs
            if(!tabInfo[i].active) continue;
            NoteAnnotatePro.currentURL = NoteAnnotateProHelper.extractHostname(tabInfo[i].url);
            break;
        }
    },

    saveData:function(url,text,fontSize,textColor,backgroundColor){ //Empty string is global
        NoteAnnotatePro.saveDataWithIndex(url,text,fontSize,textColor,backgroundColor,NoteAnnotatePro.dataList.length); //Save data using next index
    },

    saveDataWithIndex:function(url,text,fontSize,textColor,backgroundColor,index){
        var obj = {url,text,fontSize,textColor,backgroundColor}
        NoteAnnotatePro.dataList[index] = obj;

        browser.storage.local.set({
            dataList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manuallocalUpdate();
    },

    saveDataAll(){
        browser.storage.local.set({
            dataList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manuallocalUpdate();
    },

    deleteDataByIndex:function(index){
        NoteAnnotatePro.dataList.splice(index,1);

        browser.storage.local.set({
            recordList:  NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manuallocalUpdate();
    },

    editConfig:function(noteLocal){
        browser.storage.local.set({
            noteLocal:  noteLocal
        });

    },

    manuallocalUpdate:function(){ //Update GUI
        //Popup Update
        // console.log (NoteAnnotatePro.currentIndex + " current Index");
        var list = NoteAnnotatePro.dataList;
        var isLocal = NoteAnnotatePro.noteLocal;//Global/Local 
        var noteLocalGlobalInput = $('#popup-setting-bar-input2');
        var item;
        if (isLocal){
            noteLocalGlobalInput.val('  Local : ' + NoteAnnotatePro.currentURL);
            item = list[NoteAnnotatePro.currentIndex];
        }
        else{
            noteLocalGlobalInput.val('  Global');
            item = list[0];
        }
  
        $('#popup-text-area').val(item.text);

        //Main Update

    },

    storageChangedListener:function(changes, area) {
        // console.log('storage changed');
        // var changedItems = Object.keys(changes);
       
        // for (var item of changedItems) {
        //     mainWindow.recordList = mainWindow.decrpytList(changes[item].newValue);
        // }

        // mainPageHelper.loadMainPage(mainWindow.recordList);
    },

    initialize:function(){
        NoteAnnotateProHelper.getTabsInfo(this.getCurrentURL); //Get tab info

        //Load storage area
        var storageAreaObj = browser.storage.local.get(
            {
                //Deafult obj withn index 0, url and text empty                
                dataList: [{url:"",text:"",fontSize:NoteAnnotatePro.defaultFontSize,textColor:NoteAnnotatePro.defaultTextColor,backgroundColor:NoteAnnotatePro.defaultBackgroundColor}],
                noteLocal: false
            }
        );
        storageAreaObj.then(function(item){
            console.log('Loading Storage from local');
            console.log(item.dataList);
            console.log(item.noteLocal)
            if (item){

                NoteAnnotatePro.noteLocal = item.noteLocal;

                //Load the correct note
                var isFound = false;
                for (var i=1;i<item.dataList.length;i++){
                    if (NoteAnnotatePro.currentURL == item.dataList[i].url){
                        //Matched URL
                        // console.log('found index' + i);
                        NoteAnnotatePro.currentIndex = i;
                        isFound=true;
                        break;
                    } 
                }

                if (!isFound){ //Not found, craete new object
                    NoteAnnotatePro.currentIndex = item.dataList.length; 
                    item.dataList[item.dataList.length] = {url:"",text:"",fontSize:NoteAnnotatePro.defaultFontSize,textColor:NoteAnnotatePro.defaultTextColor,backgroundColor:NoteAnnotatePro.defaultBackgroundColor};
                }

                NoteAnnotatePro.dataList = item.dataList;
            }
        
            NoteAnnotatePro.manuallocalUpdate(); //UPDATE GUI
            browser.storage.onChanged.addListener(NoteAnnotatePro.storageChangedListener);
        },
        function(error){
            console.log(error);
        });

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