var exec = require('cordova/exec');

var ensureBooleanFn = function (callback){
    return function(result){
        callback(ensureBoolean(result));
    }
};

var ensureBoolean = function(value){
    if(value === "true"){
        value = true;
    }else if(value === "false"){
        value = false;
    }
    return !!value;
};

var onAuthStateChangeCallback = function(){};

/***********************
 * Protected internals
 ***********************/
exports._onAuthStateChange = function(userSignedIn){
    onAuthStateChangeCallback(userSignedIn);
};

/**************
 * Public API
 **************/
exports.DELETE_SEMAPHORE = 'W4KA123';
// Notifications
exports.getId = function (success, error) {
  exec(success, error, "FirebasePlugin", "getId", []);
};

exports.getToken = function (success, error) {
  exec(success, error, "FirebasePlugin", "getToken", []);
};

exports.getAPNSToken = function (success, error) {
  exec(success, error, "FirebasePlugin", "getAPNSToken", []);
};

exports.onMessageReceived = function (success, error) {
  exec(success, error, "FirebasePlugin", "onMessageReceived", []);
};

exports.onTokenRefresh = function (success, error) {
  exec(success, error, "FirebasePlugin", "onTokenRefresh", []);
};

exports.onApnsTokenReceived = function (success, error) {
    exec(success, error, "FirebasePlugin", "onApnsTokenReceived", []);
};

exports.subscribe = function (topic, success, error) {
  exec(success, error, "FirebasePlugin", "subscribe", [topic]);
};

exports.unsubscribe = function (topic, success, error) {
  exec(success, error, "FirebasePlugin", "unsubscribe", [topic]);
};

exports.unregister = function (success, error) {
  exec(success, error, "FirebasePlugin", "unregister", []);
};

exports.isAutoInitEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isAutoInitEnabled", []);
};

exports.setAutoInitEnabled = function (enabled, success, error) {
    exec(success, error, "FirebasePlugin", "setAutoInitEnabled", [!!enabled]);
};

// Notifications - iOS-only
exports.setBadgeNumber = function (number, success, error) {
    exec(success, error, "FirebasePlugin", "setBadgeNumber", [number]);
};

exports.getBadgeNumber = function (success, error) {
    exec(success, error, "FirebasePlugin", "getBadgeNumber", []);
};

exports.grantPermission = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "grantPermission", []);
};

exports.hasPermission = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "hasPermission", []);
};

// Notifications - Android-only
exports.setDefaultChannel = function (options, success, error) {
    exec(success, error, "FirebasePlugin", "setDefaultChannel", [options]);
};

exports.createChannel = function (options, success, error) {
    exec(success, error, "FirebasePlugin", "createChannel", [options]);
};

exports.deleteChannel = function (channelID, success, error) {
    exec(success, error, "FirebasePlugin", "deleteChannel", [channelID]);
};

exports.listChannels = function (success, error) {
    exec(success, error, "FirebasePlugin", "listChannels", []);
};

// Analytics
exports.setAnalyticsCollectionEnabled = function (enabled, success, error) {
    exec(success, error, "FirebasePlugin", "setAnalyticsCollectionEnabled", [!!enabled]);
};

exports.isAnalyticsCollectionEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isAnalyticsCollectionEnabled", []);
};

exports.logEvent = function (name, params, success, error) {
  exec(success, error, "FirebasePlugin", "logEvent", [name, params]);
};

exports.setScreenName = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "setScreenName", [name]);
};

exports.setUserId = function (id, success, error) {
  exec(success, error, "FirebasePlugin", "setUserId", [id]);
};

exports.setUserProperty = function (name, value, success, error) {
  exec(success, error, "FirebasePlugin", "setUserProperty", [name, value]);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    var args = [];
    if (typeof cacheExpirationSeconds === 'number') {
        args.push(cacheExpirationSeconds);
    } else {
        error = success;
        success = cacheExpirationSeconds;
    }
    exec(success, error, "FirebasePlugin", "fetch", args);
};

exports.activateFetched = function (success, error) {
  exec(ensureBooleanFn(success), error, "FirebasePlugin", "activateFetched", []);
};

exports.fetchAndActivate = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "fetchAndActivate", []);
};

exports.resetRemoteConfig = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "resetRemoteConfig", []);
};

exports.getValue = function (key, success, error) {
  exec(success, error, "FirebasePlugin", "getValue", [key]);
};

exports.getInfo = function (success, error) {
  exec(success, error, "FirebasePlugin", "getInfo", []);
};

exports.checkReady = function (success, error) {
    exec(success, error, "FirebasePlugin", "checkReady", []);
  };

