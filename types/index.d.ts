export interface IChannelOptions {
    id: string
    name?: string
    description?: string
    sound?: string
    vibration?: boolean | number[]
    light?: boolean
    lightColor?: string
    importance?: 0 | 1 | 2 | 3 | 4
    badge?: boolean
    visibility?: -1 | 0 | 1
}

export interface ErrorResponse {
    code: string
    name?: string
    description?: string
}

export interface FirebasePlugin {
    getId(
        success: (value: string) => void,
        error: (err: ErrorResponse) => void
    ): void
    getToken(
        success: (value: string) => void,
        error: (err: ErrorResponse) => void
    ): void
    onTokenRefresh(
        success: (value: string) => void,
        error: (err: ErrorResponse) => void): void
    getAPNSToken(
        success: (value: string) => void,
        error: (err: ErrorResponse) => void
    ): void
    onApnsTokenReceived(
        success: (value: string) => void,
        error: (err: ErrorResponse) => void
    ): void
    onMessageReceived(
        success: (value: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    grantPermission(
        success: (value: boolean) => void,
        error: (err: ErrorResponse) => void
    ): void
    hasPermission(
        success: (value: boolean) => void,
        error: (err: ErrorResponse) => void
    ): void
    unregister(): void
    setBadgeNumber(
        badgeNumber: number
    ): void
    getBadgeNumber(
        success: (badgeNumber: number) => void,
        error: (err: ErrorResponse) => void
    ): void
    clearAllNotifications(): void
    subscribe(
        topic: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    unsubscribe(
        topic: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    isAutoInitEnabled(
        success: (enabled: boolean) => void,
        error?: (err: ErrorResponse) => void
    ): void
    setAutoInitEnabled(
        enabled: boolean,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    createChannel(
        channel: IChannelOptions,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    setDefaultChannel(
        channel: IChannelOptions,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    deleteChannel(
        channel: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    listChannels(
        success: (list: { id: string; name: string }[]) => void,
        error: (err: ErrorResponse) => void
    ): void
    setAnalyticsCollectionEnabled(
        setEnabled: boolean
    ): void
    logEvent(
        eventName: string,
        eventProperties: object
    ): void
    setScreenName(
        screenName: string
    ): void
    setUserId(
        userId: string
    ): void
    setUserProperty(
        userName: string,
        userValue: string
    ): void
    setCrashlyticsCollectionEnabled(): void
    didCrashOnPreviousExecution(
        success?: (didCrashOnPreviousExecution: boolean) => void,
        error?: (err: ErrorResponse) => void
    )
    setCrashlyticsUserId(
        userId: string
    ): void
    setCrashlyticsCustomKey(
        key: string,
        value: string | number | boolean,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    sendCrash(): void
    logMessage(
        message: string
    ): void
    logError(
        errorMessage: string,
        stackTrace?: object,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    verifyPhoneNumber(
        success: (value: object) => void,
        error: (err: ErrorResponse) => void,
        phoneNumber: string,
        timeOutDuration: number,
        fakeVerificationCode?: string
    ): void
    setLanguageCode(
        lang: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    createUserWithEmailAndPassword(
        email: string,
        password: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    signInUserWithEmailAndPassword(
        email: string,
        password: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    signInUserWithCustomToken(
        customToken: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    signInUserAnonymously(
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    authenticateUserWithGoogle(
        clientId: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    authenticateUserWithApple(
        success?: () => void,
        error?: (err: ErrorResponse) => void,
        locale?: string,
    ): void
    signInWithCredential(
        credential: object,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    linkUserWithCredential(
        credential: object,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    reauthenticateWithCredential(
        credential: object,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    isUserSignedIn(
        success: (isSignedIn: boolean) => void,
        error?: (err: ErrorResponse) => void
    ): void
    signOutUser(
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    getCurrentUser(
        success: (user: object) => void,
        error?: (err: ErrorResponse) => void
    ): void
    updateUserProfile(
        profile: {
            name: string,
            photoUri: string
        },
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    updateUserEmail(
        email: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    sendUserEmailVerification(
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    updateUserPassword(
        password: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    sendUserPasswordResetEmail(
        email: string,
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    deleteUser(
        success?: () => void,
        error?: (err: ErrorResponse) => void
    ): void
    registerAuthStateChangeListener(
        fn: (userSignedIn: boolean) => void,
    ): void
    fetch(
        cacheExpirationSeconds: number,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    fetch(
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    activateFetched(
        success: (activated: boolean) => void,
        error: (err: ErrorResponse) => void
    ): void
    fetchAndActivate(
        success: (activated: boolean) => void,
        error: (err: ErrorResponse) => void
    ): void
    resetRemoteConfig(
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    getValue(
        key: string,
        success: (value: string) => void,
        error: (err: ErrorResponse) => void
    ): void
    getAll(
        success: (values: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    getInfo(
        success: (info: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    checkReady(
        success: (info: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    setConfigSettings(
        configSettings: object,
        success: (info: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    setDefaults(
        defaultSettings: object,
        success: (info: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    setPerformanceCollectionEnabled(
        setEnabled: boolean
    ): void
    startTrace(
        name: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    incrementCounter(
        name: string,
        counterName: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    stopTrace(
        name: string
    ): void
    addDocumentToFirestoreCollection(
        document: object,
        collection: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    setDocumentInFirestoreCollection(
        documentId: string,
        document: object,
        collection: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    mergeDocumentInFirestoreCollection(
        documentId: string,
        document: object,
        collection: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    updateDocumentInFirestoreCollection(
        documentId: string,
        document: object,
        collection: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    deleteDocumentFromFirestoreCollection(
        documentId: string,
        collection: string,
        success: () => void,
        error: (err: ErrorResponse) => void
    ): void
    fetchDocumentInFirestoreCollection(
        documentId: string,
        collection: string,
        success: (document: object) => void,
        error: (err: ErrorResponse) => void
    ): void
    fetchFirestoreCollection(
        collection: string,
        filters?: [object],
        success?: (collection: object) => void,
        error?: (err: ErrorResponse) => void
    ): void
    listenToDocumentInFirestoreCollection(
        success: (event: object) => void,
        error: (err: ErrorResponse) => void,
        documentId: string,
        collection: string,
        includeMetadata?: boolean
    ): void
    listenToFirestoreCollection(
        success: (event: object) => void,
        error: (err: ErrorResponse) => void,
        collection: string,
        filters?: [object],
        includeMetadata?: boolean
    ): void
    removeFirestoreListener(
        success: () => void,
        error: (err: ErrorResponse) => void,
        listenerId: string
    ): void
    getDownloadUrlStorage(
        success: () => void,
        error: (err: ErrorResponse) => void,
        path: string
    ): void
    deleteStorageItem(
        success: () => void,
        error: (err: ErrorResponse) => void,
        path: string
    ): void
    uploadStorageItem(
        success: () => void,
        error: (err: ErrorResponse) => void,
        path: string,
        base64Image: string
    ): void
}
declare var FirebasePlugin: FirebasePlugin;
