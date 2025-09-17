export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: number
}

export interface Account {
  id: Scalars['Int']
  uuid: Scalars['String']
  username: Scalars['String']
  /** @deprecated Use `ownedBy` instead */
  owner: User
  /** @deprecated Use `paymentEmail` instead */
  emailAddress?: Maybe<Scalars['String']>
  tier?: Maybe<Scalars['String']>
  realName?: Maybe<Scalars['String']>
  timezone?: Maybe<Scalars['String']>
  /** @deprecated Legacy field. Use `customAvatar` instead. */
  profilePictureUrl?: Maybe<Scalars['String']>
  /** @deprecated Legacy field. Use `customAvatar` instead. */
  profilePicture?: Maybe<Scalars['String']>
  avatarMode: AvatarMode
  avatarModes: Array<AvatarMode>
  avatarType: AvatarType
  customAvatar?: Maybe<Scalars['String']>
  customAvatarVideo?: Maybe<Scalars['String']>
  customAvatarAttributes?: Maybe<Scalars['String']>
  backgroundImageAttributes?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<Scalars['String']>
  backgroundPoster?: Maybe<Scalars['String']>
  backgroundHeroColor?: Maybe<Scalars['String']>
  backgroundGradientStyle?: Maybe<Scalars['String']>
  backgroundGradient?: Maybe<Array<Maybe<Scalars['String']>>>
  backgroundStyle?: Maybe<Scalars['String']>
  backgroundTint?: Maybe<Scalars['Int']>
  colorSchema?: Maybe<ColorSchema>
  metaAttributes?: Maybe<MetaAttributes>
  pageTitle: Scalars['String']
  country?: Maybe<Scalars['String']>
  isSensitive?: Maybe<Scalars['Boolean']>
  isSensitiveGracePeriodComplete?: Maybe<Scalars['Boolean']>
  isSensitiveWithGracePeriod?: Maybe<Scalars['Boolean']>
  isSensitiveUpdatedAt?: Maybe<Scalars['String']>
  paymentName?: Maybe<Scalars['String']>
  paymentEmail?: Maybe<Scalars['String']>
  paymentAddressLine1?: Maybe<Scalars['String']>
  paymentAddressLine2?: Maybe<Scalars['String']>
  paymentAddressCity?: Maybe<Scalars['String']>
  paymentAddressState?: Maybe<Scalars['String']>
  paymentAddressPostcode?: Maybe<Scalars['String']>
  paymentAddressCountry?: Maybe<Scalars['String']>
  buttonColor?: Maybe<Scalars['String']>
  buttonStyle?: Maybe<Scalars['String']>
  buttonCornerStyle?: Maybe<Scalars['String']>
  buttonShadowStyle?: Maybe<Scalars['String']>
  buttonTextColor?: Maybe<Scalars['String']>
  fontColor?: Maybe<Scalars['String']>
  fontStyle?: Maybe<Scalars['String']>
  shadowColor: Scalars['String']
  luminance: Scalars['String']
  backgroundColor?: Maybe<Scalars['String']>
  paygateId?: Maybe<Scalars['String']>
  links: Array<Link>
  contentWarning?: Maybe<ContentWarningType>
  customDomain?: Maybe<CustomDomain>
  /** @deprecated Use `subscriptionV1` instead */
  subscription?: Maybe<Subscription>
  subscriptionV1?: Maybe<SubscriptionV1>
  subscriptionV2?: Maybe<SubscriptionV2>
  planSubscription?: Maybe<PlanSubscription>
  donationsActive: Scalars['Boolean']
  causeBanner?: Maybe<Scalars['String']>
  emailPreferences?: Maybe<EmailPreferences>
  integrations: Array<Integration>
  activeCard?: Maybe<Card>
  cards: Array<Card>
  isPro: Scalars['Boolean']
  isEnterprise?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['Date']>
  createdAt?: Maybe<Scalars['Date']>
  utmParameter?: Maybe<UtmParameter>
  pageMeta?: Maybe<PageMeta>
  socialIntegrations: Array<SocialIntegration>
  socialFeeds: Array<SocialFeed>
  mediaKit?: Maybe<MediaKitMonolith>
  socialLinksPosition: SocialLinksPosition
  isSocialLinksPositionEditable: Scalars['Boolean']
  socialLinks: Array<SocialLink>
  description?: Maybe<Scalars['String']>
  theme: Theme
  /** @deprecated themeV2 is deprecated. Use `theme` instead */
  themeV2: ThemeV2
  isLogoVisible: Scalars['Boolean']
  isActive: Scalars['Boolean']
  googleAnalyticsId?: Maybe<Scalars['String']>
  facebookPixelId?: Maybe<Scalars['String']>
  tiktokPixelId?: Maybe<Scalars['String']>
  canvaAvatarDesignId?: Maybe<Scalars['String']>
  canvaBackgroundDesignId?: Maybe<Scalars['String']>
  useSignupLink?: Maybe<Scalars['Boolean']>
  expandableLinkCaret?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to `dialog1`. Feature flag archived */
  profileLinkContentDisplayType?: Maybe<Scalars['String']>
  /** @deprecated Feature flag archived. Will always resolve to false. */
  complementaryThemeProperties?: Maybe<Scalars['Boolean']>
  status?: Maybe<Scalars['String']>
  deleted?: Maybe<Scalars['Boolean']>
  verticals?: Maybe<Array<Maybe<Scalars['String']>>>
  verticalsV2?: Maybe<Array<Maybe<Scalars['String']>>>
  monetizationIntents?: Maybe<Array<Maybe<Scalars['String']>>>
  onboardingGoals: Array<Scalars['String']>
  profileBadges?: Maybe<Array<ProfileBadges>>
  isShareButtonEnabled?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Experiment shipped test variant */
  isShareWithEllipsis?: Maybe<Scalars['Boolean']>
  isVenmoEnabled?: Maybe<Scalars['Boolean']>
  isSquareWalletEnabled?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Feature flag archived */
  isCookieBannerEnabled?: Maybe<Scalars['Boolean']>
  affiliateTokens: Array<AffiliateToken>
  paymentMethod: Scalars['String']
  /** @deprecated Will always resolve to true. Feature flag archived */
  isInitialsProfileEnabled?: Maybe<Scalars['Boolean']>
  isWhatsappNotificationsEnabled?: Maybe<Scalars['Boolean']>
  isAppearanceRebrandEnabled?: Maybe<Scalars['Boolean']>
  isShareLinksEnabled?: Maybe<Scalars['Boolean']>
  isOnlyfansSEOEnabled?: Maybe<Scalars['Boolean']>
  isMediaKitEnabled: Scalars['Boolean']
  /** @deprecated Will always resolve to true. Feature flag archived */
  isFetchCoMoFromLinktreeBackendEnabled: Scalars['Boolean']
  manualTitleTag?: Maybe<Scalars['String']>
  dynamicMetaTitle?: Maybe<Scalars['String']>
  dynamicMetaDescription?: Maybe<Scalars['String']>
  /** @deprecated Will always resolve to false. Followers configuration is owned by ltfollowers. */
  followersEnabled: Scalars['Boolean']
  /** @deprecated Will always resolve to true. */
  groupsEnabled: Scalars['Boolean']
  hasGeotargetingViews?: Maybe<Scalars['Boolean']>
  hasVisitedDesignPage?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to null. Feature flag archived */
  profileDirectoryUrl?: Maybe<Scalars['String']>
  hasUsedFreeProTier: Scalars['Boolean']
  linkTypesForSEO?: Maybe<Array<Maybe<Scalars['String']>>>
  enableDynamicProfilePageMetadata?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Feature flag archived */
  isAmazonAffiliateEnabled?: Maybe<Scalars['Boolean']>
  inAppMessages: Array<InAppMessage>
  linkPlatforms?: Maybe<Array<Maybe<Scalars['String']>>>
  activeGates: Array<Scalars['String']>
  profileDirectoryVerticalUrl?: Maybe<Scalars['String']>
  showSignupOption?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Feature flag archived */
  isSnapchatSocialShareEnabled?: Maybe<Scalars['Boolean']>
  /** @deprecated Use the current logged in User to generate the Intercom hash instead. */
  intercomHash?: Maybe<Scalars['String']>
  /** @deprecated Will always resolve to true. Feature flag archived */
  isReportLinktreeEnabled?: Maybe<Scalars['Boolean']>
  isV2?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Feature flag launched */
  isVisualLinkPreviewsEnabled?: Maybe<Scalars['Boolean']>
  /** @deprecated Will always resolve to true. Feature flag archived */
  canAccessMonetizationTab?: Maybe<Scalars['Boolean']>
  eligibleForMonetization?: Maybe<Scalars['String']>
  isStoreTabEnabled?: Maybe<Scalars['Boolean']>
  defaultProfilePage?: Maybe<DefaultProfilePage>
  isProfilePreviewsLinkAppsEnabled: Scalars['Boolean']
  ownedBy?: Maybe<User>
  admins: Array<User>
  /** @deprecated This feature was deprecated. */
  hasDummyLinkContext: Scalars['Boolean']
  hasAccessToPaidVersionOfPlann: Scalars['Boolean']
  inPnpExperiment: Scalars['Boolean']
  kajabiUser?: Maybe<KajabiUser>
  hasReachedKajabiCourseLimit: Scalars['Boolean']
  pendingAdmins: Array<Maybe<User>>
  isAudienceEmailNotificationsEnabled: Scalars['Boolean']
  audienceNotificationsEmail: Scalars['String']
  /**
   * If audience_support_email is null in the DB, the owning user's email is used.
   * If account has no owning user, null is returned.
   */
  audienceSupportEmail?: Maybe<Scalars['String']>
  onboardingState?: Maybe<OnboardingStateType>
  isPaymentWarning: Scalars['Boolean']
  hasAccountPreviewChanges: Scalars['Boolean']
  hasUndoChanges: Scalars['Boolean']
  hasRedoChanges: Scalars['Boolean']
  accountPreviewPaidChanges?: Maybe<AccountPreviewPaidChanges>
  profileToken?: Maybe<Scalars['String']>
  /** @deprecated Use getAccountEntitlementsQuery instead */
  entitlements: AccountEntitlements
  design: Design
  colorPalette: AppearanceColorPaletteOption
  glowUp?: Maybe<GlowUp>
  headingType?: Maybe<HeadingType>
  headingLogo?: Maybe<Scalars['String']>
  headingFont?: Maybe<Scalars['String']>
  headingColor?: Maybe<Scalars['String']>
  headingSize?: Maybe<HeadingSize>
  headingEffect?: Maybe<HeadingEffect>
  headingLogoSize?: Maybe<HeadingLogoSize>
  /** @deprecated property is deprecated in favor of experiment flag `isEligibleForProfileLinkAppRebuild` */
  eligibleLinkAppContainersV2: LinkAppContainersV2
  isEligibleForProfileLinkAppRebuild: Scalars['Boolean']
  backgroundNoise?: Maybe<Scalars['Boolean']>
  backgroundImageEffect?: Maybe<BackgroundImageEffect>
}

export interface AccountProfilePictureUrlArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountAvatarModeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountAvatarTypeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountCustomAvatarArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountCustomAvatarVideoArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountCustomAvatarAttributesArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundImageAttributesArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundImageArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundPosterArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundHeroColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundGradientStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundGradientArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundTintArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountButtonColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountButtonStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountButtonCornerStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountButtonShadowStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountButtonTextColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountFontColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountFontStyleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountShadowColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountLuminanceArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountLinksArgs {
  filter?: Maybe<LinksFilterInput>
  requestSource?: Maybe<RequestSourceInput>
  view?: Maybe<ViewInput>
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface AccountIntegrationsArgs {
  filter?: Maybe<IntegrationsFilterInput>
}

export interface AccountSocialIntegrationsArgs {
  filter?: Maybe<SocialIntegrationsFilterInput>
}

export interface AccountSocialFeedsArgs {
  filter?: Maybe<SocialFeedFilterInput>
}

export interface AccountSocialLinksArgs {
  filter?: Maybe<SocialLinksFilterInput>
}

export interface AccountThemeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountIsLogoVisibleArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountCanvaAvatarDesignIdArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountCanvaBackgroundDesignIdArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountIntercomHashArgs {
  platform?: Maybe<Scalars['String']>
}

export interface AccountHeadingTypeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingLogoArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingFontArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingColorArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingSizeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingEffectArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountHeadingLogoSizeArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundNoiseArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountBackgroundImageEffectArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface AccountEntitlement {
  name: AccountEntitlementName
  type: EntitlementType
  isQualified: Scalars['Boolean']
  quota?: Maybe<EntitlementQuota>
  requiredProduct?: Maybe<EntitlementProduct>
  rate?: Maybe<EntitlementRate>
  cacheType: CacheType
}

export enum AccountEntitlementName {
  AffiliateProgram = 'AffiliateProgram',
  AmazonAffiliate = 'AmazonAffiliate',
  AnalyticsExport = 'AnalyticsExport',
  AnalyticsExtendedDateRange365Days = 'AnalyticsExtendedDateRange365Days',
  AnalyticsExtendedDateRange90Days = 'AnalyticsExtendedDateRange90Days',
  AnalyticsIntegrations = 'AnalyticsIntegrations',
  AnimatedLinks = 'AnimatedLinks',
  AudienceAnalytics = 'AudienceAnalytics',
  AudienceGeographicData = 'AudienceGeographicData',
  AudienceIntegrationGoogleSheets = 'AudienceIntegrationGoogleSheets',
  AudienceIntegrationKit = 'AudienceIntegrationKit',
  AudienceIntegrationKlaviyo = 'AudienceIntegrationKlaviyo',
  AudienceIntegrationMailchimp = 'AudienceIntegrationMailchimp',
  AudienceTrafficSource = 'AudienceTrafficSource',
  AvatarStyle = 'AvatarStyle',
  Backgrounds = 'Backgrounds',
  BaseThemes = 'BaseThemes',
  Buttons = 'Buttons',
  CollectionLayout = 'CollectionLayout',
  Colorways = 'Colorways',
  CreateFeaturedLink = 'CreateFeaturedLink',
  CustomQrCode = 'CustomQrCode',
  CustomTandC = 'CustomTandC',
  FirstPartyForms = 'FirstPartyForms',
  FirstPartySellerFee = 'FirstPartySellerFee',
  Fonts = 'Fonts',
  GlowUp = 'GlowUp',
  Gradients = 'Gradients',
  HeroImage = 'HeroImage',
  HideLinktreeLogo = 'HideLinktreeLogo',
  InsightsAi = 'InsightsAI',
  InsightsAudienceInterests = 'InsightsAudienceInterests',
  InsightsContacts = 'InsightsContacts',
  InsightsContent = 'InsightsContent',
  InstagramDirectMessage = 'InstagramDirectMessage',
  LeapLinks = 'LeapLinks',
  LinkAnalytics = 'LinkAnalytics',
  LinktreeInsights = 'LinktreeInsights',
  MailingListIntegration = 'MailingListIntegration',
  MobileAppLinkApp = 'MobileAppLinkApp',
  NftBackground = 'NftBackground',
  PasscodeGate = 'PasscodeGate',
  Redirect = 'Redirect',
  RssFeed = 'RssFeed',
  SeoAccess = 'SEOAccess',
  ScheduledLinkNotifications = 'ScheduledLinkNotifications',
  ScheduledLinks = 'ScheduledLinks',
  SocialPlanner = 'SocialPlanner',
  StylePresets = 'StylePresets',
  SubscriberDetails = 'SubscriberDetails',
  TreeLinkShortenerBackHalves = 'TreeLinkShortenerBackHalves',
  TreeLinkShortenerSkipsContent = 'TreeLinkShortenerSkipsContent'
}

export interface AccountEntitlements {
  isPaid: Scalars['Boolean']
}

export interface AccountListFilterInput {
  /** Only show accounts with this tier */
  tier?: Maybe<Scalars['String']>
  /** Only show accounts subscribed to the weekly digest */
  subscribedToDigest?: Maybe<Scalars['Boolean']>
  /** Only show account with this uuid, will overwrite other filters if provided */
  uuid?: Maybe<Scalars['String']>
  /** Only show account with this id, will overwrite other filters if provided */
  id?: Maybe<Scalars['Int']>
}

export interface AccountPreviewPaidChanges {
  hasProFeatures: Scalars['Boolean']
  hasPremiumFeatures: Scalars['Boolean']
}

export interface AccountStatsigCloudDynamicConfig {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AccountStatsigCloudExperiment {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AccountStatsigCloudFeatureGate {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Boolean']>
}

export interface AccountStatsigResult {
  userUsername?: Maybe<Scalars['String']>
  accountUsername?: Maybe<Scalars['String']>
  warehouseNativeFeatureGates?: Maybe<Array<Maybe<AccountStatsigWarehouseNativeFeatureGate>>>
  warehouseNativeDynamicConfigs?: Maybe<Array<Maybe<AccountStatsigWarehouseNativeDynamicConfig>>>
  warehouseNativeExperiments?: Maybe<Array<Maybe<AccountStatsigWarehouseNativeExperiment>>>
  cloudFeatureGates?: Maybe<Array<Maybe<AccountStatsigCloudFeatureGate>>>
  cloudDynamicConfigs?: Maybe<Array<Maybe<AccountStatsigCloudDynamicConfig>>>
  cloudExperiments?: Maybe<Array<Maybe<AccountStatsigCloudExperiment>>>
}

export interface AccountStatsigWarehouseNativeDynamicConfig {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AccountStatsigWarehouseNativeExperiment {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AccountStatsigWarehouseNativeFeatureGate {
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Boolean']>
}

export interface AddLinkInput {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  active?: Maybe<Scalars['Boolean']>
  hidden?: Maybe<Scalars['Boolean']>
  linkTypeId?: Maybe<Scalars['String']>
  extensionLinkContext?: Maybe<ExtensionLinkContextInput>
  meta?: Maybe<AddLinkMetaInput>
  provider?: Maybe<Scalars['String']>
  modifiers?: Maybe<LinkModifiersInput>
  position?: Maybe<Scalars['Int']>
  /** The parent link ID when adding a link to a collection */
  parentId?: Maybe<Scalars['Int']>
}

export interface AddLinkMetaInput {
  source?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
  section?: Maybe<Scalars['String']>
  linkRecs?: Maybe<LinkRecsMetaInput>
  communityPlatform?: Maybe<Scalars['String']>
  recommendedLinkType?: Maybe<Scalars['String']>
  recommendedLinkTypeId?: Maybe<Scalars['String']>
}

export interface AddLinkMutationInput {
  type: LinkType
  input?: Maybe<AddLinkInput>
  accountId?: Maybe<Scalars['Int']>
}

export interface AddMultipleLinksResult {
  links?: Maybe<Array<Maybe<Link>>>
}

export interface AddMutipleSocialLinksResult {
  user?: Maybe<User>
  errors?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface AddSocialContentToLinkAssociationsInput {
  source: Scalars['String']
  sourceId: Scalars['String']
  socialIntegrationId: Scalars['String']
  socialPlatform: Scalars['String']
  socialContentId: Scalars['String']
  associationMethods?: Maybe<Scalars['String']>
  associateMethod?: Maybe<Scalars['String']>
  similarityScore?: Maybe<Scalars['Int']>
}

export interface AdminInvitation {
  id: Scalars['Int']
  invitationId: Scalars['String']
  invitationStatus?: Maybe<AdminInvitationStatus>
  updatedAt?: Maybe<Scalars['Date']>
  createdAt?: Maybe<Scalars['Date']>
}

export enum AdminInvitationInviteeRole {
  Admin = 'ADMIN',
  Owner = 'OWNER'
}

export enum AdminInvitationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Declined = 'DECLINED'
}

export enum AffiliateAdvertiserType {
  BetterWorldBooks = 'betterWorldBooks',
  BooksAMillion = 'booksAMillion',
  Tidal = 'tidal',
  Deezer = 'deezer',
  BarnesAndNoble = 'barnesAndNoble',
  AmazonMx = 'amazonMx',
  AmazonBr = 'amazonBr',
  AmazonUs = 'amazonUs',
  AmazonCa = 'amazonCa',
  AmazonDe = 'amazonDe',
  AmazonFr = 'amazonFr',
  AmazonIt = 'amazonIt',
  AmazonEs = 'amazonEs',
  AmazonGb = 'amazonGb',
  AmazonNl = 'amazonNl',
  AmazonSe = 'amazonSe',
  AmazonPl = 'amazonPl',
  AmazonAe = 'amazonAe',
  AmazonSa = 'amazonSa',
  AmazonIn = 'amazonIn',
  AmazonJp = 'amazonJp',
  AmazonSg = 'amazonSg',
  AmazonCn = 'amazonCn',
  AmazonAu = 'amazonAu'
}

export enum AffiliateProgramType {
  Apple = 'apple',
  Amazon = 'amazon',
  Awin = 'awin',
  CommissionJunction = 'commissionJunction'
}

export interface AffiliateToken {
  program: AffiliateProgramType
  advertiser?: Maybe<AffiliateAdvertiserType>
  token: Scalars['String']
  aid?: Maybe<Scalars['String']>
}

export interface AgeGateRule {
  message?: Maybe<Scalars['String']>
  minAge?: Maybe<Scalars['Int']>
}

export interface AgeGateRuleInput {
  minAge?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
}

export interface AmazonAffiliate {
  type: AmazonAffiliateType
  style: AmazonAffiliateStyle
}

export interface AmazonAffiliateInput {
  style: AmazonAffiliateStyle
  type: AmazonAffiliateType
}

export enum AmazonAffiliateStyle {
  Full = 'FULL',
  Dot = 'DOT',
  None = 'NONE'
}

export enum AmazonAffiliateType {
  Influencer = 'INFLUENCER',
  Handmade = 'HANDMADE',
  Eligible = 'ELIGIBLE'
}

export interface AnimatedBackground {
  color: Scalars['String']
  style: BackgroundStyle
  type: BackgroundType
}

export interface AppearanceBackgroundOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  assetUrl?: Maybe<Scalars['String']>
  subOptions?: Maybe<Array<Maybe<AppearanceBackgroundSubOptions>>>
}

export interface AppearanceBackgroundSubOptionOptions {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  assetUrl?: Maybe<Scalars['String']>
}

export interface AppearanceBackgroundSubOptions {
  title: Scalars['String']
  options?: Maybe<Array<Maybe<AppearanceBackgroundSubOptionOptions>>>
}

export interface AppearanceButtonCornerOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
}

export interface AppearanceButtonOption {
  id: Scalars['String']
  title: Scalars['String']
  group: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
}

export interface AppearanceButtonShadowOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
}

export interface AppearanceButtonStyleOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
}

export interface AppearanceColorPaletteOption {
  palette: Array<Scalars['String']>
  alternatePalette: Array<Scalars['String']>
}

export interface AppearanceFontOption {
  id: Scalars['String']
  title: Scalars['String']
  fontSize: Scalars['String']
  fontWeight: Scalars['String']
  letterSpacing: Scalars['String']
  group: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  assetUrl: Scalars['String']
}

export interface AppearanceGradientOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  assetUrl: Scalars['String']
  assetUrlWebp: Scalars['String']
  colors: Array<Maybe<Scalars['String']>>
  hideAnimated?: Maybe<Scalars['Boolean']>
}