exports.setConfigSettings = function (fetchTimeout, minimumFetchInterval, success, error) {
  exec(success, error, "FirebasePlugin", "setConfigSettings", [fetchTimeout, minimumFetchInterval]);
};

exports.setDefaults = function (defaults, success, error) {
  exec(success, error, "FirebasePlugin", "setDefaults", [defaults]);
};

exports.getAll = function (success, error) {
    exec(success, error, "FirebasePlugin", "getAll", []);
};

exports.startTrace = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "startTrace", [name]);
};

exports.incrementCounter = function (name, counterNamed, success, error) {
  exec(success, error, "FirebasePlugin", "incrementCounter", [name, counterNamed]);
};

exports.stopTrace = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "stopTrace", [name]);
};

exports.setPerformanceCollectionEnabled = function (enabled, success, error) {
  exec(success, error, "FirebasePlugin", "setPerformanceCollectionEnabled", [!!enabled]);
};

exports.isPerformanceCollectionEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isPerformanceCollectionEnabled", []);
};

exports.clearAllNotifications = function (success, error) {
  exec(success, error, "FirebasePlugin", "clearAllNotifications", []);
};

// Crashlytics
exports.setCrashlyticsCollectionEnabled = function (enabled, success, error) {
    exec(success, error, "FirebasePlugin", "setCrashlyticsCollectionEnabled", [!!enabled]);
};

exports.isCrashlyticsCollectionEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isCrashlyticsCollectionEnabled", []);
};

exports.logMessage = function (message, success, error) {
    exec(success, error, "FirebasePlugin", "logMessage", [message]);
};

exports.sendCrash = function (success, error) {
    exec(success, error, "FirebasePlugin", "sendCrash", []);
};

exports.logError = function (message, stackTrace, success, error) {
  var args = [message];
  // "stackTrace" is an optional arg that's an array of objects.
  if (stackTrace) {
    if (typeof stackTrace === 'function') {
      error = success;
      success = stackTrace;
    } else {
      args.push(stackTrace);
    }
  }
  exec(success, error, "FirebasePlugin", "logError", args);
};

exports.setCrashlyticsUserId = function (userId, success, error) {
    exec(success, error, "FirebasePlugin", "setCrashlyticsUserId", [userId]);
};

exports.setCrashlyticsCustomKey = function (key, value, success, error) {
    exec(success, error, "FirebasePlugin", "setCrashlyticsCustomKey", [key, value]);
};

exports.didCrashOnPreviousExecution = function (success, error) {
    exec(success, error, "FirebasePlugin", "didCrashOnPreviousExecution", []);
};


// Authentication
exports.verifyPhoneNumber = function (success, error, number, timeOutDuration, fakeVerificationCode) {
    exec(function(credential){
        if(typeof credential === 'object'){
            credential.instantVerification = ensureBoolean(credential.instantVerification);
        }
        success(credential);
    }, error, "FirebasePlugin", "verifyPhoneNumber", [number, timeOutDuration, fakeVerificationCode]);
};

exports.setLanguageCode = function (lang, success, error) {
    exec(success, error, "FirebasePlugin", "setLanguageCode", [lang]);
};

exports.unlinkUser = function (providerID, success, error) {
    exec(success, error, "FirebasePlugin", "unlinkUser", [providerID]);
};

exports.createAndLinkUserWithEmailAndPassword = function (email, password, success, error) {
    exec(success, error, "FirebasePlugin", "createAndLinkUserWithEmailAndPassword", [email, password]);
};

exports.createUserWithEmailAndPassword = function (email, password, success, error) {
    exec(success, error, "FirebasePlugin", "createUserWithEmailAndPassword", [email, password]);
};

exports.signInUserWithEmailAndPassword = function (email, password, success, error) {
    exec(success, error, "FirebasePlugin", "signInUserWithEmailAndPassword", [email, password]);
};

exports.authenticateUserWithEmailAndPassword = function (email, password, success, error) {
    exec(success, error, "FirebasePlugin", "authenticateUserWithEmailAndPassword", [email, password]);
};

exports.signInUserWithCustomToken = function (customToken, success, error) {
  exec(success, error, "FirebasePlugin", "signInUserWithCustomToken", [customToken]);
};

exports.signInUserAnonymously = function (success, error) {
  exec(success, error, "FirebasePlugin", "signInUserAnonymously");
};

exports.authenticateUserWithGoogle = function (clientId, success, error) {
    exec(success, error, "FirebasePlugin", "authenticateUserWithGoogle", [clientId]);
};

exports.authenticateUserWithApple = function (success, error, locale) {
    exec(success, error, "FirebasePlugin", "authenticateUserWithApple", [locale]);
};

