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
    if (queryBool) {
        NoteAnnotatePro.home = true;
        // console.log($('#popup-content'));
        $('#popup-content').hide();      

        var inputField = $('#main-page-search-input');
        inputField.on('input',function(){
            
        });


    }
    else{
        $('#main-page').hide();
        $('#popup-content').show();    
    }

    var homeBtn = $('#popup-setting-bar-home');
    homeBtn.click(function () {
        //TODO open new window
        var win = window.open();
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

    NoteAnnotatePro.manuallocalUpdate(); //Ensure update
});
// browser.storage.local.clear(); //Purge Storage

var NoteAnnotatePro = { //Main Logic
    dataList: [],

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
        var item;
        if (isLocal) {
            noteLocalGlobalInput.val('  Local : ' + NoteAnnotatePro.currentURL);
            item = list[NoteAnnotatePro.currentIndex];
        }
        else {
            noteLocalGlobalInput.val('  Global');
            item = list[0];
        }

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
        if (NoteAnnotatePro.home){
            //Update homepage note appeareance
            var list = NoteAnnotatePro.dataList;

            for (var i=0;i<list.length;i++){
                
            }
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

                if (!isFound) { //Not found, craete new object
                    NoteAnnotatePro.currentIndex = item.dataList.length;
                    item.dataList[item.dataList.length] = { url: NoteAnnotatePro.currentURL, text: "", fontSize: NoteAnnotatePro.defaultFontSize, textColor: NoteAnnotatePro.defaultTextColor, backgroundColor: NoteAnnotatePro.defaultBackgroundColor, fontFamily: NoteAnnotatePro.defaultFontFamily };
                }

                NoteAnnotatePro.dataList = item.dataList;
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

NoteAnnotatePro.initialize(); //Initialize the variable