export interface AppearanceHeadingEffect {
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AppearanceHeadingFonts {
  suggested: Array<AppearanceFontOption>
  other: Array<AppearanceFontOption>
}

export interface AppearanceHeadingLogoSize {
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  classname?: Maybe<Scalars['String']>
}

export interface AppearanceHeadingOption {
  options: AppearanceHeadingOptions
  fonts: AppearanceHeadingFonts
}

export interface AppearanceHeadingOptions {
  types: Array<AppearanceHeadingType>
  sizes: Array<AppearanceHeadingSize>
  logoSizes: Array<AppearanceHeadingLogoSize>
  effects: Array<AppearanceHeadingEffect>
}

export interface AppearanceHeadingSize {
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  classname?: Maybe<Scalars['String']>
}

export interface AppearanceHeadingType {
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AppearanceImageBackgroundEffect {
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface AppearanceOptions {
  themes: Array<AppearanceThemeOption>
  backgrounds: Array<AppearanceBackgroundOption>
  buttons: Array<AppearanceButtonOption>
  gradients: Array<AppearanceGradientOption>
  stylePresets: Array<AppearanceStylePresetOption>
  buttonStyles: Array<AppearanceButtonStyleOption>
  buttonCornerStyles: Array<AppearanceButtonCornerOption>
  buttonShadowStyles: Array<AppearanceButtonShadowOption>
  fonts: Array<AppearanceFontOption>
  colorPalette: AppearanceColorPaletteOption
  heading: AppearanceHeadingOption
  backgroundImageEffects: Array<AppearanceImageBackgroundEffect>
}

export interface AppearanceSettings {
  avatarMode: AvatarMode
  theme: Scalars['String']
  pageTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  profilePicture?: Maybe<Scalars['String']>
  backgroundColor: Scalars['String']
  backgroundImage?: Maybe<Scalars['String']>
  backgroundPoster?: Maybe<Scalars['String']>
  backgroundStyle: Scalars['String']
  backgroundHeroColor?: Maybe<Scalars['String']>
  buttonColor: Scalars['String']
  buttonStyle: Scalars['String']
  buttonCornerStyle: Scalars['String']
  buttonShadowStyle: Scalars['String']
  buttonTextColor: Scalars['String']
  fontStyle?: Maybe<Scalars['String']>
  fontColor: Scalars['String']
  shadowColor: Scalars['String']
  luminance: Scalars['String']
  isLogoVisible: Scalars['Boolean']
  metaAttributes?: Maybe<MetaAttributes>
}

export interface AppearanceStylePresetOption {
  id: Scalars['String']
  title: Scalars['String']
  buttonStyle: Scalars['String']
  buttonCornerStyle: Scalars['String']
  buttonShadowStyle: Scalars['String']
  fontStyle: Scalars['String']
  isPro: Scalars['Boolean']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  assetUrl?: Maybe<Scalars['String']>
}

export interface AppearanceThemeOption {
  id: Scalars['String']
  title: Scalars['String']
  featureFlag?: Maybe<Scalars['String']>
  visibility: Scalars['String']
  defaultFont?: Maybe<Scalars['String']>
  assetUrl?: Maybe<Scalars['String']>
  assetUrlWebp?: Maybe<Scalars['String']>
  backgroundAssetUrl?: Maybe<Scalars['String']>
  backgroundAssetUrlWebp?: Maybe<Scalars['String']>
  editable: Scalars['Boolean']
  category?: Maybe<Scalars['String']>
  baseThemeVisibility?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  isBaseThemePro?: Maybe<Scalars['Boolean']>
}

export interface ArchiveAllInactiveLinksResult {
  success?: Maybe<Scalars['Boolean']>
  archivedCount?: Maybe<Scalars['Int']>
}

export interface ArchiveSponsoredLinksResult {
  success?: Maybe<Scalars['Boolean']>
  archivedCount?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
}

export interface AssociationMethodHistory {
  ts: Scalars['String']
  action: Scalars['String']
  method: Scalars['String']
}

export interface AssociationMethodState {
  method: Scalars['String']
  status: Scalars['String']
  similarity_score: Scalars['Int']
}

export interface AssociationMethods {
  state?: Maybe<Array<Maybe<AssociationMethodState>>>
  history?: Maybe<Array<Maybe<AssociationMethodHistory>>>
}

export enum AvatarMode {
  CircleSmall = 'CIRCLE_SMALL',
  CircleMedium = 'CIRCLE_MEDIUM',
  Hero = 'HERO'
}

export enum AvatarType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Background =
  | ColorBackground
  | GradientBackground
  | ImageBackground
  | AnimatedBackground
  | VideoBackground
  | DefaultBackground

export enum BackgroundGradientStyle {
  Custom = 'CUSTOM',
  Pink = 'PINK',
  Orange = 'ORANGE',
  Green = 'GREEN',
  Rainbow = 'RAINBOW',
  Bloom = 'BLOOM',
  Noir = 'NOIR',
  Twilight = 'TWILIGHT',
  Rise = 'RISE',
  Glow = 'GLOW'
}

export enum BackgroundImageEffect {
  Mono = 'MONO',
  Halftone = 'HALFTONE',
  Blur = 'BLUR',
  None = 'NONE'
}

export enum BackgroundStyle {
  Flat = 'FLAT',
  Colorup = 'COLORUP',
  Colordown = 'COLORDOWN',
  Gradientradial = 'GRADIENTRADIAL',
  Custom = 'CUSTOM',
  Polka = 'POLKA',
  Stripe = 'STRIPE',
  Waves = 'WAVES',
  Zigzag = 'ZIGZAG',
  Grid = 'GRID',
  Morph = 'MORPH',
  Organic = 'ORGANIC',
  Matrix = 'MATRIX',
  Video = 'VIDEO',
  Blur = 'BLUR',
  Hero = 'HERO',
  Default = 'DEFAULT',
  Gradientstill = 'GRADIENTSTILL',
  Gradientanimated = 'GRADIENTANIMATED',
  Patternstill = 'PATTERNSTILL',
  Patternanimated = 'PATTERNANIMATED',
  Videoanimated = 'VIDEOANIMATED',
  Image = 'IMAGE',
  Fill = 'FILL',
  Gradient = 'GRADIENT',
  Pattern = 'PATTERN'
}

export enum BackgroundType {
  Color = 'COLOR',
  Image = 'IMAGE',
  Gradient = 'GRADIENT',
  Animated = 'ANIMATED',
  Video = 'VIDEO',
  Default = 'DEFAULT'
}

export interface BaseTheme {
  /** The unique identifier of the base theme. */
  id: Scalars['ID']
  /** The unique key for the base theme. */
  themeKey: Scalars['String']
  /** The title of the base theme. */
  title: Scalars['String']
  /** The visibility status of the theme. */
  visibility: ThemeVisibility
  /** Tags associated with the theme. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Button style. */
  buttonStyle?: Maybe<ButtonType>
  /** Button color hex code. */
  buttonColor?: Maybe<Scalars['String']>
  /** Button text color hex code. */
  buttonTextColor?: Maybe<Scalars['String']>
  /** Button corner style. */
  buttonCorners?: Maybe<ButtonCornerType>
  /** Button shadow style. */
  buttonShadow?: Maybe<ButtonShadowType>
  /** Button shadow color hex code. */
  buttonShadowColor?: Maybe<Scalars['String']>
  /** Background style. */
  backgroundStyle?: Maybe<BackgroundStyle>
  /** Background color hex code. */
  backgroundColor?: Maybe<Scalars['String']>
  /** URL for the background asset. */
  backgroundAssetUrl?: Maybe<Scalars['String']>
  /** Array of hex colors for background gradient. */
  backgroundGradient?: Maybe<Array<Maybe<Scalars['String']>>>
  /** URL for the background poster image. */
  backgroundPosterUrl?: Maybe<Scalars['String']>
  /** Font style. */
  fontStyle?: Maybe<Scalars['String']>
  /** Font color hex code. */
  fontColor?: Maybe<Scalars['String']>
  /** Luminance of the theme (e.g., light, dark). */
  luminance?: Maybe<Scalars['String']>
  /** URL for the footer logo. */
  footerLogoUrl?: Maybe<Scalars['String']>
  /** URL for the footer link. */
  footerUrl?: Maybe<Scalars['String']>
  /** Custom color for the footer. */
  footerCustomColor?: Maybe<Scalars['String']>
  /** Whether the theme is editable by the user. */
  isEditable: Scalars['Boolean']
  /** Tier of the theme. */
  tier: Tier
  /** Social link color hex code. */
  socialLinkColor?: Maybe<Scalars['String']>
  /** H1 text color hex code. */
  h1TextColor?: Maybe<Scalars['String']>
  /** H2 text color hex code. */
  h2TextColor?: Maybe<Scalars['String']>
  /** H3 text color hex code. */
  h3TextColor?: Maybe<Scalars['String']>
  /** Mouse cursor of the theme. */
  mouseCursor?: Maybe<Scalars['String']>
  /** The date when the base theme was last updated. */
  updatedAt?: Maybe<Scalars['Date']>
  /** The date when the base theme was created. */
  createdAt?: Maybe<Scalars['Date']>
  /** Thumbnail URL of the theme. */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** Avatar mode. */
  avatarMode?: Maybe<AvatarMode>
  /** Avatar type. */
  avatarType?: Maybe<AvatarType>
  /** Custom avatar URL. */
  customAvatar?: Maybe<Scalars['String']>
  /** Background hero color hex code. */
  backgroundHeroColor?: Maybe<Scalars['String']>
  /** Background gradient style. */
  backgroundGradientStyle?: Maybe<BackgroundGradientStyle>
  /** Background tint. */
  backgroundTint?: Maybe<Scalars['Int']>
  /** Custom avatar video URL. */
  customAvatarVideo?: Maybe<Scalars['String']>
  /** Heading type. */
  headingType?: Maybe<HeadingType>
  /** Heading logo URL. */
  headingLogo?: Maybe<Scalars['String']>
  /** Heading font family. */
  headingFont?: Maybe<Scalars['String']>
  /** Heading color. */
  headingColor?: Maybe<Scalars['String']>
  /** Heading size. */
  headingSize?: Maybe<HeadingSize>
  /** Heading effect. */
  headingEffect?: Maybe<HeadingEffect>
  /** Heading logo size. */
  headingLogoSize?: Maybe<HeadingSize>
  /** Color schema. */
  colorSchema?: Maybe<ColorSchema>
  /** Color palette. */
  colorPalette?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface BillingDetailsInput {
  paymentName: Scalars['String']
  paymentEmail: Scalars['String']
  paymentAddressLine1?: Maybe<Scalars['String']>
  paymentAddressLine2?: Maybe<Scalars['String']>
  paymentAddressCity?: Maybe<Scalars['String']>
  paymentAddressState?: Maybe<Scalars['String']>
  paymentAddressCountry?: Maybe<Scalars['String']>
  paymentAddressPostcode?: Maybe<Scalars['String']>
}

export interface BillingInfo {
  paymentName?: Maybe<Scalars['String']>
  paymentEmail?: Maybe<Scalars['String']>
  paymentAddressLine1?: Maybe<Scalars['String']>
  paymentAddressLine2?: Maybe<Scalars['String']>
  paymentAddressCountry?: Maybe<Scalars['String']>
  paymentAddressCity?: Maybe<Scalars['String']>
  paymentAddressState?: Maybe<Scalars['String']>
  paymentAddressPostcode?: Maybe<Scalars['String']>
  accountId: Scalars['Int']
}

export interface BookLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  productReference?: Maybe<Scalars['String']>
  displayPrices: Scalars['Boolean']
  includeUsedCopiesInResult: Scalars['Boolean']
  options: Array<BookLinkOption>
}

export interface BookLinkContextProductReferenceArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface BookLinkContextOptionsArgs {
  includeHidden?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface BookLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  productReference?: Maybe<Scalars['String']>
  displayPrices?: Maybe<Scalars['Boolean']>
  includeUsedCopiesInResult?: Maybe<Scalars['Boolean']>
  options?: Maybe<Array<BookLinkOptionInput>>
}

export interface BookLinkFormat {
  format: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface BookLinkFormatInput {
  format: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface BookLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
  formats?: Maybe<Array<BookLinkFormat>>
}

export interface BookLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
  formats?: Maybe<Array<BookLinkFormatInput>>
}

export interface BulkAccountCreationResult {
  user?: Maybe<User>
}

export interface BulkPasswordResetResult {
  success?: Maybe<Scalars['Boolean']>
  username?: Maybe<Scalars['String']>
}

export interface BusinessInstagramAccounts {
  followersCount?: Maybe<Scalars['Int']>
  id: Scalars['String']
  mediaCount?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  profilePictureUrl?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  posts?: Maybe<Array<Maybe<GetInstagramBusinessAccountPost>>>
}

export interface BusinessInstagramAccountsPostsArgs {
  instagramMediaType?: Maybe<InstagramMediaType>
  numberOfPostsToFetch?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
}

export interface ButtonBackgroundStyle {
  color: Scalars['String']
}

export interface ButtonCornerStyle {
  type: ButtonCornerType
}

export enum ButtonCornerType {
  Sharp = 'SHARP',
  Curved = 'CURVED',
  Round = 'ROUND',
  Default = 'DEFAULT',
  RoundedNone = 'ROUNDED_NONE',
  RoundedSm = 'ROUNDED_SM',
  RoundedLg = 'ROUNDED_LG',
  RoundedFull = 'ROUNDED_FULL'
}

export enum ButtonHighlightType {
  Wobble = 'WOBBLE',
  Pop = 'POP',
  Buzz = 'BUZZ',
  Swipe = 'SWIPE',
  Spotlight = 'SPOTLIGHT'
}

export interface ButtonShadowStyle {
  color: Scalars['String']
  type: ButtonShadowType
}

export enum ButtonShadowType {
  None = 'NONE',
  Soft = 'SOFT',
  Hard = 'HARD',
  Default = 'DEFAULT',
  ShadowNone = 'SHADOW_NONE',
  ShadowSm = 'SHADOW_SM',
  ShadowLg = 'SHADOW_LG',
  ShadowFull = 'SHADOW_FULL',
  Subtle = 'SUBTLE'
}

export interface ButtonStyle {
  type: ButtonType
  backgroundStyle: ButtonBackgroundStyle
  shadowStyle?: Maybe<ButtonShadowStyle>
  cornerStyle?: Maybe<ButtonCornerStyle>
  textStyle?: Maybe<ButtonTextStyle>
}

export interface ButtonTextStyle {
  color: Scalars['String']
}

export enum ButtonType {
  Fill = 'FILL',
  Glass = 'GLASS',
  Outline = 'OUTLINE',
  Default = 'DEFAULT',
  FillRounded = 'FILL_ROUNDED',
  FillCircular = 'FILL_CIRCULAR',
  OutlineRounded = 'OUTLINE_ROUNDED',
  OutlineCircular = 'OUTLINE_CIRCULAR',
  Hardshadow = 'HARDSHADOW',
  HardshadowRounded = 'HARDSHADOW_ROUNDED',
  HardshadowCircular = 'HARDSHADOW_CIRCULAR',
  Softshadow = 'SOFTSHADOW',
  SoftshadowRounded = 'SOFTSHADOW_ROUNDED',
  SoftshadowCircular = 'SOFTSHADOW_CIRCULAR',
  TornEdges = 'TORN_EDGES',
  JigglyEdges = 'JIGGLY_EDGES',
  Formal2Stroke = 'FORMAL2_STROKE',
  Frost = 'FROST',
  Vector = 'VECTOR',
  AlternatingShapes = 'ALTERNATING_SHAPES'
}

export enum CacheType {
  Default = 'Default',
  Subscription = 'Subscription',
  Link = 'Link'
}

export interface CanAccessGoogleSheets {
  canAccessGoogleSheets: Scalars['Boolean']
}

export interface CanAccessGoogleYouTube {
  canAccessGoogleYouTube: Scalars['Boolean']
}

export interface CanvaAsset {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
}

export interface CanvaAssetUploadJobResult {
  jobId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  error?: Maybe<Scalars['String']>
  canvaAsset?: Maybe<CanvaAsset>
}

export interface CanvaDesign {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  editUrl?: Maybe<Scalars['String']>
  viewUrl?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  pages?: Maybe<Array<Maybe<CanvaDesignPage>>>
}

export interface CanvaDesignExportJobResult {
  jobId?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  error?: Maybe<Scalars['String']>
  canvaDesignUrls?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface CanvaDesignList {
  items?: Maybe<Array<Maybe<CanvaDesign>>>
  continuation?: Maybe<Scalars['String']>
}

export interface CanvaDesignPage {
  index?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
}

export interface CanvaIntegrationContext {
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  scope?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
  user?: Maybe<CanvaUser>
  design?: Maybe<CanvaDesign>
  designs?: Maybe<CanvaDesignList>
  asset?: Maybe<CanvaAsset>
}

export interface CanvaIntegrationContextDesignArgs {
  id?: Maybe<Scalars['String']>
  returnNavigation?: Maybe<Scalars['String']>
}

export interface CanvaIntegrationContextDesignsArgs {
  query?: Maybe<Scalars['String']>
  continuation?: Maybe<Scalars['String']>
  returnNavigation?: Maybe<Scalars['String']>
}

export interface CanvaIntegrationContextAssetArgs {
  id?: Maybe<Scalars['String']>
}

export interface CanvaUser {
  userId?: Maybe<Scalars['String']>
}

export interface Card {
  id: Scalars['Int']
  name?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  lastFour?: Maybe<Scalars['String']>
  expMonth?: Maybe<Scalars['Int']>
  expYear?: Maybe<Scalars['Int']>
  isExpired: Scalars['Boolean']
  updatedAt?: Maybe<Scalars['Date']>
  createdAt?: Maybe<Scalars['Date']>
  type: PaymentSourceType
  email?: Maybe<Scalars['String']>
}

export interface CelebrityTheme extends Theme {
  key: Scalars['ID']
  editable: Scalars['Boolean']
  socialStyle: SocialStyle
  background: Background
}

export interface ChargebeeAddon {
  id?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  unit_price?: Maybe<Scalars['Int']>
}

export enum ChargebeeAutoCollectionType {
  On = 'on',
  Off = 'off'
}

export enum ChargebeeBillingPeriodUnitType {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year'
}

export interface ChargebeeCoupon {
  coupon_id?: Maybe<Scalars['String']>
  apply_till?: Maybe<Scalars['Int']>
  applied_count?: Maybe<Scalars['Int']>
  coupon_code?: Maybe<Scalars['String']>
}

export interface ChargebeeSubscription {
  id: Scalars['String']
  status: ChargebeeSubscriptionStatusType
  object: Scalars['String']
  activated_at?: Maybe<Scalars['Int']>
  auto_collection?: Maybe<ChargebeeAutoCollectionType>
  billing_period?: Maybe<Scalars['Int']>
  billing_period_unit?: Maybe<ChargebeeBillingPeriodUnitType>
  created_at?: Maybe<Scalars['Int']>
  currency_code: Scalars['String']
  current_term_end?: Maybe<Scalars['Int']>
  current_term_start?: Maybe<Scalars['Int']>
  customer_id: Scalars['String']
  deleted?: Maybe<Scalars['Boolean']>
  due_invoices_count?: Maybe<Scalars['Int']>
  due_since?: Maybe<Scalars['Int']>
  has_scheduled_advance_invoices: Scalars['Boolean']
  has_scheduled_changes: Scalars['Boolean']
  mrr?: Maybe<Scalars['Int']>
  next_billing_at?: Maybe<Scalars['Int']>
  /** @deprecated This field is deprecated to avoid integer overflow, use plan_amount_string instead */
  plan_amount?: Maybe<Scalars['Int']>
  plan_amount_string?: Maybe<Scalars['String']>
  plan_free_quantity?: Maybe<Scalars['Int']>
  plan_id: Scalars['String']
  plan_quantity: Scalars['Int']
  /** @deprecated This field is deprecated to avoid integer overflow, use plan_unit_price_string instead */
  plan_unit_price?: Maybe<Scalars['Int']>
  plan_unit_price_string?: Maybe<Scalars['String']>
  trial_end?: Maybe<Scalars['Int']>
  trial_start?: Maybe<Scalars['Int']>
  resource_version?: Maybe<Scalars['Int']>
  started_at?: Maybe<Scalars['Int']>
  total_dues?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['Int']>
  cancelled_at?: Maybe<Scalars['Int']>
  pause_date?: Maybe<Scalars['Int']>
  resume_date?: Maybe<Scalars['Int']>
  remaining_billing_cycles?: Maybe<Scalars['Int']>
  meta_data?: Maybe<Scalars['String']>
  coupons?: Maybe<Array<Maybe<ChargebeeCoupon>>>
  addons?: Maybe<Array<Maybe<ChargebeeAddon>>>
}

export enum ChargebeeSubscriptionStatusType {
  Future = 'future',
  InTrial = 'in_trial',
  Active = 'active',
  NonRenewing = 'non_renewing',
  Paused = 'paused',
  Cancelled = 'cancelled'
}

export interface ChatbotDialogueExampleInput {
  prompt?: Maybe<Scalars['String']>
  response?: Maybe<Scalars['String']>
}

export interface ChatbotDialogueExampleObject {
  prompt: Scalars['String']
  response: Scalars['String']
}

export interface ChatbotLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  examplePrompts: Array<Scalars['String']>
  inputPlaceholder: Scalars['String']
  initialMessage: Scalars['String']
  externalUrls?: Maybe<Array<Scalars['String']>>
  dialogueExamples?: Maybe<Array<Maybe<ChatbotDialogueExampleObject>>>
}

export interface ChatbotLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  examplePrompts?: Maybe<Array<Maybe<Scalars['String']>>>
  externalUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  dialogueExamples?: Maybe<Array<Maybe<ChatbotDialogueExampleInput>>>
}

export interface ChildGroupInput {
  childIds: Array<Scalars['Int']>
  position: Scalars['Int']
  title?: Maybe<Scalars['String']>
  modifiers?: Maybe<LinkModifiersInput>
  parentGroupContext?: Maybe<GroupLinkContextInput>
}

export interface ClubhouseLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface ClubhouseLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface CoachingLinkContext {
  campaignId?: Maybe<Scalars['String']>
  hasCompletedSetup?: Maybe<Scalars['Boolean']>
}

export interface CoachingLinkContextInput {
  campaignId?: Maybe<Scalars['String']>
  hasCompletedSetup?: Maybe<Scalars['Boolean']>
}

export interface ColorBackground {
  color: Scalars['String']
  style: BackgroundStyle
  type: BackgroundType
}

export enum ColorSchema {
  Vibrant = 'vibrant',
  Subtle = 'subtle'
}

export interface ColorSchemaOptions {
  colorSchema?: Maybe<ColorSchema>
  themeColor?: Maybe<Scalars['String']>
  buttonBackgroundColor?: Maybe<Scalars['String']>
  buttonTextColor?: Maybe<Scalars['String']>
}

export interface CommerceLinkFees {
  feePercentage?: Maybe<Scalars['Float']>
}

export interface CommercePayLinkContext {
  serviceIntegration?: Maybe<ServiceIntegration>
  presetAmounts: Array<Scalars['Int']>
  allowCustomAmount: Scalars['Boolean']
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  allowNote: Scalars['Boolean']
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface CommercePayLinkContextInput {
  serviceIntegrationId?: Maybe<Scalars['String']>
  presetAmounts?: Maybe<Array<Scalars['Int']>>
  allowCustomAmount?: Maybe<Scalars['Boolean']>
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  allowNote?: Maybe<Scalars['Boolean']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface CommerceProductLinkContext {
  accountProductId?: Maybe<Scalars['String']>
  product?: Maybe<CommerceProductLinkProduct>
}

export interface CommerceProductLinkContextInput {
  accountProductId: Scalars['String']
}

export interface CommerceProductLinkProduct {
  id: Scalars['String']
  url: Scalars['String']
  title: Scalars['String']
  price?: Maybe<Scalars['Int']>
  salePrice?: Maybe<Scalars['Int']>
  image?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  vendorDisplayName?: Maybe<Scalars['String']>
}

export interface CommunityFeature {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
}

export interface CommunityFeatureInput {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
}

export enum CommunityLinkBehaviourOptions {
  Direct = 'DIRECT',
  Form = 'FORM',
  Apply = 'APPLY'
}

export interface CommunityLinkContext {
  linkType?: Maybe<CommunityPlatformOptions>
  linkBehaviour?: Maybe<CommunityLinkBehaviourOptions>
  linkPricing?: Maybe<CommunityLinkPricingOptions>
  /** @deprecated Used prior to ltfollowers integration, use v2FormId instead */
  formFields?: Maybe<Array<Maybe<FormLinkField>>>
  v2FormId?: Maybe<Scalars['String']>
  listingId?: Maybe<Scalars['String']>
  communityFeatures?: Maybe<Array<Maybe<CommunityFeature>>>
  communityTitle?: Maybe<Scalars['String']>
  communityDescription?: Maybe<Scalars['String']>
  communityImage?: Maybe<Scalars['String']>
  communitySubscriptionId?: Maybe<Scalars['String']>
  communityInviteUrl?: Maybe<Scalars['String']>
  pricePaymentType?: Maybe<DigitalDownloadPaymentType>
}

export interface CommunityLinkContextInput {
  linkType?: Maybe<CommunityPlatformOptions>
  linkBehaviour?: Maybe<CommunityLinkBehaviourOptions>
  linkPricing?: Maybe<CommunityLinkPricingOptions>
  formFields?: Maybe<Array<Maybe<FormLinkFieldInput>>>
  v2FormId?: Maybe<Scalars['String']>
  listingId?: Maybe<Scalars['String']>
  communityFeatures?: Maybe<Array<Maybe<CommunityFeatureInput>>>
  communityTitle?: Maybe<Scalars['String']>
  communityDescription?: Maybe<Scalars['String']>
  communityImage?: Maybe<Scalars['String']>
  communitySubscriptionId?: Maybe<Scalars['String']>
}

export enum CommunityLinkPricingOptions {
  Free = 'FREE',
  OneTime = 'ONE_TIME',
  Subscription = 'SUBSCRIPTION'
}

export enum CommunityPlatformOptions {
  Whatsapp = 'WHATSAPP',
  Slack = 'SLACK',
  Discord = 'DISCORD'
}

export interface ConfirmPasswordResetInput {
  confirmationToken: Scalars['String']
  password: Scalars['String']
}

export interface ConfirmPasswordResetResult {
  result?: Maybe<Scalars['String']>
}

export enum ContactDetailEmailType {
  Work = 'WORK',
  Personal = 'PERSONAL',
  Other = 'OTHER'
}

export enum ContactDetailPhoneType {
  Mobile = 'MOBILE',
  Work = 'WORK',
  Home = 'HOME',
  Other = 'OTHER'
}

export interface ContactDetailsLinkContext {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  organization?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  emailPrimary?: Maybe<Scalars['String']>
  emailPrimaryType?: Maybe<ContactDetailEmailType>
  emailSecondary?: Maybe<Scalars['String']>
  emailSecondaryType?: Maybe<ContactDetailEmailType>
  phonePrimary?: Maybe<Scalars['String']>
  phonePrimaryType?: Maybe<ContactDetailPhoneType>
  phoneSecondary?: Maybe<Scalars['String']>
  phoneSecondaryType?: Maybe<ContactDetailPhoneType>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressCity?: Maybe<Scalars['String']>
  addressCountry?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  addressPostcode?: Maybe<Scalars['String']>
  openingHours?: Maybe<Scalars['String']>
}

export interface ContactDetailsLinkContextInput {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  organization?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  emailPrimary?: Maybe<Scalars['String']>
  emailPrimaryType?: Maybe<ContactDetailEmailType>
  emailSecondary?: Maybe<Scalars['String']>
  emailSecondaryType?: Maybe<ContactDetailEmailType>
  phonePrimary?: Maybe<Scalars['String']>
  phonePrimaryType?: Maybe<ContactDetailPhoneType>
  phoneSecondary?: Maybe<Scalars['String']>
  phoneSecondaryType?: Maybe<ContactDetailPhoneType>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressCity?: Maybe<Scalars['String']>
  addressCountry?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  addressPostcode?: Maybe<Scalars['String']>
  openingHours?: Maybe<Scalars['String']>
}

export interface ContactFormInput {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
}

export interface ContactFormIntegrationInput {
  id: Scalars['String']
  values: ContactFormInput
}

export enum ContentWarningType {
  Moderated = 'moderated',
  Generic = 'generic',
  EighteenPlus = 'eighteenPlus',
  TwentyOnePlus = 'twentyOnePlus',
  TwentyFivePlus = 'twentyFivePlus'
}

export interface CorrilyPricesResponse {
  userId: Scalars['String']
  country: Scalars['String']
  currency: Scalars['String']
  currencySymbol: Scalars['String']
  products: Array<CorrilyProduct>
}

export interface CorrilyProduct {
  productId: Scalars['String']
  price: Scalars['Float']
  priceUsd: Scalars['Float']
  interval: Scalars['String']
  intervalCount: Scalars['Int']
  display?: Maybe<CorrilyProductDisplay>
  integrations: CorrilyProductIntegrations
}

export interface CorrilyProductDisplay {
  price: Scalars['String']
  referenceIntervalPrice: Scalars['String']
  priceWithBaselineStrike: Scalars['String']
  discountToBaseline: Scalars['Float']
}

export interface CorrilyProductIntegration {
  currency: Scalars['String']
  amount: Scalars['Float']
  formatted: Scalars['String']
}

export interface CorrilyProductIntegrations {
  stripe: CorrilyProductIntegration
}

export interface CountryCode {
  countryCode: Scalars['String']
}

export interface Coupon {
  discountAmount?: Maybe<Scalars['Int']>
  discountPercentage?: Maybe<Scalars['Int']>
  discountPlanPrice?: Maybe<Scalars['Int']>
  discountType?: Maybe<Scalars['String']>
  durationMonths?: Maybe<Scalars['Int']>
  durationType?: Maybe<Scalars['String']>
  durationYears?: Maybe<Scalars['Int']>
  hasExpired?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  isDeleted?: Maybe<Scalars['Boolean']>
  isForever?: Maybe<Scalars['Boolean']>
  isFree?: Maybe<Scalars['Boolean']>
  isFreeForever?: Maybe<Scalars['Boolean']>
  hidePaymentFields?: Maybe<Scalars['Boolean']>
  isOneTime?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  redeemableCode?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  validTill?: Maybe<Scalars['Date']>
}

export interface CreateAccountInput {
  username?: Maybe<Scalars['String']>
  email: Scalars['String']
  realName?: Maybe<Scalars['String']>
  verticals: Array<Scalars['String']>
  verticalsVersion?: Maybe<Scalars['Int']>
  verticalsOther?: Maybe<Scalars['String']>
  captchaToken?: Maybe<Scalars['String']>
  captchaVersion?: Maybe<Scalars['String']>
  marketingOptIn?: Maybe<Scalars['Boolean']>
  isV2?: Maybe<Scalars['Boolean']>
  campaignName?: Maybe<Scalars['String']>
  templateProfileName?: Maybe<Scalars['String']>
}

export interface CreateAccountResult {
  user?: Maybe<User>
}

export interface CreateAffiliateTokenInput {
  program: Scalars['String']
  advertiser?: Maybe<Scalars['String']>
  token: Scalars['String']
  aid?: Maybe<Scalars['String']>
}

export interface CreateBaseThemeFromAccountThemeInput {
  accountId: Scalars['Int']
  themeKey: Scalars['String']
  title: Scalars['String']
  backgroundAssetUrl: Scalars['String']
  tags?: Maybe<Array<Scalars['String']>>
  isEditable: Scalars['Boolean']
  tier?: Maybe<Scalars['String']>
  /** The email of the operator creating the base theme */
  creatingOperator?: Maybe<Scalars['String']>
}

export interface CreateBaseThemeInput {
  themeKey: Scalars['String']
  title: Scalars['String']
  tags?: Maybe<Array<Scalars['String']>>
  buttonStyle?: Maybe<Scalars['String']>
  buttonColor?: Maybe<Scalars['String']>
  buttonTextColor?: Maybe<Scalars['String']>
  buttonCorners?: Maybe<Scalars['String']>
  buttonShadow?: Maybe<Scalars['String']>
  buttonShadowColor?: Maybe<Scalars['String']>
  backgroundStyle?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundAssetUrl?: Maybe<Scalars['String']>
  backgroundGradient?: Maybe<Array<Scalars['String']>>
  backgroundPosterUrl?: Maybe<Scalars['String']>
  fontStyle?: Maybe<Scalars['String']>
  fontColor?: Maybe<Scalars['String']>
  luminance?: Maybe<Scalars['String']>
  footerLogoUrl?: Maybe<Scalars['String']>
  footerUrl?: Maybe<Scalars['String']>
  footerCustomColor?: Maybe<Scalars['String']>
  isEditable: Scalars['Boolean']
  /** The email of the operator creating the base theme */
  creatingOperator?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  headingType?: Maybe<Scalars['String']>
  headingLogo?: Maybe<Scalars['String']>
  headingFont?: Maybe<Scalars['String']>
  headingColor?: Maybe<Scalars['String']>
  headingSize?: Maybe<Scalars['String']>
  headingEffect?: Maybe<Scalars['String']>
  headingLogoSize?: Maybe<Scalars['String']>
  colorSchema?: Maybe<Scalars['String']>
  backgroundGradientStyle?: Maybe<Scalars['String']>
  backgroundTint?: Maybe<Scalars['Int']>
  avatarMode?: Maybe<Scalars['String']>
  avatarType?: Maybe<Scalars['String']>
  customAvatar?: Maybe<Scalars['String']>
  customAvatarVideo?: Maybe<Scalars['String']>
  backgroundHeroColor?: Maybe<Scalars['String']>
  colorPalette?: Maybe<Array<Maybe<Scalars['String']>>>
  tier?: Maybe<Scalars['String']>
}

export interface CreateCanvaAssetUploadJobInput {
  accountUuid: Scalars['String']
  integrationId: Scalars['String']
  url: Scalars['String']
  name?: Maybe<Scalars['String']>
}

export interface CreateCanvaDesignInput {
  accountUuid: Scalars['String']
  integrationId: Scalars['String']
  title?: Maybe<Scalars['String']>
  canvaAssetId?: Maybe<Scalars['String']>
  returnNavigation?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export interface CreateCanvaDesignOutputJobInput {
  accountUuid: Scalars['String']
  integrationId: Scalars['String']
  designId: Scalars['String']
  pages?: Maybe<Array<Maybe<Scalars['Int']>>>
  outputFormatType?: Maybe<Scalars['String']>
  outputFormatHeight?: Maybe<Scalars['Int']>
  outputFormatWidth?: Maybe<Scalars['Int']>
}

export interface CreateCanvaDesignResult {
  design?: Maybe<CanvaDesign>
}

export interface CreateKajabiCourseResult {
  accessToken?: Maybe<Scalars['String']>
}

export interface CreateMailchimpIntegrationInput {
  authorizationCode?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export interface CreatePasswordInput {
  password: Scalars['String']
  type: Scalars['String']
}

export interface CreatePasswordResult {
  result?: Maybe<Scalars['String']>
}

export interface CreatePasswordUnauthenticatedInput {
  username: Scalars['String']
}

export interface CreatePasswordUnauthenticatedResult {
  result?: Maybe<Scalars['String']>
}

export interface CreatePaypalIntegrationInput {
  title?: Maybe<Scalars['String']>
  merchantId: Scalars['String']
  accountStatus: Scalars['String']
  emailConfirmed: Scalars['Boolean']
  postalCode?: Maybe<Scalars['String']>
  countryCode?: Maybe<Scalars['String']>
}

export interface CreateShopifyIntegrationInput {
  authorizationCode?: Maybe<Scalars['String']>
  shop: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface CreateSocialFeedMutationInput {
  title?: Maybe<Scalars['String']>
  source: SocialFeedSource
  type: SocialFeedType
  layout: SocialFeedLayoutType
  active?: Maybe<Scalars['Boolean']>
  socialIntegrationId?: Maybe<Scalars['String']>
}

export interface CreateSocialFeedPostMediaLinkMutationInput {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  coordinates: SocialFeedPostMediaLinkCoordinatesInput
}

export interface CreateSocialFeedPostMutationInput {
  externalParentId?: Maybe<Scalars['String']>
  externalId: Scalars['String']
  accountUuid?: Maybe<Scalars['String']>
  type?: Maybe<SocialFeedType>
  source?: Maybe<SocialFeedSource>
  postType: SocialFeedPostType
  caption?: Maybe<Scalars['String']>
  mediaUrl: Scalars['String']
  thumbnailUrl?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  pinned?: Maybe<Scalars['Boolean']>
  visible?: Maybe<Scalars['Boolean']>
  media?: Maybe<Array<Maybe<SocialFeedPostMediaInput>>>
  timestamp: Scalars['String']
}

export interface CreateSocialIntegrationInput {
  code: Scalars['String']
  type: SocialIntegrationType
}

export interface CreateSpringIntegrationInput {
  shop: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface CreateSquareIntegrationInput {
  authorizationCode: Scalars['String']
  currencyCode: Scalars['String']
  applicationId: Scalars['String']
}

export interface CreateStripeIntegrationFromAccountIdInput {
  stripeAccountId: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface CreateStripeIntegrationInput {
  authorizationCode: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface CreateStripeIntentResult {
  type?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
  intentId?: Maybe<Scalars['String']>
  requiresAction?: Maybe<Scalars['Boolean']>
  clientSecret?: Maybe<Scalars['String']>
}

export interface CreateSubscriptionAddOnInput {
  name: Scalars['String']
  quantity: Scalars['Int']
}

export interface CreateSubscriptionAddOnResult {
  quantity: Scalars['Int']
  product: SubscriptionAddOnProduct
}

export interface CreateSubscriptionInput {
  currency: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  price?: Maybe<Scalars['Int']>
  billingDetails: BillingDetailsInput
  paymentDetails: PaymentDetailsInput
  isFreeTrial?: Maybe<Scalars['Boolean']>
  freeTrialEntryPoint?: Maybe<Scalars['String']>
  ctaLabel?: Maybe<Scalars['String']>
  billingUrl?: Maybe<Scalars['String']>
  corrilyPriceShown?: Maybe<Scalars['Boolean']>
}

export interface CreateSubscriptionResult {
  user?: Maybe<User>
}

export interface CreateSubscriptionV2Input {
  currency: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  price?: Maybe<Scalars['Int']>
  unitPrice?: Maybe<Scalars['Int']>
  billingDetails: BillingDetailsInput
  paymentDetails: PaymentDetailsInput
  isFreeTrial?: Maybe<Scalars['Boolean']>
  freeTrialEntryPoint?: Maybe<Scalars['String']>
  ctaLabel?: Maybe<Scalars['String']>
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  billingUrl?: Maybe<Scalars['String']>
  profileQuantity?: Maybe<Scalars['Int']>
}

export interface CreateUserInput {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  passwordRepeat: Scalars['String']
  marketingOptIn?: Maybe<Scalars['Boolean']>
}

export interface CreateUserResult {
  user?: Maybe<User>
}

export enum CurrencyCode {
  Usd = 'USD',
  Brl = 'BRL',
  Idr = 'IDR',
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bov = 'BOV',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usn = 'USN',
  Uyi = 'UYI',
  Uyu = 'UYU',
  Uyw = 'UYW',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xag = 'XAG',
  Xau = 'XAU',
  Xba = 'XBA',
  Xbb = 'XBB',
  Xbc = 'XBC',
  Xbd = 'XBD',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpd = 'XPD',
  Xpf = 'XPF',
  Xpt = 'XPT',
  Xsu = 'XSU',
  Xua = 'XUA',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export interface CustomDomain {
  id?: Maybe<Scalars['String']>
  domain?: Maybe<Scalars['String']>
  active: Scalars['Boolean']
  verified: Scalars['Boolean']
}

export interface CustomTheme extends Theme {
  key: Scalars['ID']
  editable: Scalars['Boolean']
  luminance: Luminance
  typeface: Typeface
  background: Background
  buttonStyle: ButtonStyle
  socialStyle: SocialStyle
  heading: HeadingOptions
}

export interface CustomThemeBackgroundArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface DefaultBackground {
  color: Scalars['String']
  style: BackgroundStyle
  type: BackgroundType
}

export enum DefaultProfilePage {
  Links = 'LINKS',
  Store = 'STORE'
}

export interface DefaultTheme extends Theme {
  key: Scalars['ID']
  editable: Scalars['Boolean']
}

export interface DeleteAccountResult {
  success?: Maybe<Scalars['Boolean']>
}

export interface DeleteAffiliateTokenInput {
  program: Scalars['String']
  advertiser?: Maybe<Scalars['String']>
}

export interface DeleteGoogleAuthTokenResult {
  hasDeletedToken: Scalars['Boolean']
}

export interface DeleteInstagramWebhookResult {
  success: Scalars['Boolean']
}

export interface DeleteLinkInput {
  includeNested?: Maybe<Scalars['Boolean']>
}

export interface DeleteUserResult {
  success?: Maybe<Scalars['Boolean']>
}

export interface Design {
  colors: DesignColors
  fonts: DesignFonts
}

export interface DesignColors {
  bodyColor: Scalars['String']
  linkBackgroundColor: Scalars['String']
}

export interface DesignFonts {
  fontColor: Scalars['String']
  fontSize: FontSize
  fontWeight: Scalars['String']
  fontFamily: Scalars['String']
  letterSpacing: Scalars['String']
}

export interface DigitalDownloadLinkContext {
  v2FormId?: Maybe<Scalars['String']>
  listing?: Maybe<DigitalDownloadLinkListing>
  product?: Maybe<DigitalDownloadLinkProduct>
}

export interface DigitalDownloadLinkContextInput {
  v2FormId?: Maybe<Scalars['String']>
  listingId?: Maybe<Scalars['String']>
  listingName?: Maybe<Scalars['String']>
  listingDescription?: Maybe<Scalars['String']>
  listingImageUrl?: Maybe<Scalars['String']>
  listingAmount?: Maybe<Scalars['Int']>
  listingCurrency?: Maybe<Scalars['String']>
  listingPaymentType?: Maybe<DigitalDownloadPaymentType>
  collectionId?: Maybe<Scalars['String']>
  productItems?: Maybe<Array<Maybe<DigitalDownloadLinkProductItemInput>>>
}

export interface DigitalDownloadLinkListing {
  /** The ID of the listing stored in the Payments Service */
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
  paymentType?: Maybe<DigitalDownloadPaymentType>
}

export interface DigitalDownloadLinkProduct {
  /** The ID of the collection stored in the UGC Service */
  id: Scalars['String']
  items?: Maybe<Array<Maybe<DigitalDownloadLinkProductItem>>>
}

export interface DigitalDownloadLinkProductItem {
  id?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
}

export interface DigitalDownloadLinkProductItemInput {
  id?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
}

export enum DigitalDownloadPaymentType {
  Free = 'FREE',
  OneTime = 'ONE_TIME'
}

export interface DiscoverAccount {
  id: Scalars['Int']
  username: Scalars['String']
  realName?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  /** @deprecated Legacy field. Use `customAvatar` instead. */
  profilePictureUrl?: Maybe<Scalars['String']>
  profileBadges?: Maybe<Array<ProfileBadges>>
}

export interface DiscoverAccountProfilePictureUrlArgs {
  isProfilePreview?: Maybe<Scalars['Boolean']>
}

export interface DiscoverLink {
  id: Scalars['Int']
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  active: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  modifiers: LinkModifiers
  shouldRouteToProfile: Scalars['Boolean']
  account: DiscoverAccount
}

export interface DiscoverLinkUrlArgs {
  appendUtm?: Maybe<Scalars['Boolean']>
  appendLtclid?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface DotDigitalIntegrationContext {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  termsActive?: Maybe<Scalars['Boolean']>
  termsLabel?: Maybe<Scalars['String']>
  termsUrl?: Maybe<Scalars['String']>
  apiEndpoint?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  storageKey?: Maybe<Scalars['String']>
}

export interface DuplicateProfileResult {
  user?: Maybe<User>
}

export interface EmailLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface EmailPreferences {
  id?: Maybe<Scalars['String']>
  accountId?: Maybe<Scalars['String']>
  weeklyDigest: Scalars['Boolean']
}

export interface EntitlementProduct {
  type: EntitlementProductType
  tier: Tier
}

export enum EntitlementProductType {
  Subscription = 'Subscription'
}

export interface EntitlementQuota {
  limit: Scalars['Int']
  remaining: Scalars['Int']
}

export interface EntitlementRate {
  type: EntitlementRateType
  amount: Scalars['Float']
}

export enum EntitlementRateType {
  Percentage = 'Percentage'
}

export enum EntitlementType {
  User = 'User',
  Account = 'Account'
}

export interface ExtensionLinkContext {
  linkTypeId: Scalars['String']
  data?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  isValid?: Maybe<Scalars['Boolean']>
  hasUrl?: Maybe<Scalars['Boolean']>
  status?: Maybe<ExtensionLinkStatus>
  embedOption?: Maybe<LinkEmbedOptions>
  usesUrl?: Maybe<Scalars['Boolean']>
}

export interface ExtensionLinkContextDataArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface ExtensionLinkContextInput {
  linkTypeId?: Maybe<Scalars['String']>
  isValid?: Maybe<Scalars['Boolean']>
  hasUrl?: Maybe<Scalars['Boolean']>
  data?: Maybe<Scalars['String']>
  embedOption?: Maybe<LinkEmbedOptions>
  usesUrl?: Maybe<Scalars['Boolean']>
}

export enum ExtensionLinkStatus {
  Published = 'PUBLISHED',
  Draft = 'DRAFT',
  Disabled = 'DISABLED'
}

export interface ExtensionLinkTemplates {
  settings?: Maybe<Scalars['String']>
  public?: Maybe<Scalars['String']>
}

export interface FacebookLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface FacebookLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface FacebookPixel {
  isTokenValid: Scalars['Boolean']
}

export interface FacebookSocialIntegrationContext {
  businessInstagramAccounts: Array<BusinessInstagramAccounts>
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>
  supportIGDM?: Maybe<Scalars['Boolean']>
  instagramPost?: Maybe<GetInstagramBusinessAccountPost>
}

export interface FacebookSocialIntegrationContextInstagramPostArgs {
  id: Scalars['String']
}

export interface FontSize {
  mobile: Scalars['String']
  desktop: Scalars['String']
}

export interface FormLinkContext {
  formType?: Maybe<Scalars['String']>
  fields?: Maybe<Array<Maybe<FormLinkField>>>
  submissionMethod?: Maybe<Scalars['String']>
  emailRecipient?: Maybe<Scalars['String']>
  linkDescription?: Maybe<Scalars['String']>
  confirmationMessage?: Maybe<Scalars['String']>
  termsConditions?: Maybe<Scalars['Boolean']>
  termsConditionsLabel?: Maybe<Scalars['String']>
  termsConditionsUrl?: Maybe<Scalars['String']>
  integrationId?: Maybe<Scalars['String']>
  v2FormId?: Maybe<Scalars['String']>
  autoAdded?: Maybe<Scalars['Boolean']>
}

export interface FormLinkContextInput {
  formType?: Maybe<Scalars['String']>
  fields?: Maybe<Array<Maybe<FormLinkFieldInput>>>
  submissionMethod?: Maybe<Scalars['String']>
  emailRecipient?: Maybe<Scalars['String']>
  linkDescription?: Maybe<Scalars['String']>
  confirmationMessage?: Maybe<Scalars['String']>
  termsConditions?: Maybe<Scalars['Boolean']>
  termsConditionsLabel?: Maybe<Scalars['String']>
  termsConditionsUrl?: Maybe<Scalars['String']>
  integrationId?: Maybe<Scalars['String']>
  v2FormId?: Maybe<Scalars['String']>
  autoAdded?: Maybe<Scalars['Boolean']>
}

export interface FormLinkField {
  name?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Boolean']>
  required?: Maybe<Scalars['Boolean']>
}

export interface FormLinkFieldInput {
  name?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Boolean']>
  required?: Maybe<Scalars['Boolean']>
}

export interface GateRule {
  activeOrder?: Maybe<Array<Maybe<Scalars['String']>>>
  blocked?: Maybe<Array<Maybe<Scalars['String']>>>
  unlocked?: Maybe<Array<Maybe<Scalars['String']>>>
  hash?: Maybe<Scalars['String']>
  age?: Maybe<AgeGateRule>
  passcode?: Maybe<PasscodeGateRule>
  sensitiveContent?: Maybe<SensitiveContentGateRule>
  wall?: Maybe<WallGateRule>
  subscribed?: Maybe<SubscribedGateRule>
  nft?: Maybe<NftGateRule>
  payment?: Maybe<PaymentGateRule>
}

export interface GateRuleInput {
  activeOrder?: Maybe<Array<Maybe<Scalars['String']>>>
  age?: Maybe<AgeGateRuleInput>
  passcode?: Maybe<PasscodeGateRuleInput>
  sensitiveContent?: Maybe<SensitiveContentGateRuleInput>
  subscribed?: Maybe<SubscribedGateRuleInput>
  nft?: Maybe<NftGateRuleInput>
  payment?: Maybe<PaymentGateRuleInput>
}

export enum GateType {
  Age = 'AGE'
}

export interface GetAccountEntitlementsQueryInput {
  entitlementNames: Array<AccountEntitlementName>
  accountUuid?: Maybe<Scalars['String']>
}

export interface GetAccountEntitlementsQueryResult {
  AffiliateProgram?: Maybe<AccountEntitlement>
  AmazonAffiliate?: Maybe<AccountEntitlement>
  AnalyticsExport?: Maybe<AccountEntitlement>
  AnalyticsExtendedDateRange365Days?: Maybe<AccountEntitlement>
  AnalyticsExtendedDateRange90Days?: Maybe<AccountEntitlement>
  AnalyticsIntegrations?: Maybe<AccountEntitlement>
  AnimatedLinks?: Maybe<AccountEntitlement>
  AudienceAnalytics?: Maybe<AccountEntitlement>
  AudienceGeographicData?: Maybe<AccountEntitlement>
  AudienceIntegrationGoogleSheets?: Maybe<AccountEntitlement>
  AudienceIntegrationKit?: Maybe<AccountEntitlement>
  AudienceIntegrationKlaviyo?: Maybe<AccountEntitlement>
  AudienceIntegrationMailchimp?: Maybe<AccountEntitlement>
  AudienceTrafficSource?: Maybe<AccountEntitlement>
  AvatarStyle?: Maybe<AccountEntitlement>
  Backgrounds?: Maybe<AccountEntitlement>
  BaseThemes?: Maybe<AccountEntitlement>
  Buttons?: Maybe<AccountEntitlement>
  CollectionLayout?: Maybe<AccountEntitlement>
  Colorways?: Maybe<AccountEntitlement>
  CreateFeaturedLink?: Maybe<AccountEntitlement>
  CustomQrCode?: Maybe<AccountEntitlement>
  CustomTandC?: Maybe<AccountEntitlement>
  FirstPartyForms?: Maybe<AccountEntitlement>
  FirstPartySellerFee?: Maybe<AccountEntitlement>
  Fonts?: Maybe<AccountEntitlement>
  GlowUp?: Maybe<AccountEntitlement>
  Gradients?: Maybe<AccountEntitlement>
  HeroImage?: Maybe<AccountEntitlement>
  HideLinktreeLogo?: Maybe<AccountEntitlement>
  InsightsAI?: Maybe<AccountEntitlement>
  InsightsAudienceInterests?: Maybe<AccountEntitlement>
  InsightsContacts?: Maybe<AccountEntitlement>
  InsightsContent?: Maybe<AccountEntitlement>
  InstagramDirectMessage?: Maybe<AccountEntitlement>
  LeapLinks?: Maybe<AccountEntitlement>
  LinkAnalytics?: Maybe<AccountEntitlement>
  LinktreeInsights?: Maybe<AccountEntitlement>
  MailingListIntegration?: Maybe<AccountEntitlement>
  MobileAppLinkApp?: Maybe<AccountEntitlement>
  NftBackground?: Maybe<AccountEntitlement>
  PasscodeGate?: Maybe<AccountEntitlement>
  Redirect?: Maybe<AccountEntitlement>
  RssFeed?: Maybe<AccountEntitlement>
  SEOAccess?: Maybe<AccountEntitlement>
  ScheduledLinkNotifications?: Maybe<AccountEntitlement>
  ScheduledLinks?: Maybe<AccountEntitlement>
  SocialPlanner?: Maybe<AccountEntitlement>
  StylePresets?: Maybe<AccountEntitlement>
  SubscriberDetails?: Maybe<AccountEntitlement>
  TreeLinkShortenerBackHalves?: Maybe<AccountEntitlement>
  TreeLinkShortenerSkipsContent?: Maybe<AccountEntitlement>
}

export interface GetAccountStatsigQueryInput {
  accountUuid: Scalars['String']
  warehouseNativeFeatureGates?: Maybe<Array<Maybe<Scalars['String']>>>
  warehouseNativeDynamicConfigs?: Maybe<Array<Maybe<Scalars['String']>>>
  warehouseNativeExperiments?: Maybe<Array<Maybe<Scalars['String']>>>
  cloudFeatureGates?: Maybe<Array<Maybe<Scalars['String']>>>
  cloudDynamicConfigs?: Maybe<Array<Maybe<Scalars['String']>>>
  cloudExperiments?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface GetBaseThemesQueryInput {
  themeKeys?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface GetBraintreeTokenResult {
  token?: Maybe<Scalars['String']>
}

export interface GetCanvaAssetUploadJobInput {
  accountUuid: Scalars['String']
  integrationId: Scalars['String']
  jobId: Scalars['String']
}

export interface GetCanvaDesignExportJobInput {
  accountUuid: Scalars['String']
  integrationId: Scalars['String']
  jobId: Scalars['String']
}

export interface GetCouponQueryResponse {
  id: Scalars['String']
  discountAmount?: Maybe<Scalars['Int']>
  discountPlanPrice: Scalars['Int']
  formattedDiscountPlanPrice: Scalars['String']
  formattedSavings: Scalars['String']
  discountPercentage?: Maybe<Scalars['Int']>
  durationMonths?: Maybe<Scalars['Int']>
  durationYears?: Maybe<Scalars['Int']>
  discountType?: Maybe<Scalars['String']>
  durationType: Scalars['String']
  isForever: Scalars['Boolean']
  isFreeForever: Scalars['Boolean']
  isOneTime: Scalars['Boolean']
  hidePaymentFields: Scalars['Boolean']
  trialDays: Scalars['Int']
}

export interface GetGoogleYouTubeChannelResult {
  channelId?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['String']>
  statistics?: Maybe<YouTubeChannelStatistics>
}

export interface GetInstagramBusinessAccountMediaMetricResult {
  id?: Maybe<Scalars['String']>
  comments?: Maybe<Scalars['Int']>
  likes?: Maybe<Scalars['Int']>
  shares?: Maybe<Scalars['Int']>
  reach?: Maybe<Scalars['Int']>
}

export interface GetInstagramBusinessAccountMetricsResult {
  audienceAges?: Maybe<Array<Maybe<GetInstagramBusinessProfileAgeResult>>>
  audienceGenders?: Maybe<Array<Maybe<GetInstagramBusinessProfileGenderResult>>>
  audienceCountries?: Maybe<Array<Maybe<GetInstagramBusinessProfileCountryResult>>>
}

export interface GetInstagramBusinessAccountPost {
  id?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  mediaUrl?: Maybe<Scalars['String']>
  postType?: Maybe<Scalars['String']>
  mediaType?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['String']>
  likesCount?: Maybe<Scalars['Int']>
  commentsCount?: Maybe<Scalars['Int']>
  shortCode?: Maybe<Scalars['String']>
  insights?: Maybe<GetInstagramBusinessAccountMediaMetricResult>
  media?: Maybe<Array<Maybe<GetInstagramBusinessAccountPostMedia>>>
}

export interface GetInstagramBusinessAccountPostMedia {
  url?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
}

export interface GetInstagramBusinessAccountResult {
  user?: Maybe<GetInstagramBusinessAccountUser>
  posts?: Maybe<Array<Maybe<GetInstagramBusinessAccountPost>>>
  insights?: Maybe<GetInstagramBusinessAccountMetricsResult>
}

export interface GetInstagramBusinessAccountResultPostsArgs {
  instagramMediaType?: Maybe<InstagramMediaType>
  numberOfPostsToFetch?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
}

export interface GetInstagramBusinessAccountUser {
  id?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  followersCount?: Maybe<Scalars['Int']>
  mediaCount?: Maybe<Scalars['Int']>
  username?: Maybe<Scalars['String']>
  profilePictureUrl?: Maybe<Scalars['String']>
}

export interface GetInstagramBusinessProfileAgeResult {
  percentage?: Maybe<Scalars['Int']>
  age?: Maybe<Scalars['String']>
}

export interface GetInstagramBusinessProfileCountryResult {
  percentage?: Maybe<Scalars['Int']>
  country?: Maybe<Scalars['String']>
}

export interface GetInstagramBusinessProfileGenderResult {
  percentage?: Maybe<Scalars['Int']>
  gender?: Maybe<Scalars['String']>
}

export interface GetMfaAccessUrlResult {
  mfaAccessUrl: Scalars['String']
}

export interface GetMfaEnrolmentUrlResult {
  mfaEnrolmentUrl: Scalars['String']
}

export interface GetPlansWithPricesResponse {
  id: Scalars['String']
  frequency: Scalars['String']
  tier: Scalars['String']
  displayName: Scalars['String']
  price: Scalars['Int']
  currency: Scalars['String']
  currencySymbol: Scalars['String']
  formattedPrice: Scalars['String']
  formattedPriceFrequency: Scalars['String']
}

export interface GetSubscriptionAddOnCheckoutUrlInput {
  name: Scalars['String']
  quantity: Scalars['Int']
}

export interface GetSubscriptionAddOnCheckoutUrlResult {
  url: Scalars['String']
}

export interface GetTikTokBusinessMetricsResult {
  itemId?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['Int']>
  thumbnailUrl?: Maybe<Scalars['String']>
  shareUrl?: Maybe<Scalars['String']>
  embedUrl?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  videoViews?: Maybe<Scalars['Int']>
  likes?: Maybe<Scalars['Int']>
  comments?: Maybe<Scalars['Int']>
  shares?: Maybe<Scalars['Int']>
  reach?: Maybe<Scalars['Int']>
  videoDuration?: Maybe<Scalars['Int']>
  fullVideoWatchedRate?: Maybe<Scalars['Float']>
  totalTimeWatched?: Maybe<Scalars['Int']>
  averageTimeWatched?: Maybe<Scalars['Float']>
  impressionSources?: Maybe<Scalars['String']>
  audienceCountries?: Maybe<Scalars['String']>
}

export interface GetTikTokBusinessProfileCountriesResult {
  percentage?: Maybe<Scalars['Int']>
  country?: Maybe<Scalars['String']>
}

export interface GetTikTokBusinessProfileGendersResult {
  percentage?: Maybe<Scalars['Int']>
  gender?: Maybe<Scalars['String']>
}

export interface GetTikTokBusinessProfileResult {
  displayName?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  profilePictureUrl?: Maybe<Scalars['String']>
  followersCount?: Maybe<Scalars['String']>
  videos?: Maybe<Array<Maybe<GetTikTokBusinessMetricsResult>>>
  audienceGenders?: Maybe<Array<Maybe<GetTikTokBusinessProfileGendersResult>>>
  audienceCountries?: Maybe<Array<Maybe<GetTikTokBusinessProfileCountriesResult>>>
}

export interface GetTikTokBusinessVideosWithMetricsResult {
  videos?: Maybe<Array<Maybe<GetTikTokBusinessMetricsResult>>>
  averageEngagement: Scalars['Float']
  averageLikes: Scalars['Int']
  averageComments: Scalars['Int']
  averageReach: Scalars['Int']
}

export interface GetTikTokProfileResult {
  profile?: Maybe<TikTokProfile>
  videos?: Maybe<Array<Maybe<TikTokVideo>>>
}

export interface GetTikTokProfilesResult {
  displayName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  expiresIn?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
}

export interface GetTikTokVideosResult {
  cursor?: Maybe<Scalars['String']>
  hasMore?: Maybe<Scalars['Boolean']>
  videos?: Maybe<Array<Maybe<TikTokVideo>>>
}

export interface GetUserEntitlementsQueryInput {
  entitlementNames: Array<UserEntitlementName>
}

export interface GetUserEntitlementsQueryResult {
  AdminAccounts?: Maybe<UserEntitlement>
  MultiAccountCreation?: Maybe<UserEntitlement>
  PurchasePlannBrand?: Maybe<UserEntitlement>
}

export interface GlobalBillingResult {
  subscriptions: Array<GlobalBillingSubscription>
}

export type GlobalBillingSubscription = GlobalBillingSubscriptionV1 | GlobalBillingSubscriptionV2

export interface GlobalBillingSubscriptionV1 {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  hasScheduledChanges: Scalars['Boolean']
  paygateStatus?: Maybe<Scalars['String']>
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
  addOns: Array<SubscriptionAddOn>
  subscriptionMigration?: Maybe<SubscriptionMigration>
  cards: Array<Card>
  containsOwnedAccount: Scalars['Boolean']
  activeCardId?: Maybe<Scalars['Int']>
  billingInfo?: Maybe<BillingInfo>
  chargebeeSubscription?: Maybe<ChargebeeSubscription>
  hasPaymentWarning: Scalars['Boolean']
}

export interface GlobalBillingSubscriptionV2 {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  paygateStatus?: Maybe<Scalars['String']>
  hasScheduledChanges: Scalars['Boolean']
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  accountLimit?: Maybe<Scalars['Int']>
  addOns?: Maybe<Array<Scalars['String']>>
  subscriptionAddOns: Array<SubscriptionAddOn>
  subscriptionMigration?: Maybe<SubscriptionMigration>
  card?: Maybe<Card>
  activeAccount?: Maybe<Account>
  cards: Array<Card>
  containsOwnedAccount: Scalars['Boolean']
  activeCardId?: Maybe<Scalars['Int']>
  billingInfo?: Maybe<BillingInfo>
  chargebeeSubscription?: Maybe<ChargebeeSubscription>
  hasPaymentWarning: Scalars['Boolean']
}

export interface GlowUp {
  conversationId: Scalars['String']
  data: Array<Maybe<GlowUpData>>
  status?: Maybe<GlowUpStatus>
}

export interface GlowUpData {
  toolId: Scalars['String']
  isToggled: Scalars['Boolean']
  type?: Maybe<GlowUpType>
  paidChange?: Maybe<GlowUpPaidChange>
}

export interface GlowUpInput {
  conversationId: Scalars['String']
  toolId?: Maybe<Scalars['String']>
  type?: Maybe<GlowUpType>
}

export interface GlowUpPaidChange {
  isPro: Scalars['Boolean']
  isPremium: Scalars['Boolean']
}

export enum GlowUpStatus {
  Pending = 'PENDING',
  Completed = 'COMPLETED',
  Error = 'ERROR',
  Cancelled = 'CANCELLED'
}

export enum GlowUpType {
  CreateCollection = 'CREATE_COLLECTION',
  SetFeaturedLayout = 'SET_FEATURED_LAYOUT',
  SetThumbnail = 'SET_THUMBNAIL',
  AnimateLink = 'ANIMATE_LINK',
  RichMediaYoutube = 'RICH_MEDIA_YOUTUBE',
  RichMediaSpotify = 'RICH_MEDIA_SPOTIFY',
  UpdateAppearance = 'UPDATE_APPEARANCE',
  CreateSocialLink = 'CREATE_SOCIAL_LINK',
  UpdateHero = 'UPDATE_HERO'
}

export interface GoogleCalendarIntegrationContext {
  title?: Maybe<Scalars['String']>
  linkId?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  storageKey?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  userEmail?: Maybe<Scalars['String']>
}

export interface GoogleSheetsIntegrationContext {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  termsActive?: Maybe<Scalars['Boolean']>
  termsLabel?: Maybe<Scalars['String']>
  termsUrl?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  refreshToken?: Maybe<Scalars['String']>
  storageKey?: Maybe<Scalars['String']>
  linkId?: Maybe<Scalars['Int']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
}

export interface GoogleYouTubeIntegrationContext {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
  channelId?: Maybe<Scalars['String']>
  channelTitle?: Maybe<Scalars['String']>
}

export interface GradientBackground {
  colors: Array<Maybe<Scalars['String']>>
  animated?: Maybe<Scalars['Boolean']>
  style: BackgroundStyle
  type: BackgroundType
  noise: Scalars['Boolean']
  name: BackgroundGradientStyle
  hideAnimated?: Maybe<Scalars['Boolean']>
}

export enum GroupLayoutOptions {
  Stack = 'stack',
  Grid = 'grid',
  Featured = 'featured',
  Carousel = 'carousel'
}

export interface GroupLinkContext {
  layoutOption?: Maybe<GroupLayoutOptions>
}

export interface GroupLinkContextInput {
  layoutOption?: Maybe<GroupLayoutOptions>
}

export enum HeaderLayoutOptions {
  Stack = 'stack',
  Carousel = 'carousel',
  Grid = 'grid',
  Featured = 'featured'
}

export interface HeaderLinkContext {
  layoutOption?: Maybe<HeaderLayoutOptions>
}

export interface HeaderLinkContextInput {
  layoutOption?: Maybe<HeaderLayoutOptions>
}

export enum HeadingEffect {
  None = 'none',
  Shadow = 'shadow',
  Outline = 'outline',
  Squeeze = 'squeeze',
  Glow = 'glow'
}

export enum HeadingLogoSize {
  Normal = 'normal',
  Large = 'large'
}

export interface HeadingOptions {
  type: HeadingType
  logo?: Maybe<Scalars['String']>
  logoSize?: Maybe<HeadingLogoSize>
  font?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
  size: HeadingSize
  effect: HeadingEffect
}

export enum HeadingSize {
  Normal = 'normal',
  Large = 'large',
  Huge = 'huge'
}

export enum HeadingType {
  None = 'none',
  Logo = 'logo',
  Text = 'text'
}

export interface HomeLayout {
  sections: Array<Maybe<HomeSection>>
}

export enum HomeNextBestActionType {
  /** Add a YouTube link */
  AddYoutube = 'ADD_YOUTUBE',
  /** Add a contact form */
  AddContactForm = 'ADD_CONTACT_FORM',
  /** Add a digital download */
  AddDigitalDownload = 'ADD_DIGITAL_DOWNLOAD',
  /** Connect TikTok account */
  ConnectTiktok = 'CONNECT_TIKTOK',
  /** Connect Instagram account */
  ConnectInstagram = 'CONNECT_INSTAGRAM',
  /** Hide Linktree logo */
  SettingHideLinktreeLogo = 'SETTING_HIDE_LINKTREE_LOGO',
  /** Set up shop */
  SetUpShop = 'SET_UP_SHOP',
  /** Set up Plann */
  SetUpPlann = 'SET_UP_PLANN',
  /** Set up Instagram auto DM */
  SetUpInstagramAutoDm = 'SET_UP_INSTAGRAM_AUTO_DM',
  /** Customize appearance and design */
  EditAppearance = 'EDIT_APPEARANCE'
}

export interface HomeSection {
  type: Scalars['String']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  data?: Maybe<HomeSectionData>
}

export interface HomeSectionData {
  type: Scalars['String']
}

export interface HomeSectionItem {
  type: Scalars['String']
  title: Scalars['String']
  subtitle?: Maybe<Scalars['String']>
}

export interface HomeSectionNextBestActions extends HomeSection {
  type: Scalars['String']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  data?: Maybe<NextBestActionSectionData>
}

export interface HomeSectionNextBestActionsItem {
  id: Scalars['String']
  type: HomeNextBestActionType
  title: Scalars['String']
  subtitle?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  actionLabel?: Maybe<Scalars['String']>
}

export interface Image {
  id: Scalars['String']
  src: Scalars['String']
  altText?: Maybe<Scalars['String']>
  width: Scalars['Int']
  height: Scalars['Int']
}

export interface ImageBackground {
  imageUrl: Scalars['String']
  color: Scalars['String']
  type: BackgroundType
  tint: Scalars['String']
  noise: Scalars['Boolean']
  effect: BackgroundImageEffect
}

export interface ImportProfileFromJsonResult {
  account?: Maybe<Account>
  user?: Maybe<User>
}

export interface InAppMessage {
  code: MessageCode
  level: MessageLevel
  dismissedAt?: Maybe<Scalars['Date']>
  count?: Maybe<Scalars['Int']>
}

export interface InstagramBusinessSocialIntegrationContext {
  user: InstagramUser
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>
  webhooks?: Maybe<Array<Maybe<Scalars['String']>>>
  supportIGDM?: Maybe<Scalars['Boolean']>
  post?: Maybe<InstagramPost>
  postsByIds?: Maybe<Array<Maybe<InstagramPost>>>
  posts: InstagramPaginatedPosts
}

export interface InstagramBusinessSocialIntegrationContextPostArgs {
  id: Scalars['String']
}

export interface InstagramBusinessSocialIntegrationContextPostsByIdsArgs {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface InstagramBusinessSocialIntegrationContextPostsArgs {
  limit?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
}

export interface InstagramDirectMessageButtonInput {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface InstagramDirectMessageInput {
  text?: Maybe<Scalars['String']>
  buttons?: Maybe<Array<Maybe<InstagramDirectMessageButtonInput>>>
}

export interface InstagramDirectMessageRecipientInput {
  instagramCommentId?: Maybe<Scalars['String']>
  instagramAccountId?: Maybe<Scalars['String']>
}

export enum InstagramMediaType {
  Reels = 'REELS',
  All = 'ALL'
}

export interface InstagramMessagePublicReplyMessageInput {
  text: Scalars['String']
}

export interface InstagramMessagePublicReplyRecipientInput {
  instagramCommentId: Scalars['String']
}

export interface InstagramPaginatedPosts {
  items: Array<InstagramPost>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
}

export interface InstagramPost {
  id: Scalars['String']
  username: Scalars['String']
  caption: Scalars['String']
  mediaType: Scalars['String']
  mediaUrl: Scalars['String']
  thumbnailUrl: Scalars['String']
  permalink: Scalars['String']
  timestamp: Scalars['String']
  postType?: Maybe<Scalars['String']>
}

export interface InstagramPostLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface InstagramPostLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export enum InstagramProfileDisplayOption {
  Latest = 'LATEST',
  Selected = 'SELECTED'
}

export interface InstagramProfileLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  integrationId?: Maybe<Scalars['String']>
  integrationType?: Maybe<SocialIntegrationType>
  mediaType?: Maybe<InstagramProfileMediaOption>
  displayType?: Maybe<InstagramProfileDisplayOption>
  instagramBusinessAccountId?: Maybe<Scalars['String']>
}

export interface InstagramProfileLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  integrationId?: Maybe<Scalars['String']>
  /** Use INSTAGRAM_BUSSINESS. */
  integrationType?: Maybe<SocialIntegrationType>
  mediaType?: Maybe<InstagramProfileMediaOption>
  displayType?: Maybe<InstagramProfileDisplayOption>
  instagramBusinessAccountId?: Maybe<Scalars['String']>
}

export enum InstagramProfileMediaOption {
  Posts = 'POSTS',
  Reels = 'REELS'
}

export interface InstagramSocialIntegrationContext {
  user: InstagramUser
  post?: Maybe<InstagramPost>
  posts: InstagramPaginatedPosts
}

export interface InstagramSocialIntegrationContextPostArgs {
  id: Scalars['String']
}

export interface InstagramSocialIntegrationContextPostsArgs {
  limit?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
}

export interface InstagramUser {
  id: Scalars['String']
  username: Scalars['String']
  profilePictureUrl?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  followsCount?: Maybe<Scalars['Int']>
  followersCount?: Maybe<Scalars['Int']>
  mediaCount?: Maybe<Scalars['Int']>
}

export interface Integration {
  active: Scalars['Boolean']
  context?: Maybe<IntegrationContext>
  id: Scalars['String']
  service?: Maybe<Scalars['String']>
  type: IntegrationType
}

export type IntegrationContext =
  | GoogleSheetsIntegrationContext
  | GoogleCalendarIntegrationContext
  | GoogleYouTubeIntegrationContext
  | MailchimpIntegrationContext
  | DotDigitalIntegrationContext
  | ZapierIntegrationContext
  | TwitchExtensionIntegrationContext
  | KitIntegrationContext
  | KlaviyoIntegrationContext
  | ZoomIntegrationContext
  | CanvaIntegrationContext

export interface IntegrationInput {
  active: Scalars['Boolean']
  context?: Maybe<MailingIntegrationContextInput>
  id?: Maybe<Scalars['String']>
  service: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export interface IntegrationOptionsInput {
  /**
   * When true, preserves existing context values when updating only some fields.
   * When false (default), only the provided fields are kept.
   */
  mergeContext?: Maybe<Scalars['Boolean']>
}

export interface IntegrationResult {
  account?: Maybe<Account>
}

export interface IntegrationSubscribeInput {
  value: Scalars['String']
  id: Scalars['String']
}

export enum IntegrationType {
  Email = 'EMAIL',
  Phone = 'PHONE',
  TwitchExtension = 'TWITCH_EXTENSION',
  ContactForm = 'CONTACT_FORM',
  Coaching = 'COACHING',
  Audience = 'AUDIENCE',
  CanvaDesign = 'CANVA_DESIGN',
  Insights = 'INSIGHTS'
}

export interface IntegrationsFilterInput {
  /** Only return Integrations that match this ID */
  id?: Maybe<Scalars['String']>
  /** Only return Integrations that match this service */
  services?: Maybe<Array<Scalars['String']>>
  /** Only return Integrations that match this type */
  types?: Maybe<Array<IntegrationType>>
  /** Only return Integrations that are valid */
  isValid?: Maybe<Scalars['Boolean']>
  /** Only return Integrations that are active */
  isActive?: Maybe<Scalars['Boolean']>
}

export interface InviteAdminResult {
  result?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface InviteUserByEmailResult {
  result?: Maybe<Scalars['String']>
}

export interface KajabiCourseContext {
  id?: Maybe<Scalars['String']>
  /** @deprecated This field is deprecated use amount instead. */
  price?: Maybe<Scalars['Float']>
  currency?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  paymentType?: Maybe<KajabiCoursePaymentType>
  description?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  modules?: Maybe<Array<Maybe<KajabiCourseModule>>>
  listingId?: Maybe<Scalars['String']>
}

export interface KajabiCourseContextInput {
  v2FormId?: Maybe<Scalars['String']>
  courseId?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  paymentType?: Maybe<KajabiCoursePaymentType>
}

export interface KajabiCourseLinkContext {
  v2FormId?: Maybe<Scalars['String']>
  course?: Maybe<KajabiCourseContext>
}

export interface KajabiCourseLinkContextCourseArgs {
  username?: Maybe<Scalars['String']>
  includeHidden?: Maybe<Scalars['Boolean']>
}

export interface KajabiCourseModule {
  id?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  length?: Maybe<Scalars['Int']>
  numberOfLessons?: Maybe<Scalars['Int']>
  publishingOption?: Maybe<KajabiCoursePublishingOption>
}

export enum KajabiCoursePaymentType {
  Free = 'FREE',
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING'
}

export enum KajabiCoursePublishingOption {
  Published = 'PUBLISHED',
  Draft = 'DRAFT',
  Locked = 'LOCKED'
}

export interface KajabiUser {
  id: Scalars['Int']
  accessToken?: Maybe<Scalars['String']>
}

export interface KitIntegrationContext {
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  scope?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
  storageKey?: Maybe<Scalars['String']>
}

export interface KlaviyoIntegrationContext {
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  scope?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
  storageKey?: Maybe<Scalars['String']>
}

export interface Link {
  id: Scalars['Int']
  url?: Maybe<Scalars['String']>
  account?: Maybe<Account>
  parent?: Maybe<Link>
  children: Array<Link>
  linktreeBackendForeignKey?: Maybe<Scalars['String']>
  position: Scalars['Int']
  title?: Maybe<Scalars['String']>
  active: Scalars['Boolean']
  status: LinkStatus
  type?: Maybe<Scalars['String']>
  context?: Maybe<LinkContext>
  /** @deprecated Use `context` instead */
  linkContext?: Maybe<LinkContextUnion>
  rules?: Maybe<LinkRules>
  modifiers: LinkModifiers
  createdAt?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  deleted: Scalars['Boolean']
  /** It is consistent with `moderationAction=BAN` */
  unsafe: Scalars['Boolean']
  /** @deprecated Use `moderationAction` or `unsafe` instead */
  moderationLabels?: Maybe<Array<Maybe<Scalars['String']>>>
  messages: Array<Message>
  isIncomplete: Scalars['Boolean']
  shouldRouteToProfile: Scalars['Boolean']
  /** Metadata coming from the original link. */
  metadata?: Maybe<LinkMetaData>
  /** Linktree enhanced metadata for the link. */
  ltMetadata?: Maybe<LinkLtMetaData>
  /** @deprecated Use `url` instead */
  formattedUrl?: Maybe<Scalars['String']>
  /** The coordinates of the link when it is part of a social feed */
  coordinates?: Maybe<SocialFeedPostMediaLinkCoordinates>
  /** @deprecated Use `modifiers` instead */
  amazonAffiliate?: Maybe<AmazonAffiliate>
  /** @deprecated Use `modifiers` instead */
  forwardingTimezone?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  forwarding?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  highlight?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  animation?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  scheduleEndTimezone?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  scheduleEnd?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  scheduleStartTimezone?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  scheduleStart?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  thumbnail?: Maybe<Scalars['String']>
  /** @deprecated Use `modifiers` instead */
  isLeapLink: Scalars['Boolean']
  /** @deprecated Use `modifiers` instead */
  isLeapLinkActive: Scalars['Boolean']
  /** @deprecated Use `modifiers` instead */
  thumbnailUrl?: Maybe<Scalars['String']>
  /** The most severe moderation action for this link */
  moderationAction?: Maybe<Scalars['String']>
  analytics?: Maybe<LinkAnalyticsMonolith>
}

export interface LinkUrlArgs {
  appendUtm?: Maybe<Scalars['Boolean']>
  appendLtclid?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface LinkChildrenArgs {
  filter?: Maybe<LinksFilterInput>
}

export interface LinkRulesArgs {
  validOnly?: Maybe<Scalars['Boolean']>
}

export interface LinkFormattedUrlArgs {
  appendUtm?: Maybe<Scalars['Boolean']>
}

/** Union type for different types of link analytics */
export type LinkAnalyticsMonolith = LinkClassicAnalytics

export interface LinkAppContainersV2 {
  linkTypes: Array<Scalars['String']>
  extensionLinkTypes: Array<Scalars['String']>
}

export interface LinkClassicAnalytics {
  totalLinkClicks: Scalars['Int']
  clickTrend: Scalars['Int']
}

export type LinkContext =
  | ExtensionLinkContext
  | FacebookLinkContext
  | TikTokLinkContext
  | TikTokJumpLinkContext
  | VimeoLinkContext
  | RssFeedLinkContext
  | SpringLinkContext
  | SpotifyLinkContext
  | CommercePayLinkContext
  | RequestLinkContext
  | YoutubeChannelLinkContext
  | YoutubePlaylistLinkContext
  | YoutubeVideoLinkContext
  | TwitchChannelLinkContext
  | TwitchCollectionLinkContext
  | TwitchVideoLinkContext
  | ClubhouseLinkContext
  | TwitterLinkContext
  | InstagramPostLinkContext
  | InstagramProfileLinkContext
  | ThreadsLinkContext
  | PinterestLinkContext
  | MusicLinkContext
  | PodcastLinkContext
  | MobileAppLinkContext
  | BookLinkContext
  | PreSaveLinkContext
  | ProductLinkContext
  | FormLinkContext
  | VideoLinkContext
  | ContactDetailsLinkContext
  | NftGalleryLinkContext
  | TemplateLinkContext
  | TikTokProfileLinkContext
  | TipGiftLinkContext
  | HeaderLinkContext
  | GroupLinkContext
  | LinkerRecommendationsLinkContext
  | EmailLinkContext
  | ChatbotLinkContext
  | CommunityLinkContext
  | KajabiCourseLinkContext
  | CommerceProductLinkContext
  | DigitalDownloadLinkContext
  | CoachingLinkContext

export type LinkContextUnion =
  | TwitchLinkContext
  | YoutubeLinkContext
  | FacebookLinkContext
  | TikTokLinkContext
  | TikTokJumpLinkContext
  | VimeoLinkContext
  | RssFeedLinkContext
  | SpringLinkContext
  | CommercePayLinkContext
  | RequestLinkContext
  | TipGiftLinkContext
  | ClubhouseLinkContext
  | SpotifyLinkContext
  | TwitterLinkContext
  | ThreadsLinkContext
  | YoutubeChannelLinkContext
  | YoutubePlaylistLinkContext
  | YoutubeVideoLinkContext
  | TwitchChannelLinkContext
  | TwitchCollectionLinkContext
  | TwitchVideoLinkContext
  | PinterestLinkContext
  | MusicLinkContext
  | MobileAppLinkContext
  | PodcastLinkContext
  | PreSaveLinkContext
  | BookLinkContext
  | FormLinkContext
  | VideoLinkContext
  | ProductLinkContext
  | ExtensionLinkContext
  | ContactDetailsLinkContext
  | NftGalleryLinkContext
  | TikTokProfileLinkContext
  | InstagramPostLinkContext
  | InstagramProfileLinkContext
  | TemplateLinkContext
  | HeaderLinkContext
  | GroupLinkContext
  | LinkerRecommendationsLinkContext
  | EmailLinkContext
  | ChatbotLinkContext
  | CommunityLinkContext
  | CommerceProductLinkContext
  | KajabiCourseLinkContext
  | DigitalDownloadLinkContext
  | CoachingLinkContext

export enum LinkEmbedOptions {
  LinkOff = 'LINK_OFF',
  LinkLatest = 'LINK_LATEST',
  LinkMatches = 'LINK_MATCHES',
  EmbedVideo = 'EMBED_VIDEO',
  EmbedPreview = 'EMBED_PREVIEW',
  EmbedChannel = 'EMBED_CHANNEL',
  EmbedChat = 'EMBED_CHAT',
  EmbedEverything = 'EMBED_EVERYTHING',
  EmbedLatest = 'EMBED_LATEST'
}

export interface LinkGatedContentResult {
  result?: Maybe<Scalars['String']>
}

export interface LinkListFilterInput {
  /** Shows links that match on a list of ids */
  containsId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface LinkLtMetaData {
  ltIsLinkTitleAiGenerated?: Maybe<Scalars['Boolean']>
  ltThumbnailSourceType?: Maybe<LinkThumbnailSourceType>
}

export interface LinkMetaData {
  title?: Maybe<Scalars['String']>
  ogTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  ogDescription?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  imageAlt?: Maybe<Scalars['String']>
  ogImage?: Maybe<Scalars['String']>
  ogImageAlt?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
}

export interface LinkModifiers {
  thumbnailUrl?: Maybe<Scalars['String']>
  animation?: Maybe<ButtonHighlightType>
  amazonAffiliate?: Maybe<AmazonAffiliate>
  amazonAffiliateType?: Maybe<Scalars['String']>
  isForwarding: Scalars['Boolean']
  isForwardingActive: Scalars['Boolean']
  forwardingEnd?: Maybe<Scalars['Date']>
  forwardingTimezone?: Maybe<Scalars['String']>
  scheduledStatus?: Maybe<ScheduledStatus>
  scheduleStart?: Maybe<Scalars['Date']>
  scheduleStartTimezone?: Maybe<Scalars['String']>
  scheduleEnd?: Maybe<Scalars['Date']>
  scheduleEndTimezone?: Maybe<Scalars['String']>
  shortLinkUuid?: Maybe<Scalars['String']>
  layoutOption?: Maybe<VisualLinkPreviewLayoutOption>
  sponsorshipId?: Maybe<Scalars['String']>
  isCurated?: Maybe<Scalars['Boolean']>
}

export interface LinkModifiersInput {
  forwardingEnd?: Maybe<Scalars['String']>
  forwardingTimezone?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  thumbnailSourceType?: Maybe<LinkThumbnailSourceType>
  scheduleStart?: Maybe<Scalars['String']>
  scheduleStartTimezone?: Maybe<Scalars['String']>
  scheduleEnd?: Maybe<Scalars['String']>
  scheduleEndTimezone?: Maybe<Scalars['String']>
  amazonAffiliate?: Maybe<AmazonAffiliateInput>
  animation?: Maybe<ButtonHighlightType>
  shortLinkUuid?: Maybe<Scalars['String']>
  layoutOption?: Maybe<VisualLinkPreviewLayoutOption>
  sponsorshipId?: Maybe<Scalars['String']>
  isCurated?: Maybe<Scalars['Boolean']>
}

export interface LinkRecsMetaInput {
  isFallback?: Maybe<Scalars['Boolean']>
  rank?: Maybe<Scalars['Int']>
  source?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface LinkRuleFilter {
  referrers?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface LinkRules {
  gate?: Maybe<GateRule>
}

export enum LinkStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  PermanentlyArchived = 'PERMANENTLY_ARCHIVED',
  Hidden = 'HIDDEN',
  Draft = 'DRAFT'
}

export enum LinkThumbnailSourceType {
  OpenGraph = 'OPEN_GRAPH',
  Custom = 'CUSTOM',
  Ai = 'AI',
  Icon = 'ICON'
}

export enum LinkType {
  AbeBooksBook = 'ABE_BOOKS_BOOK',
  AirbitSong = 'AIRBIT_SONG',
  AlibrisBook = 'ALIBRIS_BOOK',
  AmazonBook = 'AMAZON_BOOK',
  AmazonHandmade = 'AMAZON_HANDMADE',
  AmazonMusicAlbum = 'AMAZON_MUSIC_ALBUM',
  AmazonMusicPodcastEpisode = 'AMAZON_MUSIC_PODCAST_EPISODE',
  AmazonMusicPodcastShow = 'AMAZON_MUSIC_PODCAST_SHOW',
  AmazonMusicSong = 'AMAZON_MUSIC_SONG',
  AmazonProduct = 'AMAZON_PRODUCT',
  AmazonShop = 'AMAZON_SHOP',
  AnchorFmPodcastAmbiguous = 'ANCHOR_FM_PODCAST_AMBIGUOUS',
  AnchorFmPodcastEpisode = 'ANCHOR_FM_PODCAST_EPISODE',
  AnchorFmPodcastShow = 'ANCHOR_FM_PODCAST_SHOW',
  AnghamiAlbum = 'ANGHAMI_ALBUM',
  AnghamiPodcastEpisode = 'ANGHAMI_PODCAST_EPISODE',
  AnghamiPodcastShow = 'ANGHAMI_PODCAST_SHOW',
  AnghamiSong = 'ANGHAMI_SONG',
  AngusRobertsonBook = 'ANGUS_ROBERTSON_BOOK',
  AppleAlbum = 'APPLE_ALBUM',
  AppleAppStoreMobileApp = 'APPLE_APP_STORE_MOBILE_APP',
  AppleBook = 'APPLE_BOOK',
  AppleMusicAlbum = 'APPLE_MUSIC_ALBUM',
  AppleMusicSong = 'APPLE_MUSIC_SONG',
  ApplePodcast = 'APPLE_PODCAST',
  ApplePodcastEpisode = 'APPLE_PODCAST_EPISODE',
  AppleSong = 'APPLE_SONG',
  AudibleAmbiguous = 'AUDIBLE_AMBIGUOUS',
  AudiblePodcastAmbiguous = 'AUDIBLE_PODCAST_AMBIGUOUS',
  AudiomackAlbum = 'AUDIOMACK_ALBUM',
  AudiomackPlaylist = 'AUDIOMACK_PLAYLIST',
  AudiomackSong = 'AUDIOMACK_SONG',
  AudiusAlbum = 'AUDIUS_ALBUM',
  AudiusSong = 'AUDIUS_SONG',
  AwaAlbum = 'AWA_ALBUM',
  AwaAmbiguous = 'AWA_AMBIGUOUS',
  AwaSong = 'AWA_SONG',
  BandcampAlbum = 'BANDCAMP_ALBUM',
  BandcampArtist = 'BANDCAMP_ARTIST',
  BandcampSong = 'BANDCAMP_SONG',
  BarnesAndNobleBook = 'BARNES_AND_NOBLE_BOOK',
  BarnesAndNobleProduct = 'BARNES_AND_NOBLE_PRODUCT',
  BbcProgrammeAmbiguous = 'BBC_PROGRAMME_AMBIGUOUS',
  BbcSoundsAmbiguous = 'BBC_SOUNDS_AMBIGUOUS',
  BeatportAlbum = 'BEATPORT_ALBUM',
  BeatportSong = 'BEATPORT_SONG',
  BetterWorldBooksBook = 'BETTER_WORLD_BOOKS_BOOK',
  BiblioBook = 'BIBLIO_BOOK',
  BigwaxProduct = 'BIGWAX_PRODUCT',
  BitlyShortlink = 'BITLY_SHORTLINK',
  BleepAlbum = 'BLEEP_ALBUM',
  BookDepositoryBook = 'BOOK_DEPOSITORY_BOOK',
  BookGeneric = 'BOOK_GENERIC',
  BookOutletBook = 'BOOK_OUTLET_BOOK',
  BooksAMillionBook = 'BOOKS_A_MILLION_BOOK',
  BooksAMillionProduct = 'BOOKS_A_MILLION_PRODUCT',
  BookshopOrgBook = 'BOOKSHOP_ORG_BOOK',
  BooktopiaBook = 'BOOKTOPIA_BOOK',
  BoomAlbum = 'BOOM_ALBUM',
  BoomplayAlbum = 'BOOMPLAY_ALBUM',
  BoomplaySong = 'BOOMPLAY_SONG',
  BoomSong = 'BOOM_SONG',
  BullhornPodcastEpisode = 'BULLHORN_PODCAST_EPISODE',
  BullhornPodcastShow = 'BULLHORN_PODCAST_SHOW',
  CastboxPodcastEpisode = 'CASTBOX_PODCAST_EPISODE',
  CastboxPodcastShow = 'CASTBOX_PODCAST_SHOW',
  CastroPodcastShow = 'CASTRO_PODCAST_SHOW',
  Chatbot = 'CHATBOT',
  Coaching = 'COACHING',
  Community = 'COMMUNITY',
  CommunityChannel = 'COMMUNITY_CHANNEL',
  CheggBook = 'CHEGG_BOOK',
  ClaroMusicaAlbum = 'CLARO_MUSICA_ALBUM',
  ClaroMusicaSong = 'CLARO_MUSICA_SONG',
  Classic = 'CLASSIC',
  ClubhouseClub = 'CLUBHOUSE_CLUB',
  ClubhouseEvent = 'CLUBHOUSE_EVENT',
  ClubhouseGeneric = 'CLUBHOUSE_GENERIC',
  ClubhouseProfile = 'CLUBHOUSE_PROFILE',
  ClubhouseRoom = 'CLUBHOUSE_ROOM',
  CommercePay = 'COMMERCE_PAY',
  CommerceProduct = 'COMMERCE_PRODUCT',
  ContactDetails = 'CONTACT_DETAILS',
  DatpiffAlbum = 'DATPIFF_ALBUM',
  DeezerAlbum = 'DEEZER_ALBUM',
  DeezerAmbiguous = 'DEEZER_AMBIGUOUS',
  DeezerPodcastEpisode = 'DEEZER_PODCAST_EPISODE',
  DeezerPodcastShow = 'DEEZER_PODCAST_SHOW',
  DeezerSong = 'DEEZER_SONG',
  DigitalDownload = 'DIGITAL_DOWNLOAD',
  DonluAlbum = 'DONLU_ALBUM',
  DonluPodcastEpisode = 'DONLU_PODCAST_EPISODE',
  DonluSong = 'DONLU_SONG',
  DonluUser = 'DONLU_USER',
  DymocksProduct = 'DYMOCKS_PRODUCT',
  EbayProduct = 'EBAY_PRODUCT',
  Email = 'EMAIL',
  Extension = 'EXTENSION',
  FacebookGeneric = 'FACEBOOK_GENERIC',
  FacebookVideo = 'FACEBOOK_VIDEO',
  Flight13Album = 'FLIGHT13_ALBUM',
  Form = 'FORM',
  FoylesBook = 'FOYLES_BOOK',
  FridayAlbum = 'FRIDAY_ALBUM',
  FridaySong = 'FRIDAY_SONG',
  FyeProduct = 'FYE_PRODUCT',
  GaanaAlbum = 'GAANA_ALBUM',
  GaanaPodcastShow = 'GAANA_PODCAST_SHOW',
  GaanaSong = 'GAANA_SONG',
  GoodpodsPodcastEpisode = 'GOODPODS_PODCAST_EPISODE',
  GoodpodsPodcastShow = 'GOODPODS_PODCAST_SHOW',
  GoogleBooksBook = 'GOOGLE_BOOKS_BOOK',
  GooglePlayBook = 'GOOGLE_PLAY_BOOK',
  GooglePlayMobileApp = 'GOOGLE_PLAY_MOBILE_APP',
  GooglePlayMovie = 'GOOGLE_PLAY_MOVIE',
  GooglePlayTvShow = 'GOOGLE_PLAY_TV_SHOW',
  GooglePodcastEpisode = 'GOOGLE_PODCAST_EPISODE',
  GooglePodcastShow = 'GOOGLE_PODCAST_SHOW',
  Group = 'GROUP',
  HachetteBookGroupBook = 'HACHETTE_BOOK_GROUP_BOOK',
  HardtunesAlbum = 'HARDTUNES_ALBUM',
  HardtunesSong = 'HARDTUNES_SONG',
  HarperCollinsBook = 'HARPER_COLLINS_BOOK',
  HdtracksAlbum = 'HDTRACKS_ALBUM',
  Header = 'HEADER',
  HmvAlbum = 'HMV_ALBUM',
  HungamaAlbum = 'HUNGAMA_ALBUM',
  HungamaPodcastEpisode = 'HUNGAMA_PODCAST_EPISODE',
  HungamaPodcastShow = 'HUNGAMA_PODCAST_SHOW',
  HungamaSong = 'HUNGAMA_SONG',
  IdagioAlbum = 'IDAGIO_ALBUM',
  IheartradioAlbum = 'IHEARTRADIO_ALBUM',
  IheartradioPodcastEpisode = 'IHEARTRADIO_PODCAST_EPISODE',
  IheartradioPodcastShow = 'IHEARTRADIO_PODCAST_SHOW',
  IheartradioSong = 'IHEARTRADIO_SONG',
  ItunesAlbum = 'ITUNES_ALBUM',
  ItunesSong = 'ITUNES_SONG',
  IvooxPodcastEpisode = 'IVOOX_PODCAST_EPISODE',
  IvooxPodcastShow = 'IVOOX_PODCAST_SHOW',
  JiosaavnAlbum = 'JIOSAAVN_ALBUM',
  JiosaavnPodcastEpisode = 'JIOSAAVN_PODCAST_EPISODE',
  JiosaavnPodcastShow = 'JIOSAAVN_PODCAST_SHOW',
  JiosaavnSong = 'JIOSAAVN_SONG',
  JooxAlbum = 'JOOX_ALBUM',
  JooxAmbiguous = 'JOOX_AMBIGUOUS',
  JooxSong = 'JOOX_SONG',
  JunodownloadAlbum = 'JUNODOWNLOAD_ALBUM',
  JunodownloadSong = 'JUNODOWNLOAD_SONG',
  KajabiCourse = 'KAJABI_COURSE',
  KkboxAlbum = 'KKBOX_ALBUM',
  KkboxPodcastEpisode = 'KKBOX_PODCAST_EPISODE',
  KkboxPodcastShow = 'KKBOX_PODCAST_SHOW',
  KkboxShortlink = 'KKBOX_SHORTLINK',
  KkboxSong = 'KKBOX_SONG',
  KugouAlbum = 'KUGOU_ALBUM',
  KugouSong = 'KUGOU_SONG',
  LineMusicAlbum = 'LINE_MUSIC_ALBUM',
  LineMusicSong = 'LINE_MUSIC_SONG',
  LinkerRecommendations = 'LINKER_RECOMMENDATIONS',
  ListnrPodcastShow = 'LISTNR_PODCAST_SHOW',
  ListnrPodcastEpisode = 'LISTNR_PODCAST_EPISODE',
  LivemixtapesAlbum = 'LIVEMIXTAPES_ALBUM',
  LuminaryPodcastEpisode = 'LUMINARY_PODCAST_EPISODE',
  LuminaryPodcastShow = 'LUMINARY_PODCAST_SHOW',
  MacmillanPublishersBook = 'MACMILLAN_PUBLISHERS_BOOK',
  Mailchimp = 'MAILCHIMP',
  MatterAlbum = 'MATTER_ALBUM',
  MatterSong = 'MATTER_SONG',
  MediamarktProduct = 'MEDIAMARKT_PRODUCT',
  MegaphonePodcastShow = 'MEGAPHONE_PODCAST_SHOW',
  MixcloudShow = 'MIXCLOUD_SHOW',
  MixcloudUser = 'MIXCLOUD_USER',
  MobileAppGeneric = 'MOBILE_APP_GENERIC',
  MusicGeneric = 'MUSIC_GENERIC',
  Mx3ChSong = 'MX3CH_SONG',
  MyMixtapezAlbum = 'MY_MIXTAPEZ_ALBUM',
  MyMixtapezSong = 'MY_MIXTAPEZ_SONG',
  NapsterAlbum = 'NAPSTER_ALBUM',
  NapsterSong = 'NAPSTER_SONG',
  NeteaseCloudMusicAlbum = 'NETEASE_CLOUD_MUSIC_ALBUM',
  NeteaseCloudMusicSong = 'NETEASE_CLOUD_MUSIC_SONG',
  NewburyComicsProduct = 'NEWBURY_COMICS_PRODUCT',
  NftGallery = 'NFT_GALLERY',
  Odesli = 'ODESLI',
  OdesliAmbiguous = 'ODESLI_AMBIGUOUS',
  OkListenAlbum = 'OK_LISTEN_ALBUM',
  OkListenSong = 'OK_LISTEN_SONG',
  Onlyfans = 'ONLYFANS',
  OvercastPodcastEpisode = 'OVERCAST_PODCAST_EPISODE',
  OvercastPodcastShow = 'OVERCAST_PODCAST_SHOW',
  PandoraAlbum = 'PANDORA_ALBUM',
  PandoraAmbiguous = 'PANDORA_AMBIGUOUS',
  PandoraPodcastEpisode = 'PANDORA_PODCAST_EPISODE',
  PandoraPodcastShow = 'PANDORA_PODCAST_SHOW',
  PandoraSong = 'PANDORA_SONG',
  PeachpitBook = 'PEACHPIT_BOOK',
  PenguinRandomHouseBook = 'PENGUIN_RANDOM_HOUSE_BOOK',
  PhonicaRecordsProduct = 'PHONICA_RECORDS_PRODUCT',
  PinterestBoard = 'PINTEREST_BOARD',
  PinterestGeneric = 'PINTEREST_GENERIC',
  PinterestPin = 'PINTEREST_PIN',
  PinterestProfile = 'PINTEREST_PROFILE',
  PlayerFmPodcastEpisode = 'PLAYER_FM_PODCAST_EPISODE',
  PlayerFmPodcastShow = 'PLAYER_FM_PODCAST_SHOW',
  PocketcastsPodcastShow = 'POCKETCASTS_PODCAST_SHOW',
  PodbeanPodcastEpisode = 'PODBEAN_PODCAST_EPISODE',
  PodbeanPodcastShow = 'PODBEAN_PODCAST_SHOW',
  PodcastAddictPodcastEpisode = 'PODCAST_ADDICT_PODCAST_EPISODE',
  PodcastAddictPodcastShow = 'PODCAST_ADDICT_PODCAST_SHOW',
  PodcastGeneric = 'PODCAST_GENERIC',
  PodcastGuruPodcastEpisode = 'PODCAST_GURU_PODCAST_EPISODE',
  PodcastGuruPodcastShow = 'PODCAST_GURU_PODCAST_SHOW',
  PodcastRepublicPodcastShow = 'PODCAST_REPUBLIC_PODCAST_SHOW',
  PodfriendPodcastEpisode = 'PODFRIEND_PODCAST_EPISODE',
  PodfriendPodcastShow = 'PODFRIEND_PODCAST_SHOW',
  PodheroPodcastEpisode = 'PODHERO_PODCAST_EPISODE',
  PodheroPodcastShow = 'PODHERO_PODCAST_SHOW',
  PorchlightBookCompanyBook = 'PORCHLIGHT_BOOK_COMPANY_BOOK',
  PowellsBook = 'POWELLS_BOOK',
  PreSaveLink = 'PRE_SAVE_LINK',
  Product = 'PRODUCT',
  QbdBooksBook = 'QBD_BOOKS_BOOK',
  QobuzAlbum = 'QOBUZ_ALBUM',
  QobuzSong = 'QOBUZ_SONG',
  QqMusicAlbum = 'QQ_MUSIC_ALBUM',
  QqMusicSong = 'QQ_MUSIC_SONG',
  RaagaAlbum = 'RAAGA_ALBUM',
  RaagaSong = 'RAAGA_SONG',
  RadioPublicPodcastEpisode = 'RADIO_PUBLIC_PODCAST_EPISODE',
  RadioPublicPodcastShow = 'RADIO_PUBLIC_PODCAST_SHOW',
  RecochokuAlbum = 'RECOCHOKU_ALBUM',
  RecochokuSong = 'RECOCHOKU_SONG',
  RedeyeRecordsAlbum = 'REDEYE_RECORDS_ALBUM',
  RegisterAction = 'REGISTER_ACTION',
  Request = 'REQUEST',
  RessoAlbum = 'RESSO_ALBUM',
  RessoAmbiguous = 'RESSO_AMBIGUOUS',
  RessoSong = 'RESSO_SONG',
  RoughTradeProduct = 'ROUGH_TRADE_PRODUCT',
  RssFeed = 'RSS_FEED',
  RssGeneric = 'RSS_GENERIC',
  SevenDigitalAlbum = 'SEVEN_DIGITAL_ALBUM',
  ShopPreview = 'SHOP_PREVIEW',
  SimonSchusterBook = 'SIMON_SCHUSTER_BOOK',
  SonnetPodcastShow = 'SONNET_PODCAST_SHOW',
  SontrackRuAlbum = 'SONTRACK_RU_ALBUM',
  SoundcloudAmbiguous = 'SOUNDCLOUD_AMBIGUOUS',
  SoundcloudArtist = 'SOUNDCLOUD_ARTIST',
  SoundcloudPlaylist = 'SOUNDCLOUD_PLAYLIST',
  SoundcloudSong = 'SOUNDCLOUD_SONG',
  SpinrillaAlbum = 'SPINRILLA_ALBUM',
  SpinrillaSong = 'SPINRILLA_SONG',
  SpotifyAlbum = 'SPOTIFY_ALBUM',
  SpotifyAmbiguous = 'SPOTIFY_AMBIGUOUS',
  SpotifyArtist = 'SPOTIFY_ARTIST',
  SpotifyEpisode = 'SPOTIFY_EPISODE',
  SpotifyGeneric = 'SPOTIFY_GENERIC',
  SpotifyPlaylist = 'SPOTIFY_PLAYLIST',
  SpotifyShow = 'SPOTIFY_SHOW',
  SpotifySong = 'SPOTIFY_SONG',
  SpreakerPodcastEpisode = 'SPREAKER_PODCAST_EPISODE',
  SpreakerPodcastShow = 'SPREAKER_PODCAST_SHOW',
  Spring = 'SPRING',
  SpringGeneric = 'SPRING_GENERIC',
  StitcherPodcast = 'STITCHER_PODCAST',
  StitcherPodcastEpisode = 'STITCHER_PODCAST_EPISODE',
  SubscribeOnAndroidPodcastShow = 'SUBSCRIBE_ON_ANDROID_PODCAST_SHOW',
  TargetProduct = 'TARGET_PRODUCT',
  InstagramPost = 'INSTAGRAM_POST',
  InstagramStory = 'INSTAGRAM_STORY',
  InstagramProfile = 'INSTAGRAM_PROFILE',
  InstagramReel = 'INSTAGRAM_REEL',
  ThreadsGeneric = 'THREADS_GENERIC',
  ThreadsThread = 'THREADS_THREAD',
  ThreadsProfile = 'THREADS_PROFILE',
  ThriftbooksBook = 'THRIFTBOOKS_BOOK',
  TidalAlbum = 'TIDAL_ALBUM',
  TidalSong = 'TIDAL_SONG',
  TidalUser = 'TIDAL_USER',
  TiktokGeneric = 'TIKTOK_GENERIC',
  TiktokJump = 'TIKTOK_JUMP',
  TiktokProfile = 'TIKTOK_PROFILE',
  TiktokShortlink = 'TIKTOK_SHORTLINK',
  TiktokSong = 'TIKTOK_SONG',
  TiktokVideo = 'TIKTOK_VIDEO',
  TipGift = 'TIP_GIFT',
  TraxsourceAlbum = 'TRAXSOURCE_ALBUM',
  TraxsourceSong = 'TRAXSOURCE_SONG',
  TuneInPodcastEpisode = 'TUNE_IN_PODCAST_EPISODE',
  TuneInPodcastShow = 'TUNE_IN_PODCAST_SHOW',
  TwitchChannel = 'TWITCH_CHANNEL',
  TwitchCollection = 'TWITCH_COLLECTION',
  TwitchGeneric = 'TWITCH_GENERIC',
  TwitchVideo = 'TWITCH_VIDEO',
  TwitterGeneric = 'TWITTER_GENERIC',
  TwitterStatus = 'TWITTER_STATUS',
  TwitterStatusLatest = 'TWITTER_STATUS_LATEST',
  UrbanOutfittersProduct = 'URBAN_OUTFITTERS_PRODUCT',
  ValoreBooksBook = 'VALORE_BOOKS_BOOK',
  VideoGeneric = 'VIDEO_GENERIC',
  VimeoGeneric = 'VIMEO_GENERIC',
  VimeoVideo = 'VIMEO_VIDEO',
  VinylMePleaseProduct = 'VINYL_ME_PLEASE_PRODUCT',
  VkMusicAlbum = 'VK_MUSIC_ALBUM',
  VkMusicSong = 'VK_MUSIC_SONG',
  WalmartProduct = 'WALMART_PRODUCT',
  WaterstonesBook = 'WATERSTONES_BOOK',
  WynkMusicAlbum = 'WYNK_MUSIC_ALBUM',
  WynkMusicShortlink = 'WYNK_MUSIC_SHORTLINK',
  WynkMusicSong = 'WYNK_MUSIC_SONG',
  YandexAlbum = 'YANDEX_ALBUM',
  YandexMusicAlbum = 'YANDEX_MUSIC_ALBUM',
  YandexMusicSong = 'YANDEX_MUSIC_SONG',
  YandexSong = 'YANDEX_SONG',
  YoutubeChannel = 'YOUTUBE_CHANNEL',
  YoutubeGeneric = 'YOUTUBE_GENERIC',
  YoutubeMusicAlbum = 'YOUTUBE_MUSIC_ALBUM',
  YoutubeMusicPodcastEpisode = 'YOUTUBE_MUSIC_PODCAST_EPISODE',
  YoutubeMusicSong = 'YOUTUBE_MUSIC_SONG',
  YoutubePlaylist = 'YOUTUBE_PLAYLIST',
  YoutubeVideo = 'YOUTUBE_VIDEO',
  ZvukAlbum = 'ZVUK_ALBUM',
  ZvukPodcastShow = 'ZVUK_PODCAST_SHOW',
  ZvukSong = 'ZVUK_SONG'
}

export interface LinkTypeCategory {
  categoryId: Scalars['String']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

export interface LinkTypeItem {
  linkTypeId: Scalars['String']
  title: Scalars['String']
  description: Scalars['String']
  order?: Maybe<Scalars['Int']>
  metadata?: Maybe<LinkTypeRecommendedMetaData>
  searchTerms: Array<Scalars['String']>
}

export interface LinkTypeItemGroup extends LinkTypeItem {
  linkTypeId: Scalars['String']
  title: Scalars['String']
  description: Scalars['String']
  order?: Maybe<Scalars['Int']>
  metadata?: Maybe<LinkTypeRecommendedMetaData>
  searchTerms: Array<Scalars['String']>
  subLinks?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface LinkTypeItemSingle extends LinkTypeItem {
  linkTypeId: Scalars['String']
  title: Scalars['String']
  description: Scalars['String']
  order?: Maybe<Scalars['Int']>
  metadata?: Maybe<LinkTypeRecommendedMetaData>
  searchTerms: Array<Scalars['String']>
  linkType: Scalars['String']
}

export interface LinkTypeRecommendedMetaData {
  source?: Maybe<Array<Maybe<Scalars['String']>>>
  rank?: Maybe<Scalars['Int']>
  isFallback?: Maybe<Scalars['Boolean']>
}

export interface LinkTypes {
  categories: Array<Maybe<LinkTypesCategory>>
  recommended: Array<Maybe<LinkTypeItem>>
}

export interface LinkTypesCategory {
  category?: Maybe<LinkTypeCategory>
  linkTypes: Array<Maybe<LinkTypeItem>>
}

export interface LinkerRecommendation {
  username?: Maybe<Scalars['String']>
  accountUuid?: Maybe<Scalars['String']>
  profileTitle?: Maybe<Scalars['String']>
  customAvatarUrl?: Maybe<Scalars['String']>
  invalidUsername?: Maybe<Scalars['String']>
  verificationTick?: Maybe<Scalars['Boolean']>
}

export interface LinkerRecommendationsLinkContext {
  recommendedAccounts?: Maybe<Array<Maybe<LinkerRecommendation>>>
}

export interface LinkerRecommendationsLinkContextInput {
  recommendedAccounts: Array<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface LinksFilterInput {
  includeDeleted?: Maybe<Scalars['Boolean']>
  includeDisabled?: Maybe<Scalars['Boolean']>
  includeScheduledOff?: Maybe<Scalars['Boolean']>
  includeUnsafe?: Maybe<Scalars['Boolean']>
  includeIncomplete?: Maybe<Scalars['Boolean']>
  includeNested?: Maybe<Scalars['Boolean']>
  includeArchived?: Maybe<Scalars['Boolean']>
  linkTypes?: Maybe<Array<Maybe<LinkType>>>
  isForwardingActive?: Maybe<Scalars['Boolean']>
  hasAnimation?: Maybe<Scalars['Boolean']>
  excludeLayoutOptions?: Maybe<Array<Maybe<VisualLinkPreviewLayoutOption>>>
  isSponsorshipLink?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
}

export interface LinksPage {
  items: Array<Link>
  totalCount: Scalars['Int']
}

export interface LoginUserInput {
  username: Scalars['String']
  password: Scalars['String']
}

export interface LoginUserResult {
  currentUser?: Maybe<User>
}

export enum Luminance {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export interface MailChimpList {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export interface MailchimpIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  authorizationCode?: Maybe<Scalars['String']>
}

export interface MailchimpIntegrationContext {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  termsActive?: Maybe<Scalars['Boolean']>
  termsLabel?: Maybe<Scalars['String']>
  termsUrl?: Maybe<Scalars['String']>
  storageKey?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
}

export interface MailingIntegrationContextInput {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  storageKey?: Maybe<Scalars['String']>
  termsLabel?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  termsUrl?: Maybe<Scalars['String']>
  termsActive?: Maybe<Scalars['Boolean']>
  webhookUrl?: Maybe<Scalars['String']>
}

export interface MediaKitMetricsMonolith {
  isEnabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
}

export interface MediaKitMonolith {
  avatar?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  pronouns?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  socials?: Maybe<Array<Maybe<MediaKitSocialMonolith>>>
  metrics?: Maybe<Array<Maybe<MediaKitMetricsMonolith>>>
}

export interface MediaKitSocialMonolith {
  isEnabled?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
}

export interface Message {
  code: MessageCode
  level: MessageLevel
  path?: Maybe<Array<Scalars['String']>>
  context?: Maybe<MessageContext>
}

export enum MessageCode {
  InvalidUrl = 'INVALID_URL',
  UnsafeUrl = 'UNSAFE_URL',
  IncompletePayLink = 'INCOMPLETE_PAY_LINK',
  IncompleteMusicLink = 'INCOMPLETE_MUSIC_LINK',
  ScheduledLinkPending = 'SCHEDULED_LINK_PENDING',
  ScheduledLinkExpired = 'SCHEDULED_LINK_EXPIRED',
  LeapLinkExpired = 'LEAP_LINK_EXPIRED',
  UnhealthyServiceIntegration = 'UNHEALTHY_SERVICE_INTEGRATION',
  PaymentServiceUnavailable = 'PAYMENT_SERVICE_UNAVAILABLE',
  IntegrationIncomplete = 'INTEGRATION_INCOMPLETE',
  LocationDeactivated = 'LOCATION_DEACTIVATED',
  AuthorizationRevoked = 'AUTHORIZATION_REVOKED',
  ReauthorizationRequired = 'REAUTHORIZATION_REQUIRED',
  InvalidApplication = 'INVALID_APPLICATION',
  TokenRefreshFailed = 'TOKEN_REFRESH_FAILED',
  ConnectedServiceEmailNotConfirmed = 'CONNECTED_SERVICE_EMAIL_NOT_CONFIRMED',
  MissingIntegration = 'MISSING_INTEGRATION',
  IncompleteProductLink = 'INCOMPLETE_PRODUCT_LINK',
  IncompleteKajabiCourseLink = 'INCOMPLETE_KAJABI_COURSE_LINK',
  ExistingKajabiCourseLink = 'EXISTING_KAJABI_COURSE_LINK',
  IncompleteVideoLink = 'INCOMPLETE_VIDEO_LINK',
  IncompletePodcastLink = 'INCOMPLETE_PODCAST_LINK',
  IncompleteMobileAppLink = 'INCOMPLETE_MOBILE_APP_LINK',
  IncompleteBookLink = 'INCOMPLETE_BOOK_LINK',
  IncompleteChatbotLink = 'INCOMPLETE_CHATBOT_LINK',
  IncompleteCoachingLink = 'INCOMPLETE_COACHING_LINK',
  IncompletePreSaveLink = 'INCOMPLETE_PRE_SAVE_LINK',
  IncompleteCommunityLink = 'INCOMPLETE_COMMUNITY_LINK',
  IncompleteCommunityChannelLink = 'INCOMPLETE_COMMUNITY_CHANNEL_LINK',
  CommerceLinkAppCue = 'COMMERCE_LINK_APP_CUE',
  DocumentPaymentLockAppCue = 'DOCUMENT_PAYMENT_LOCK_APP_CUE',
  ProductLinkAppCue = 'PRODUCT_LINK_APP_CUE',
  PaymentsNotEnabled = 'PAYMENTS_NOT_ENABLED',
  MissingPrimaryCurrency = 'MISSING_PRIMARY_CURRENCY',
  IncompleteExtensionLink = 'INCOMPLETE_EXTENSION_LINK',
  InvalidExtensionLink = 'INVALID_EXTENSION_LINK',
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',
  MissingCapabilityCardPayments = 'MISSING_CAPABILITY_CARD_PAYMENTS',
  MissingCapabilityChargesEnabled = 'MISSING_CAPABILITY_CHARGES_ENABLED',
  MissingCapabilityTransfers = 'MISSING_CAPABILITY_TRANSFERS',
  InsufficientDigitalProductPurchaseAmount = 'INSUFFICIENT_DIGITAL_PRODUCT_PURCHASE_AMOUNT',
  IncompleteUrlLink = 'INCOMPLETE_URL_LINK',
  InactivePaymentGate = 'INACTIVE_PAYMENT_GATE',
  IncompletePaymentGate = 'INCOMPLETE_PAYMENT_GATE',
  IncompleteInstagramProfileLink = 'INCOMPLETE_INSTAGRAM_PROFILE_LINK',
  PaymentGateRemoved = 'PAYMENT_GATE_REMOVED',
  ShopifyUnauthorized = 'SHOPIFY_UNAUTHORIZED',
  ShopifyStoreUnavailable = 'SHOPIFY_STORE_UNAVAILABLE',
  AmazonAffiliateNotEnabled = 'AMAZON_AFFILIATE_NOT_ENABLED',
  AmazonAffiliateNotEnabledWithTag = 'AMAZON_AFFILIATE_NOT_ENABLED_WITH_TAG',
  ShareLinkTooltipEnabled = 'SHARE_LINK_TOOLTIP_ENABLED',
  IncompleteSnapchatLink = 'INCOMPLETE_SNAPCHAT_LINK',
  VisualLinkPreviewCallout = 'VISUAL_LINK_PREVIEW_CALLOUT',
  InstagramDmCoachmarkCallout = 'INSTAGRAM_DM_COACHMARK_CALLOUT',
  ProductLinkUrlInvalid = 'PRODUCT_LINK_URL_INVALID',
  ExpiredSocialIntegration = 'EXPIRED_SOCIAL_INTEGRATION',
  ExpiringSocialIntegration = 'EXPIRING_SOCIAL_INTEGRATION',
  InsufficientPermissionsSocialIntegration = 'INSUFFICIENT_PERMISSIONS_SOCIAL_INTEGRATION',
  MissingInstagramPageAccess = 'MISSING_INSTAGRAM_PAGE_ACCESS',
  FeatureNoLongerAvailable = 'FEATURE_NO_LONGER_AVAILABLE',
  IncompleteCommerceProductLink = 'INCOMPLETE_COMMERCE_PRODUCT_LINK',
  IncompleteDigitalDownloadLink = 'INCOMPLETE_DIGITAL_DOWNLOAD_LINK',
  DummyLink = 'DUMMY_LINK',
  OnboardingAddNameAndBio = 'ONBOARDING_ADD_NAME_AND_BIO',
  NextBestActionsCompleted = 'NEXT_BEST_ACTIONS_COMPLETED',
  NextBestActionsSocialLinks = 'NEXT_BEST_ACTIONS_SOCIAL_LINKS',
  NextBestActionsCustomizeAppearance = 'NEXT_BEST_ACTIONS_CUSTOMIZE_APPEARANCE',
  OnboardingConnectInstagram = 'ONBOARDING_CONNECT_INSTAGRAM',
  OnboardingConnectTikTok = 'ONBOARDING_CONNECT_TIK_TOK',
  OnboardingAddImportantLinks = 'ONBOARDING_ADD_IMPORTANT_LINKS',
  OnboardingAddProfileImage = 'ONBOARDING_ADD_PROFILE_IMAGE',
  OnboardingShareLinktree = 'ONBOARDING_SHARE_LINKTREE',
  UnsafeLink = 'UNSAFE_LINK',
  SensitiveAccount = 'SENSITIVE_ACCOUNT',
  IncompleteStripeSetup = 'INCOMPLETE_STRIPE_SETUP',
  AwaitingStripeVerification = 'AWAITING_STRIPE_VERIFICATION',
  StripePreviouslyVerifiedWithNoAmount = 'STRIPE_PREVIOUSLY_VERIFIED_WITH_NO_AMOUNT',
  StripeVerifiedWithNoAmount = 'STRIPE_VERIFIED_WITH_NO_AMOUNT',
  PreStripe = 'PRE_STRIPE',
  UnsupportedStripeCountry = 'UNSUPPORTED_STRIPE_COUNTRY',
  EoiFeatureCommunityPricingPaid = 'EOI_FEATURE_COMMUNITY_PRICING_PAID',
  EoiFeatureCommunityAudienceApproval = 'EOI_FEATURE_COMMUNITY_AUDIENCE_APPROVAL',
  IncompleteFormLink = 'INCOMPLETE_FORM_LINK',
  AddInPlaceCallout = 'ADD_IN_PLACE_CALLOUT'
}

export interface MessageContext {
  provider?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export enum MessageLevel {
  Info = 'INFO',
  Warning = 'WARNING',
  Error = 'ERROR'
}

export interface MetaAttributes {
  ogImageBackgroundType?: Maybe<OgImageBackgroundType>
  ogImageBackgroundColor?: Maybe<Scalars['String']>
}

export interface MfaFactor {
  type: Scalars['String']
  authenticatorId: Scalars['String']
  active: Scalars['Boolean']
}

export interface MigrateUserToPasswordUserMutationResult {
  success?: Maybe<Scalars['Boolean']>
}

export enum MigrationPath {
  SubscriptionRenewed = 'subscription_renewed',
  SubscriptionReactivated = 'subscription_reactivated',
  BatchUpdate = 'batch_update'
}

export enum MigrationStatus {
  Initiated = 'initiated',
  EmailSent = 'email_sent',
  Scheduled = 'scheduled',
  Completed = 'completed',
  Failed = 'failed'
}

export interface MobileAppLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  options: Array<MobileAppLinkOption>
}

export interface MobileAppLinkContextOptionsArgs {
  includeHidden?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface MobileAppLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  options?: Maybe<Array<MobileAppLinkOptionInput>>
}

export interface MobileAppLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface MobileAppLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

/** Any item that can be monetized , i.e. a sponsored link, a product, a course, etc. */
export interface MonetizableItem {
  /** The ID of the monetizable item */
  id?: Maybe<Scalars['Int']>
  /** The UUID of the monetizable item */
  uuid?: Maybe<Scalars['String']>
  /** The title of the monetizable item */
  title?: Maybe<Scalars['String']>
  /** The image of the monetizable item */
  image?: Maybe<Scalars['String']>
  /**
   * The type of the monetizable item (DIGITAL_DOWNLOAD, KAJABI_COURSE, PRODUCT,
   * SPONSORED_LINK)
   */
  type: Scalars['String']
  /**
   * The product ID of the monetizable item (collectionId for digital downloads,
   * courseId for Kajabi courses). Only applicable for 1P products as the payments
   * service references payments by product ID.
   */
  productId?: Maybe<Scalars['String']>
}

export interface MusicLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  options: Array<MusicLinkOption>
}

export interface MusicLinkContextOptionsArgs {
  includeHidden?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface MusicLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  options?: Maybe<Array<MusicLinkOptionInput>>
}

export interface MusicLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface MusicLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface Mutation {
  createUser?: Maybe<CreateUserResult>
  createAccount?: Maybe<CreateAccountResult>
  createNewAccount?: Maybe<CreateAccountResult>
  updateAccountInfo?: Maybe<CreateAccountResult>
  selectPlan?: Maybe<SelectPlanResult>
  createSubscription?: Maybe<CreateSubscriptionResult>
  createSubscriptionAddOn?: Maybe<CreateSubscriptionAddOnResult>
  createSubscriptionV2?: Maybe<CreateSubscriptionResult>
  updateSubscription?: Maybe<UpdateSubscriptionResult>
  updateSubscriptionAddOn?: Maybe<UpdateSubscriptionAddOnResult>
  updateSubscriptionV2?: Maybe<UpdateSubscriptionResult>
  updateSubscriptionV2ActiveAccount?: Maybe<UpdateSubscriptionResult>
  applySubscriptionCoupon?: Maybe<Subscription>
  applySubscriptionV2Coupon?: Maybe<SubscriptionV2>
  removeSubscriptionCoupon?: Maybe<Subscription>
  removeSubscriptionV2Coupon?: Maybe<SubscriptionV2>
  removeSubscriptionScheduledChanges?: Maybe<Subscription>
  removeSubscriptionScheduledCancellation?: Maybe<Subscription>
  createStripePaymentIntent?: Maybe<CreateStripeIntentResult>
  createStripeSetupIntent?: Maybe<CreateStripeIntentResult>
  createStripeIntentForFuturePayment?: Maybe<CreateStripeIntentResult>
  removeAccountCard?: Maybe<Account>
  loginUser?: Maybe<LoginUserResult>
  createPassword?: Maybe<CreatePasswordResult>
  createPasswordUnauthenticated?: Maybe<CreatePasswordUnauthenticatedResult>
  requestPasswordReset?: Maybe<RequestPasswordResetResult>
  confirmPasswordReset?: Maybe<ConfirmPasswordResetResult>
  updateIntegration?: Maybe<IntegrationResult>
  scheduleLinkOn?: Maybe<ScheduleLinkOnResult>
  scheduleLeapLinkOff?: Maybe<ScheduleLinkOffResult>
  scheduleLinkOff?: Maybe<ScheduleLinkOffResult>
  createIntegrationSubscription?: Maybe<SignupIntegrationResult>
  submitContactForm?: Maybe<SignupIntegrationResult>
  requestEmailVerification?: Maybe<RequestEmailVerificationResult>
  addLink?: Maybe<Link>
  addMultipleLinks?: Maybe<AddMultipleLinksResult>
  updateLink?: Maybe<Link>
  deleteUser?: Maybe<DeleteUserResult>
  deleteAccount?: Maybe<DeleteUserResult>
  deleteLink?: Maybe<Link>
  deleteShopPreviewLink?: Maybe<Scalars['Boolean']>
  changeLinkType?: Maybe<Link>
  reorderLinks?: Maybe<LinksPage>
  setLinkGatingRule?: Maybe<Link>
  setProfileBadges?: Maybe<Account>
  setTwitchLinkContext?: Maybe<Link>
  setYoutubeLinkContext?: Maybe<Link>
  setFacebookLinkContext?: Maybe<Link>
  setTikTokLinkContext?: Maybe<Link>
  setTikTokJumpLinkContext?: Maybe<Link>
  setTipGiftLinkContext?: Maybe<Link>
  setClubhouseLinkContext?: Maybe<Link>
  setTwitterLinkContext?: Maybe<Link>
  setThreadsLinkContext?: Maybe<Link>
  setInstagramPostLinkContext?: Maybe<Link>
  setInstagramProfileLinkContext?: Maybe<Link>
  setChatbotLinkContext?: Maybe<Link>
  setCommunityLinkContext?: Maybe<Link>
  setVimeoLinkContext?: Maybe<Link>
  setRssFeedLinkContext?: Maybe<Link>
  setSpringLinkContext?: Maybe<Link>
  setHeaderLinkContext?: Maybe<Link>
  setGroupLinkContext?: Maybe<Link>
  setSpotifyLinkContext?: Maybe<Link>
  setPinterestLinkContext?: Maybe<Link>
  setMusicLinkContext?: Maybe<Link>
  setPodcastLinkContext?: Maybe<Link>
  setMobileAppLinkContext?: Maybe<Link>
  setBookLinkContext?: Maybe<Link>
  setPreSaveLinkContext?: Maybe<Link>
  setFormLinkContext?: Maybe<Link>
  setVideoLinkContext?: Maybe<Link>
  setNftGalleryLinkContext?: Maybe<Link>
  setTikTokProfileLinkContext?: Maybe<Link>
  setLinkerRecommendationsLinkContext?: Maybe<Link>
  setAccountVerticals?: Maybe<Account>
  setAudienceNotificationsEnabled?: Maybe<Account>
  updateAudienceNotificationsEmail?: Maybe<Account>
  /**
   * Providing null will clear the audience support email and the Query resolver
   * will default to the owning user's email.
   */
  updateAudienceSupportEmail?: Maybe<Account>
  requestAudienceSupportEmailVerificationCode?: Maybe<RequestAudienceSupportEmailVerificationCodeResult>
  setHasGeotargetingViews?: Maybe<Account>
  setHasVisitedDesignPage?: Maybe<Account>
  setLinkModifiers?: Maybe<Link>
  setCommercePayLinkContext?: Maybe<Link>
  setProductLinkContext?: Maybe<Link>
  createSquareIntegration?: Maybe<SquareIntegration>
  createStripeIntegration?: Maybe<StripeIntegration>
  createStripeIntegrationFromAccountId?: Maybe<StripeIntegration>
  createPaypalIntegration?: Maybe<PaypalIntegration>
  createShopifyIntegration?: Maybe<ServiceIntegration>
  createMailchimpIntegration?: Maybe<ServiceIntegration>
  createYoutubeIntegration: Scalars['String']
  removeYoutubeIntegration: Scalars['String']
  updateShopifyIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  updateSquareIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  updateStripeIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  updatePaypalIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  updateMailchimpIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  /** @deprecated Use `deleteIntegration` instead */
  deleteSquareIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  deleteIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  updateSocialLinksPosition?: Maybe<UpdateSocialLinksPositionResult>
  reauthorizeSquareIntegration?: Maybe<SquareIntegration>
  reauthorizeStripeIntegration?: Maybe<StripeIntegration>
  reauthorizePaypalIntegration?: Maybe<PaypalIntegration>
  reauthorizeShopifyIntegration?: Maybe<ServiceIntegration>
  setRequestLinkContext?: Maybe<Link>
  /** @deprecated Setting moderation-labels are no longer supported. The API can only be used to clear moderation-labels. */
  setLinkModerationLabels?: Maybe<Link>
  updateUsername?: Maybe<Account>
  setExtensionLinkContext?: Maybe<Link>
  setContactDetailsLinkContext?: Maybe<Link>
  setCommerceProductLinkContext?: Maybe<Link>
  createSpringIntegration?: Maybe<ServiceIntegration>
  updateSpringIntegration?: Maybe<Array<Maybe<ServiceIntegration>>>
  setUserEmailVerified?: Maybe<User>
  setUserEmailVerificationLastSentAt?: Maybe<User>
  updateSocialLink?: Maybe<UpdateSocialLinksResult>
  reorderSocialLinks?: Maybe<UpdateSocialLinksResult>
  addMultipleSocialLinks?: Maybe<AddMutipleSocialLinksResult>
  setAdminInvitationStatus?: Maybe<AdminInvitation>
  createAffiliateToken?: Maybe<AffiliateToken>
  deleteAffiliateToken?: Maybe<AffiliateToken>
  updateAffiliateToken?: Maybe<AffiliateToken>
  updateProcessedCustomVideo?: Maybe<UpdateProcessedCustomVideoResult>
  updateInAppSubscription?: Maybe<UpdateInAppSubscriptionResult>
  resetUserMFA?: Maybe<ResetUserMfaResult>
  updateMailingListIntegration: Scalars['String']
  setMailingListIntegration: Scalars['String']
  setGoogleAuthToken?: Maybe<SetGoogleAuthTokenResult>
  deleteGoogleAuthToken?: Maybe<DeleteGoogleAuthTokenResult>
  verifyEmail?: Maybe<VerifyEmailResult>
  updateUser?: Maybe<UpdateUserResult>
  updateUserPhoneNumber?: Maybe<UpdateUserPhoneNumberResult>
  switchAccount?: Maybe<Account>
  migrateUserToPasswordUser?: Maybe<MigrateUserToPasswordUserMutationResult>
  createInAppMessage?: Maybe<InAppMessage>
  dismissInAppMessage?: Maybe<InAppMessage>
  updateInAppMessage?: Maybe<InAppMessage>
  setStoreTabEnabled?: Maybe<Account>
  setDefaultProfilePage?: Maybe<Account>
  bulkAccountCreation?: Maybe<BulkAccountCreationResult>
  duplicateProfile?: Maybe<DuplicateProfileResult>
  importProfileFromJson?: Maybe<ImportProfileFromJsonResult>
  setChildLink?: Maybe<Link>
  removeChildLink?: Maybe<Link>
  reorderChildLink?: Maybe<Link>
  /** @deprecated This mutation is deprecated and will be removed in future versions. Please use archiveAllInactiveLinksV2 instead. */
  archiveAllInactiveLinks: Scalars['Boolean']
  archiveAllInactiveLinksV2?: Maybe<ArchiveAllInactiveLinksResult>
  archiveSponsoredLinks?: Maybe<ArchiveSponsoredLinksResult>
  archiveSponsoredLinksByAccount?: Maybe<ArchiveSponsoredLinksResult>
  updateSponsoredLinks?: Maybe<UpdateSponsoredLinksResult>
  createSocialIntegration: Scalars['String']
  updateSocialIntegration: SocialIntegration
  deleteSocialIntegration: Scalars['Boolean']
  addSocialContentToLinkAssociations?: Maybe<SocialContentToLinkAssociations>
  removeSocialContentToLinkAssociations?: Maybe<SocialContentToLinkAssociations>
  bulkPasswordReset?: Maybe<Array<Maybe<BulkPasswordResetResult>>>
  requestUsername?: Maybe<RequestUsernameResult>
  /** @deprecated Use `inviteAdmin` instead */
  inviteUserByEmail?: Maybe<InviteUserByEmailResult>
  inviteAdmin?: Maybe<InviteAdminResult>
  removeAdmin?: Maybe<RemoveAdminResult>
  acceptUserEmailInvitation?: Maybe<OperationResult>
  acceptPasswordlessUserEmailInvitation?: Maybe<OperationResult>
  setInstagramWebhookMutation?: Maybe<SetInstagramWebhookResult>
  deleteInstagramWebhookMutation?: Maybe<DeleteInstagramWebhookResult>
  sendInstagramDirectMessageMutation?: Maybe<SendInstagramDirectMessageResult>
  requestCurrentUserVerificationCode: Scalars['Boolean']
  verifiedDeleteCurrentUser: VerifiedDeleteCurrentUserResult
  verifiedDeleteAccount: VerifiedDeleteAccountResult
  softDeleteUser?: Maybe<DeleteUserResult>
  softDeleteAccount?: Maybe<DeleteAccountResult>
  createSocialFeed?: Maybe<SocialFeed>
  updateSocialFeed?: Maybe<SocialFeed>
  removeSocialFeed: Scalars['Boolean']
  createSocialFeedPost?: Maybe<SocialFeedPost>
  updateSocialFeedPost?: Maybe<SocialFeedPost>
  removeSocialFeedPost: Scalars['Boolean']
  updateSocialFeedPostMedia?: Maybe<SocialFeedPostMedia>
  createSocialFeedPostMediaLink?: Maybe<Link>
  updateSocialFeedPostMediaLink?: Maybe<Link>
  removeSocialFeedPostMediaLink: Scalars['Boolean']
  setDigitalDownloadLinkContext?: Maybe<Link>
  createKajabiCourseMutation?: Maybe<CreateKajabiCourseResult>
  setKajabiCourseContextMutation?: Maybe<Link>
  updateTimeZone?: Maybe<Scalars['Boolean']>
  setMonetizationIntents?: Maybe<Account>
  setAccountOnboardingState?: Maybe<Account>
  setOnboardingGoals?: Maybe<Account>
  sendInstagramMessagePublicReplyMutation?: Maybe<SendInstagramMessagePublicReplyResult>
  updateUserUsername?: Maybe<User>
  updateAccountAppearance?: Maybe<Account>
  updateAccountTitleAndDescription?: Maybe<Account>
  updateProfileWithPreviewState?: Maybe<Account>
  deleteAccountPreviewChanges?: Maybe<Account>
  /**
   * Reverts the last appearance change made to the account preview from the undo
   * stack.
   */
  undoProfilePreviewChanges?: Maybe<Account>
  /** Reverts the last undo that was made to the account preview. */
  redoProfilePreviewChanges?: Maybe<Account>
  setCoachingLinkContext?: Maybe<Link>
  createBaseTheme?: Maybe<BaseTheme>
  updateBaseThemeByKey?: Maybe<BaseTheme>
  createBaseThemeFromAccountTheme?: Maybe<BaseTheme>
  updateBaseThemeFromAccountTheme?: Maybe<BaseTheme>
  changeLinkPreviewLinkTypeAndModifiers?: Maybe<Link>
  toggleGlowUpChange?: Maybe<Account>
  createLinkPreviewCollectionWithChildren?: Maybe<Array<Maybe<Link>>>
  glowUp?: Maybe<Account>
  updateGlowUpStatus?: Maybe<Account>
  saveGlowUpToProfile?: Maybe<Account>
  deleteGlowUpState?: Maybe<Account>
  createCanvaDesign?: Maybe<CreateCanvaDesignResult>
  createCanvaAssetUploadJob?: Maybe<CanvaAssetUploadJobResult>
  createCanvaDesignExportJob?: Maybe<CanvaDesignExportJobResult>
  setMultipleLinkPreviewGroupLinkContext?: Maybe<Account>
}

export interface MutationCreateUserArgs {
  user: CreateUserInput
  source?: Maybe<Scalars['String']>
}

export interface MutationCreateAccountArgs {
  account: CreateAccountInput
}

export interface MutationCreateNewAccountArgs {
  username: Scalars['String']
  captchaToken: Scalars['String']
  sourceAccountId?: Maybe<Scalars['Int']>
  sourceSubscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationUpdateAccountInfoArgs {
  account: UpdateAccountInfoInput
}

export interface MutationCreateSubscriptionArgs {
  createSubscription: CreateSubscriptionInput
}

export interface MutationCreateSubscriptionAddOnArgs {
  createSubscriptionAddOn: CreateSubscriptionAddOnInput
}

export interface MutationCreateSubscriptionV2Args {
  createSubscription: CreateSubscriptionV2Input
}

export interface MutationUpdateSubscriptionArgs {
  updateSubscription: UpdateSubscriptionInput
}

export interface MutationUpdateSubscriptionAddOnArgs {
  updateSubscriptionAddOn: UpdateSubscriptionAddOnInput
}

export interface MutationUpdateSubscriptionV2Args {
  updateSubscription: UpdateSubscriptionV2Input
}

export interface MutationUpdateSubscriptionV2ActiveAccountArgs {
  updateSubscriptionV2ActiveAccount: UpdateSubscriptionV2ActiveAccountInput
}

export interface MutationApplySubscriptionCouponArgs {
  couponId: Scalars['String']
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationApplySubscriptionV2CouponArgs {
  couponId: Scalars['String']
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationRemoveSubscriptionCouponArgs {
  couponId: Scalars['String']
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationRemoveSubscriptionV2CouponArgs {
  couponId: Scalars['String']
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationRemoveSubscriptionScheduledChangesArgs {
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationRemoveSubscriptionScheduledCancellationArgs {
  subscriptionId?: Maybe<Scalars['Int']>
}

export interface MutationCreateStripePaymentIntentArgs {
  paymentMethodId: Scalars['String']
  price?: Maybe<Scalars['Int']>
  unitPrice?: Maybe<Scalars['Int']>
  currency: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  billingDetails: BillingDetailsInput
  couponId?: Maybe<Scalars['String']>
  stripeGateway?: Maybe<Scalars['String']>
  accountIds?: Maybe<Array<Scalars['Int']>>
  profileQuantity?: Maybe<Scalars['Int']>
}

export interface MutationCreateStripeSetupIntentArgs {
  paymentMethodId: Scalars['String']
  isFreeTrial?: Maybe<Scalars['Boolean']>
  stripeGateway?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  billingDetails?: Maybe<BillingDetailsInput>
}

export interface MutationCreateStripeIntentForFuturePaymentArgs {
  currency: Scalars['String']
  paymentMethodIds: Array<Scalars['String']>
  paymentMethodType?: Maybe<Scalars['String']>
  stripeGateway?: Maybe<Scalars['String']>
  billingDetails?: Maybe<BillingDetailsInput>
  isFreeTrial?: Maybe<Scalars['Boolean']>
}

export interface MutationRemoveAccountCardArgs {
  cardId: Scalars['String']
}

export interface MutationLoginUserArgs {
  user: LoginUserInput
}

export interface MutationCreatePasswordArgs {
  createPassword: CreatePasswordInput
}

export interface MutationCreatePasswordUnauthenticatedArgs {
  createPasswordUnauthenticated: CreatePasswordUnauthenticatedInput
}

export interface MutationRequestPasswordResetArgs {
  requestPasswordReset: RequestPasswordResetInput
}

export interface MutationConfirmPasswordResetArgs {
  confirmPasswordReset: ConfirmPasswordResetInput
}

export interface MutationScheduleLinkOnArgs {
  scheduleLinkOn: ScheduleLinkOnInput
}

export interface MutationScheduleLeapLinkOffArgs {
  scheduleLeapLinkOff: ScheduleLeapLinkOffInput
}

export interface MutationScheduleLinkOffArgs {
  scheduleLinkOff: ScheduleLinkOffInput
}

export interface MutationCreateIntegrationSubscriptionArgs {
  input: IntegrationSubscribeInput
}

export interface MutationSubmitContactFormArgs {
  input: ContactFormIntegrationInput
}

export interface MutationAddLinkArgs {
  type: LinkType
  input?: Maybe<AddLinkInput>
  accountId?: Maybe<Scalars['Int']>
  viewId?: Maybe<Scalars['Int']>
}

export interface MutationAddMultipleLinksArgs {
  links?: Maybe<Array<Maybe<AddLinkMutationInput>>>
  accountUuid?: Maybe<Scalars['String']>
}

export interface MutationUpdateLinkArgs {
  id: Scalars['Int']
  viewId?: Maybe<Scalars['Int']>
  input: UpdateLinkInput
}

export interface MutationDeleteUserArgs {
  uuid: Scalars['String']
}

export interface MutationDeleteAccountArgs {
  accountUuid: Scalars['String']
}

export interface MutationDeleteLinkArgs {
  id: Scalars['Int']
  viewId?: Maybe<Scalars['Int']>
  input?: Maybe<DeleteLinkInput>
}

export interface MutationChangeLinkTypeArgs {
  id: Scalars['Int']
  type: LinkType
  linkTypeId?: Maybe<Scalars['String']>
}

export interface MutationReorderLinksArgs {
  id: Scalars['Int']
  source: Scalars['Int']
  destination: Scalars['Int']
  viewId?: Maybe<Scalars['Int']>
}

export interface MutationSetLinkGatingRuleArgs {
  id: Scalars['Int']
  gate: GateRuleInput
}

export interface MutationSetProfileBadgesArgs {
  id: Scalars['Int']
  profileBadges?: Maybe<Array<ProfileBadges>>
}

export interface MutationSetTwitchLinkContextArgs {
  id: Scalars['Int']
  context: TwitchLinkContextInput
}

export interface MutationSetYoutubeLinkContextArgs {
  id: Scalars['Int']
  context: YoutubeLinkContextInput
}

export interface MutationSetFacebookLinkContextArgs {
  id: Scalars['Int']
  context: FacebookLinkContextInput
}

export interface MutationSetTikTokLinkContextArgs {
  id: Scalars['Int']
  context: TikTokLinkContextInput
}

export interface MutationSetTikTokJumpLinkContextArgs {
  id: Scalars['Int']
  context: TikTokJumpLinkContextInput
}

export interface MutationSetTipGiftLinkContextArgs {
  id: Scalars['Int']
  context: TipGiftLinkContextInput
}

export interface MutationSetClubhouseLinkContextArgs {
  id: Scalars['Int']
  context: ClubhouseLinkContextInput
}

export interface MutationSetTwitterLinkContextArgs {
  id: Scalars['Int']
  context: TwitterLinkContextInput
}

export interface MutationSetThreadsLinkContextArgs {
  id: Scalars['Int']
  context: ThreadsLinkContextInput
}

export interface MutationSetInstagramPostLinkContextArgs {
  id: Scalars['Int']
  context: InstagramPostLinkContextInput
}

export interface MutationSetInstagramProfileLinkContextArgs {
  id: Scalars['Int']
  context: InstagramProfileLinkContextInput
}

export interface MutationSetChatbotLinkContextArgs {
  id: Scalars['Int']
  context: ChatbotLinkContextInput
}

export interface MutationSetCommunityLinkContextArgs {
  id: Scalars['Int']
  context: CommunityLinkContextInput
}

export interface MutationSetVimeoLinkContextArgs {
  id: Scalars['Int']
  context: VimeoLinkContextInput
}

export interface MutationSetRssFeedLinkContextArgs {
  id: Scalars['Int']
  context: RssFeedLinkContextInput
}

export interface MutationSetSpringLinkContextArgs {
  id: Scalars['Int']
  context: SpringLinkContextInput
}

export interface MutationSetHeaderLinkContextArgs {
  id: Scalars['Int']
  context: HeaderLinkContextInput
}

export interface MutationSetGroupLinkContextArgs {
  id: Scalars['Int']
  context: GroupLinkContextInput
}

export interface MutationSetSpotifyLinkContextArgs {
  id: Scalars['Int']
  context: SpotifyLinkContextInput
}

export interface MutationSetPinterestLinkContextArgs {
  id: Scalars['Int']
  context: PinterestLinkContextInput
}

export interface MutationSetMusicLinkContextArgs {
  id: Scalars['Int']
  context: MusicLinkContextInput
}

export interface MutationSetPodcastLinkContextArgs {
  id: Scalars['Int']
  context: PodcastLinkContextInput
}

export interface MutationSetMobileAppLinkContextArgs {
  id: Scalars['Int']
  context: MobileAppLinkContextInput
}

export interface MutationSetBookLinkContextArgs {
  id: Scalars['Int']
  context: BookLinkContextInput
}

export interface MutationSetPreSaveLinkContextArgs {
  id: Scalars['Int']
  context: PreSaveLinkContextInput
}

export interface MutationSetFormLinkContextArgs {
  id: Scalars['Int']
  context: FormLinkContextInput
}

export interface MutationSetVideoLinkContextArgs {
  id: Scalars['Int']
  context: VideoLinkContextInput
}

export interface MutationSetNftGalleryLinkContextArgs {
  id: Scalars['Int']
  context: NftGalleryLinkContextInput
}

export interface MutationSetTikTokProfileLinkContextArgs {
  id: Scalars['Int']
  context: TikTokProfileLinkContextInput
}

export interface MutationSetLinkerRecommendationsLinkContextArgs {
  id: Scalars['Int']
  context: LinkerRecommendationsLinkContextInput
}

export interface MutationSetAccountVerticalsArgs {
  id: Scalars['Int']
  input: SetAccountVerticalsInput
}

export interface MutationSetAudienceNotificationsEnabledArgs {
  enabled: Scalars['Boolean']
}

export interface MutationUpdateAudienceNotificationsEmailArgs {
  email: Scalars['String']
}

export interface MutationUpdateAudienceSupportEmailArgs {
  email?: Maybe<Scalars['String']>
  otpCode?: Maybe<Scalars['String']>
}

export interface MutationRequestAudienceSupportEmailVerificationCodeArgs {
  email: Scalars['String']
}

export interface MutationSetHasGeotargetingViewsArgs {
  id: Scalars['Int']
  input: SetHasGeotargetingViewsInput
}

export interface MutationSetLinkModifiersArgs {
  id: Scalars['Int']
  modifiers: LinkModifiersInput
  glowUp?: Maybe<GlowUpInput>
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationSetCommercePayLinkContextArgs {
  id: Scalars['Int']
  context: CommercePayLinkContextInput
}

export interface MutationSetProductLinkContextArgs {
  id: Scalars['Int']
  context: ProductLinkContextInput
}

export interface MutationCreateSquareIntegrationArgs {
  input: CreateSquareIntegrationInput
}

export interface MutationCreateStripeIntegrationArgs {
  input: CreateStripeIntegrationInput
}

export interface MutationCreateStripeIntegrationFromAccountIdArgs {
  input: CreateStripeIntegrationFromAccountIdInput
}

export interface MutationCreatePaypalIntegrationArgs {
  input: CreatePaypalIntegrationInput
}

export interface MutationCreateShopifyIntegrationArgs {
  input: CreateShopifyIntegrationInput
}

export interface MutationCreateMailchimpIntegrationArgs {
  input?: Maybe<CreateMailchimpIntegrationInput>
}

export interface MutationCreateYoutubeIntegrationArgs {
  integration: IntegrationInput
}

export interface MutationRemoveYoutubeIntegrationArgs {
  integrationId: Scalars['String']
}

export interface MutationUpdateShopifyIntegrationArgs {
  input: UpdateShopifyIntegrationInput
}

export interface MutationUpdateSquareIntegrationArgs {
  id: Scalars['String']
  input?: Maybe<UpdateSquareIntegrationInput>
}

export interface MutationUpdateStripeIntegrationArgs {
  id: Scalars['String']
  title: Scalars['String']
}

export interface MutationUpdatePaypalIntegrationArgs {
  id: Scalars['String']
  title: Scalars['String']
}

export interface MutationUpdateMailchimpIntegrationArgs {
  input: UpdateMailchimpIntegrationInput
}

export interface MutationDeleteSquareIntegrationArgs {
  id: Scalars['String']
}

export interface MutationDeleteIntegrationArgs {
  id: Scalars['String']
}

export interface MutationUpdateSocialLinksPositionArgs {
  updateSocialLinksPosition: UpdateSocialLinksPositionInput
}

export interface MutationReauthorizeSquareIntegrationArgs {
  input: ReauthorizeSquareIntegrationInput
}

export interface MutationReauthorizeStripeIntegrationArgs {
  input: ReauthorizeStripeIntegrationInput
}

export interface MutationReauthorizePaypalIntegrationArgs {
  input: ReauthorizePaypalIntegrationInput
}

export interface MutationReauthorizeShopifyIntegrationArgs {
  input: ReauthorizeShopifyIntegrationInput
}

export interface MutationSetRequestLinkContextArgs {
  id: Scalars['Int']
  context: RequestLinkContextInput
}

export interface MutationSetLinkModerationLabelsArgs {
  id: Scalars['Int']
  moderationLabels?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface MutationUpdateUsernameArgs {
  accountId: Scalars['Int']
  username: Scalars['String']
}

export interface MutationSetExtensionLinkContextArgs {
  id: Scalars['Int']
  context: ExtensionLinkContextInput
}

export interface MutationSetContactDetailsLinkContextArgs {
  id: Scalars['Int']
  context: ContactDetailsLinkContextInput
}

export interface MutationSetCommerceProductLinkContextArgs {
  id: Scalars['Int']
  context: CommerceProductLinkContextInput
}

export interface MutationCreateSpringIntegrationArgs {
  input: CreateSpringIntegrationInput
}

export interface MutationUpdateSpringIntegrationArgs {
  input: UpdateSpringIntegrationInput
}

export interface MutationSetUserEmailVerifiedArgs {
  id: Scalars['Int']
}

export interface MutationSetUserEmailVerificationLastSentAtArgs {
  id: Scalars['Int']
  date: Scalars['Date']
}

export interface MutationUpdateSocialLinkArgs {
  updateSocialLink: SocialLinkInput
  glowUp?: Maybe<GlowUpInput>
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationReorderSocialLinksArgs {
  reorderSocialLinks: SocialLinkReorderInput
}

export interface MutationAddMultipleSocialLinksArgs {
  addMultipleSocialLinksMutation: Array<Maybe<SocialLinkInput>>
}

export interface MutationSetAdminInvitationStatusArgs {
  uuid: Scalars['String']
  status?: Maybe<AdminInvitationStatus>
}

export interface MutationCreateAffiliateTokenArgs {
  createAffiliateToken: CreateAffiliateTokenInput
}

export interface MutationDeleteAffiliateTokenArgs {
  deleteAffiliateToken: DeleteAffiliateTokenInput
}

export interface MutationUpdateAffiliateTokenArgs {
  updateAffiliateToken: UpdateAffiliateTokenInput
}

export interface MutationUpdateProcessedCustomVideoArgs {
  input: UpdateProcessedCustomVideoInput
}

export interface MutationUpdateInAppSubscriptionArgs {
  planId?: Maybe<Scalars['String']>
}

export interface MutationUpdateMailingListIntegrationArgs {
  integration: IntegrationInput
  options?: Maybe<IntegrationOptionsInput>
}

export interface MutationSetMailingListIntegrationArgs {
  integration: IntegrationInput
}

export interface MutationSetGoogleAuthTokenArgs {
  integrationId: Scalars['String']
  token: Scalars['String']
}

export interface MutationDeleteGoogleAuthTokenArgs {
  integrationId: Scalars['String']
}

export interface MutationVerifyEmailArgs {
  username: Scalars['String']
  assertion: Scalars['String']
}

export interface MutationUpdateUserArgs {
  input: UpdateUserInput
}

export interface MutationUpdateUserPhoneNumberArgs {
  username: Scalars['String']
  phoneNumber: Scalars['String']
}

export interface MutationSwitchAccountArgs {
  id: Scalars['Int']
}

export interface MutationMigrateUserToPasswordUserArgs {
  username: Scalars['String']
  password?: Maybe<Scalars['String']>
}

export interface MutationCreateInAppMessageArgs {
  code: Scalars['String']
  level: Scalars['String']
  accountUuid?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

export interface MutationDismissInAppMessageArgs {
  code: Scalars['String']
}

export interface MutationUpdateInAppMessageArgs {
  code: Scalars['String']
  level?: Maybe<Scalars['String']>
  dismissedAt?: Maybe<Scalars['Date']>
  count?: Maybe<Scalars['Int']>
}

export interface MutationSetStoreTabEnabledArgs {
  id: Scalars['Int']
  enabled: Scalars['Boolean']
}

export interface MutationSetDefaultProfilePageArgs {
  id: Scalars['Int']
  defaultProfilePage?: Maybe<DefaultProfilePage>
}

export interface MutationBulkAccountCreationArgs {
  uuid: Scalars['String']
  usernames: Array<Maybe<Scalars['String']>>
  captchaToken: Scalars['String']
  sourceAccountId?: Maybe<Scalars['Int']>
}

export interface MutationDuplicateProfileArgs {
  sourceAccountId?: Maybe<Scalars['Int']>
  overrides?: Maybe<Array<OverrideArguments>>
}

export interface MutationImportProfileFromJsonArgs {
  profileJson: Scalars['String']
}

export interface MutationSetChildLinkArgs {
  input: SetChildLinkInput
}

export interface MutationRemoveChildLinkArgs {
  input: RemoveChildLinkInput
}

export interface MutationReorderChildLinkArgs {
  input: ReorderChildLinkInput
}

export interface MutationArchiveAllInactiveLinksArgs {
  accountId?: Maybe<Scalars['Int']>
}

export interface MutationArchiveAllInactiveLinksV2Args {
  accountId?: Maybe<Scalars['Int']>
}

export interface MutationArchiveSponsoredLinksArgs {
  offerId?: Maybe<Scalars['String']>
}

export interface MutationArchiveSponsoredLinksByAccountArgs {
  sponsorshipId: Scalars['String']
  accountUuid: Scalars['String']
}

export interface MutationUpdateSponsoredLinksArgs {
  oldSponsorshipId?: Maybe<Scalars['String']>
  newSponsorshipId?: Maybe<Scalars['String']>
}

export interface MutationCreateSocialIntegrationArgs {
  input: CreateSocialIntegrationInput
}

export interface MutationUpdateSocialIntegrationArgs {
  input: UpdateSocialIntegrationInput
}

export interface MutationDeleteSocialIntegrationArgs {
  id: Scalars['String']
  type: SocialIntegrationType
}

export interface MutationAddSocialContentToLinkAssociationsArgs {
  input: AddSocialContentToLinkAssociationsInput
}

export interface MutationRemoveSocialContentToLinkAssociationsArgs {
  input: RemoveSocialContentToLinkAssociationsInput
}

export interface MutationBulkPasswordResetArgs {
  usernames?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface MutationRequestUsernameArgs {
  requestUsername: RequestUsernameInput
}

export interface MutationInviteUserByEmailArgs {
  email: Scalars['String']
  accountId: Scalars['String']
}

export interface MutationInviteAdminArgs {
  identifier: Scalars['String']
  accountId: Scalars['String']
  inviteeRole?: Maybe<AdminInvitationInviteeRole>
  isRequireConfirmation?: Maybe<Scalars['Boolean']>
}

export interface MutationRemoveAdminArgs {
  userId: Scalars['String']
  accountId: Scalars['String']
}

export interface MutationAcceptUserEmailInvitationArgs {
  confirmationToken: Scalars['String']
  password: Scalars['String']
}

export interface MutationAcceptPasswordlessUserEmailInvitationArgs {
  confirmationToken: Scalars['String']
}

export interface MutationSetInstagramWebhookMutationArgs {
  accountUuid?: Maybe<Scalars['String']>
  integrationId: Scalars['String']
  instagramBusinessAccountId: Scalars['String']
  shouldUseInstagramBusiness?: Maybe<Scalars['Boolean']>
}

export interface MutationDeleteInstagramWebhookMutationArgs {
  accountUuid?: Maybe<Scalars['String']>
  integrationId: Scalars['String']
  instagramBusinessAccountId: Scalars['String']
}

export interface MutationSendInstagramDirectMessageMutationArgs {
  input: SendInstagramDirectMessageInput
}

export interface MutationVerifiedDeleteCurrentUserArgs {
  otpCode: Scalars['String']
}

export interface MutationVerifiedDeleteAccountArgs {
  otpCode: Scalars['String']
  accountUuid: Scalars['String']
}

export interface MutationSoftDeleteUserArgs {
  uuid: Scalars['String']
}

export interface MutationSoftDeleteAccountArgs {
  accountUuid: Scalars['String']
}

export interface MutationCreateSocialFeedArgs {
  input?: Maybe<CreateSocialFeedMutationInput>
}

export interface MutationUpdateSocialFeedArgs {
  feedId: Scalars['String']
  input: UpdateSocialFeedMutationInput
}

export interface MutationRemoveSocialFeedArgs {
  feedId: Scalars['String']
}

export interface MutationCreateSocialFeedPostArgs {
  feedId?: Maybe<Scalars['String']>
  input: CreateSocialFeedPostMutationInput
}

export interface MutationUpdateSocialFeedPostArgs {
  postId: Scalars['String']
  accountId?: Maybe<Scalars['Int']>
  input: UpdateSocialFeedPostMutationInput
}

export interface MutationRemoveSocialFeedPostArgs {
  postId: Scalars['String']
}

export interface MutationUpdateSocialFeedPostMediaArgs {
  mediaId: Scalars['String']
  accountId?: Maybe<Scalars['Int']>
  input: UpdateSocialFeedPostMediaMutationInput
}

export interface MutationCreateSocialFeedPostMediaLinkArgs {
  mediaId: Scalars['String']
  input: CreateSocialFeedPostMediaLinkMutationInput
}

export interface MutationUpdateSocialFeedPostMediaLinkArgs {
  linkId: Scalars['Int']
  input: UpdateSocialFeedPostMediaLinkMutationInput
}

export interface MutationRemoveSocialFeedPostMediaLinkArgs {
  linkId: Scalars['Int']
}

export interface MutationSetDigitalDownloadLinkContextArgs {
  id: Scalars['Int']
  context: DigitalDownloadLinkContextInput
}

export interface MutationSetKajabiCourseContextMutationArgs {
  id: Scalars['Int']
  context: KajabiCourseContextInput
}

export interface MutationUpdateTimeZoneArgs {
  timezone?: Maybe<Scalars['String']>
}

export interface MutationSetMonetizationIntentsArgs {
  id: Scalars['Int']
  input: SetMonetizationIntentsInput
}

export interface MutationSetAccountOnboardingStateArgs {
  onboardingState?: Maybe<OnboardingStateType>
}

export interface MutationSetOnboardingGoalsArgs {
  id: Scalars['Int']
  goals: Array<Scalars['String']>
}

export interface MutationSendInstagramMessagePublicReplyMutationArgs {
  input: SendInstagramMessagePublicReplyInput
}

export interface MutationUpdateUserUsernameArgs {
  userId: Scalars['String']
  username: Scalars['String']
}

export interface MutationUpdateAccountAppearanceArgs {
  appearance: UpdateAccountAppearanceInput
  glowUp?: Maybe<GlowUpInput>
}

export interface MutationUpdateAccountTitleAndDescriptionArgs {
  input: UpdateAccountTitleAndDescriptionInput
}

export interface MutationSetCoachingLinkContextArgs {
  id: Scalars['Int']
  context: CoachingLinkContextInput
}

export interface MutationCreateBaseThemeArgs {
  input: CreateBaseThemeInput
}

export interface MutationUpdateBaseThemeByKeyArgs {
  input: UpdateBaseThemeByKeyInput
}

export interface MutationCreateBaseThemeFromAccountThemeArgs {
  input: CreateBaseThemeFromAccountThemeInput
}

export interface MutationUpdateBaseThemeFromAccountThemeArgs {
  input: UpdateBaseThemeFromAccountThemeInput
}

export interface MutationChangeLinkPreviewLinkTypeAndModifiersArgs {
  id: Scalars['Int']
  type: LinkType
  linkTypeId?: Maybe<Scalars['String']>
  glowUp: GlowUpInput
  youtubeContext?: Maybe<YoutubeLinkContextInput>
  spotifyContext?: Maybe<SpotifyLinkContextInput>
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationToggleGlowUpChangeArgs {
  input: ToggleGlowUpChangeInput
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationCreateLinkPreviewCollectionWithChildrenArgs {
  parentGroupContext?: Maybe<GroupLinkContextInput>
  childGroups: Array<ChildGroupInput>
  glowUp: GlowUpInput
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationGlowUpArgs {
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationUpdateGlowUpStatusArgs {
  status: GlowUpStatus
}

export interface MutationDeleteGlowUpStateArgs {
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface MutationCreateCanvaDesignArgs {
  input: CreateCanvaDesignInput
}

export interface MutationCreateCanvaAssetUploadJobArgs {
  input: CreateCanvaAssetUploadJobInput
}

export interface MutationCreateCanvaDesignExportJobArgs {
  input: CreateCanvaDesignOutputJobInput
}

export interface MutationSetMultipleLinkPreviewGroupLinkContextArgs {
  context: GroupLinkContextInput
}

export interface NftGateRule {
  contractAddress?: Maybe<Scalars['String']>
  collectionName?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface NftGateRuleInput {
  contractAddress?: Maybe<Scalars['String']>
  collectionName?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface NftInput {
  balance?: Maybe<Scalars['String']>
  linkId?: Maybe<Scalars['String']>
}

export interface NextBestActionItem {
  id: Scalars['String']
  type: HomeNextBestActionType
  title: Scalars['String']
  subtitle?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  actionLabel?: Maybe<Scalars['String']>
}

export interface NextBestActionSectionData extends HomeSectionData {
  type: Scalars['String']
  nextBestActionItems?: Maybe<Array<Maybe<NextBestActionItem>>>
}

export interface NftAsset {
  openseaId?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  externalLink?: Maybe<Scalars['String']>
  contractAddress?: Maybe<Scalars['String']>
  openseaLink?: Maybe<Scalars['String']>
  collectionName?: Maybe<Scalars['String']>
  collectionSymbol?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownerAddress?: Maybe<Scalars['String']>
  collectionVerified?: Maybe<Scalars['Boolean']>
  creatorVerified?: Maybe<Scalars['Boolean']>
}

export interface NftAssetInput {
  openseaId?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  externalLink?: Maybe<Scalars['String']>
  contractAddress?: Maybe<Scalars['String']>
  openseaLink?: Maybe<Scalars['String']>
  collectionName?: Maybe<Scalars['String']>
  collectionSymbol?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownerAddress?: Maybe<Scalars['String']>
  collectionVerified?: Maybe<Scalars['Boolean']>
  creatorVerified?: Maybe<Scalars['Boolean']>
}

export interface NftGalleryLinkContext {
  walletProvider?: Maybe<Scalars['String']>
  walletAddress?: Maybe<Scalars['String']>
  marketplace?: Maybe<Scalars['String']>
  signedMessage?: Maybe<Scalars['String']>
  assets?: Maybe<Array<Maybe<NftAsset>>>
  lastUpdated?: Maybe<Scalars['Int']>
}

export interface NftGalleryLinkContextInput {
  walletProvider?: Maybe<Scalars['String']>
  walletAddress?: Maybe<Scalars['String']>
  marketplace?: Maybe<Scalars['String']>
  signedMessage?: Maybe<Scalars['String']>
  assets?: Maybe<Array<Maybe<NftAssetInput>>>
  lastUpdated?: Maybe<Scalars['Int']>
}

export interface Notification {
  title: Scalars['String']
}

export enum OgImageBackgroundType {
  Color = 'COLOR'
}

export enum OnboardingStateType {
  Incomplete = 'incomplete',
  Complete = 'complete'
}

export interface OperationResult {
  status: Scalars['String']
  message?: Maybe<Scalars['String']>
}

export interface OverrideArguments {
  fontStyle?: Maybe<Scalars['String']>
  bgColor?: Maybe<Scalars['String']>
  fontColor?: Maybe<Scalars['String']>
}

export interface PageMeta {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface PartnerIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  externalIntegrationId?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  vendorIntegrationId?: Maybe<Scalars['String']>
  vendorIntegrationTitle?: Maybe<Scalars['String']>
}

export interface PasscodeGateRule {
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface PasscodeGateRuleInput {
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface PasscodeInput {
  code?: Maybe<Scalars['String']>
  linkId?: Maybe<Scalars['String']>
}

export interface PastPaymentsForChargehound {
  id: Scalars['String']
  amount: Scalars['Int']
  currency: Scalars['String']
  chargedAt: Scalars['String']
}

export interface PaymentDetailsInput {
  paymentSource?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  cardId?: Maybe<Scalars['String']>
  stripeGateway?: Maybe<Scalars['String']>
  stripeIntentId?: Maybe<Scalars['String']>
}

export interface PaymentGateRule {
  serviceIntegration?: Maybe<ServiceIntegration>
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
  isValid?: Maybe<Scalars['Boolean']>
}

export interface PaymentGateRuleInput {
  serviceIntegrationId?: Maybe<Scalars['String']>
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export enum PaymentSourceType {
  Card = 'card',
  Paypal = 'paypal',
  ApplePay = 'applePay',
  GooglePay = 'googlePay',
  None = 'none'
}

export interface PaypalIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  paypalIntegrationId?: Maybe<Scalars['String']>
  currencyCode?: Maybe<CurrencyCode>
  accountStatus?: Maybe<Scalars['String']>
  merchantId?: Maybe<Scalars['String']>
}

export interface PinterestLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface PinterestLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface Plan {
  id?: Maybe<Scalars['String']>
  frequency?: Maybe<Scalars['String']>
  tier?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
}

export interface PlanSubscription {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  hasScheduledChanges: Scalars['Boolean']
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
}

export interface PodcastLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  options: Array<PodcastLinkOption>
  useLatestEpisode: Scalars['Boolean']
}

export interface PodcastLinkContextOptionsArgs {
  includeHidden?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface PodcastLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  useLatestEpisode?: Maybe<Scalars['Boolean']>
  options?: Maybe<Array<PodcastLinkOptionInput>>
}

export interface PodcastLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface PodcastLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface PreSaveLinkContext {
  releaseDateTime?: Maybe<Scalars['String']>
  releaseDateTimeZone?: Maybe<Scalars['String']>
  alertSubscribers?: Maybe<Scalars['Boolean']>
  uniqueId?: Maybe<Scalars['String']>
  artist?: Maybe<Scalars['String']>
  songTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  confirmationMessage?: Maybe<Scalars['String']>
  userUploadedCoverArt?: Maybe<Scalars['String']>
  options: Array<PreSaveLinkOption>
}

export interface PreSaveLinkContextInput {
  releaseDateTime?: Maybe<Scalars['String']>
  releaseDateTimeZone?: Maybe<Scalars['String']>
  alertSubscribers?: Maybe<Scalars['Boolean']>
  uniqueId?: Maybe<Scalars['String']>
  artist?: Maybe<Scalars['String']>
  songTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  confirmationMessage?: Maybe<Scalars['String']>
  userUploadedCoverArt?: Maybe<Scalars['String']>
  options?: Maybe<Array<PreSaveLinkOptionInput>>
}

export interface PreSaveLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
}

export interface PreSaveLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
}

export enum ProcessedCustomVideoType {
  Background = 'BACKGROUND',
  Avatar = 'AVATAR',
  AccountBackgroundImage = 'ACCOUNT_BACKGROUND_IMAGE',
  AccountCustomAvatar = 'ACCOUNT_CUSTOM_AVATAR',
  AccountCustomAvatarVideo = 'ACCOUNT_CUSTOM_AVATAR_VIDEO',
  LinkThumbnail = 'LINK_THUMBNAIL'
}

export interface Product {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  /** @deprecated Use `imageUrl` instead */
  image?: Maybe<Image>
  imageUrl?: Maybe<Scalars['String']>
  currencyCode?: Maybe<CurrencyCode>
  price?: Maybe<Scalars['Float']>
  cursor?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  shopName?: Maybe<Scalars['String']>
  shopUrl?: Maybe<Scalars['String']>
  promotionalBanner?: Maybe<ProductPromotionalBannerOptions>
  cartDeepLinkUrl?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['Float']>
  message?: Maybe<Scalars['String']>
}

export interface ProductCollection {
  id: Scalars['String']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  image?: Maybe<Image>
  cursor?: Maybe<Scalars['String']>
  shopName?: Maybe<Scalars['String']>
  shopUrl?: Maybe<Scalars['String']>
  products: Array<Maybe<Product>>
}

export interface ProductCollectionsPage {
  items: Array<ProductCollection>
  hasNextPage: Scalars['Boolean']
}

export interface ProductInput {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  salePrice?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  promotionalBanner?: Maybe<ProductPromotionalBannerOptions>
}

export interface ProductLinkContext {
  providerServiceIntegration?: Maybe<ServiceIntegration>
  paymentServiceIntegration?: Maybe<ServiceIntegration>
  productIds: Array<Maybe<Scalars['String']>>
  descriptionMessage?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  collectionId?: Maybe<Scalars['String']>
  collection?: Maybe<ProductCollection>
  products?: Maybe<Array<Maybe<Product>>>
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface ProductLinkContextInput {
  providerServiceIntegrationId?: Maybe<Scalars['String']>
  paymentServiceIntegrationId?: Maybe<Scalars['String']>
  productIds?: Maybe<Array<Maybe<Scalars['String']>>>
  descriptionMessage?: Maybe<Scalars['String']>
  collectionId?: Maybe<Scalars['String']>
  embedOption?: Maybe<LinkEmbedOptions>
  products?: Maybe<Array<Maybe<ProductInput>>>
}

export enum ProductPromotionalBannerOptions {
  None = 'NONE',
  Sale = 'SALE',
  New = 'NEW'
}

export interface ProductsPage {
  items: Array<Product>
  hasNextPage: Scalars['Boolean']
}

export enum ProfileBadges {
  VerificationTick = 'VERIFICATION_TICK',
  VerifiedAndNotableTick = 'VERIFIED_AND_NOTABLE_TICK'
}

export interface Query {
  monolithAlive: Scalars['Boolean']
  currentUser?: Maybe<User>
  listAccounts?: Maybe<Array<Maybe<Account>>>
  listLinks?: Maybe<Array<Maybe<Link>>>
  user?: Maybe<User>
  users?: Maybe<Array<Maybe<Account>>>
  accountFromUsername?: Maybe<Account>
  accountsFromUsername?: Maybe<Array<Maybe<Account>>>
  accountFromIntegration?: Maybe<Account>
  getBraintreeToken?: Maybe<GetBraintreeTokenResult>
  getCommerceLinkFees?: Maybe<CommerceLinkFees>
  getSquareLocations?: Maybe<Array<Maybe<SquareLocation>>>
  getStripeBalance?: Maybe<StripeBalance>
  getLink?: Maybe<Link>
  getLinks: LinksPage
  getLinkGatedContent?: Maybe<LinkGatedContentResult>
  getHomeLayout?: Maybe<HomeLayout>
  getLinkTypes: LinkTypes
  getSquareApplications?: Maybe<Array<Maybe<SquareApplication>>>
  getIntegrations?: Maybe<Array<ServiceIntegration>>
  validateLinksGate?: Maybe<Array<Maybe<Link>>>
  validatePaymentAmount: Scalars['Boolean']
  getProductCollections: ProductCollectionsPage
  getCollections: ProductCollectionsPage
  getCollection: ProductCollection
  getProducts: ProductsPage
  getCorrilyPrices: CorrilyPricesResponse
  version?: Maybe<Version>
  getUserStatusByUsername?: Maybe<UserStatus>
  socialLinks: Array<SocialLink>
  userFromUsername?: Maybe<User>
  userFromUuid?: Maybe<User>
  usersFromUuids?: Maybe<Array<User>>
  accountFromUuid?: Maybe<Account>
  accountsFromUuids?: Maybe<Array<Account>>
  appearanceSettings?: Maybe<AppearanceSettings>
  appearanceOptions?: Maybe<AppearanceOptions>
  calculateCoupon: GetCouponQueryResponse
  currentCountryCode: CountryCode
  getPlans: Array<Plan>
  getPlansWithPrices: Array<GetPlansWithPricesResponse>
  getMailChimpLists: Array<MailChimpList>
  /** Fetches Mailchimp lists using a provided API key */
  getMailchimpListsByApiKey: Array<MailChimpList>
  checkFacebookPixelId: FacebookPixel
  getCanAccessGoogleSheets?: Maybe<CanAccessGoogleSheets>
  /** Get all Google Calendar integrations for the current user */
  getGoogleCalendarIntegrations?: Maybe<Array<Maybe<Integration>>>
  /** Get integration by id */
  getIntegrationById?: Maybe<Integration>
  /** Get all integrations with a specified service type for the current user */
  getIntegrationsByServiceType?: Maybe<Array<Maybe<Integration>>>
  getSelectedAccountOwner?: Maybe<SelectedAccountOwnerResult>
  getMailingListIntegrations?: Maybe<Array<Integration>>
  getAffiliateTokens?: Maybe<Array<AffiliateToken>>
  userDetailsForChargehound?: Maybe<UserDetailsForChargehound>
  discoverLinksFromIds?: Maybe<Array<DiscoverLink>>
  discoverAccountsFromUsernames?: Maybe<Array<DiscoverAccount>>
  getSauceKey: Scalars['String']
  getUserFromCredentials?: Maybe<LoginUserResult>
  subscriptionEstimate: SubscriptionEstimateResponse
  getTikTokVideosAll?: Maybe<GetTikTokVideosResult>
  getTikTokVideosById?: Maybe<GetTikTokVideosResult>
  getTikTokProfiles?: Maybe<Array<Maybe<GetTikTokProfilesResult>>>
  getTikTokProfileLatest?: Maybe<GetTikTokProfileResult>
  getTikTokProfile?: Maybe<GetTikTokProfileResult>
  getTikTokBusinessProfileQuery?: Maybe<GetTikTokBusinessProfileResult>
  getTikTokBusinessMetricsQuery?: Maybe<Array<Maybe<GetTikTokBusinessMetricsResult>>>
  getInstagramBusinessAccountQuery?: Maybe<GetInstagramBusinessAccountResult>
  getTikTokBusinessVideosWithMetricsQuery?: Maybe<GetTikTokBusinessVideosWithMetricsResult>
  getMfaAccessUrlQuery?: Maybe<GetMfaAccessUrlResult>
  getMfaEnrolmentUrlQuery?: Maybe<GetMfaEnrolmentUrlResult>
  /**
   * Validates if a Google Sheet ID is accessible using the credentials from a
   * specific integration
   */
  validateGoogleSheetsId?: Maybe<ValidateGoogleSheetsIdResult>
  getCanAccessGoogleYouTube?: Maybe<CanAccessGoogleYouTube>
  getGoogleYouTubeChannel?: Maybe<GetGoogleYouTubeChannelResult>
  getGoogleYouTubeMostPopular?: Maybe<YouTubeMostPopularResult>
  getGoogleYouTubeMyLikedVideos?: Maybe<YouTubeMostPopularResult>
  validateGoogleYouTube?: Maybe<ValidateGoogleYouTubeResult>
  getSubscriptionAddOnProducts: Array<SubscriptionAddOnProductResponse>
  getSubscriptionAddOnCheckoutURL: GetSubscriptionAddOnCheckoutUrlResult
  userFromEmail?: Maybe<UserFromEmailResult>
  getBaseThemes?: Maybe<Array<BaseTheme>>
  getAccountEntitlements: GetAccountEntitlementsQueryResult
  getAccountStatsig?: Maybe<AccountStatsigResult>
  getUserEntitlements: GetUserEntitlementsQueryResult
  getMonetizableProfileItems: Array<MonetizableItem>
  getSocialContentToLinkAssociations?: Maybe<Array<Maybe<SocialContentToLinkAssociations>>>
  getColorSchemaOptions?: Maybe<Array<Maybe<ColorSchemaOptions>>>
  getCanvaAssetUploadJob: CanvaAssetUploadJobResult
  getCanvaDesignExportJob: CanvaDesignExportJobResult
  globalBilling?: Maybe<GlobalBillingResult>
}

export interface QueryListAccountsArgs {
  filters?: Maybe<AccountListFilterInput>
}

export interface QueryListLinksArgs {
  filters?: Maybe<LinkListFilterInput>
}

export interface QueryUserArgs {
  id: Scalars['ID']
}

export interface QueryUsersArgs {
  usernames?: Maybe<Array<UsernameInput>>
}

export interface QueryAccountFromUsernameArgs {
  username: Scalars['String']
}

export interface QueryAccountsFromUsernameArgs {
  username: Scalars['String']
}

export interface QueryAccountFromIntegrationArgs {
  serviceIntegrationId: Scalars['String']
}

export interface QueryGetCommerceLinkFeesArgs {
  accountId?: Maybe<Scalars['Int']>
  provider: Scalars['String']
}

export interface QueryGetSquareLocationsArgs {
  id: Scalars['String']
}

export interface QueryGetStripeBalanceArgs {
  id: Scalars['String']
}

export interface QueryGetLinkArgs {
  id: Scalars['Int']
}

export interface QueryGetLinksArgs {
  accountUuid?: Maybe<Scalars['String']>
  numberOfLinks?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  status?: Maybe<LinkStatus>
  isForwardingActive?: Maybe<Scalars['Boolean']>
  hasAnimation?: Maybe<Scalars['Boolean']>
  excludeLayoutOptions?: Maybe<Array<Maybe<VisualLinkPreviewLayoutOption>>>
  viewId?: Maybe<Scalars['Int']>
  isSponsorshipLink?: Maybe<Scalars['Boolean']>
}

export interface QueryGetLinkGatedContentArgs {
  id: Scalars['String']
}

export interface QueryGetLinkTypesArgs {
  uuid?: Maybe<Scalars['String']>
  vertical?: Maybe<Scalars['String']>
  withRecommended?: Maybe<Scalars['Boolean']>
}

export interface QueryGetIntegrationsArgs {
  filter?: Maybe<ServiceIntegrationsFilterInput>
}

export interface QueryValidateLinksGateArgs {
  accountId?: Maybe<Scalars['Int']>
  validationInput?: Maybe<ValidationInput>
  filter?: Maybe<LinksFilterInput>
  requestSource?: Maybe<RequestSourceInput>
}

export interface QueryValidatePaymentAmountArgs {
  amount: Scalars['Int']
  linkId: Scalars['Int']
}

export interface QueryGetProductCollectionsArgs {
  serviceIntegrationId: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['String']>
  skipProducts?: Maybe<Scalars['Boolean']>
}

export interface QueryGetCollectionsArgs {
  serviceIntegrationId: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['String']>
  skipProducts?: Maybe<Scalars['Boolean']>
}

export interface QueryGetCollectionArgs {
  serviceIntegrationId: Scalars['String']
  collectionId: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['String']>
}

export interface QueryGetProductsArgs {
  serviceIntegrationId: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
}

export interface QueryGetUserStatusByUsernameArgs {
  username: Scalars['String']
}

export interface QueryUserFromUsernameArgs {
  username: Scalars['String']
}

export interface QueryUserFromUuidArgs {
  uuid: Scalars['String']
}

export interface QueryUsersFromUuidsArgs {
  uuids: Array<Scalars['String']>
}

export interface QueryAccountFromUuidArgs {
  uuid: Scalars['String']
  isProfilePreview?: Maybe<Scalars['Boolean']>
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
  isDowngradedPreview?: Maybe<Scalars['Boolean']>
}

export interface QueryAccountsFromUuidsArgs {
  uuids: Array<Scalars['String']>
}

export interface QueryCalculateCouponArgs {
  couponId: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  currency: Scalars['String']
  price?: Maybe<Scalars['Int']>
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface QueryGetPlansArgs {
  countryCode: Scalars['String']
}

export interface QueryGetPlansWithPricesArgs {
  countryCode: Scalars['String']
}

export interface QueryGetMailChimpListsArgs {
  id: Scalars['String']
}

export interface QueryGetMailchimpListsByApiKeyArgs {
  apiKey: Scalars['String']
}

export interface QueryCheckFacebookPixelIdArgs {
  pixelId: Scalars['String']
}

export interface QueryGetCanAccessGoogleSheetsArgs {
  integrationId: Scalars['String']
}

export interface QueryGetIntegrationByIdArgs {
  id: Scalars['String']
  refresh?: Maybe<Scalars['Boolean']>
}

export interface QueryGetIntegrationsByServiceTypeArgs {
  service: Scalars['String']
}

export interface QueryGetMailingListIntegrationsArgs {
  filter?: Maybe<IntegrationsFilterInput>
}

export interface QueryUserDetailsForChargehoundArgs {
  isStripe?: Maybe<Scalars['Boolean']>
  id_at_gateway?: Maybe<Scalars['String']>
  dateRange?: Maybe<Array<Maybe<Scalars['Int']>>>
  customerEmail?: Maybe<Scalars['String']>
  referenceId?: Maybe<Scalars['String']>
}

export interface QueryDiscoverLinksFromIdsArgs {
  ids: Array<Scalars['Int']>
}

export interface QueryDiscoverAccountsFromUsernamesArgs {
  usernames: Array<Scalars['String']>
}

export interface QueryGetUserFromCredentialsArgs {
  credentials: UsernamePasswordInput
}

export interface QuerySubscriptionEstimateArgs {
  country?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  currency: Scalars['String']
  frequency: Scalars['String']
  postcode?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  unitPrice?: Maybe<Scalars['Int']>
  tier: Scalars['String']
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressCity?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  profileQuantity?: Maybe<Scalars['Int']>
}

export interface QueryGetTikTokVideosAllArgs {
  tiktokIntegrationId: Scalars['String']
  linkId: Scalars['String']
  cursor?: Maybe<Scalars['String']>
}

export interface QueryGetTikTokVideosByIdArgs {
  tiktokIntegrationId: Scalars['String']
  linkId: Scalars['String']
  videoIds: Array<Scalars['String']>
}

export interface QueryGetTikTokProfileLatestArgs {
  tiktokIntegrationId: Scalars['String']
  linkId: Scalars['String']
}

export interface QueryGetTikTokProfileArgs {
  tiktokIntegrationId: Scalars['String']
  linkId: Scalars['String']
  videoIds?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface QueryGetTikTokBusinessProfileQueryArgs {
  tikTokBusinessIntegrationId: Scalars['String']
  fields: Array<Scalars['String']>
}

export interface QueryGetTikTokBusinessMetricsQueryArgs {
  tikTokBusinessIntegrationId: Scalars['String']
  videoIds?: Maybe<Array<Scalars['String']>>
}

export interface QueryGetInstagramBusinessAccountQueryArgs {
  facebookIntegrationId: Scalars['String']
  instagramBusinessAccountId: Scalars['String']
}

export interface QueryGetTikTokBusinessVideosWithMetricsQueryArgs {
  tikTokBusinessIntegrationId: Scalars['String']
  videoIds?: Maybe<Array<Scalars['String']>>
}

export interface QueryGetMfaEnrolmentUrlQueryArgs {
  mfaType: Scalars['String']
}

export interface QueryValidateGoogleSheetsIdArgs {
  integrationId: Scalars['String']
  sheetId: Scalars['String']
}

export interface QueryGetCanAccessGoogleYouTubeArgs {
  integrationId: Scalars['String']
}

export interface QueryGetGoogleYouTubeChannelArgs {
  integrationId: Scalars['String']
}

export interface QueryGetGoogleYouTubeMostPopularArgs {
  integrationId: Scalars['String']
  pageToken?: Maybe<Scalars['String']>
  regionCode?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryGetGoogleYouTubeMyLikedVideosArgs {
  integrationId: Scalars['String']
  pageToken?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryValidateGoogleYouTubeArgs {
  integrationId: Scalars['String']
}

export interface QueryGetSubscriptionAddOnCheckoutUrlArgs {
  getSubscriptionAddOnCheckoutURL: GetSubscriptionAddOnCheckoutUrlInput
}

export interface QueryUserFromEmailArgs {
  email: Scalars['String']
}

export interface QueryGetBaseThemesArgs {
  input?: Maybe<GetBaseThemesQueryInput>
}

export interface QueryGetAccountEntitlementsArgs {
  getAccountEntitlementsQueryInput: GetAccountEntitlementsQueryInput
}

export interface QueryGetAccountStatsigArgs {
  input: GetAccountStatsigQueryInput
}

export interface QueryGetUserEntitlementsArgs {
  getUserEntitlementsQueryInput: GetUserEntitlementsQueryInput
}

export interface QueryGetMonetizableProfileItemsArgs {
  numberOfLinks?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  status?: Maybe<LinkStatus>
}

export interface QueryGetSocialContentToLinkAssociationsArgs {
  socialIntegrationId: Scalars['String']
  socialContentId?: Maybe<Scalars['String']>
  associatedMethod?: Maybe<Scalars['String']>
}

export interface QueryGetCanvaAssetUploadJobArgs {
  input: GetCanvaAssetUploadJobInput
}

export interface QueryGetCanvaDesignExportJobArgs {
  input: GetCanvaDesignExportJobInput
}

export interface ReauthorizePaypalIntegrationInput {
  id: Scalars['String']
  merchantId: Scalars['String']
  accountStatus: Scalars['String']
}

export interface ReauthorizeShopifyIntegrationInput {
  id: Scalars['String']
  authorizationCode: Scalars['String']
  shop: Scalars['String']
}

export interface ReauthorizeSquareIntegrationInput {
  id: Scalars['String']
  authorizationCode: Scalars['String']
}

export interface ReauthorizeStripeIntegrationInput {
  id: Scalars['String']
  authorizationCode: Scalars['String']
}

export interface RemoveAdminResult {
  result?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export interface RemoveChildLinkInput {
  childId: Scalars['Int']
  position: Scalars['Int']
}

export interface RemoveIntegrationInput {
  id: Scalars['String']
}

export interface RemoveSocialContentToLinkAssociationsInput {
  id: Scalars['String']
  associatedMethod: Scalars['String']
}

export interface RemoveSquareIntegrationInput {
  id: Scalars['String']
}

export interface ReorderChildLinkInput {
  childId: Scalars['Int']
  position: Scalars['Int']
}

export interface ReorderSocialLinksResult {
  user?: Maybe<User>
}

export interface RequestAudienceSupportEmailVerificationCodeResult {
  success: Scalars['Boolean']
}

export interface RequestEmailVerificationResult {
  result?: Maybe<Scalars['String']>
}

export interface RequestLinkContext {
  serviceIntegration?: Maybe<ServiceIntegration>
  options: Array<RequestLinkOption>
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  requireDetails: Scalars['Boolean']
  requireTax: Scalars['Boolean']
  taxRate?: Maybe<Scalars['Float']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface RequestLinkContextInput {
  serviceIntegrationId?: Maybe<Scalars['String']>
  options?: Maybe<Array<RequestLinkOptionInput>>
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  requireDetails?: Maybe<Scalars['Boolean']>
  requireTax: Scalars['Boolean']
  taxRate?: Maybe<Scalars['Float']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface RequestLinkOption {
  amount: Scalars['Int']
  title: Scalars['String']
}

export interface RequestLinkOptionInput {
  amount: Scalars['Int']
  title: Scalars['String']
}

export interface RequestPasswordResetInput {
  username: Scalars['String']
}

export interface RequestPasswordResetResult {
  result?: Maybe<Scalars['String']>
}

export interface RequestSourceInput {
  referrer?: Maybe<Scalars['String']>
}

export interface RequestUsernameInput {
  email: Scalars['String']
  captchaToken: Scalars['String']
}

export interface RequestUsernameResult {
  result?: Maybe<Scalars['String']>
}

export interface ResetUserMfaResult {
  success: Scalars['Boolean']
}

export enum Result {
  Success = 'SUCCESS',
  Warning = 'WARNING',
  Error = 'ERROR'
}

export interface RssFeedLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  itemCount?: Maybe<Scalars['Int']>
  includeThumbnails?: Maybe<Scalars['Boolean']>
}

export interface RssFeedLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  itemCount?: Maybe<Scalars['Int']>
  includeThumbnails?: Maybe<Scalars['Boolean']>
}

export interface ScheduleLeapLinkOffInput {
  linkId: Scalars['Int']
}

export interface ScheduleLinkOffInput {
  linkId: Scalars['Int']
}

export interface ScheduleLinkOffResult {
  link?: Maybe<Link>
}

export interface ScheduleLinkOnInput {
  linkId: Scalars['Int']
}

export interface ScheduleLinkOnResult {
  link?: Maybe<Link>
}

export interface ScheduledStatus {
  on?: Maybe<Scalars['Boolean']>
  started?: Maybe<Scalars['Boolean']>
  ended?: Maybe<Scalars['Boolean']>
}

export interface SelectPlanResult {
  user?: Maybe<User>
}

export interface SelectedAccountOwnerResult {
  id: Scalars['Int']
}

export interface SendInstagramDirectMessageInput {
  accountUuid: Scalars['String']
  integrationId?: Maybe<Scalars['String']>
  shouldUseInstagramBusiness?: Maybe<Scalars['Boolean']>
  instagramBusinessAccountId: Scalars['String']
  recipient: InstagramDirectMessageRecipientInput
  message: InstagramDirectMessageInput
}

export interface SendInstagramDirectMessageResult {
  success: Scalars['Boolean']
  instagramMessageId?: Maybe<Scalars['String']>
  facebookError?: Maybe<Scalars['String']>
  errorRetryable?: Maybe<Scalars['Boolean']>
}

export interface SendInstagramMessagePublicReplyInput {
  accountUuid: Scalars['String']
  integrationId?: Maybe<Scalars['String']>
  instagramBusinessAccountId: Scalars['String']
  recipient: InstagramMessagePublicReplyRecipientInput
  message: InstagramMessagePublicReplyMessageInput
}

export interface SendInstagramMessagePublicReplyResult {
  success: Scalars['Boolean']
  instagramMessageId?: Maybe<Scalars['String']>
  errorRetryable?: Maybe<Scalars['Boolean']>
  errorMessage?: Maybe<Scalars['String']>
}

export interface SensitiveContentGateRule {
  enforced?: Maybe<Scalars['Boolean']>
  suggested?: Maybe<Scalars['Boolean']>
  optedOut?: Maybe<Scalars['Boolean']>
  domain?: Maybe<Scalars['String']>
}

export interface SensitiveContentGateRuleInput {
  enforced?: Maybe<Scalars['Boolean']>
  suggested?: Maybe<Scalars['Boolean']>
  optedOut?: Maybe<Scalars['Boolean']>
}

export interface ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
}

export enum ServiceIntegrationStatus {
  Healthy = 'healthy',
  Unhealthy = 'unhealthy',
  ActionRequired = 'action_required'
}

export enum ServiceIntegrationType {
  Square = 'square',
  Stripe = 'stripe',
  Paypal = 'paypal',
  Shopify = 'shopify',
  Spring = 'spring',
  Mailchimp = 'mailchimp',
  Google = 'google',
  Partner = 'partner'
}

export interface ServiceIntegrationsFilterInput {
  /** Only return Service Integrations that match this type */
  types?: Maybe<Array<ServiceIntegrationType>>
}

export interface SetAccountVerticalsInput {
  verticals?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface SetChildLinkInput {
  parentId: Scalars['Int']
  childId: Scalars['Int']
  position: Scalars['Int']
}

export interface SetGoogleAuthTokenResult {
  hasSetToken: Scalars['Boolean']
}

export interface SetHasGeotargetingViewsInput {
  hasGeotargetingViews?: Maybe<Scalars['Boolean']>
}

export interface SetInstagramWebhookResult {
  success: Scalars['Boolean']
}

export interface SetMonetizationIntentsInput {
  monetizationIntents?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface ShopifyIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  shop?: Maybe<Scalars['String']>
  externalIntegrationId?: Maybe<Scalars['String']>
}

export interface SignupIntegrationResult {
  integration?: Maybe<Integration>
}

export interface SocialContentToLinkAssociations {
  id: Scalars['String']
  account?: Maybe<Account>
  source: Scalars['String']
  sourceId: Scalars['String']
  socialIntegration?: Maybe<SocialIntegration>
  socialPlatform: Scalars['String']
  socialContentId: Scalars['String']
  link?: Maybe<Link>
  associationMethods?: Maybe<AssociationMethods>
  associatedMethod?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
}

export interface SocialFeed {
  id: Scalars['String']
  source: SocialFeedSource
  type: SocialFeedType
  layout: SocialFeedLayoutType
  posts: Array<SocialFeedPost>
  isIncomplete: Scalars['Boolean']
  active: Scalars['Boolean']
  title?: Maybe<Scalars['String']>
  socialIntegration?: Maybe<SocialIntegration>
}

export interface SocialFeedPostsArgs {
  filter?: Maybe<SocialFeedPostFilterInput>
}

export interface SocialFeedFilterInput {
  includeDisabled?: Maybe<Scalars['Boolean']>
  /** Whether to include feeds with unsafe or banned links */
  includeUnsafe?: Maybe<Scalars['Boolean']>
  /** Whether to include incomplete or disabled feeds */
  includeIncomplete?: Maybe<Scalars['Boolean']>
}

export enum SocialFeedLayoutType {
  Square = 'SQUARE',
  Portrait = 'PORTRAIT'
}

export interface SocialFeedPost {
  id: Scalars['String']
  externalId: Scalars['String']
  postType: SocialFeedPostType
  mediaUrl: Scalars['String']
  url: Scalars['String']
  media: Array<SocialFeedPostMedia>
  pinned: Scalars['Boolean']
  visible: Scalars['Boolean']
  timestamp: Scalars['String']
  caption?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  analytics?: Maybe<SocialFeedPostAnalyticsMonolith>
}

export interface SocialFeedPostAnalyticsMonolith {
  totalLinkClicks: Scalars['Int']
}

export interface SocialFeedPostFilterInput {
  includeHidden?: Maybe<Scalars['Boolean']>
}

export interface SocialFeedPostMedia {
  id: Scalars['String']
  externalId: Scalars['String']
  mediaType: SocialFeedPostMediaType
  mediaUrl: Scalars['String']
  thumbnailUrl: Scalars['String']
  links: Array<Maybe<Link>>
}

export interface SocialFeedPostMediaInput {
  externalId: Scalars['String']
  mediaType: SocialFeedPostMediaType
  mediaUrl: Scalars['String']
  thumbnailUrl: Scalars['String']
  links?: Maybe<Array<Maybe<SocialFeedPostMediaLinkInput>>>
}

export interface SocialFeedPostMediaLinkCoordinates {
  x: Scalars['Float']
  y: Scalars['Float']
  top: Scalars['Float']
  left: Scalars['Float']
}

export interface SocialFeedPostMediaLinkCoordinatesInput {
  x: Scalars['Float']
  y: Scalars['Float']
  top: Scalars['Float']
  left: Scalars['Float']
}

export interface SocialFeedPostMediaLinkInput {
  title: Scalars['String']
  url: Scalars['String']
  coordinates: SocialFeedPostMediaLinkCoordinatesInput
}

export enum SocialFeedPostMediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export enum SocialFeedPostType {
  Video = 'VIDEO',
  Image = 'IMAGE',
  Carousel = 'CAROUSEL'
}

export enum SocialFeedSource {
  Plann = 'PLANN',
  Linktree = 'LINKTREE'
}

export enum SocialFeedType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK'
}

export interface SocialIntegration {
  id: Scalars['String']
  type: SocialIntegrationType
  displayName: Scalars['String']
  expiresIn?: Maybe<Scalars['Int']>
  status: SocialIntegrationStatus
  linkedUsernames: Array<Scalars['String']>
  context?: Maybe<SocialIntegrationContext>
}

export type SocialIntegrationContext =
  | FacebookSocialIntegrationContext
  | TikTokSocialIntegrationContext
  | TikTokSocialBusinessIntegrationContext
  | InstagramSocialIntegrationContext
  | InstagramBusinessSocialIntegrationContext

export enum SocialIntegrationStatus {
  Expired = 'EXPIRED',
  Healthy = 'HEALTHY',
  Expiring = 'EXPIRING',
  Unknown = 'UNKNOWN',
  InsufficientPermissions = 'INSUFFICIENT_PERMISSIONS'
}

export enum SocialIntegrationType {
  Facebook = 'FACEBOOK',
  Tiktok = 'TIKTOK',
  TiktokBusiness = 'TIKTOK_BUSINESS',
  Instagram = 'INSTAGRAM',
  InstagramBusiness = 'INSTAGRAM_BUSINESS'
}

export interface SocialIntegrationsFilterInput {
  /** Only return Social Integrations that match this type */
  type?: Maybe<SocialIntegrationType>
  /** Only return Social Integrations that match these types */
  types?: Maybe<Array<Maybe<SocialIntegrationType>>>
  /** Only return Social Integrations that match this social-integration-id */
  id?: Maybe<Scalars['String']>
}

export interface SocialLink {
  id?: Maybe<Scalars['String']>
  type: SocialLinkType
  url: Scalars['String']
  active?: Maybe<Scalars['Boolean']>
  position?: Maybe<Scalars['Int']>
  /** The most severe moderation action for this social-link */
  moderationAction?: Maybe<Scalars['String']>
}

export interface SocialLinkInput {
  type: SocialLinkType
  url: Scalars['String']
  active?: Maybe<Scalars['Boolean']>
}

export interface SocialLinkReorderInput {
  socialLinks?: Maybe<Array<Maybe<SocialLinksReorder>>>
}

export enum SocialLinkType {
  Facebook = 'FACEBOOK',
  Twitter = 'TWITTER',
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Spotify = 'SPOTIFY',
  Youtube = 'YOUTUBE',
  Soundcloud = 'SOUNDCLOUD',
  AppleMusic = 'APPLE_MUSIC',
  Linkedin = 'LINKEDIN',
  Whatsapp = 'WHATSAPP',
  Twitch = 'TWITCH',
  Patreon = 'PATREON',
  Pinterest = 'PINTEREST',
  Amazon = 'AMAZON',
  EmailAddress = 'EMAIL_ADDRESS',
  Snapchat = 'SNAPCHAT',
  ApplePodcast = 'APPLE_PODCAST',
  AppleAppStore = 'APPLE_APP_STORE',
  AndroidPlayStore = 'ANDROID_PLAY_STORE',
  Etsy = 'ETSY',
  Payment = 'PAYMENT',
  Poshmark = 'POSHMARK',
  Depop = 'DEPOP',
  Clubhouse = 'CLUBHOUSE',
  Cameo = 'CAMEO',
  Telegram = 'TELEGRAM',
  Signal = 'SIGNAL',
  Substack = 'SUBSTACK',
  Bandcamp = 'BANDCAMP',
  Discord = 'DISCORD',
  Bereal = 'BEREAL',
  Threads = 'THREADS',
  X = 'X',
  Bluesky = 'BLUESKY',
  Kick = 'KICK',
  Mastodon = 'MASTODON',
  Github = 'GITHUB',
  Airchat = 'AIRCHAT',
  Phone = 'PHONE',
  Website = 'WEBSITE',
  WhatsappChannel = 'WHATSAPP_CHANNEL',
  Rednote = 'REDNOTE',
  Lemon8 = 'LEMON8',
  Bandsintown = 'BANDSINTOWN'
}

export interface SocialLinksFilterInput {
  active?: Maybe<Scalars['Boolean']>
}

export enum SocialLinksPosition {
  Top = 'TOP',
  Bottom = 'BOTTOM'
}

export interface SocialLinksReorder {
  type: SocialLinkType
  position: Scalars['Int']
}

export interface SocialStyle {
  color?: Maybe<Scalars['String']>
}

export interface SpotifyLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  options: Array<SpotifyLinkOption>
  useLatestEpisode: Scalars['Boolean']
}

export interface SpotifyLinkContextOptionsArgs {
  includeHidden?: Maybe<Scalars['Boolean']>
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface SpotifyLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  options?: Maybe<Array<SpotifyLinkOptionInput>>
  useLatestEpisode?: Maybe<Scalars['Boolean']>
}

export interface SpotifyLinkOption {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface SpotifyLinkOptionInput {
  type: Scalars['String']
  visible: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
}

export interface SpringIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  externalIntegrationId?: Maybe<Scalars['String']>
}

export interface SpringLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  message?: Maybe<Scalars['String']>
}

export interface SpringLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  message?: Maybe<Scalars['String']>
}

export interface SquareApplication {
  applicationId: Scalars['String']
  currencyCode: Scalars['String']
}

export interface SquareIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  locationId?: Maybe<Scalars['String']>
  currencyCode?: Maybe<CurrencyCode>
  squareApplicationId?: Maybe<Scalars['String']>
  squareIntegrationId?: Maybe<Scalars['String']>
}

export interface SquareLocation {
  id: Scalars['String']
  title: Scalars['String']
}

export interface StripeBalance {
  available: Scalars['Int']
  pending: Scalars['Int']
}

export interface StripeIntegration extends ServiceIntegration {
  id: Scalars['String']
  type: ServiceIntegrationType
  title?: Maybe<Scalars['String']>
  status: ServiceIntegrationStatus
  messages: Array<Maybe<Message>>
  stripeAccountId?: Maybe<Scalars['String']>
  stripeIntegrationId?: Maybe<Scalars['String']>
  currencyCode?: Maybe<CurrencyCode>
}

export interface SubscribedGateRule {
  message?: Maybe<Scalars['String']>
}

export interface SubscribedGateRuleInput {
  message?: Maybe<Scalars['String']>
}

export interface Subscription {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  hasScheduledChanges: Scalars['Boolean']
  paygateStatus?: Maybe<Scalars['String']>
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
  addOns: Array<SubscriptionAddOn>
  subscriptionMigration?: Maybe<SubscriptionMigration>
}

export interface SubscriptionAddOn {
  productId: Scalars['String']
  quantity: Scalars['Int']
  product: SubscriptionAddOnProduct
}

export interface SubscriptionAddOnProduct {
  id: Scalars['String']
  name: Scalars['String']
  displayName: Scalars['String']
  price: Scalars['Int']
  currency: Scalars['String']
  frequency: Scalars['String']
}

export interface SubscriptionAddOnProductResponse {
  id: Scalars['String']
  name: Scalars['String']
  displayName: Scalars['String']
  price: Scalars['Int']
  currency: Scalars['String']
  frequency: Scalars['String']
}

export interface SubscriptionEstimateResponse {
  planId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  /** @deprecated This field will be deprecated to avoid integer overflow, use totalString instead */
  total?: Maybe<Scalars['Int']>
  totalString?: Maybe<Scalars['String']>
  formattedTotal?: Maybe<Scalars['String']>
  formattedTotalFrequency?: Maybe<Scalars['String']>
  /** @deprecated This field will be deprecated to avoid integer overflow, use amountDueString instead */
  amountDue?: Maybe<Scalars['Int']>
  amountDueString?: Maybe<Scalars['String']>
  formattedAmountDue?: Maybe<Scalars['String']>
  isTaxed?: Maybe<Scalars['Boolean']>
  taxAmount?: Maybe<Scalars['Int']>
  formattedTaxAmount?: Maybe<Scalars['String']>
  taxRate?: Maybe<Scalars['Float']>
  taxExemptReason?: Maybe<Scalars['String']>
  dateFrom?: Maybe<Scalars['Int']>
  dateTo?: Maybe<Scalars['Int']>
  remainingDays?: Maybe<Scalars['Int']>
  nextBillingAt?: Maybe<Scalars['Int']>
}

export interface SubscriptionMigration {
  id: Scalars['Int']
  status?: Maybe<MigrationStatus>
  path?: Maybe<MigrationPath>
  legacyPriceInCents: Scalars['Int']
  newPriceInCents?: Maybe<Scalars['Int']>
  scheduledAt?: Maybe<Scalars['Date']>
  migratedAt?: Maybe<Scalars['Date']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
}

export enum SubscriptionPlatform {
  Web = 'web',
  Ios = 'ios',
  Android = 'android'
}

export interface SubscriptionV1 {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  hasScheduledChanges: Scalars['Boolean']
  paygateStatus?: Maybe<Scalars['String']>
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
  addOns: Array<SubscriptionAddOn>
  subscriptionMigration?: Maybe<SubscriptionMigration>
}

export interface SubscriptionV2 {
  id: Scalars['Int']
  plan?: Maybe<Scalars['String']>
  couponId?: Maybe<Scalars['String']>
  coupon?: Maybe<Coupon>
  pauseStart?: Maybe<Scalars['Date']>
  pauseEnd?: Maybe<Scalars['Date']>
  periodStart?: Maybe<Scalars['Date']>
  periodEnd?: Maybe<Scalars['Date']>
  isPro: Scalars['Boolean']
  isActive: Scalars['Boolean']
  isPaused: Scalars['Boolean']
  isPausing: Scalars['Boolean']
  isNonRenewing: Scalars['Boolean']
  paygateStatus?: Maybe<Scalars['String']>
  hasScheduledChanges: Scalars['Boolean']
  paymentMethod: Scalars['String']
  platform?: Maybe<SubscriptionPlatform>
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  accountLimit?: Maybe<Scalars['Int']>
  addOns?: Maybe<Array<Scalars['String']>>
  subscriptionAddOns: Array<SubscriptionAddOn>
  subscriptionMigration?: Maybe<SubscriptionMigration>
  card?: Maybe<Card>
  activeAccount?: Maybe<Account>
}

export interface TemplateLinkContext {
  isIncompleteTemplateLink?: Maybe<Scalars['Boolean']>
  recommendedLinkType?: Maybe<Scalars['String']>
  recommendedLinkTypeId?: Maybe<Scalars['String']>
}

export interface Theme {
  key: Scalars['ID']
  editable: Scalars['Boolean']
}

export interface ThemeV2 {
  key: Scalars['ID']
  luminance: Luminance
  typeface: Typeface
  background: Background
  buttonStyle: ButtonStyle
  socialStyle: SocialStyle
  editable: Scalars['Boolean']
}

export enum ThemeVisibility {
  Public = 'PUBLIC',
  Draft = 'DRAFT',
  Deleted = 'DELETED'
}

export interface ThreadsLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface ThreadsLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export enum Tier {
  Free = 'free',
  Free1 = 'free1',
  Pro = 'pro',
  Plus = 'plus',
  Paid1 = 'paid1',
  Paid2 = 'paid2',
  Paid3 = 'paid3'
}

export interface TikTokBusinessAccount {
  username: Scalars['String']
  profilePictureUrl: Scalars['String']
}

export interface TikTokJumpLinkContext {
  firstProfile?: Maybe<Scalars['String']>
  secondProfile?: Maybe<Scalars['String']>
  thirdProfile?: Maybe<Scalars['String']>
  forthProfile?: Maybe<Scalars['String']>
  videoId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface TikTokJumpLinkContextInput {
  firstProfile?: Maybe<Scalars['String']>
  secondProfile?: Maybe<Scalars['String']>
  thirdProfile?: Maybe<Scalars['String']>
  forthProfile?: Maybe<Scalars['String']>
  videoId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface TikTokLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface TikTokLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface TikTokPaginatedVideos {
  cursor?: Maybe<Scalars['String']>
  hasMore?: Maybe<Scalars['Boolean']>
  items: Array<TikTokVideo>
}

export interface TikTokProfile {
  unionId?: Maybe<Scalars['String']>
  username: Scalars['String']
  displayName?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  profileDeepLink?: Maybe<Scalars['String']>
  isVerified?: Maybe<Scalars['Boolean']>
  followerCount?: Maybe<Scalars['Int']>
  likeCount?: Maybe<Scalars['Int']>
}

export interface TikTokProfileLinkContext {
  tiktokIntegrationId?: Maybe<Scalars['String']>
  videoIds?: Maybe<Array<Maybe<Scalars['String']>>>
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface TikTokProfileLinkContextTiktokIntegrationIdArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface TikTokProfileLinkContextVideoIdsArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface TikTokProfileLinkContextInput {
  tiktokIntegrationId?: Maybe<Scalars['String']>
  videoIds?: Maybe<Array<Maybe<Scalars['String']>>>
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface TikTokSocialBusinessIntegrationContext {
  type: Scalars['String']
  tikTokBusinessAccount?: Maybe<TikTokBusinessAccount>
}

export interface TikTokSocialIntegrationContext {
  loginVersion: Scalars['Int']
  profile: TikTokProfile
  videosById: Array<TikTokVideo>
  videos: TikTokPaginatedVideos
}

export interface TikTokSocialIntegrationContextVideosByIdArgs {
  ids: Array<Scalars['String']>
}

export interface TikTokSocialIntegrationContextVideosArgs {
  cursor?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export interface TikTokVideo {
  coverImageUrl?: Maybe<Scalars['String']>
  shareUrl?: Maybe<Scalars['String']>
  embedLink?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  videoDescription?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['Int']>
  viewCount?: Maybe<Scalars['Int']>
}

export enum TipGiftEmoji {
  Coffee = 'COFFEE',
  Present = 'PRESENT',
  Gift = 'GIFT',
  Taco = 'TACO',
  Cake = 'CAKE',
  Beer = 'BEER'
}

export interface TipGiftLinkContext {
  serviceIntegration?: Maybe<ServiceIntegration>
  emoji?: Maybe<TipGiftEmoji>
  amount: Scalars['Int']
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  allowNote: Scalars['Boolean']
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface TipGiftLinkContextInput {
  serviceIntegrationId?: Maybe<Scalars['String']>
  emoji: TipGiftEmoji
  amount: Scalars['Int']
  descriptionMessage?: Maybe<Scalars['String']>
  successMessage?: Maybe<Scalars['String']>
  allowNote?: Maybe<Scalars['Boolean']>
  helpCoverFees?: Maybe<Scalars['Boolean']>
}

export interface ToggleGlowUpChangeInput {
  isToggled?: Maybe<Scalars['Boolean']>
  conversationId?: Maybe<Scalars['String']>
  toolId?: Maybe<Scalars['String']>
}

export interface TwitchChannelLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  channelId?: Maybe<Scalars['String']>
}

export interface TwitchCollectionLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  videoId?: Maybe<Scalars['String']>
  collectionId?: Maybe<Scalars['String']>
}

export interface TwitchExtensionIntegrationContext {
  hideTwitchTvLinks?: Maybe<Scalars['Boolean']>
}

export interface TwitchLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface TwitchLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface TwitchVideoLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  videoId?: Maybe<Scalars['String']>
}

export interface TwitterLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface TwitterLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface Typeface {
  color?: Maybe<Scalars['String']>
  family: Scalars['String']
  fontSize: Scalars['Int']
  fontWeights: Array<Scalars['Int']>
  letterSpacing: Scalars['Float']
}

export interface UpdateAccountAppearanceInput {
  backgroundColor?: Maybe<Scalars['String']>
  buttonColor?: Maybe<Scalars['String']>
  buttonStyle?: Maybe<Scalars['String']>
  buttonCornerStyle?: Maybe<Scalars['String']>
  buttonShadowStyle?: Maybe<Scalars['String']>
  buttonTextColor?: Maybe<Scalars['String']>
  fontStyle?: Maybe<Scalars['String']>
  fontColor?: Maybe<Scalars['String']>
  customAvatar?: Maybe<Scalars['String']>
  colourway?: Maybe<Scalars['String']>
  colorway?: Maybe<Scalars['String']>
  avatarMode?: Maybe<AvatarMode>
  backgroundStyle?: Maybe<BackgroundStyle>
  backgroundGradient?: Maybe<Array<Maybe<Scalars['String']>>>
  backgroundGradientStyle?: Maybe<BackgroundGradientStyle>
  backgroundTint?: Maybe<Scalars['Int']>
  luminance?: Maybe<Scalars['String']>
  backgroundHeroColor?: Maybe<Scalars['String']>
  whiteLabel?: Maybe<Scalars['Int']>
  avatarType?: Maybe<AvatarType>
  profilePicture?: Maybe<Scalars['String']>
  customAvatarVideo?: Maybe<Scalars['String']>
  profilePictureUrl?: Maybe<Scalars['String']>
  canvaAvatarDesignId?: Maybe<Scalars['String']>
  canvaBackgroundDesignId?: Maybe<Scalars['String']>
  shadowColor?: Maybe<Scalars['String']>
  buttonShadowColor?: Maybe<Scalars['String']>
  backgroundPoster?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<Scalars['String']>
  backgroundImageAttributes?: Maybe<Scalars['String']>
  customAvatarAttributes?: Maybe<Scalars['String']>
  colorSchema?: Maybe<ColorSchema>
  headingType?: Maybe<HeadingType>
  headingLogo?: Maybe<Scalars['String']>
  headingFont?: Maybe<Scalars['String']>
  headingColor?: Maybe<Scalars['String']>
  headingSize?: Maybe<HeadingSize>
  headingEffect?: Maybe<HeadingEffect>
  headingLogoSize?: Maybe<HeadingLogoSize>
  backgroundNoise?: Maybe<Scalars['Boolean']>
  backgroundImageEffect?: Maybe<BackgroundImageEffect>
}

export interface UpdateAccountInfoInput {
  realName: Scalars['String']
  verticals: Array<Scalars['String']>
  verticalsOther?: Maybe<Scalars['String']>
}

export interface UpdateAccountTitleAndDescriptionInput {
  pageTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export interface UpdateAffiliateTokenInput {
  program: Scalars['String']
  advertiser?: Maybe<Scalars['String']>
  token: Scalars['String']
  aid?: Maybe<Scalars['String']>
}

export interface UpdateBaseThemeByKeyInput {
  themeKey: Scalars['String']
  title?: Maybe<Scalars['String']>
  visibility?: Maybe<ThemeVisibility>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  buttonStyle?: Maybe<Scalars['String']>
  buttonColor?: Maybe<Scalars['String']>
  buttonTextColor?: Maybe<Scalars['String']>
  buttonCorners?: Maybe<Scalars['String']>
  buttonShadow?: Maybe<Scalars['String']>
  buttonShadowColor?: Maybe<Scalars['String']>
  backgroundStyle?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundAssetUrl?: Maybe<Scalars['String']>
  backgroundGradient?: Maybe<Array<Scalars['String']>>
  backgroundPosterUrl?: Maybe<Scalars['String']>
  fontStyle?: Maybe<Scalars['String']>
  fontColor?: Maybe<Scalars['String']>
  luminance?: Maybe<Scalars['String']>
  footerLogoUrl?: Maybe<Scalars['String']>
  footerUrl?: Maybe<Scalars['String']>
  footerCustomColor?: Maybe<Scalars['String']>
  isEditable?: Maybe<Scalars['Boolean']>
  /** The email of the operator updating the base theme */
  updatingOperator?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  headingType?: Maybe<Scalars['String']>
  headingLogo?: Maybe<Scalars['String']>
  headingFont?: Maybe<Scalars['String']>
  headingColor?: Maybe<Scalars['String']>
  headingSize?: Maybe<Scalars['String']>
  h3TextColor?: Maybe<Scalars['String']>
  h2TextColor?: Maybe<Scalars['String']>
  h1TextColor?: Maybe<Scalars['String']>
  socialLinkColor?: Maybe<Scalars['String']>
  mouseCursor?: Maybe<Scalars['String']>
  headingEffect?: Maybe<Scalars['String']>
  headingLogoSize?: Maybe<Scalars['String']>
  colorSchema?: Maybe<Scalars['String']>
  backgroundGradientStyle?: Maybe<Scalars['String']>
  backgroundTint?: Maybe<Scalars['Int']>
  avatarMode?: Maybe<Scalars['String']>
  avatarType?: Maybe<Scalars['String']>
  customAvatar?: Maybe<Scalars['String']>
  customAvatarVideo?: Maybe<Scalars['String']>
  backgroundHeroColor?: Maybe<Scalars['String']>
  colorPalette?: Maybe<Array<Maybe<Scalars['String']>>>
  tier?: Maybe<Scalars['String']>
}

export interface UpdateBaseThemeFromAccountThemeInput {
  accountId: Scalars['Int']
  themeKey: Scalars['String']
  /** The email of the operator updating the base theme */
  updatingOperator?: Maybe<Scalars['String']>
}

export interface UpdateInAppSubscriptionResult {
  user?: Maybe<User>
}

export interface UpdateLinkInput {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  active?: Maybe<Scalars['Boolean']>
  status?: Maybe<LinkStatus>
  isTitleAiGenerated?: Maybe<Scalars['Boolean']>
}

export interface UpdateMailchimpIntegrationInput {
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface UpdateProcessedCustomVideoInput {
  accountUuid?: Maybe<Scalars['String']>
  linkId?: Maybe<Scalars['Int']>
  updatedUrl?: Maybe<Scalars['String']>
  originalUrl?: Maybe<Scalars['String']>
  videoType?: Maybe<ProcessedCustomVideoType>
  hlsUrl?: Maybe<Scalars['String']>
  userUuid?: Maybe<Scalars['String']>
  originalFileName?: Maybe<Scalars['String']>
}

export interface UpdateProcessedCustomVideoResult {
  result?: Maybe<Scalars['String']>
}

export interface UpdateShopifyIntegrationInput {
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface UpdateSocialFeedMutationInput {
  title?: Maybe<Scalars['String']>
  layout?: Maybe<SocialFeedLayoutType>
  active?: Maybe<Scalars['Boolean']>
  socialIntegrationId?: Maybe<Scalars['String']>
}

export interface UpdateSocialFeedPostMediaLinkMutationInput {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  coordinates?: Maybe<SocialFeedPostMediaLinkCoordinatesInput>
  position?: Maybe<Scalars['Int']>
  active?: Maybe<Scalars['Boolean']>
}

export interface UpdateSocialFeedPostMediaMutationInput {
  mediaUrl?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
}

export interface UpdateSocialFeedPostMutationInput {
  caption?: Maybe<Scalars['String']>
  pinned?: Maybe<Scalars['Boolean']>
  visible?: Maybe<Scalars['Boolean']>
  thumbnailUrl?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  mediaUrl?: Maybe<Scalars['String']>
}

export interface UpdateSocialIntegrationInput {
  id: Scalars['String']
  type: SocialIntegrationType
  displayName?: Maybe<Scalars['String']>
}

export interface UpdateSocialLinksPositionInput {
  socialLinksPosition: SocialLinksPosition
}

export interface UpdateSocialLinksPositionResult {
  user?: Maybe<User>
}

export interface UpdateSocialLinksResult {
  user?: Maybe<User>
}

export interface UpdateSponsoredLinksResult {
  success?: Maybe<Scalars['Boolean']>
  updatedCount?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
}

export interface UpdateSpringIntegrationInput {
  id: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export interface UpdateSquareIntegrationInput {
  title: Scalars['String']
  locationId: Scalars['ID']
}

export interface UpdateSubscriptionAddOnInput {
  name: Scalars['String']
  quantity: Scalars['Int']
}

export interface UpdateSubscriptionAddOnResult {
  quantity: Scalars['Int']
  product: SubscriptionAddOnProduct
}

export interface UpdateSubscriptionInput {
  currency: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  price?: Maybe<Scalars['Int']>
  subscriptionId?: Maybe<Scalars['Int']>
  corrilyPriceShown?: Maybe<Scalars['Boolean']>
}

export interface UpdateSubscriptionResult {
  user?: Maybe<User>
}

export interface UpdateSubscriptionV2ActiveAccountInput {
  activeAccountId: Scalars['Int']
  subscriptionId: Scalars['Int']
}

export interface UpdateSubscriptionV2Input {
  currency: Scalars['String']
  tier: Scalars['String']
  frequency: Scalars['String']
  price?: Maybe<Scalars['Int']>
  subscriptionId?: Maybe<Scalars['Int']>
  accountIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface UpdateUserInput {
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface UpdateUserPhoneNumberResult {
  success?: Maybe<Scalars['Boolean']>
}

export interface UpdateUserResult {
  success?: Maybe<Scalars['Boolean']>
}

export interface User {
  id: Scalars['Int']
  uuid: Scalars['String']
  deleted?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  maskedEmail?: Maybe<Scalars['String']>
  realName?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  selectedAccount?: Maybe<Account>
  accounts: Array<Account>
  username?: Maybe<Scalars['String']>
  instagramId?: Maybe<Scalars['String']>
  instagramUsername?: Maybe<Scalars['String']>
  profilePicture?: Maybe<Scalars['String']>
  businessAccount: Scalars['Boolean']
  followedBy?: Maybe<Scalars['Int']>
  following?: Maybe<Scalars['Int']>
  mediaCount?: Maybe<Scalars['Int']>
  bio?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  hasSelectedPlan?: Maybe<Scalars['Int']>
  emailVerified?: Maybe<Scalars['Int']>
  emailVerificationRequired?: Maybe<Scalars['Int']>
  signupMethod?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Int']>
  isEmailVerified: Scalars['Boolean']
  mfaEnrolmentUrl: Scalars['String']
  /** @deprecated Use mfaFactors instead */
  mfaStatus: Scalars['Boolean']
  mfaFactors: Array<MfaFactor>
  isAccountOwner?: Maybe<Scalars['Boolean']>
  phoneNumber?: Maybe<Scalars['String']>
  canChangeEmail?: Maybe<Scalars['Boolean']>
  canResetPassword?: Maybe<Scalars['Boolean']>
  oauthId?: Maybe<Scalars['String']>
  canCreateMultiProfile?: Maybe<Scalars['Boolean']>
  ownedAccounts: Array<Account>
  /** @deprecated We have achieved the goal of email uniqueness. This is always false. */
  showMergeLinktrees: Scalars['Boolean']
  /** @deprecated Use getUserEntitlementsQuery instead */
  entitlements: UserEntitlements
  intercomHash?: Maybe<Scalars['String']>
}

export interface UserSelectedAccountArgs {
  isGlowUpPreview?: Maybe<Scalars['Boolean']>
}

export interface UserIntercomHashArgs {
  platform?: Maybe<Scalars['String']>
}

export interface UserDetailsForChargehound {
  subscriptionInterval: Scalars['String']
  purchasedAt: Scalars['String']
  planName: Scalars['String']
  customerCreatedAt: Scalars['String']
  userName: Scalars['String']
  customerPurchasedIp?: Maybe<Scalars['String']>
  cancelationDate?: Maybe<Scalars['String']>
  pastPayments: Array<Maybe<PastPaymentsForChargehound>>
}

export interface UserEntitlement {
  name: UserEntitlementName
  type: EntitlementType
  isQualified: Scalars['Boolean']
  quota?: Maybe<EntitlementQuota>
  requiredProduct?: Maybe<EntitlementProduct>
  cacheType: CacheType
}

export enum UserEntitlementName {
  AdminAccounts = 'AdminAccounts',
  MultiAccountCreation = 'MultiAccountCreation',
  PurchasePlannBrand = 'PurchasePlannBrand'
}

export interface UserEntitlements {
  isMultiAccountEligible: Scalars['Boolean']
}

export interface UserFromEmailResult {
  user?: Maybe<User>
  totalUsers: Scalars['Int']
}

export interface UserStatus {
  isHalfSignup?: Maybe<Scalars['Boolean']>
  isPasswordResetAllowed: Scalars['Boolean']
  showOtpErrorMsg: Scalars['Boolean']
  isDuplicateEmail: Scalars['Boolean']
}

export interface UsernameInput {
  username: Scalars['String']
}

export interface UsernamePasswordInput {
  username: Scalars['String']
  password: Scalars['String']
}

export interface UtmParameter {
  isActive: Scalars['Boolean']
  medium?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
}

export interface ValidateGoogleSheetsIdResult {
  /**
   * Whether the provided Google Sheet ID is valid and accessible with the
   * integration credentials.
   */
  valid: Scalars['Boolean']
}

export interface ValidateGoogleYouTubeResult {
  isValid: Scalars['Boolean']
}

export interface ValidationInput {
  minAge?: Maybe<Scalars['Int']>
  age?: Maybe<Scalars['Int']>
  acceptedSensitiveContent?: Maybe<Array<Maybe<Scalars['Int']>>>
  passcode?: Maybe<Array<Maybe<PasscodeInput>>>
  passcodeV2?: Maybe<PasscodeInput>
  subscribed?: Maybe<Scalars['Boolean']>
  followerId?: Maybe<Scalars['String']>
  nft?: Maybe<NftInput>
  payment?: Maybe<Scalars['Boolean']>
}

export interface VerifiedDeleteAccountResult {
  success: Scalars['Boolean']
}

export interface VerifiedDeleteCurrentUserResult {
  success: Scalars['Boolean']
}

export interface VerifyEmailResult {
  success?: Maybe<Scalars['Boolean']>
}

export interface Version {
  sha: Scalars['String']
}

export interface VideoBackground {
  imageUrl: Scalars['String']
  posterUrl?: Maybe<Scalars['String']>
  color: Scalars['String']
  type: BackgroundType
  tint: Scalars['String']
  noise: Scalars['Boolean']
}

export interface VideoLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface VideoLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface ViewInput {
  viewId?: Maybe<Scalars['Int']>
  userUuid?: Maybe<Scalars['String']>
  isDefaultView?: Maybe<Scalars['Boolean']>
  geoTag?: Maybe<Scalars['String']>
}

export interface VimeoLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface VimeoLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export enum VisualLinkPreviewLayoutOption {
  Stack = 'stack',
  Grid = 'grid',
  Carousel = 'carousel',
  Featured = 'featured',
  FeaturedSubscribe = 'featuredSubscribe'
}

export interface WallGateRule {
  enforced?: Maybe<LinkRuleFilter>
}

export interface YouTubeChannelStatistics {
  viewCount?: Maybe<Scalars['String']>
  subscriberCount?: Maybe<Scalars['String']>
  hiddenSubscriberCount?: Maybe<Scalars['Boolean']>
  videoCount?: Maybe<Scalars['String']>
}

export interface YouTubeMostPopularResult {
  /** @deprecated Deprecated: server no longer paginates; use limit param to control size. */
  nextPageToken?: Maybe<Scalars['String']>
  /** @deprecated Deprecated: server no longer paginates; use limit param to control size. */
  prevPageToken?: Maybe<Scalars['String']>
  videos?: Maybe<Array<Maybe<YouTubeVideo>>>
}

export interface YouTubeVideo {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['String']>
  statistics?: Maybe<YouTubeVideoStatistics>
}

export interface YouTubeVideoStatistics {
  viewCount?: Maybe<Scalars['String']>
  likeCount?: Maybe<Scalars['String']>
  commentCount?: Maybe<Scalars['String']>
}

export interface YoutubeChannelLinkContext {
  channelId?: Maybe<Scalars['String']>
  subscribe?: Maybe<Scalars['Boolean']>
  embedOption?: Maybe<LinkEmbedOptions>
}

export interface YoutubeLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  subscribe?: Maybe<Scalars['Boolean']>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  videoId?: Maybe<Scalars['String']>
  channelId?: Maybe<Scalars['String']>
  playlistId?: Maybe<Scalars['String']>
}

export interface YoutubeLinkContextInput {
  embedOption?: Maybe<LinkEmbedOptions>
  channelId?: Maybe<Scalars['String']>
  playlistId?: Maybe<Scalars['String']>
  videoId?: Maybe<Scalars['String']>
  autoplay?: Maybe<Scalars['Boolean']>
  subscribe?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
}

export interface YoutubePlaylistLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  /**
   * If the URL is a video in a playlist, the use YOUTUBE_PLAYLIST link-app to
   * model it. And this field capture the video ID.
   */
  videoId?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['Int']>
  list?: Maybe<Scalars['String']>
  playlistId?: Maybe<Scalars['String']>
  /** The YouTube channel ID, who owns the playlist. */
  channelId?: Maybe<Scalars['String']>
}

export interface YoutubePlaylistLinkContextVideoIdArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface YoutubePlaylistLinkContextListArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface YoutubePlaylistLinkContextPlaylistIdArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface YoutubeVideoLinkContext {
  embedOption?: Maybe<LinkEmbedOptions>
  autoplay?: Maybe<Scalars['Boolean']>
  mute?: Maybe<Scalars['Boolean']>
  videoId?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['Int']>
  /**
   * The YouTube channel ID, who originally creates the video. For example, if you
   * create a playlist contains an Adele song. This is Adele channel ID.
   */
  channelId?: Maybe<Scalars['String']>
}

export interface YoutubeVideoLinkContextVideoIdArgs {
  evaluateGate?: Maybe<Scalars['Boolean']>
}

export interface ZapierIntegrationContext {
  title?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  termsActive?: Maybe<Scalars['Boolean']>
  termsLabel?: Maybe<Scalars['String']>
  termsUrl?: Maybe<Scalars['String']>
  webhookUrl?: Maybe<Scalars['String']>
}

export interface ZoomIntegrationContext {
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Int']>
  expiresIn?: Maybe<Scalars['Int']>
  scope?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  isAuthenticated?: Maybe<Scalars['Boolean']>
}