exports.authenticateUserWithFacebookToken = function (accessToken, success, error) {
    exec(success, error, "FirebasePlugin", "authenticateUserWithFacebookToken", [accessToken]);
};

exports.signInWithCredential = function (credential, success, error) {
    if(typeof credential !== 'object') return error("'credential' must be an object");
    exec(success, error, "FirebasePlugin", "signInWithCredential", [credential]);
};

exports.linkUserWithCredential = function (credential, success, error) {
    if(typeof credential !== 'object') return error("'credential' must be an object");
    exec(success, error, "FirebasePlugin", "linkUserWithCredential", [credential]);
};

exports.reauthenticateWithCredential = function (credential, success, error) {
    if(typeof credential !== 'object') return error("'credential' must be an object");
    exec(success, error, "FirebasePlugin", "reauthenticateWithCredential", [credential]);
};

exports.reauthenticateWithPassword = function (email, password, success, error) {
    exec(success, error, "FirebasePlugin", "reauthenticateWithPassword", [email, password]);
};

exports.isUserSignedIn = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "isUserSignedIn", []);
};

exports.signOutUser = function (success, error) {
    exec(ensureBooleanFn(success), error, "FirebasePlugin", "signOutUser", []);
};

exports.getUserFromSharedKeychain = function (success, error) {
  exec(function (user) {
    success(user);
  }, error, "FirebasePlugin", "getUserFromSharedKeychain", []);
};

exports.clearKeychainData = function (success, error) {
    exec(success, error, "FirebasePlugin", "clearKeychainData", []);
};

exports.signInWithSharedKeychainUser = function (success, error) {
  exec(success, error, "FirebasePlugin", "signInWithSharedKeychainUser");
};

exports.getCurrentUser = function (success, error) {
    exec(function(user){
        user.emailIsVerified = ensureBoolean(user.emailIsVerified);
        success(user);
    }, error, "FirebasePlugin", "getCurrentUser", []);
};

exports.reloadCurrentUser = function (success, error) {
    exec(function(user){
        user.emailIsVerified = ensureBoolean(user.emailIsVerified);
        success(user);
    }, error, "FirebasePlugin", "reloadCurrentUser", []);
};

exports.updateUserProfile = function (profile, success, error) {
    if(typeof profile !== 'object') return error("'profile' must be an object with keys 'name' and/or 'photoUri'");
    exec(success, error, "FirebasePlugin", "updateUserProfile", [profile]);
};

exports.updateUserEmail = function (email, success, error) {
    if(typeof email !== 'string' || !email) return error("'email' must be a valid email address");
    exec(success, error, "FirebasePlugin", "updateUserEmail", [email]);
};



exports.getIdToken = function (success, error) {
    exec(success, error, "FirebasePlugin", "getIdToken", []);
};

exports.getIdTokenForcingRefresh = function (success, error) {
    exec(success, error, "FirebasePlugin", "getIdTokenForcingRefresh", []);
};

exports.sendUserEmailVerification = function (success, error) {
    exec(success, error, "FirebasePlugin", "sendUserEmailVerification", []);
};

exports.updateUserPassword = function (password, success, error) {
    if(typeof password !== 'string' || !password) return error("'password' must be a valid string");
    exec(success, error, "FirebasePlugin", "updateUserPassword", [password]);
};

exports.sendUserPasswordResetEmail = function (email, success, error) {
    if(typeof email !== 'string' || !email) return error("'email' must be a valid email address");
    exec(success, error, "FirebasePlugin", "sendUserPasswordResetEmail", [email]);
};

exports.deleteUser = function (success, error) {
    exec(success, error, "FirebasePlugin", "deleteUser", []);
};

exports.registerAuthStateChangeListener = function(fn){
    if(typeof fn !== "function") throw "The specified argument must be a function";
    onAuthStateChangeCallback = fn;
};

// Firestore
exports.addDocumentToFirestoreCollection = function (document, collection, timestamp, success, error) {
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(typeof document !== 'object' || typeof document.length === 'number') return error("'document' must be an object specifying record data");

    if (typeof timestamp !== "boolean" && typeof error === "undefined") {
        error = success;
        success = timestamp;
        timestamp = false;
    }

    exec(success, error, "FirebasePlugin", "addDocumentToFirestoreCollection", [document, collection, timestamp || false]);
};

exports.setDocumentInFirestoreCollection = function (documentId, document, collection, timestamp, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(typeof document !== 'object' || typeof document.length === 'number') return error("'document' must be an object specifying record data");

    if (typeof timestamp !== "boolean" && typeof error === "undefined") {
        error = success;
        success = timestamp;
        timestamp = false;
    }

    exec(success, error, "FirebasePlugin", "setDocumentInFirestoreCollection", [documentId.toString(), document, collection, timestamp || false]);
};

