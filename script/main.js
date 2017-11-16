(function ($) {
    $.QueryString = (function (paramsArray) {
        let params = {};

        for (let i = 0; i < paramsArray.length; ++i) {
            let param = paramsArray[i]
                .split('=', 2);

            if (param.length !== 2)
                continue;

            params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
        }

        return params;

    })(window.location.search.substr(1).split('&'))
})(jQuery);

$(document).ready(function () {
    // console.log('ready');
    var queryBool = $.QueryString.home;
    // queryBool=false;
    if (queryBool) {
        NoteAnnotatePro.home = true;
        // console.log($('#popup-content'));
        // $('#popup-content').hide();      

        var inputField = $('#main-page-search-input');
        inputField.on('input',function(){
            NoteAnnotatePro.searchFunction($(this).val());
        });

        particlesJS.load('particles-js', 'assets/particle.json', function() {
            console.log('callback - particles.js config loaded');
        });

        // //Clean up record
        // var list = NoteAnnotatePro.dataList;
        // var isClean = false;
        // console.log(list);
        // for (var i=list.length-1;i>0;i--){
        //     var item = list[i];
        //     if (item.text==''){
        //         NoteAnnotatePro.dataList.splice(i,1); //Clean up record
        //         isClean=true;
        //     }
        // }
        // if (isClean){
        //     NoteAnnotatePro.saveDataRefresh();
        // }

    }
    else{
        $('#main-page').hide();
        $('#popup-content').show();    
        $('#particles-js').hide();
    }

    var popupbody = $('#popup-content');
    popupbody.css('z-index','1');

    var homeBtn = $('#popup-setting-bar-home');
    homeBtn.click(function () {
        //TODO open new window
        var win = window.open('/main.html?home=true');
    });
    homeBtn.hover(function () {
        homeBtn.css('color', 'gainsboro');
    }, function () {
        homeBtn.css('color', 'whitesmoke');
    });

    var inputBtn = $('#popup-setting-bar-input2');
    inputBtn.click(function () {
        // var thisObj= $('#popup-text-area');
        // var updatedValue = thisObj.val();
        // //Save data on change
        // if (NoteAnnotatePro.noteLocal) { //Local
        //     NoteAnnotatePro.saveDataWithIndex(NoteAnnotatePro.currentURL, thisObj.val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, NoteAnnotatePro.currentIndex);
        // }
        // else { //Global
        //     NoteAnnotatePro.saveDataWithIndex('', thisObj.val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, 0);
        // }

        var targetStr = inputBtn.val();
        if (targetStr.toLowerCase().trim().includes('local')) {
            inputBtn.val('  Global');
            NoteAnnotatePro.noteLocal = false;
            NoteAnnotatePro.editConfig(NoteAnnotatePro.noteLocal);
        }
        else {
            inputBtn.val('  Local : ' + NoteAnnotatePro.currentURL);
            NoteAnnotatePro.noteLocal = true;
            NoteAnnotatePro.editConfig(NoteAnnotatePro.noteLocal);
        }
        //Unfocus
        NoteAnnotatePro.manuallocalUpdate();
        $('#popup-text-area').focus();
    });
    inputBtn.hover(function () {
        inputBtn.css('background-color', 'gainsboro');
    }, function () {
        inputBtn.css('background-color', 'whitesmoke');
    });

    $('#popup-text-area').change(function () {
        var thisObj = $(this);
        var updatedValue = thisObj.val();

        // alert('INdex: '+  NoteAnnotatePro.currentIndex + ", val:" + updatedValue + ', ' + NoteAnnotatePro.defaultBackgroundColor);

        //Save data on change
        if (NoteAnnotatePro.noteLocal) { //Local
            NoteAnnotatePro.saveDataWithIndex(NoteAnnotatePro.currentURL, thisObj.val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, NoteAnnotatePro.defaultFontFamily, NoteAnnotatePro.currentIndex);
        }
        else { //Global
            NoteAnnotatePro.saveDataWithIndex('', thisObj.val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, NoteAnnotatePro.defaultFontFamily, 0);
        }
    })

    var settingWindow = $('#popup-setting-main')
    settingWindow.hide();
    settingWindow.click(function () {
        settingWindow.hide();
    });
    var settingSmallWindows = $('.popup-setting-window');
    settingSmallWindows.click(function (e) {
        return false;
    })

    var settingShowHideWindow = $('#popup-setting-main-window');
    var settingShowHidewindowFontSize = $('#popup-setting-fontsize-window');
    var settingShowhideWindowTextcolor = $('#popup-setting-textcolor-window');
    var settingShowHideWindowBackgroundColor = $('#popup-setting-backgroundcolor-window');
    var settingShowHideWindowFontFamily = $('#popup-setting-fontfamily-window');
    settingShowHidewindowFontSize.hide();
    settingShowhideWindowTextcolor.hide();
    settingShowHideWindowBackgroundColor.hide();
    settingShowHideWindowFontFamily.hide();
    var settingBtn = $('#popup-setting-bar-btn');
    settingBtn.click(function () {
        $('#popup-setting-main').show();
        settingShowHideWindow.show();
        settingShowHidewindowFontSize.hide();
        settingShowhideWindowTextcolor.hide();
        settingShowHideWindowBackgroundColor.hide();
        settingShowHideWindowFontFamily.hide();
    });
    settingBtn.hover(function () {
        settingBtn.css('color', 'gainsboro');
    }, function () {
        settingBtn.css('color', 'whitesmoke');
    });

    var settingsRow = $('.popup-setting-row'); //Give rows a selection indicator
    settingsRow.each(function () {
        var thisObj = $(this);
        thisObj.hover(function () {
            // thisObj.css('background-color', 'gainsboro');
            thisObj.addClass('hover');
        }, function () {
            // thisObj.css('background-color', 'white');
            thisObj.removeClass('hover');
        });
    });

    //Setting Main Window -> each setting main window transition logic
    $('#popup-setting-font-size').click(function () {
        var fontSizeWindow = $('popup-setting-fontsize-window');
        fontSizeWindow.show();
        settingShowHideWindow.hide();
        settingShowHidewindowFontSize.show();
    });
    $('#popup-setting-text-color').click(function () {
        // var fontSizeWindow =  $('popup-setting-fontsize-window');
        settingShowhideWindowTextcolor.show();
        settingShowHideWindow.hide();
    });
    $('#popup-setting-background-color').click(function () {
        settingShowHideWindowBackgroundColor.show();
        settingShowHideWindow.hide();
    })
    $('#popup-setting-font-family').click(function () {
        settingShowHideWindowFontFamily.show();
        settingShowHideWindow.hide();
    })
    $('#popup-setting-download-txt').click(function () {
        NoteAnnotateProHelper.download('NoteAnnotatePro.txt', $('#popup-text-area').val());
        settingWindow.hide();
    });

    //Font Size Window Setting Logic
    settingShowHidewindowFontSize.find('.popup-setting-row').each(function () {
        var thisObj = $(this);
        var fontSize = thisObj.find('.popup-setting-icon-label').css('font-size');
        thisObj.click(function () {
            NoteAnnotatePro.defaultFontSize = fontSize;
            NoteAnnotatePro.saveDataAll();
        });
    });

    //Text Color Window Setting Logic
    settingShowhideWindowTextcolor.find('.popup-setting-row').each(function () {
        var thisObj = $(this);
        var textColor = thisObj.css('color');
        thisObj.click(function () {
            NoteAnnotatePro.defaultTextColor = textColor;
            NoteAnnotatePro.saveDataAll();
        });
    });
    //Background color window setting logic
    settingShowHideWindowBackgroundColor.find('.popup-setting-row').each(function () {
        var thisObj = $(this);
        var backgroundcolor = thisObj.css('background-color');
        thisObj.click(function () {
            NoteAnnotatePro.defaultBackgroundColor = backgroundcolor;
            NoteAnnotatePro.saveDataAll();
        });
    });

    //Font Family window setting logic
    settingShowHideWindowFontFamily.find('.popup-setting-row').each(function () {
        var thisObj = $(this);
        var fontFamily = thisObj.css('font-family');
        thisObj.click(function () {
            NoteAnnotatePro.defaultFontFamily = fontFamily;
            NoteAnnotatePro.saveDataAll();
        });
    });

    //Style Popupcontent correctly
    //Home Popup
    if (queryBool){
        var popupcontentmain = $('#popup-content-div');
        popupcontentmain.css('position','absolute');
        popupcontentmain.css('top','0');
        popupcontentmain.css('left','0');
        popupcontentmain.css('width','100%');
        popupcontentmain.css('height','100%');
        popupcontentmain.css('background','rgba(0,0,0,0.5)');
        popupcontentmain.hide();
        popupcontentmain.click(function(){
            var thisobj = $(this);
            thisobj.hide();
            $('#popup-text-area').change();
        })

        var popupbody = popupcontentmain.find('#popup-content');
        console.log(popupbody);
        popupbody.click(function(e){
            e.stopPropagation();
        })
        popupbody.css('margin','auto');
        popupbody.find('#popup-setting-bar-input2').unbind('click mouseenter mouseleave');
        popupbody.find('#popup-setting-bar-input2').css('cursor','default');
        popupbody.find('#popup-setting-bar-input').css('cursor','default');
        popupbody.find('.popup-setting').css('width','40%');
        var homeBtn = popupbody.find('#popup-setting-bar-home');
        homeBtn.unbind('click');
        homeBtn.click(function(){
            popupcontentmain.hide();
            $('#popup-text-area').change();
        });
        popupbody.css('width','75%');
        popupbody.css('height','75%');
        popupbody.css('z-index','1000');

        $('#popup-text-area').css('min-height','10px');
        $('#popup-text-area').css('min-width','0px');
        $('#popup-text-area').css('height','calc(100% - 40px)');
        $('#popup-text-area').css('resize','none');
        var popupcontentmin = $('#popup-content');
        popupcontentmin.css('min-height','0px');
        popupcontentmin.css('min-width','0px');

    }


    if (NoteAnnotatePro.loaded)
        NoteAnnotatePro.manuallocalUpdate(); //Ensure update
});
// browser.storage.local.clear()    ; //Purge Storage

