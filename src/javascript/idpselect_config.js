 
/** @class IdP Selector UI */
function IdPSelectUIParms(){
    //
    // Adjust the following to fit into your local configuration
    //
    this.alwaysShow = true;          // If true, this will show results as soon as you start typing
    this.dataSource = 'DiscoFeed';    // Where to get the data from
    this.defaultLanguage = 'en';     // Language to use if the browser local doesnt have a bundle
    this.defaultLogo = 'flyingpiglogo.jpg';
    this.defaultLogoWidth = 90;
    this.defaultLogoHeight = 80 ;
    this.defaultReturn = null;       // If non null, then the default place to send users who are not
                                     // Approaching via the Discovery Protocol for example
    //this.defaultReturn = "https://example.org/Shibboleth.sso/DS?SAMLDS=1&target=https://example.org/secure";
    this.defaultReturnIDParam = null;
    this.helpURL = 'https://wiki.shibboleth.net/confluence/display/SHIB2/DSRoadmap';
    this.ie6Hack = null;             // An array of structures to disable when drawing the pull down (needed to 
                                     // handle the ie6 z axis problem
    this.insertAtDiv = 'idpSelect';  // The div where we will insert the data
    this.maxResults = 10;            // How many results to show at once or the number at which to
                                     // start showing if alwaysShow is false
    this.myEntityID = null;          // If non null then this string must match the string provided in the DS parms
    this.preferredIdP = null;        // Array of entityIds to always show
    this.hiddenIdPs = null;          // Array of entityIds to delete
    this.ignoreKeywords = false;     // Do we ignore the <mdui:Keywords/> when looking for candidates
    this.showListFirst = false;      // Do we start with a list of IdPs or just one
    this.samlIdPCookieTTL = 730;     // in days
    this.setFocusTextBox = true;     // Set to false to supress focus 
    this.testGUI = false;


    //
    // Globalization stuff
    //
    this.langBundles = {
    'en': {
        'fatal.divMissing': '<div> specified  as "insertAtDiv" could not be located in the HTML',
        'fatal.noXMLHttpRequest': 'Browser does not support XMLHttpRequest, unable to load IdP selection data',
        'fatal.wrongProtocol' : 'Policy supplied to DS was not "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
        'fatal.wrongEntityId' : 'entityId supplied by SP did not match configuration',
        'fatal.noData' : 'Metadata download returned no data',
        'fatal.loadFailed': 'Failed to download metadata from ',
        'fatal.noparms' : 'No parameters to discovery session and no defaultReturn parameter configured',
        'fatal.noReturnURL' : "No URL return parameter provided",
        'fatal.badProtocol' : "Return request must start with https:// or http://",
        'idpPreferred.label': 'Use a suggested selection:',
        'idpEntry.label': 'Or enter your organization\'s name',
        'idpEntry.NoPreferred.label': 'Enter your organization\'s name',
        'idpList.label': 'Or select your organization from the list below',
        'idpList.NoPreferred.label': 'Select your organization from the list below',
        'idpList.defaultOptionLabel': 'Please select your organization...',
        'idpList.showList' : 'Allow me to pick from a list',
        'idpList.showSearch' : 'Allow me to specify the site',
        'submitButton.label': 'Continue',
        'helpText': 'Help',
        'defaultLogoAlt' : 'DefaultLogo'
    },
    'de': {
        'fatal.divMissing': 'Das notwendige Div Element fehlt',
        'fatal.noXMLHttpRequest': 'Ihr Webbrowser unterst\u00fctzt keine XMLHttpRequests, IdP-Auswahl kann nicht geladen werden',
        'fatal.wrongProtocol' : 'DS bekam eine andere Policy als "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
        'fatal.wrongEntityId' : 'Die entityId ist nicht korrekt',
        'fatal.loadFailed': 'Metadaten konnten nicht heruntergeladen werden: ',
        'fatal.noparms' : 'Parameter f\u00fcr das Discovery Service oder \'defaultReturn\' fehlen',
        'fatal.noReturnURL' : "URL return Parmeter fehlt",
        'fatal.badProtocol' : "return Request muss mit https:// oder http:// beginnen",
        'idpPreferred.label': 'Vorherige Auswahl:',
        'idpEntry.label': 'Oder geben Sie den Namen (oder Teile davon) an:',
        'idpEntry.NoPreferred.label': 'Namen (oder Teile davon) der Institution angeben:',
        'idpList.label': 'Oder w\u00e4hlen Sie Ihre Institution aus einer Liste:',
        'idpList.NoPreferred.label': 'Institution aus folgender Liste w\u00e4hlen:',
        'idpList.defaultOptionLabel': 'W\u00e4hlen Sie Ihre Institution aus...',
        'idpList.showList' : 'Institution aus einer Liste w\u00e4hlen',
        'idpList.showSearch' : 'Institution selbst angeben',
        'submitButton.label': 'OK',
        'helpText': 'Hilfe',
        'defaultLogoAlt' : 'Standard logo'
        },
    'ja': {
        'fatal.divMissing': '"insertAtDiv" の ID を持つ <div> が HTML 中に存在しません',
        'fatal.noXMLHttpRequest': 'ブラウザが XMLHttpRequest をサポートしていないので IdP 情報を取得できません',
        'fatal.wrongProtocol' : 'DSへ渡された Policy パラメータが "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single" ではありません',
        'fatal.wrongEntityId' : 'SP から渡された entityId が設定値と異なります',
        'fatal.noData' : 'メタデータが空です',
        'fatal.loadFailed': '次の URL からメタデータをダウンロードできませんでした: ',
        'fatal.noparms' : 'DSにパラメータが渡されておらず defaultReturn も設定されていません',
        'fatal.noReturnURL' : "戻り URL が指定されていません",
        'fatal.badProtocol' : "戻り URL は https:// か http:// で始まらなければなりません",
        'idpPreferred.label': '選択候補の IdP:',
        'idpEntry.label': 'もしくはあなたの所属機関名を入力してください',
        'idpEntry.NoPreferred.label': 'あなたの所属機関名を入力してください',
        'idpList.label': 'もしくはあなたの所属機関を選択してください',
        'idpList.NoPreferred.label': 'あなたの所属機関を一覧から選択してください',
        'idpList.defaultOptionLabel': '所属機関を選択してください...',
        'idpList.showList' : '一覧から選択する',
        'idpList.showSearch' : '機関名を入力する',
        'submitButton.label': '選択',
        'helpText': 'Help',
        'defaultLogoAlt' : 'DefaultLogo'
        }
    };

    //
    // The following should not be changed without changes to the css.  Consider them as mandatory defaults
    //
    this.maxPreferredIdPs = 3;
    this.maxIdPCharsButton = 33;
    this.maxIdPCharsDropDown = 58;

    this.minWidth = 20;
    this.minHeight = 20;
    this.maxWidth = 115;
    this.maxHeight = 69;
    this.bestRatio = Math.log(80 / 60);
}