exports.mergeDocumentInFirestoreCollection = function (documentId, document, collection, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(typeof document !== 'object' || typeof document.length === 'number') return error("'document' must be an object specifying record data");

    exec(success, error, "FirebasePlugin", "mergeDocumentInFirestoreCollection", [documentId.toString(), document, collection]);
};

exports.updateDocumentInFirestoreCollection = function (documentId, document, collection, timestamp, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(typeof document !== 'object' || typeof document.length === 'number') return error("'document' must be an object specifying record data");

    if (typeof timestamp !== "boolean" && typeof error === "undefined") {
        error = success;
        success = timestamp;
        timestamp = false;
    }

    exec(success, error, "FirebasePlugin", "updateDocumentInFirestoreCollection", [documentId.toString(), document, collection, timestamp || false]);
};

exports.deleteDocumentFromFirestoreCollection = function (documentId, collection, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");

    exec(success, error, "FirebasePlugin", "deleteDocumentFromFirestoreCollection", [documentId.toString(), collection]);
};

exports.documentExistsInFirestoreCollection = function (documentId, collection, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");

    exec(ensureBooleanFn(success), error, "FirebasePlugin", "documentExistsInFirestoreCollection", [documentId.toString(), collection]);
};

exports.fetchDocumentInFirestoreCollection = function (documentId, collection, success, error) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");

    exec(success, error, "FirebasePlugin", "fetchDocumentInFirestoreCollection", [documentId.toString(), collection]);
};

exports.fetchFirestoreCollection = function (collection, filters, success, error) {
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(filters && (typeof filters !== 'object' || typeof filters.length === 'undefined' || (filters.length && typeof filters[0] !== 'object'))) return error("'filters' must be a array specifying a list of filters (as arrays) to apply to documents in the Firestore collection");

    exec(success, error, "FirebasePlugin", "fetchFirestoreCollection", [collection, filters || []]);
};

exports.listenToDocumentInFirestoreCollection = function (success, error, documentId, collection, includeMetadata) {
    if(typeof documentId !== 'string' && typeof documentId !== 'number') return error("'documentId' must be a string or number specifying the Firestore document identifier");
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");

    exec(success, error, "FirebasePlugin", "listenToDocumentInFirestoreCollection", [documentId.toString(), collection, includeMetadata]);
};

exports.listenToFirestoreCollection = function (success, error, collection, filters, includeMetadata) {
    if(typeof collection !== 'string') return error("'collection' must be a string specifying the Firestore collection name");
    if(filters && (typeof filters !== 'object' || typeof filters.length === 'undefined')) return error("'filters' must be a array specifying a list of filters to apply to documents in the Firestore collection");

    exec(success, error, "FirebasePlugin", "listenToFirestoreCollection", [collection, filters, includeMetadata]);
};

exports.removeFirestoreListener = function (success, error, listenerId) {
    if(typeof listenerId === 'undefined') return error("'listenerId' must be specified");

    exec(success, error, "FirebasePlugin", "removeFirestoreListener", [listenerId.toString()]);
};

exports.clearFirestorePersistence = function (success, error) {
    exec(success, error, "FirebasePlugin", "clearFirestorePersistence", []);
  };

//Storage
exports.getDownloadUrlStorage = function (success, error, path) {
    if(typeof path !== 'string') return error("'path' must be a string specifying the path to Firebase Storage");

    exec(success, error, "FirebasePlugin", "getDownloadUrlStorage", [path]);
};

exports.deleteStorageItem = function (success, error, path) {
    if(typeof path !== 'string') return error("'path' must be a string specifying the path to Firebase Storage");

    exec(success, error, "FirebasePlugin", "deleteStorageItem", [path]);
};

exports.uploadStorageItem = function (success, error, path, base64Image) {
    if(typeof path !== 'string') return error("'path' must be a string specifying the path to Firebase Storage");
    if(typeof base64Image !== 'string') return error("'base64Image' must be a string specifying the path to Firebase Storage");

    exec(success, error, "FirebasePlugin", "uploadStorageItem", [path, base64Image]);
};

//Firebase function
exports.callFirebaseFunction = function (success, error, functionName, params) {
    if(typeof functionName !== 'string') return error("'functionName' must be a string specifying the Firebase function name");
    if(typeof params !== 'object') return error("'params' must be an object specifying params to the function");

    exec(success, error, "FirebasePlugin", "callFirebaseFunction", [functionName, params]);
};