var NoteAnnotatePro = { //Main Logic
    dataList: [],

    loaded:false,
    home: false,
    currentURL: '',
    currentIndex: 0,
    noteLocal: false,

    defaultFontSize: '15px',
    defaultTextColor: 'black',
    defaultBackgroundColor: '#ffc',
    defaultFontFamily: 'Arial',

    getCurrentURL: function (windowInfo) {
        tabInfo = windowInfo.tabs;
        for (var i = 0; i < windowInfo.tabs.length; i++) { //Search for active tabs
            if (!tabInfo[i].active) continue;
            NoteAnnotatePro.currentURL = NoteAnnotateProHelper.extractHostname(tabInfo[i].url);
            break;
        }
    },

    saveData: function (url, text, fontSize, textColor, backgroundColor, fontFamily) { //Empty string is global
        NoteAnnotatePro.saveDataWithIndex(url, text, fontSize, textColor, backgroundColor, fontFamily, NoteAnnotatePro.dataList.length); //Save data using next index
    },

    saveDataWithIndex: function (url, text, fontSize, textColor, backgroundColor, fontFamily, index) {
        // alert('saveDataWithIndex ' + fontSize);
        // console.log (url + ' ' + text + ' ' + fontSize + ' ' + textColor + ' ' + backgroundColor + ' ' + fontFamily + ' ' + index + ' ' )
        var obj = { url, text, fontSize, textColor, backgroundColor, fontFamily }
        NoteAnnotatePro.dataList[index] = obj;

        browser.storage.local.set({
            dataList: NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manuallocalUpdate();
    },

    saveDataAll() {
        //Save data on change
        var targetIndex = 0;
        if (NoteAnnotatePro.noteLocal) { //Local
            targetIndex = NoteAnnotatePro.currentIndex;
            NoteAnnotatePro.saveDataWithIndex(NoteAnnotatePro.currentURL, $('#popup-text-area').val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, NoteAnnotatePro.defaultFontFamily, targetIndex);
        }
        else {
            NoteAnnotatePro.saveDataWithIndex('', $('#popup-text-area').val(), NoteAnnotatePro.defaultFontSize, NoteAnnotatePro.defaultTextColor, NoteAnnotatePro.defaultBackgroundColor, NoteAnnotatePro.defaultFontFamily, targetIndex);
        }

        // alert(NoteAnnotatePro.defaultFontSize + " default font size");

        // NoteAnnotatePro.manuallocalUpdate();
        // browser.storage.local.set({
        //     dataList: NoteAnnotatePro.dataList
        // });
        // NoteAnnotatePro.manuallocalUpdate();
    },

    saveDataRefresh(){ //Save all data 
        browser.storage.local.set({
            dataList: NoteAnnotatePro.dataList
        });
    },

    deleteDataByIndex: function (index) {
        NoteAnnotatePro.dataList.splice(index, 1);

        browser.storage.local.set({
            dataList: NoteAnnotatePro.dataList
        });

        NoteAnnotatePro.manuallocalUpdate();
    },

    editConfig: function (noteLocal) {
        browser.storage.local.set({
            noteLocal: noteLocal
        });

    },

    manuallocalUpdate: function () { //Update GUI
        //Popup Update
        // console.log (NoteAnnotatePro.currentIndex + " current Index");
        var list = NoteAnnotatePro.dataList;
        var isLocal = NoteAnnotatePro.noteLocal;//Global/Local 
        var noteLocalGlobalInput = $('#popup-setting-bar-input2');
        var item = list[0];
        if (isLocal) {
            noteLocalGlobalInput.val('  Local : ' + NoteAnnotatePro.currentURL);
            item = list[NoteAnnotatePro.currentIndex];
        }
        else {
            noteLocalGlobalInput.val('  Global');
            item = list[0];
        }

        if (!item)
            item= { url: '~/Home', text: "", fontSize: '15px', textColor: 'black', backgroundColor: '#ffc', fontFamily: 'Arial'};

        //Update Appearance
        var textArea = $('#popup-text-area');
        textArea.val(item.text);
        textArea.css('font-size', item.fontSize);
        textArea.css('color', item.textColor);

        var popupContent = $('.popup-content');
        popupContent.css('background-color', item.backgroundColor);
        popupContent.css('font-family',item.fontFamily);

        //Update cache value
        NoteAnnotatePro.defaultFontSize = item.fontSize;
        NoteAnnotatePro.defaultBackgroundColor = item.backgroundColor;
        NoteAnnotatePro.defaultTextColor = item.textColor;
        NoteAnnotatePro.defaultFontFamily = item.fontFamily;

        //Update setting appearance Update
        var settingShowHidewindowFontSize = $('#popup-setting-fontsize-window');
        settingShowHidewindowFontSize.find('.popup-setting-row').each(function () {
            var thisObj = $(this);
            var thisFontSize = thisObj.attr('data-fontsize');
            if (NoteAnnotatePro.defaultFontSize.trim() == thisFontSize.trim()) {
                thisObj.addClass('active');
            }
            else {
                thisObj.removeClass('active');
            }
        });
        var settingShowhideWindowTextcolor = $('#popup-setting-textcolor-window');
        settingShowhideWindowTextcolor.find('.popup-setting-row').each(function () {
            var thisObj = $(this);
            var thisTextColor = thisObj.css('color');
            if (NoteAnnotatePro.defaultTextColor.trim() == thisTextColor.trim()) {
                thisObj.addClass('active');
            }
            else {
                thisObj.removeClass('active');
            }
        });
        var settingShowHideWindowBackgroundColor = $('#popup-setting-backgroundcolor-window');
        settingShowHideWindowBackgroundColor.find('.popup-setting-row').each(function () {
            var thisObj = $(this);
            var thisBackgroundColor = thisObj.css('background-color');
            if (NoteAnnotatePro.defaultBackgroundColor.trim() == thisBackgroundColor.trim()) {
                thisObj.addClass('active');
            }
            else {
                thisObj.removeClass('active');
            }
        });
        var settingShowHideWindowFontFamily= $('#popup-setting-fontfamily-window');
        settingShowHideWindowFontFamily.find('.popup-setting-row').each(function () {
            var thisObj = $(this);
            var thisFontFamily = thisObj.css('font-family');
            if (NoteAnnotatePro.defaultFontFamily.trim() == thisFontFamily.trim()) {
                thisObj.addClass('active');
            }
            else {
                thisObj.removeClass('active');
            }
        });

        //If Home page is true
        // console.log('Home ' + NoteAnnotatePro.home);
        if (NoteAnnotatePro.home){
            NoteAnnotatePro.searchFunction($('#main-page-search-input').val());
        }

    },

    searchFunction:function(parameter){
        // console.log('Updating home page from new data');
        //Update homepage note appeareance
        var list = NoteAnnotatePro.dataList;
        // console.log(list);
        // console.log(list.length);
        var topContainer= $('#main-page-note-area');
        var sampleRow = $('#main-page-note-row-sample');
        sampleRow =sampleRow.clone();
        sampleRow.css('position','');
        sampleRow.css('top','');
        var sampleColumn = $('#main-page-note-sample');
        sampleColumn = sampleColumn.clone();
        // sampleColumn.css('z-index',)
        sampleRow.empty();

        topContainer.empty();

        var currentParameterRegExp = new RegExp(parameter.trim(),'i');
        var currentRow = null;
        var count=0;
        var isEmpty = (parameter.trim() == '');
        if (!parameter){
            isEmpty =true;
        }
        
        for (var i=0;i<list.length;i++){
            var item = list[i];

            if (!isEmpty && !currentParameterRegExp.test(item.text.trim()))
                continue;
        
            if (count%5==0){
                currentRow = sampleRow.clone();
                topContainer.append(currentRow);
            }

            var newNote = sampleColumn.clone();
            var newNoteDiv = newNote.find('.main-page-note-display-div');
            newNoteDiv.click(function(){
                //Home note click
                var popupcontentmain = $('#popup-content-div');
                popupcontentmain.show();
                var popupbody = popupcontentmain.find('#popup-content');

                popupbody.css('display','block');
                var dataIndex= $(this).parent().attr('data-index');
                if (dataIndex == '0'){
                    NoteAnnotatePro.noteLocal = false;
                }
                else{
                    NoteAnnotatePro.noteLocal = true;
                }   

                NoteAnnotatePro.currentIndex = dataIndex;
                NoteAnnotatePro.currentURL = NoteAnnotatePro.dataList[dataIndex].url;
                NoteAnnotatePro.manuallocalUpdate();

            })
            var newNoteLabel = newNote.find('.main-page-note-label');
            newNote.attr('data-index',i);
            newNoteDiv.css('background-color',item.backgroundColor);
            newNoteLabel.text(item.text);
            newNoteLabel.css('color',item.textColor);
            newNoteLabel.css('font-family',item.fontFamily);
            newNoteLabel.css('font-size',item.fontSize);
            currentRow.append(newNote);
            count++;
        }

        if (isEmpty){ //If serach parameter empty, add new note capability
            sampleColumn =$('#main-page-add-note-sample').clone(); 
            sampleColumn.css('position','');
            sampleColumn.css('top','');

            if (count%5==0){
                currentRow = sampleRow.clone();
                topContainer.append(currentRow);
            }

            var newNote = sampleColumn.clone();
            var newNoteDiv = newNote.find('.main-page-note-display-div');
            newNoteDiv.click(function(){
                //Home note click
                var popupcontentmain = $('#popup-content-div');
                popupcontentmain.show();
                var popupbody = popupcontentmain.find('#popup-content');

                popupbody.css('display','block');
                var dataIndex= $(this).parent().attr('data-index');
                if (dataIndex == '0'){
                    NoteAnnotatePro.noteLocal = false;
                }
                else{
                    NoteAnnotatePro.noteLocal = true;
                }   

                NoteAnnotatePro.currentIndex = dataIndex;
                NoteAnnotatePro.currentURL = '~/Home'
                NoteAnnotatePro.dataList.push({ url: '~/Home', text: "", fontSize: '15px', textColor: 'black', backgroundColor: '#ffc', fontFamily: 'Arial'});
                NoteAnnotatePro.manuallocalUpdate();
            })
            var newNoteLabel = newNote.find('.main-page-note-label');
            newNote.attr('data-index',NoteAnnotatePro.dataList.length);
            newNoteDiv.css('background-color','#ffc');
            newNoteLabel.css('color','black');
            newNoteLabel.css('font-family','#ffc');
            newNoteLabel.click(function(){
                return true;
            });
            currentRow.append(newNote);
            count++;
        }

        if (count==0){
            $('#main-page-nocontent-search').css('display','flex');
        }
        else{
            $('#main-page-nocontent-search').css('display','none');
        }
    },

    storageChangedListener: function (changes, area) {
        // console.log('storage changed');
        var changedItems = Object.keys(changes);

        for (var item of changedItems) {
            if (item == 'dataList')
                NoteAnnotatePro.dataList = changes[item].newValue;
            else if (item == 'noteLocal') {
                NoteAnnotatePro.noteLocal = changes[item].newValue;
            }
        }

        if (NoteAnnotatePro.home){//Clean up record //Remove Record //Clear Record
            var list = NoteAnnotatePro.dataList;
            var isClean = false;
            // console.log(list);
            for (var i=list.length-1;i>0;i--){
                var item = list[i];
                if (item.text==''){
                    NoteAnnotatePro.dataList.splice(i,1); 
                    isClean=true;
                }
            }
            if (isClean){
                // console.log(isClean + ' = isclean' );
                NoteAnnotatePro.saveDataRefresh();
                return;
            }
        }

        NoteAnnotatePro.manuallocalUpdate();

        // mainPageHelper.loadMainPage(mainWindow.recordList);
    },

    initialize: function () {
        NoteAnnotateProHelper.getTabsInfo(this.getCurrentURL); //Get tab info

        //Load storage area
        var storageAreaObj = browser.storage.local.get(
            {
                //Deafult obj withn index 0, url and text empty                
                dataList: [{ url: "", text: "", fontSize: NoteAnnotatePro.defaultFontSize, textColor: NoteAnnotatePro.defaultTextColor, backgroundColor: NoteAnnotatePro.defaultBackgroundColor, fontFamily: NoteAnnotatePro.defaultFontFamily }],
                noteLocal: false
            }
        );
        storageAreaObj.then(function (item) {
            NoteAnnotatePro.loaded=true;

            if (item) {
                NoteAnnotatePro.noteLocal = item.noteLocal;

                //Load the correct note
                var isFound = false;
                for (var i = 1; i < item.dataList.length; i++) {
                    if (NoteAnnotatePro.currentURL == item.dataList[i].url) {
                        //Matched URL
                        // console.log('found index' + i);
                        NoteAnnotatePro.currentIndex = i;
                        isFound = true;
                        break;
                    }
                }

                if (!isFound && !NoteAnnotatePro.home) { //Not found, craete new object
                    NoteAnnotatePro.currentIndex = item.dataList.length;
                    item.dataList[item.dataList.length] = { url: NoteAnnotatePro.currentURL, text: "", fontSize: NoteAnnotatePro.defaultFontSize, textColor: NoteAnnotatePro.defaultTextColor, backgroundColor: NoteAnnotatePro.defaultBackgroundColor, fontFamily: NoteAnnotatePro.defaultFontFamily };
                }

                NoteAnnotatePro.dataList = item.dataList;
                // console.log(NoteAnnotatePro.dataList);
            }

            NoteAnnotatePro.manuallocalUpdate(); //UPDATE GUI
            browser.storage.onChanged.addListener(NoteAnnotatePro.storageChangedListener);
        },
            function (error) {
                console.log(error);
            });

    }
}

var NoteAnnotateProHelper = { //Collection of Helper functions
    download: function (filename, text) { //Download text file
        var element = document.createElement('a'); //Create temp holder
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); //Download the file
        document.body.removeChild(element); //Remove Temp
    },

    getTabsInfo: function (callback) { //Get Tab information
        var getting = browser.windows.getCurrent({ populate: true });
        getting.then(callback, null);
    },

    extractRootDomain: function (url) {
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

    extractHostname: function (url) {
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

var queryBool = $.QueryString.home;
// queryBool=false;
if (queryBool) {
    NoteAnnotatePro.home = true;
}

NoteAnnotatePro.initialize(); //Initialize the variable