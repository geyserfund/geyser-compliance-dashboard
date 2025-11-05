import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type ActivitiesCountGroupedByProjectInput = {
  createdAt: DateRangeInput;
  feed: ActivityFeedName;
};

export type ActivitiesGetResponse = {
  __typename?: 'ActivitiesGetResponse';
  activities: Array<Activity>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export type Activity = {
  __typename?: 'Activity';
  activityType: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  project: Project;
  resource: ActivityResource;
};

export type ActivityCreatedSubscriptionInput = {
  where?: InputMaybe<ActivityCreatedSubscriptionWhereInput>;
};

export type ActivityCreatedSubscriptionWhereInput = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  feed?: InputMaybe<ActivityFeedName>;
  projectIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  region?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ActivityResourceType>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  userIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ActivityFeedName {
  FollowedProjects = 'FOLLOWED_PROJECTS',
  GlobalProjects = 'GLOBAL_PROJECTS',
  MyProjects = 'MY_PROJECTS'
}

export type ActivityResource = Contribution | Entry | Post | Project | ProjectGoal | ProjectReward;

export enum ActivityResourceType {
  Contribution = 'CONTRIBUTION',
  Post = 'POST',
  Project = 'PROJECT',
  ProjectGoal = 'PROJECT_GOAL',
  ProjectReward = 'PROJECT_REWARD'
}

export type Ambassador = {
  __typename?: 'Ambassador';
  contributionsCount: Scalars['Int']['output'];
  contributionsSum: Scalars['BigInt']['output'];
  id: Scalars['BigInt']['output'];
  payoutRate: Scalars['Float']['output'];
  user: User;
};

export type AmbassadorAddInput = {
  heroId: Scalars['String']['input'];
  payoutRate: Scalars['Float']['input'];
  projectId: Scalars['BigInt']['input'];
};

export type AmbassadorStats = HeroStats & {
  __typename?: 'AmbassadorStats';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  /** Number of projects shared by the User. */
  projectsCount: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
};

export type AmbassadorUpdateInput = {
  /** The payout rate for the ambassador, value between 0 and 99. */
  payoutRate: Scalars['Float']['input'];
  projectId: Scalars['BigInt']['input'];
  userId: Scalars['BigInt']['input'];
};

export enum AmountCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type AmountSummary = {
  __typename?: 'AmountSummary';
  donationAmount: Scalars['Int']['output'];
  rewardsCost: Scalars['Int']['output'];
  shippingCost: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AnalyticsGroupByInterval {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Badge = {
  __typename?: 'Badge';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  thumb: Scalars['String']['output'];
  uniqueName: Scalars['String']['output'];
};

export type BadgeClaimInput = {
  userBadgeId: Scalars['BigInt']['input'];
};

export type BadgesGetInput = {
  where?: InputMaybe<BadgesGetWhereInput>;
};

export type BadgesGetWhereInput = {
  contributionId?: InputMaybe<Scalars['BigInt']['input']>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum BaseCurrency {
  Btc = 'BTC'
}

export type BitcoinPaymentMethods = {
  __typename?: 'BitcoinPaymentMethods';
  lightning: LightningPaymentMethods;
  onChain: OnChainPaymentMethods;
};

export type BitcoinQuote = {
  __typename?: 'BitcoinQuote';
  quote: Scalars['Float']['output'];
  quoteCurrency: QuoteCurrency;
};

export type BoardVoteGrant = {
  __typename?: 'BoardVoteGrant';
  applicants: Array<GrantApplicant>;
  balance: Scalars['Int']['output'];
  boardMembers: Array<GrantBoardMember>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  sponsors: Array<Sponsor>;
  status: GrantStatusEnum;
  statuses: Array<GrantStatus>;
  title: Scalars['String']['output'];
  type: GrantType;
};


export type BoardVoteGrantApplicantsArgs = {
  input?: InputMaybe<GrantApplicantsGetInput>;
};

export type CommunityVoteGrant = {
  __typename?: 'CommunityVoteGrant';
  applicants: Array<GrantApplicant>;
  balance: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  distributionSystem: DistributionSystem;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  sponsors: Array<Sponsor>;
  status: GrantStatusEnum;
  statuses: Array<GrantStatus>;
  title: Scalars['String']['output'];
  type: GrantType;
  votes: CompetitionVoteGrantVoteSummary;
  votingSystem: VotingSystem;
};


export type CommunityVoteGrantApplicantsArgs = {
  input?: InputMaybe<GrantApplicantsGetInput>;
};

export type CompetitionVoteGrantVoteSummary = {
  __typename?: 'CompetitionVoteGrantVoteSummary';
  voteCount: Scalars['Int']['output'];
  voterCount: Scalars['Int']['output'];
};

export type ConnectionDetails = LightningAddressConnectionDetails | LndConnectionDetailsPrivate | LndConnectionDetailsPublic | NwcConnectionDetailsPrivate;

export type Contribution = {
  __typename?: 'Contribution';
  amount: Scalars['Int']['output'];
  bitcoinQuote?: Maybe<BitcoinQuote>;
  comment?: Maybe<Scalars['String']['output']>;
  confirmedAt?: Maybe<Scalars['Date']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  /** Creator's email address. Only visible to the contributor. */
  creatorEmail?: Maybe<Scalars['String']['output']>;
  creatorTaxProfile?: Maybe<UserTaxProfile>;
  donationAmount: Scalars['Int']['output'];
  /** Contributor's email address. Only visible to the project owner. */
  email?: Maybe<Scalars['String']['output']>;
  funder: Funder;
  id: Scalars['BigInt']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  isSubscription: Scalars['Boolean']['output'];
  media?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  payments: Array<Payment>;
  privateComment?: Maybe<Scalars['String']['output']>;
  projectGoalId?: Maybe<Scalars['BigInt']['output']>;
  projectId: Scalars['BigInt']['output'];
  sourceResource?: Maybe<SourceResource>;
  status: ContributionStatus;
  /** Private reference code viewable only by the Funder and the ProjectOwner related to this Contribution */
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ContributionCreateInput = {
  ambassadorHeroId?: InputMaybe<Scalars['String']['input']>;
  /** Set to true if the funder wishes to remain anonymous. The user will still be associated to the contribution. */
  anonymous: Scalars['Boolean']['input'];
  donationAmount: Scalars['Int']['input'];
  /** The percentage of the donation that will be tipped to Geyser, between 0 and 100. */
  geyserTipPercentage?: InputMaybe<Scalars['Float']['input']>;
  metadataInput?: InputMaybe<ContributionMetadataInput>;
  orderInput?: InputMaybe<OrderContributionInput>;
  paymentsInput?: InputMaybe<ContributionPaymentsInput>;
  projectGoalId?: InputMaybe<Scalars['BigInt']['input']>;
  projectId: Scalars['BigInt']['input'];
  referrerHeroId?: InputMaybe<Scalars['String']['input']>;
  refundable: Scalars['Boolean']['input'];
  /** The resource from which the contribution is being created. */
  sourceResourceInput: ResourceInput;
};

export type ContributionEmailUpdateInput = {
  contributionId: Scalars['BigInt']['input'];
  email: Scalars['String']['input'];
};

export type ContributionFiatPaymentDetails = {
  __typename?: 'ContributionFiatPaymentDetails';
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars['BigInt']['output'];
  stripeClientSecret: Scalars['String']['output'];
};

export type ContributionFiatPaymentDetailsInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  stripe: ContributionFiatPaymentDetailsStripeInput;
};

export type ContributionFiatPaymentDetailsStripeInput = {
  returnUrl: Scalars['String']['input'];
};

export type ContributionFiatSwapPaymentDetails = {
  __typename?: 'ContributionFiatSwapPaymentDetails';
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  checkoutUrl: Scalars['String']['output'];
  fees: Array<PaymentFee>;
  paymentId: Scalars['BigInt']['output'];
};

export type ContributionFiatSwapPaymentDetailsBanxaInput = {
  fiatCurrency: Scalars['String']['input'];
  returnUrl: Scalars['String']['input'];
};

export type ContributionFiatSwapPaymentDetailsBoltzInput = {
  swapPublicKey: Scalars['String']['input'];
};

export type ContributionFiatSwapPaymentDetailsInput = {
  banxa: ContributionFiatSwapPaymentDetailsBanxaInput;
  create?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributionLightningPaymentDetails = {
  __typename?: 'ContributionLightningPaymentDetails';
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  lightningInvoiceId: Scalars['String']['output'];
  paymentId: Scalars['BigInt']['output'];
  paymentRequest: Scalars['String']['output'];
};

export type ContributionLightningPaymentDetailsInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  zapRequest?: InputMaybe<Scalars['String']['input']>;
};

export type ContributionLightningToRskSwapPaymentDetails = {
  __typename?: 'ContributionLightningToRskSwapPaymentDetails';
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  lightningInvoiceId: Scalars['String']['output'];
  paymentId: Scalars['BigInt']['output'];
  paymentRequest: Scalars['String']['output'];
  swapJson: Scalars['String']['output'];
};

export type ContributionLightningToRskSwapPaymentDetailsBoltzInput = {
  claimAddress: Scalars['String']['input'];
  claimPublicKey: Scalars['String']['input'];
  preimageHash: Scalars['String']['input'];
};

export type ContributionLightningToRskSwapPaymentDetailsInput = {
  boltz: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributionMetadataInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  followProject?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  privateComment?: InputMaybe<Scalars['String']['input']>;
  subscribeToGeyserEmails?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributionMutationResponse = {
  __typename?: 'ContributionMutationResponse';
  contribution: Contribution;
  payments: ContributionPaymentsDetails;
};

export type ContributionOnChainSwapPaymentDetails = {
  __typename?: 'ContributionOnChainSwapPaymentDetails';
  address: Scalars['String']['output'];
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars['BigInt']['output'];
  swapJson: Scalars['String']['output'];
};

export type ContributionOnChainSwapPaymentDetailsInput = {
  boltz: ContributionFiatSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributionOnChainToRskSwapPaymentDetails = {
  __typename?: 'ContributionOnChainToRskSwapPaymentDetails';
  address: Scalars['String']['output'];
  amountDue: Scalars['Int']['output'];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars['BigInt']['output'];
  swapJson: Scalars['String']['output'];
};

export type ContributionOnChainToRskSwapPaymentDetailsBoltzInput = {
  claimAddress: Scalars['String']['input'];
  claimPublicKey: Scalars['String']['input'];
  preimageHash: Scalars['String']['input'];
};

export type ContributionOnChainToRskSwapPaymentDetailsInput = {
  boltz: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributionPaymentsAddInput = {
  contributionId: Scalars['BigInt']['input'];
  paymentsInput: ContributionPaymentsInput;
};

export type ContributionPaymentsAddResponse = {
  __typename?: 'ContributionPaymentsAddResponse';
  payments: ContributionPaymentsDetails;
};

export type ContributionPaymentsDetails = {
  __typename?: 'ContributionPaymentsDetails';
  fiat?: Maybe<ContributionFiatPaymentDetails>;
  fiatSwap?: Maybe<ContributionFiatSwapPaymentDetails>;
  lightning?: Maybe<ContributionLightningPaymentDetails>;
  lightningToRskSwap?: Maybe<ContributionLightningToRskSwapPaymentDetails>;
  onChainSwap?: Maybe<ContributionOnChainSwapPaymentDetails>;
  onChainToRskSwap?: Maybe<ContributionOnChainToRskSwapPaymentDetails>;
};

export type ContributionPaymentsInput = {
  fiat?: InputMaybe<ContributionFiatPaymentDetailsInput>;
  fiatSwap?: InputMaybe<ContributionFiatSwapPaymentDetailsInput>;
  lightning?: InputMaybe<ContributionLightningPaymentDetailsInput>;
  lightningToRskSwap?: InputMaybe<ContributionLightningToRskSwapPaymentDetailsInput>;
  onChainSwap?: InputMaybe<ContributionOnChainSwapPaymentDetailsInput>;
  onChainToRskSwap?: InputMaybe<ContributionOnChainToRskSwapPaymentDetailsInput>;
};

export enum ContributionStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Pledged = 'PLEDGED'
}

export type ContributionStatusUpdatedInput = {
  contributionId?: InputMaybe<Scalars['BigInt']['input']>;
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ContributionStatusUpdatedSubscriptionResponse = {
  __typename?: 'ContributionStatusUpdatedSubscriptionResponse';
  contribution: Contribution;
};

export type ContributionsGetResponse = {
  __typename?: 'ContributionsGetResponse';
  contributions: Array<Contribution>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export type ContributionsSummary = {
  __typename?: 'ContributionsSummary';
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  contributorsCount: Scalars['Int']['output'];
};

export enum ContributionsSummaryPeriod {
  AllTime = 'ALL_TIME',
  Month = 'MONTH',
  Week = 'WEEK'
}

export enum ContributionsWhereContributionStatus {
  Confirmed = 'CONFIRMED'
}

export type ContributorContributionsSummary = {
  __typename?: 'ContributorContributionsSummary';
  commentsCount: Scalars['Int']['output'];
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
};

export type ContributorStats = HeroStats & {
  __typename?: 'ContributorStats';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  /** Number of projects contributed to by the User. */
  projectsCount: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreateEntryInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  /** Short description of the Entry. */
  description: Scalars['String']['input'];
  /** Header image of the Entry. */
  image?: InputMaybe<Scalars['String']['input']>;
  markdown?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['BigInt']['input'];
  /** Title of the Entry. */
  title: Scalars['String']['input'];
  type: EntryType;
};

export type CreateProjectInput = {
  /** Project category */
  category: ProjectCategory;
  /** Project ISO3166 country code */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** A short description of the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Project header images */
  images: Array<Scalars['String']['input']>;
  /** Project links */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Project region */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The currency used to price rewards for the project. Currently only USDCENT supported. */
  rewardCurrency?: InputMaybe<RewardCurrency>;
  shortDescription: Scalars['String']['input'];
  /** Project sub-category */
  subCategory: ProjectSubCategory;
  /** Project tags */
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  thumbnailImage?: InputMaybe<Scalars['String']['input']>;
  /** Public title of the project. */
  title: Scalars['String']['input'];
  type?: InputMaybe<ProjectType>;
};

export type CreateProjectRewardInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  confirmationMessage?: InputMaybe<Scalars['String']['input']>;
  /** Cost of the reward, currently only in USD cents */
  cost: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedAvailabilityDate?: InputMaybe<Scalars['Date']['input']>;
  estimatedDeliveryInWeeks?: InputMaybe<Scalars['Int']['input']>;
  hasShipping: Scalars['Boolean']['input'];
  images: Array<Scalars['String']['input']>;
  isAddon?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  maxClaimable?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  preOrder?: InputMaybe<Scalars['Boolean']['input']>;
  privateCommentPrompts: Array<PrivateCommentPrompt>;
  projectId: Scalars['BigInt']['input'];
  shippingConfigId?: InputMaybe<Scalars['BigInt']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProjectShippingConfigInput = {
  globalShipping: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['BigInt']['input'];
  shippingRates: Array<UpdateProjectShippingFeeRateInput>;
  type: ProjectShippingConfigType;
};

export type CreateProjectSubscriptionPlanInput = {
  amount: Scalars['Int']['input'];
  currency: SubscriptionCurrencyType;
  description?: InputMaybe<Scalars['String']['input']>;
  intervalType: UserSubscriptionInterval;
  name: Scalars['String']['input'];
  projectId: Scalars['BigInt']['input'];
};

export type CreateUserSubscriptionInput = {
  projectSubscriptionPlanId: Scalars['BigInt']['input'];
  userId: Scalars['BigInt']['input'];
};

export type CreateWalletInput = {
  feePercentage: Scalars['Float']['input'];
  lightningAddressConnectionDetailsInput?: InputMaybe<LightningAddressConnectionDetailsCreateInput>;
  lndConnectionDetailsInput?: InputMaybe<LndConnectionDetailsCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  nwcConnectionDetailsInput?: InputMaybe<NwcConnectionDetailsCreateInput>;
  resourceInput: WalletResourceInput;
};

export type CreatorNotificationSettings = {
  __typename?: 'CreatorNotificationSettings';
  notificationSettings: Array<NotificationSettings>;
  project: CreatorNotificationSettingsProject;
  userId: Scalars['BigInt']['output'];
};

export type CreatorNotificationSettingsProject = {
  __typename?: 'CreatorNotificationSettingsProject';
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type CreatorStats = HeroStats & {
  __typename?: 'CreatorStats';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  /** Number of projects created by the User. */
  projectsCount: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
};

export enum Currency {
  Usdcent = 'USDCENT'
}

export type CurrencyQuoteGetInput = {
  baseCurrency: BaseCurrency;
  quoteCurrency: QuoteCurrency;
};

export type CurrencyQuoteGetResponse = {
  __typename?: 'CurrencyQuoteGetResponse';
  baseCurrency: BaseCurrency;
  quote: Scalars['Float']['output'];
  quoteCurrency: QuoteCurrency;
  timestamp: Scalars['Date']['output'];
};

export type CursorInput = {
  id: Scalars['BigInt']['input'];
};

export type CursorInputString = {
  id: Scalars['String']['input'];
};

export type CursorPaginationResponse = {
  __typename?: 'CursorPaginationResponse';
  count?: Maybe<Scalars['Int']['output']>;
  cursor?: Maybe<PaginationCursor>;
  take?: Maybe<Scalars['Int']['output']>;
};

export type DateRangeInput = {
  endDateTime?: InputMaybe<Scalars['Date']['input']>;
  startDateTime?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeRange = {
  __typename?: 'DatetimeRange';
  /** The end datetime for filtering the data, default is now. */
  endDateTime?: Maybe<Scalars['Date']['output']>;
  /** The start datetime for filtering the data. */
  startDateTime: Scalars['Date']['output'];
};

export type DeleteProjectInput = {
  projectId: Scalars['BigInt']['input'];
};

export type DeleteProjectRewardInput = {
  projectRewardId: Scalars['BigInt']['input'];
};

export type DeleteUserResponse = MutationResponse & {
  __typename?: 'DeleteUserResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum DistributionSystem {
  None = 'NONE',
  Proportional = 'PROPORTIONAL',
  WinnerTakeAll = 'WINNER_TAKE_ALL'
}

export type EmailSendOptionsInput = {
  projectRewardUUIDs?: InputMaybe<Array<Scalars['String']['input']>>;
  segment: EmailSubscriberSegment;
};

export enum EmailSubscriberSegment {
  Contributors = 'CONTRIBUTORS',
  Followers = 'FOLLOWERS',
  RewardBuyers = 'REWARD_BUYERS'
}

export type EmailVerifyInput = {
  otp: Scalars['Int']['input'];
  otpVerificationToken: Scalars['String']['input'];
};

export type Entry = {
  __typename?: 'Entry';
  /** Total amount of satoshis funded from the Entry page. */
  amountFunded: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  /** Contributions that were created from the Entry's page. */
  contributions: Array<Contribution>;
  createdAt: Scalars['String']['output'];
  /** User that created the Entry. */
  creator: User;
  /** Short description of the Entry. */
  description: Scalars['String']['output'];
  /** Number of funders that were created from the Entry's page. */
  fundersCount: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  /** Header image of the Entry. */
  image?: Maybe<Scalars['String']['output']>;
  markdown?: Maybe<Scalars['String']['output']>;
  /** Project within which the Entry was created. */
  project?: Maybe<Project>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  status: EntryStatus;
  /** Title of the Entry. */
  title: Scalars['String']['output'];
  type: EntryType;
  updatedAt: Scalars['String']['output'];
};

export type EntryPublishedSubscriptionResponse = {
  __typename?: 'EntryPublishedSubscriptionResponse';
  entry: Entry;
};

export enum EntryStatus {
  Deleted = 'deleted',
  Published = 'published',
  Unpublished = 'unpublished'
}

export enum EntryType {
  Article = 'article',
  Podcast = 'podcast',
  Video = 'video'
}

export type ExternalAccount = {
  __typename?: 'ExternalAccount';
  accountType: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  externalLink?: Maybe<Scalars['String']['output']>;
  externalUsername: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  public: Scalars['Boolean']['output'];
};

export enum FeeCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type FiatPaymentMethods = {
  __typename?: 'FiatPaymentMethods';
  banxa: Scalars['Boolean']['output'];
  enabled: Scalars['Boolean']['output'];
  stripe: Scalars['Boolean']['output'];
};

export type FiatToLightningSwapPaymentDetails = {
  __typename?: 'FiatToLightningSwapPaymentDetails';
  lightningInvoiceId: Scalars['String']['output'];
  lightningInvoiceStatus: LightningInvoiceStatus;
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type FileUploadInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  /** MIME type of the file. Currently only supports image types. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The Funder type contains a User's funding details over a particular project. */
export type Funder = {
  __typename?: 'Funder';
  /** Aggregate amount funded by a Funder over all his (confirmed) funding transactions for a particular project, in satoshis. */
  amountFunded?: Maybe<Scalars['Int']['output']>;
  /** Boolean value indicating whether at least one of the funding transactions of the Funder were confirmed. */
  confirmed: Scalars['Boolean']['output'];
  /** Time at which the first confirmed funding transactions of the Funder was confirmed. */
  confirmedAt?: Maybe<Scalars['Date']['output']>;
  /** Funder's contributions. */
  contributions: Array<Contribution>;
  /** Contribution's funding summary, possibly in different time ranges. */
  contributionsSummary?: Maybe<ContributorContributionsSummary>;
  id: Scalars['BigInt']['output'];
  orders: Array<Order>;
  /** Contributor's rank in the project. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** Number of (confirmed) times a Funder funded a particular project. */
  timesFunded?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


/** The Funder type contains a User's funding details over a particular project. */
export type FunderContributionsArgs = {
  input?: InputMaybe<GetContributorContributionsInput>;
};


/** The Funder type contains a User's funding details over a particular project. */
export type FunderContributionsSummaryArgs = {
  period?: InputMaybe<ContributionsSummaryPeriod>;
};

export type FunderRewardGraphSum = GraphSumData & {
  __typename?: 'FunderRewardGraphSum';
  dateTime: Scalars['Date']['output'];
  rewardId: Scalars['BigInt']['output'];
  rewardName: Scalars['String']['output'];
  sum: Scalars['Int']['output'];
};

export enum FundingResourceType {
  Activity = 'activity',
  Entry = 'entry',
  Project = 'project',
  User = 'user'
}

export type GetActivitiesInput = {
  pagination?: InputMaybe<GetActivityPaginationInput>;
  where?: InputMaybe<GetActivityWhereInput>;
};

export type GetActivityOrderByInput = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
};

export type GetActivityPaginationInput = {
  cursor?: InputMaybe<CursorInputString>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type GetActivityWhereInput = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateRangeInput>;
  feed?: InputMaybe<ActivityFeedName>;
  projectIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  region?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ActivityResourceType>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  userIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type GetContributionsInput = {
  orderBy?: InputMaybe<GetContributionsOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GetContributionsWhereInput>;
};

export type GetContributionsOrderByInput = {
  createdAt: OrderByOptions;
};

export type GetContributionsWhereInput = {
  NOT?: InputMaybe<GetContributionsWhereInput>;
  OR?: InputMaybe<Array<InputMaybe<GetContributionsWhereInput>>>;
  dateRange?: InputMaybe<DateRangeInput>;
  funderId?: InputMaybe<Scalars['BigInt']['input']>;
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  sourceResourceInput?: InputMaybe<ResourceInput>;
  status?: InputMaybe<ContributionsWhereContributionStatus>;
};

export type GetContributorContributionsInput = {
  where?: InputMaybe<GetContributorContributionsWhereInput>;
};

export type GetContributorContributionsWhereInput = {
  status?: InputMaybe<ContributionStatus>;
};

export type GetContributorInput = {
  projectId: Scalars['BigInt']['input'];
  userId: Scalars['BigInt']['input'];
};

export type GetDashboardFundersWhereInput = {
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  sourceResourceInput?: InputMaybe<ResourceInput>;
};

export type GetEntriesInput = {
  orderBy?: InputMaybe<GetEntriesOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GetEntriesWhereInput>;
};

export type GetEntriesOrderByInput = {
  publishedAt?: InputMaybe<OrderByOptions>;
};

export type GetEntriesWhereInput = {
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GetFunderWhereInput = {
  anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  sourceResourceInput?: InputMaybe<ResourceInput>;
};

export type GetFundersInput = {
  orderBy?: InputMaybe<GetFundersOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GetFunderWhereInput>;
};

/** only one sort field can be used at one time */
export type GetFundersOrderByInput = {
  amountFunded?: InputMaybe<OrderByOptions>;
  confirmedAt?: InputMaybe<OrderByOptions>;
};

export type GetProjectGoalsInput = {
  projectId: Scalars['BigInt']['input'];
  receivedContributionsInDatetimeRange?: InputMaybe<DateRangeInput>;
};

export type GetProjectOrdersStatsInput = {
  where: GetProjectOrdersStatsWhereInput;
};

export type GetProjectOrdersStatsWhereInput = {
  projectId: Scalars['BigInt']['input'];
};

export type GetProjectRewardInput = {
  where: GetProjectRewardWhereInput;
};

export type GetProjectRewardWhereInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type GetProjectRewardsInput = {
  where: GetProjectRewardsWhereInput;
};

export type GetProjectRewardsWhereInput = {
  dateRange?: InputMaybe<DateRangeInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['BigInt']['input'];
};

export type GetProjectStatsInput = {
  where: GetProjectStatsWhereInput;
};

export type GetProjectStatsWhereInput = {
  dateRange?: InputMaybe<DateRangeInput>;
  groupBy?: InputMaybe<AnalyticsGroupByInterval>;
  projectId: Scalars['BigInt']['input'];
};

export type GeyserPromotionsContributionStats = {
  __typename?: 'GeyserPromotionsContributionStats';
  contributionsCount: Scalars['Int']['output'];
  contributionsSum: Scalars['BigInt']['output'];
  contributionsSumUsd: Scalars['Float']['output'];
};

export type GeyserPromotionsContributionStatsInput = {
  where: GeyserPromotionsContributionStatsWhereInput;
};

export type GeyserPromotionsContributionStatsWhereInput = {
  projectId: Scalars['BigInt']['input'];
};

export type GlobalAmbassadorLeaderboardRow = {
  __typename?: 'GlobalAmbassadorLeaderboardRow';
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  projectsCount: Scalars['Int']['output'];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['BigInt']['output'];
  userImageUrl?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type GlobalContributorLeaderboardRow = {
  __typename?: 'GlobalContributorLeaderboardRow';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  projectsContributedCount: Scalars['Int']['output'];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['BigInt']['output'];
  userImageUrl?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type GlobalCreatorLeaderboardRow = {
  __typename?: 'GlobalCreatorLeaderboardRow';
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  projectsCount: Scalars['Int']['output'];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['BigInt']['output'];
  userImageUrl?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type GlobalProjectLeaderboardRow = {
  __typename?: 'GlobalProjectLeaderboardRow';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  contributorsCount: Scalars['Int']['output'];
  projectName: Scalars['String']['output'];
  projectThumbnailUrl?: Maybe<Scalars['String']['output']>;
  projectTitle: Scalars['String']['output'];
};

export type Grant = BoardVoteGrant | CommunityVoteGrant;

export type GrantApplicant = {
  __typename?: 'GrantApplicant';
  contributors: Array<GrantApplicantContributor>;
  contributorsCount: Scalars['Int']['output'];
  funding: GrantApplicantFunding;
  grant: Grant;
  id: Scalars['BigInt']['output'];
  project: Project;
  status: GrantApplicantStatus;
  voteCount: Scalars['Int']['output'];
};


export type GrantApplicantContributorsArgs = {
  input?: InputMaybe<GrantApplicantContributorInput>;
};

export type GrantApplicantContributor = {
  __typename?: 'GrantApplicantContributor';
  amount: Scalars['Int']['output'];
  timesContributed: Scalars['Int']['output'];
  user?: Maybe<User>;
  voteCount: Scalars['Int']['output'];
};

export type GrantApplicantContributorInput = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GrantApplicantContributorWhereInput>;
};

export type GrantApplicantContributorWhereInput = {
  userId: Scalars['BigInt']['input'];
};

export type GrantApplicantFunding = {
  __typename?: 'GrantApplicantFunding';
  /** The amount of funding the grant applicant has received from the community. */
  communityFunding: Scalars['Int']['output'];
  /** The amount of grant funding the applicant is elligible for. */
  grantAmount: Scalars['Int']['output'];
  /**
   * The amount of funding that the Grant applicant has been confirmed to receive. Can only be confirmed after the
   * grant has been closed.
   */
  grantAmountDistributed: Scalars['Int']['output'];
};

export enum GrantApplicantStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Funded = 'FUNDED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum GrantApplicantStatusFilter {
  Accepted = 'ACCEPTED',
  Funded = 'FUNDED'
}

export type GrantApplicantsGetInput = {
  orderBy?: InputMaybe<Array<GrantApplicantsGetOrderByInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: GrantApplicantsGetWhereInput;
};

export type GrantApplicantsGetOrderByInput = {
  direction: OrderByDirection;
  field: GrantApplicantsOrderByField;
};

export type GrantApplicantsGetWhereInput = {
  status?: InputMaybe<GrantApplicantStatusFilter>;
};

export enum GrantApplicantsOrderByField {
  VoteCount = 'voteCount'
}

export type GrantApplyInput = {
  grantId: Scalars['BigInt']['input'];
  projectId: Scalars['BigInt']['input'];
};

export type GrantBoardMember = {
  __typename?: 'GrantBoardMember';
  user: User;
};

export type GrantGetInput = {
  where: GrantGetWhereInput;
};

export type GrantGetWhereInput = {
  id: Scalars['BigInt']['input'];
};

export type GrantGuardiansFunding = {
  __typename?: 'GrantGuardiansFunding';
  contributedTotal: Scalars['BigInt']['output'];
  contributorsCount: Scalars['BigInt']['output'];
};

export type GrantStatistics = {
  __typename?: 'GrantStatistics';
  /** Statistic about the grant applicants */
  applicants?: Maybe<GrantStatisticsApplicant>;
  grantGuardiansFunding: GrantGuardiansFunding;
  /** Statistic about the grants */
  grants?: Maybe<GrantStatisticsGrant>;
};

export type GrantStatisticsApplicant = {
  __typename?: 'GrantStatisticsApplicant';
  /** Count of applicants that have been funded */
  countFunded: Scalars['Int']['output'];
};

export type GrantStatisticsGrant = {
  __typename?: 'GrantStatisticsGrant';
  /** Total amount sent to grants (in sats) */
  amountFunded: Scalars['Int']['output'];
  /** Total amount granted to projects (in sats) */
  amountGranted: Scalars['Int']['output'];
  /** Total rounds of grants */
  count: Scalars['Int']['output'];
};

export type GrantStatus = {
  __typename?: 'GrantStatus';
  endAt?: Maybe<Scalars['Date']['output']>;
  startAt: Scalars['Date']['output'];
  status: GrantStatusEnum;
};

export enum GrantStatusEnum {
  ApplicationsOpen = 'APPLICATIONS_OPEN',
  Closed = 'CLOSED',
  FundingOpen = 'FUNDING_OPEN'
}

export enum GrantType {
  BoardVote = 'BOARD_VOTE',
  CommunityVote = 'COMMUNITY_VOTE'
}

export type GraphData = {
  dateTime: Scalars['Date']['output'];
  value: Scalars['Int']['output'];
};

export type GraphSumData = {
  dateTime: Scalars['Date']['output'];
  sum: Scalars['Int']['output'];
};

export type GuardianResult = {
  __typename?: 'GuardianResult';
  guardianType: GuardianType;
  soldCount: Scalars['Int']['output'];
  users: Array<GuardianUser>;
};

export enum GuardianType {
  King = 'KING',
  Knight = 'KNIGHT',
  Legend = 'LEGEND',
  Warrior = 'WARRIOR'
}

export type GuardianUser = {
  __typename?: 'GuardianUser';
  guardianType: Scalars['String']['output'];
  heroId: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  userId: Scalars['BigInt']['output'];
  username: Scalars['String']['output'];
};

export type GuardianUsersGetInput = {
  where?: InputMaybe<GuardianUsersGetWhereInput>;
};

export type GuardianUsersGetResponse = {
  __typename?: 'GuardianUsersGetResponse';
  guardianUsers: Array<GuardianResult>;
};

export type GuardianUsersGetWhereInput = {
  guardianType: GuardianType;
};

export type HeroStats = {
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  projectsCount: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
};

export type LeaderboardGlobalAmbassadorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars['Int']['input'];
};

export type LeaderboardGlobalContributorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars['Int']['input'];
};

export type LeaderboardGlobalCreatorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars['Int']['input'];
};

export type LeaderboardGlobalProjectsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top projects to return. */
  top: Scalars['Int']['input'];
};

export enum LeaderboardPeriod {
  AllTime = 'ALL_TIME',
  Month = 'MONTH'
}

export enum LegalEntityType {
  Company = 'COMPANY',
  NonProfit = 'NON_PROFIT',
  Person = 'PERSON'
}

export type LightningAddressConnectionDetails = {
  __typename?: 'LightningAddressConnectionDetails';
  lightningAddress: Scalars['String']['output'];
};

export type LightningAddressConnectionDetailsCreateInput = {
  lightningAddress: Scalars['String']['input'];
};

export type LightningAddressConnectionDetailsUpdateInput = {
  lightningAddress: Scalars['String']['input'];
};

export type LightningAddressContributionLimits = {
  __typename?: 'LightningAddressContributionLimits';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type LightningAddressVerifyResponse = {
  __typename?: 'LightningAddressVerifyResponse';
  limits?: Maybe<LightningAddressContributionLimits>;
  reason?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export enum LightningInvoiceStatus {
  Canceled = 'CANCELED',
  Paid = 'PAID',
  Unpaid = 'UNPAID'
}

export type LightningPaymentDetails = {
  __typename?: 'LightningPaymentDetails';
  lightningInvoiceId: Scalars['String']['output'];
  lightningInvoiceStatus: LightningInvoiceStatus;
  zapRequest?: Maybe<Scalars['String']['output']>;
};

export type LightningPaymentMethods = {
  __typename?: 'LightningPaymentMethods';
  bolt11: Scalars['Boolean']['output'];
};

export type LightningToRskSwapPaymentDetails = {
  __typename?: 'LightningToRskSwapPaymentDetails';
  claimPublicKey: Scalars['String']['output'];
  preimageHash: Scalars['String']['output'];
  refundPublicKey: Scalars['String']['output'];
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type LndConnectionDetails = {
  /** Port where the gRPC calls should be made. */
  grpcPort: Scalars['Int']['output'];
  /** Hostname where the gRPC calls should be made. */
  hostname: Scalars['String']['output'];
  lndNodeType: LndNodeType;
  /** Invoice macaroon for authenticating gRPC calls to the LND node. */
  macaroon: Scalars['String']['output'];
  /** TLS certificate for the LND node (optional for Voltage nodes). */
  tlsCertificate?: Maybe<Scalars['String']['output']>;
};

export type LndConnectionDetailsCreateInput = {
  /** Port where the gRPC calls should be made. */
  grpcPort: Scalars['Int']['input'];
  /** Hostname where the gRPC calls should be made. */
  hostname: Scalars['String']['input'];
  lndNodeType: LndNodeType;
  /** Invoice macaroon for authenticating gRPC calls to the LND node. */
  macaroon: Scalars['String']['input'];
  /** Public key of the LND node. */
  pubkey?: InputMaybe<Scalars['String']['input']>;
  /** TLS certificate for the LND node (optional for Voltage nodes). */
  tlsCertificate?: InputMaybe<Scalars['String']['input']>;
};

/** Private node details that can only be queried by the wallet owner. */
export type LndConnectionDetailsPrivate = {
  __typename?: 'LndConnectionDetailsPrivate';
  /** Port where the gRPC calls should be made. */
  grpcPort: Scalars['Int']['output'];
  /** Hostname where the gRPC calls should be made. */
  hostname: Scalars['String']['output'];
  /** Type of the LND node used. */
  lndNodeType: LndNodeType;
  /** Invoice macaroon for authenticating gRPC calls to the LND node. */
  macaroon: Scalars['String']['output'];
  /** Public key of the LND node. */
  pubkey?: Maybe<Scalars['String']['output']>;
  /** TLS certificate for the LND node (optional for Voltage nodes). */
  tlsCertificate?: Maybe<Scalars['String']['output']>;
};

/** Public node details visible by anyone. */
export type LndConnectionDetailsPublic = {
  __typename?: 'LndConnectionDetailsPublic';
  pubkey?: Maybe<Scalars['String']['output']>;
};

export type LndConnectionDetailsUpdateInput = {
  /** Port where the gRPC calls should be made. */
  grpcPort?: InputMaybe<Scalars['Int']['input']>;
  /** Hostname where the gRPC calls should be made. */
  hostname?: InputMaybe<Scalars['String']['input']>;
  /** Type of the LND node. */
  lndNodeType?: InputMaybe<LndNodeType>;
  /** Invoice macaroon for authenticating gRPC calls to the LND node. */
  macaroon?: InputMaybe<Scalars['String']['input']>;
  /** Public key of the LND node. */
  pubkey?: InputMaybe<Scalars['String']['input']>;
  /** TLS certificate for the LND node (optional for Voltage nodes). */
  tlsCertificate?: InputMaybe<Scalars['String']['input']>;
};

export enum LndNodeType {
  Custom = 'custom',
  Geyser = 'geyser',
  Voltage = 'voltage'
}

export type Location = {
  __typename?: 'Location';
  country?: Maybe<Country>;
  region?: Maybe<Scalars['String']['output']>;
};

export enum MfaAction {
  Login = 'LOGIN',
  ProjectWalletUpdate = 'PROJECT_WALLET_UPDATE',
  UserEmailUpdate = 'USER_EMAIL_UPDATE',
  UserEmailVerification = 'USER_EMAIL_VERIFICATION'
}

export type Milestone = {
  __typename?: 'Milestone';
  amount: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  reached?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
  ambassadorAdd?: Maybe<Ambassador>;
  ambassadorUpdate?: Maybe<Ambassador>;
  claimBadge: UserBadge;
  contributionCreate: ContributionMutationResponse;
  contributionEmailUpdate: Contribution;
  contributionPaymentsAdd: ContributionPaymentsAddResponse;
  /** @deprecated Use postCreate instead */
  createEntry: Entry;
  /** @deprecated Use projectCreate instead */
  createProject: Project;
  creatorNotificationConfigurationValueUpdate?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use postDelete instead */
  deleteEntry: Entry;
  grantApply: GrantApplicant;
  orderStatusUpdate?: Maybe<Order>;
  paymentCancel: PaymentCancelResponse;
  paymentConfirm: PaymentConfirmResponse;
  paymentFail: PaymentFailResponse;
  paymentInvoiceCancel: PaymentInvoiceCancelResponse;
  paymentPend: PaymentPendResponse;
  paymentRefundComplete: PaymentRefundCompleteResponse;
  paymentSwapClaimTxBroadcast: PaymentSwapClaimTxBroadcastResponse;
  paymentSwapClaimTxSet: PaymentSwapClaimTxSetResponse;
  payoutCancel: PayoutResponse;
  payoutInitiate: PayoutInitiateResponse;
  payoutRequest: PayoutRequestResponse;
  pledgeRefundCancel: PledgeRefundResponse;
  pledgeRefundInitiate: PledgeRefundInitiateResponse;
  pledgeRefundRequest: PledgeRefundRequestResponse;
  podcastKeysendContributionCreate: PodcastKeysendContributionCreateResponse;
  postCreate: Post;
  postDelete: Post;
  postPublish: Post;
  postSendByEmail: PostSendByEmailResponse;
  postUpdate: Post;
  /** Mark an AON goal as cancelled (Accountant only) */
  projectAonGoalMarkCancelled: ProjectAonGoalStatusUpdateResponse;
  /** Mark an AON goal as claimed (Accountant only) */
  projectAonGoalMarkClaimed: ProjectAonGoalStatusUpdateResponse;
  /** Mark an AON goal as refunded (Accountant only) */
  projectAonGoalMarkRefunded: ProjectAonGoalStatusUpdateResponse;
  projectClose: Project;
  projectCreate: Project;
  projectDelete: ProjectDeleteResponse;
  projectFollow: Scalars['Boolean']['output'];
  projectGoalCreate: Array<ProjectGoal>;
  projectGoalDelete: ProjectGoalDeleteResponse;
  /** Only returns ProjectGoals that are in progress */
  projectGoalOrderingUpdate: Array<ProjectGoal>;
  projectGoalUpdate: ProjectGoal;
  projectPreLaunch: Project;
  projectPublish: Project;
  projectPutInReview: Project;
  projectReviewRequest: ProjectReview;
  projectReviewSubmit: ProjectReview;
  projectRewardCreate: ProjectReward;
  projectRewardCurrencyUpdate: Array<ProjectReward>;
  /** Soft deletes the reward. */
  projectRewardDelete: Scalars['Boolean']['output'];
  projectRewardUpdate: ProjectReward;
  projectShippingConfigCreate: ShippingConfig;
  projectShippingConfigUpdate: ShippingConfig;
  projectStatusUpdate: Project;
  projectSubscriptionPlanCreate: ProjectSubscriptionPlan;
  projectSubscriptionPlanDelete: Scalars['Boolean']['output'];
  projectSubscriptionPlanUpdate: ProjectSubscriptionPlan;
  projectUnfollow: Scalars['Boolean']['output'];
  projectUpdate: Project;
  /** @deprecated Use postPublish instead */
  publishEntry: Entry;
  /**
   * Sends an OTP to the user's email address and responds with a token that can be used, together with the OTP, to two-factor authenticate
   * a request made by the client.
   */
  sendOTPByEmail: OtpResponse;
  shippingAddressCreate: ShippingAddress;
  tagCreate: Tag;
  unlinkExternalAccount: User;
  /** @deprecated Use postUpdate instead */
  updateEntry: Entry;
  /** @deprecated Use projectUpdate instead */
  updateProject: Project;
  updateUser: User;
  updateWalletState: Wallet;
  userAccountKeysUpdate: UserAccountKeys;
  userBadgeAward: UserBadge;
  userDelete: DeleteUserResponse;
  userEmailUpdate: User;
  userEmailVerify: Scalars['Boolean']['output'];
  userNotificationConfigurationValueUpdate?: Maybe<Scalars['Boolean']['output']>;
  userSubscriptionCancel: UserSubscription;
  userSubscriptionUpdate: UserSubscription;
  userTaxProfileUpdate: UserTaxProfile;
  userVerificationTokenGenerate: UserVerificationTokenGenerateResponse;
  walletCreate: Wallet;
  walletDelete: Scalars['Boolean']['output'];
  /** This operation is currently not supported. */
  walletUpdate: Wallet;
};


export type MutationAmbassadorAddArgs = {
  input: AmbassadorAddInput;
};


export type MutationAmbassadorUpdateArgs = {
  input: AmbassadorUpdateInput;
};


export type MutationClaimBadgeArgs = {
  input: BadgeClaimInput;
};


export type MutationContributionCreateArgs = {
  input: ContributionCreateInput;
};


export type MutationContributionEmailUpdateArgs = {
  input?: InputMaybe<ContributionEmailUpdateInput>;
};


export type MutationContributionPaymentsAddArgs = {
  input: ContributionPaymentsAddInput;
};


export type MutationCreateEntryArgs = {
  input: CreateEntryInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreatorNotificationConfigurationValueUpdateArgs = {
  creatorNotificationConfigurationId: Scalars['BigInt']['input'];
  value: Scalars['String']['input'];
};


export type MutationDeleteEntryArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationGrantApplyArgs = {
  input?: InputMaybe<GrantApplyInput>;
};


export type MutationOrderStatusUpdateArgs = {
  input: OrderStatusUpdateInput;
};


export type MutationPaymentCancelArgs = {
  input: PaymentCancelInput;
};


export type MutationPaymentConfirmArgs = {
  input: PaymentConfirmInput;
};


export type MutationPaymentFailArgs = {
  input: PaymentFailInput;
};


export type MutationPaymentInvoiceCancelArgs = {
  invoiceId: Scalars['String']['input'];
};


export type MutationPaymentPendArgs = {
  input: PaymentPendInput;
};


export type MutationPaymentRefundCompleteArgs = {
  input: PaymentRefundCompleteInput;
};


export type MutationPaymentSwapClaimTxBroadcastArgs = {
  input: PaymentSwapClaimTxBroadcastInput;
};


export type MutationPaymentSwapClaimTxSetArgs = {
  input: PaymentSwapClaimTxSetInput;
};


export type MutationPayoutCancelArgs = {
  input: PayoutCancelInput;
};


export type MutationPayoutInitiateArgs = {
  input: PayoutInitiateInput;
};


export type MutationPayoutRequestArgs = {
  input: PayoutRequestInput;
};


export type MutationPledgeRefundCancelArgs = {
  input: PledgeRefundCancelInput;
};


export type MutationPledgeRefundInitiateArgs = {
  input: PledgeRefundInitiateInput;
};


export type MutationPledgeRefundRequestArgs = {
  input: PledgeRefundRequestInput;
};


export type MutationPodcastKeysendContributionCreateArgs = {
  input: PodcastKeysendContributionCreateInput;
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationPostPublishArgs = {
  input: PostPublishInput;
};


export type MutationPostSendByEmailArgs = {
  input: PostSendByEmailInput;
};


export type MutationPostUpdateArgs = {
  input: PostUpdateInput;
};


export type MutationProjectAonGoalMarkCancelledArgs = {
  input: ProjectAonGoalStatusUpdateInput;
};


export type MutationProjectAonGoalMarkClaimedArgs = {
  input: ProjectAonGoalStatusUpdateInput;
};


export type MutationProjectAonGoalMarkRefundedArgs = {
  input: ProjectAonGoalStatusUpdateInput;
};


export type MutationProjectCloseArgs = {
  input: ProjectCloseMutationInput;
};


export type MutationProjectCreateArgs = {
  input: CreateProjectInput;
};


export type MutationProjectDeleteArgs = {
  input: DeleteProjectInput;
};


export type MutationProjectFollowArgs = {
  input: ProjectFollowMutationInput;
};


export type MutationProjectGoalCreateArgs = {
  input: ProjectGoalCreateInput;
};


export type MutationProjectGoalDeleteArgs = {
  projectGoalId: Scalars['BigInt']['input'];
};


export type MutationProjectGoalOrderingUpdateArgs = {
  input: ProjectGoalOrderingUpdateInput;
};


export type MutationProjectGoalUpdateArgs = {
  input: ProjectGoalUpdateInput;
};


export type MutationProjectPreLaunchArgs = {
  input: ProjectPreLaunchMutationInput;
};


export type MutationProjectPublishArgs = {
  input: ProjectPublishMutationInput;
};


export type MutationProjectPutInReviewArgs = {
  input: ProjectPutInReviewMutationInput;
};


export type MutationProjectReviewRequestArgs = {
  input: ProjectReviewRequestInput;
};


export type MutationProjectReviewSubmitArgs = {
  input: ProjectReviewSubmitInput;
};


export type MutationProjectRewardCreateArgs = {
  input: CreateProjectRewardInput;
};


export type MutationProjectRewardCurrencyUpdateArgs = {
  input: ProjectRewardCurrencyUpdate;
};


export type MutationProjectRewardDeleteArgs = {
  input: DeleteProjectRewardInput;
};


export type MutationProjectRewardUpdateArgs = {
  input: UpdateProjectRewardInput;
};


export type MutationProjectShippingConfigCreateArgs = {
  input: CreateProjectShippingConfigInput;
};


export type MutationProjectShippingConfigUpdateArgs = {
  input: UpdateProjectShippingConfigInput;
};


export type MutationProjectStatusUpdateArgs = {
  input: ProjectStatusUpdate;
};


export type MutationProjectSubscriptionPlanCreateArgs = {
  input: CreateProjectSubscriptionPlanInput;
};


export type MutationProjectSubscriptionPlanDeleteArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationProjectSubscriptionPlanUpdateArgs = {
  input: UpdateProjectSubscriptionPlanInput;
};


export type MutationProjectUnfollowArgs = {
  input: ProjectFollowMutationInput;
};


export type MutationProjectUpdateArgs = {
  input: UpdateProjectInput;
};


export type MutationPublishEntryArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationSendOtpByEmailArgs = {
  input: SendOtpByEmailInput;
};


export type MutationShippingAddressCreateArgs = {
  input: ShippingAddressCreateInput;
};


export type MutationTagCreateArgs = {
  input: TagCreateInput;
};


export type MutationUnlinkExternalAccountArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationUpdateEntryArgs = {
  input: UpdateEntryInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateWalletStateArgs = {
  input: UpdateWalletStateInput;
};


export type MutationUserAccountKeysUpdateArgs = {
  input: UserAccountKeysUpdateInput;
};


export type MutationUserBadgeAwardArgs = {
  userBadgeId: Scalars['BigInt']['input'];
};


export type MutationUserEmailUpdateArgs = {
  input: UserEmailUpdateInput;
};


export type MutationUserEmailVerifyArgs = {
  input: EmailVerifyInput;
};


export type MutationUserNotificationConfigurationValueUpdateArgs = {
  userNotificationConfigurationId: Scalars['BigInt']['input'];
  value: Scalars['String']['input'];
};


export type MutationUserSubscriptionCancelArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationUserSubscriptionUpdateArgs = {
  input: UpdateUserSubscriptionInput;
};


export type MutationUserTaxProfileUpdateArgs = {
  input: UserTaxProfileUpdateInput;
};


export type MutationUserVerificationTokenGenerateArgs = {
  input: UserVerificationTokenGenerateInput;
};


export type MutationWalletCreateArgs = {
  input: CreateWalletInput;
};


export type MutationWalletDeleteArgs = {
  id: Scalars['BigInt']['input'];
};


export type MutationWalletUpdateArgs = {
  input: UpdateWalletInput;
};

export type MutationResponse = {
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type NwcConnectionDetailsCreateInput = {
  nwcUrl: Scalars['String']['input'];
};

export type NwcConnectionDetailsPrivate = {
  __typename?: 'NWCConnectionDetailsPrivate';
  nwcUrl?: Maybe<Scalars['String']['output']>;
};

export type NwcConnectionDetailsPublic = {
  __typename?: 'NWCConnectionDetailsPublic';
  nwcUrl?: Maybe<Scalars['String']['output']>;
};

export type NwcConnectionDetailsUpdateInput = {
  nwcUrl: Scalars['String']['input'];
};

export type NostrKeys = {
  __typename?: 'NostrKeys';
  privateKey?: Maybe<NostrPrivateKey>;
  publicKey: NostrPublicKey;
};

export type NostrPrivateKey = {
  __typename?: 'NostrPrivateKey';
  hex: Scalars['String']['output'];
  nsec: Scalars['String']['output'];
};

export type NostrPublicKey = {
  __typename?: 'NostrPublicKey';
  hex: Scalars['String']['output'];
  npub: Scalars['String']['output'];
};

export enum NotificationChannel {
  Email = 'EMAIL'
}

export type NotificationConfiguration = {
  __typename?: 'NotificationConfiguration';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  type?: Maybe<SettingValueType>;
  value: Scalars['String']['output'];
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  channel?: Maybe<NotificationChannel>;
  configurations: Array<NotificationConfiguration>;
  isEnabled: Scalars['Boolean']['output'];
  notificationType: Scalars['String']['output'];
};

export type OtpInput = {
  otp: Scalars['Int']['input'];
  otpVerificationToken: Scalars['String']['input'];
};

export type OtpLoginInput = {
  otp: Scalars['Int']['input'];
  otpVerificationToken: Scalars['String']['input'];
};

export type OtpResponse = {
  __typename?: 'OTPResponse';
  /** Expiration time of the OTP. Can be used to display a countdown to the user. */
  expiresAt: Scalars['Date']['output'];
  /** Encrypted token containing the OTP 2FA details, such as the action to be authorised and the factor used (eg: email). */
  otpVerificationToken: Scalars['String']['output'];
};

export type OffsetBasedPaginationInput = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OnChainPaymentMethods = {
  __typename?: 'OnChainPaymentMethods';
  boltzSwap: Scalars['Boolean']['output'];
  native: Scalars['Boolean']['output'];
};

export type OnChainToLightningSwapPaymentDetails = {
  __typename?: 'OnChainToLightningSwapPaymentDetails';
  lightningInvoiceId: Scalars['String']['output'];
  lightningInvoiceStatus: LightningInvoiceStatus;
  onChainAddress: Scalars['String']['output'];
  onChainTxId?: Maybe<Scalars['String']['output']>;
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type OnChainToRskSwapPaymentDetails = {
  __typename?: 'OnChainToRskSwapPaymentDetails';
  onChainAddress: Scalars['String']['output'];
  onChainTxId?: Maybe<Scalars['String']['output']>;
  preimageHash: Scalars['String']['output'];
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type OnChainTxInput = {
  id: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  confirmedAt?: Maybe<Scalars['Date']['output']>;
  contribution: Contribution;
  createdAt: Scalars['Date']['output'];
  deliveredAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['BigInt']['output'];
  items: Array<OrderItem>;
  itemsTotalInSats: Scalars['Int']['output'];
  project: Project;
  referenceCode: Scalars['String']['output'];
  shippedAt?: Maybe<Scalars['Date']['output']>;
  shippingAddress?: Maybe<ShippingAddress>;
  shippingFeeTotalInSats: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  totalInSats: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<User>;
};

export type OrderBitcoinQuoteInput = {
  quote: Scalars['Float']['input'];
  quoteCurrency: QuoteCurrency;
};

export enum OrderByDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum OrderByOptions {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderContributionInput = {
  /**
   * Quote used client-side to compute the order total. That quote will be used unless the slippage exceeds
   * a pre-defined threshold.
   */
  bitcoinQuote?: InputMaybe<OrderBitcoinQuoteInput>;
  items: Array<OrderItemInput>;
  shippingAddressId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  item: ProjectReward;
  quantity: Scalars['Int']['output'];
  unitPriceInSats: Scalars['Int']['output'];
};

export type OrderItemInput = {
  itemId: Scalars['BigInt']['input'];
  itemType: OrderItemType;
  /** Number of times a reward was selected. */
  quantity: Scalars['Int']['input'];
};

export enum OrderItemType {
  ProjectReward = 'PROJECT_REWARD',
  ProjectSubscriptionPlan = 'PROJECT_SUBSCRIPTION_PLAN'
}

export type OrderStatusUpdateInput = {
  orderId?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<UpdatableOrderStatus>;
};

export type OrdersGetInput = {
  orderBy?: InputMaybe<Array<OrdersGetOrderByInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: OrdersGetWhereInput;
};

export enum OrdersGetOrderByField {
  ConfirmedAt = 'confirmedAt',
  DeliveredAt = 'deliveredAt',
  ShippedAt = 'shippedAt'
}

export type OrdersGetOrderByInput = {
  direction: OrderByDirection;
  field: OrdersGetOrderByField;
};

export type OrdersGetResponse = {
  __typename?: 'OrdersGetResponse';
  orders: Array<Order>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export enum OrdersGetStatus {
  AwaitingPayment = 'AWAITING_PAYMENT',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Shipped = 'SHIPPED'
}

export type OrdersGetWhereInput = {
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OrdersGetStatus>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OrdersStatsBase = {
  __typename?: 'OrdersStatsBase';
  projectRewards: ProjectRewardsStats;
  projectRewardsGroupedByProjectRewardId: Array<ProjectRewardsGroupedByRewardIdStats>;
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['BigInt']['output'];
  user: User;
};

export type OwnerOf = {
  __typename?: 'OwnerOf';
  owner?: Maybe<Owner>;
  project?: Maybe<Project>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageViewCountGraph = {
  __typename?: 'PageViewCountGraph';
  dateTime: Scalars['Date']['output'];
  viewCount: Scalars['Int']['output'];
  visitorCount: Scalars['Int']['output'];
};

export type PaginationCursor = {
  __typename?: 'PaginationCursor';
  id?: Maybe<Scalars['BigInt']['output']>;
};

/** Cursor pagination input. */
export type PaginationInput = {
  cursor?: InputMaybe<CursorInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Payment = {
  __typename?: 'Payment';
  accountingAmountDue: Scalars['Int']['output'];
  accountingAmountPaid: Scalars['Int']['output'];
  ambassadorUserId?: Maybe<Scalars['BigInt']['output']>;
  baseAccountingAmount: Scalars['Int']['output'];
  canceledAt?: Maybe<Scalars['Date']['output']>;
  contributionPodcastKeysendId?: Maybe<Scalars['BigInt']['output']>;
  contributionUUID: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  failureReason?: Maybe<Scalars['String']['output']>;
  fees: Array<PaymentFee>;
  funder: Funder;
  id: Scalars['BigInt']['output'];
  method?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['Date']['output']>;
  paymentAmount: Scalars['Int']['output'];
  paymentCurrency: PaymentCurrency;
  paymentDetails: PaymentDetails;
  paymentType: PaymentType;
  payoutAmount: Scalars['Int']['output'];
  payoutCurrency: PayoutCurrency;
  projectId: Scalars['BigInt']['output'];
  status: PaymentStatus;
  updatedAt: Scalars['Date']['output'];
  userSubscriptionId?: Maybe<Scalars['BigInt']['output']>;
  uuid: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type PaymentCancelInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  swapStatus?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentCancelResponse = {
  __typename?: 'PaymentCancelResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export type PaymentConfirmInput = {
  amount: Scalars['Int']['input'];
  amountCurrency: AmountCurrency;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  onChainSwap?: InputMaybe<PaymentConfirmOnChainSwapInput>;
  subscription?: InputMaybe<SubscriptionPaymentConfirmationInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentConfirmOnChainSwapInput = {
  /** The transaction hash of the claiming transaction for the on-chain swap. */
  txHash: Scalars['String']['input'];
};

export type PaymentConfirmResponse = {
  __typename?: 'PaymentConfirmResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export enum PaymentCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type PaymentDetails = FiatToLightningSwapPaymentDetails | LightningPaymentDetails | LightningToRskSwapPaymentDetails | OnChainToLightningSwapPaymentDetails | OnChainToRskSwapPaymentDetails;

export type PaymentFailInput = {
  failureReason?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  swapStatus?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentFailResponse = {
  __typename?: 'PaymentFailResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export type PaymentFee = {
  __typename?: 'PaymentFee';
  description?: Maybe<Scalars['String']['output']>;
  external?: Maybe<Scalars['Boolean']['output']>;
  feeAmount: Scalars['Int']['output'];
  feeCurrency: FeeCurrency;
  feePayer?: Maybe<PaymentFeePayer>;
  feeType?: Maybe<PaymentFeeType>;
};

export enum PaymentFeePayer {
  Contributor = 'CONTRIBUTOR',
  Creator = 'CREATOR',
  Geyser = 'GEYSER'
}

export enum PaymentFeeType {
  AffiliatePartner = 'AFFILIATE_PARTNER',
  Ambassador = 'AMBASSADOR',
  Partner = 'PARTNER',
  Payment = 'PAYMENT',
  Platform = 'PLATFORM',
  Promotion = 'PROMOTION',
  Shipping = 'SHIPPING',
  Tip = 'TIP'
}

export type PaymentGetInput = {
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  onChainSwapId?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentInvoiceCancelResponse = {
  __typename?: 'PaymentInvoiceCancelResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export enum PaymentInvoiceSanctionCheckStatus {
  Failed = 'FAILED',
  Passed = 'PASSED',
  Pending = 'PENDING'
}

export type PaymentInvoiceSanctionCheckStatusGetInput = {
  invoiceId: Scalars['String']['input'];
};

export type PaymentInvoiceSanctionCheckStatusResponse = {
  __typename?: 'PaymentInvoiceSanctionCheckStatusResponse';
  status: PaymentInvoiceSanctionCheckStatus;
};

export type PaymentMethods = {
  __typename?: 'PaymentMethods';
  bitcoin: BitcoinPaymentMethods;
  fiat: FiatPaymentMethods;
};

export type PaymentPendInput = {
  amount: Scalars['Int']['input'];
  amountCurrency: AmountCurrency;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  onChainSwap?: InputMaybe<PaymentPendOnChainSwapInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentPendOnChainSwapInput = {
  tx?: InputMaybe<OnChainTxInput>;
};

export type PaymentPendResponse = {
  __typename?: 'PaymentPendResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  amount: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  status: PaymentRefundStatus;
};

export type PaymentRefundCompleteInput = {
  paymentRefundId: Scalars['BigInt']['input'];
};

export type PaymentRefundCompleteResponse = {
  __typename?: 'PaymentRefundCompleteResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum PaymentRefundStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type PaymentRefundsGetResponse = {
  __typename?: 'PaymentRefundsGetResponse';
  refunds: Array<PaymentRefund>;
};

export enum PaymentStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Pending = 'PENDING',
  Unpaid = 'UNPAID'
}

export type PaymentStatusUpdatedInput = {
  contributionUUID?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentSwapClaimTxBroadcastInput = {
  paymentId: Scalars['BigInt']['input'];
};

export type PaymentSwapClaimTxBroadcastResponse = {
  __typename?: 'PaymentSwapClaimTxBroadcastResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
  txHash?: Maybe<Scalars['String']['output']>;
};

export type PaymentSwapClaimTxSetInput = {
  claimTxCallDataHex: Scalars['String']['input'];
  paymentId: Scalars['BigInt']['input'];
};

export type PaymentSwapClaimTxSetResponse = {
  __typename?: 'PaymentSwapClaimTxSetResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export enum PaymentType {
  Fiat = 'FIAT',
  FiatToLightningSwap = 'FIAT_TO_LIGHTNING_SWAP',
  Lightning = 'LIGHTNING',
  LightningPodcastKeysend = 'LIGHTNING_PODCAST_KEYSEND',
  LightningToRskSwap = 'LIGHTNING_TO_RSK_SWAP',
  OnChainToLightningSwap = 'ON_CHAIN_TO_LIGHTNING_SWAP',
  OnChainToRskSwap = 'ON_CHAIN_TO_RSK_SWAP',
  RskToLightningSwap = 'RSK_TO_LIGHTNING_SWAP',
  RskToOnChainSwap = 'RSK_TO_ON_CHAIN_SWAP'
}

export type Payout = {
  __typename?: 'Payout';
  amount: Scalars['Int']['output'];
  expiresAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  status: PayoutStatus;
};

export type PayoutCancelInput = {
  payoutId: Scalars['BigInt']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export enum PayoutCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type PayoutGetInput = {
  payoutId?: InputMaybe<Scalars['BigInt']['input']>;
  swapId?: InputMaybe<Scalars['String']['input']>;
};

export type PayoutGetResponse = {
  __typename?: 'PayoutGetResponse';
  payout: Payout;
  payoutMetadata: PayoutMetadata;
};

export type PayoutInitiateInput = {
  /** The payment details to refund the contributor. */
  payoutId: Scalars['BigInt']['input'];
  /** The payment details to refund the contributor. */
  payoutPaymentInput: PayoutPaymentInput;
  /** The signature of the contributor for RBTC payment */
  signature: Scalars['String']['input'];
};

export type PayoutInitiateResponse = {
  __typename?: 'PayoutInitiateResponse';
  payment: Payment;
  payout: Payout;
  swap: Scalars['String']['output'];
};

export type PayoutMetadata = {
  __typename?: 'PayoutMetadata';
  aonContractAddress: Scalars['String']['output'];
  nonce: Scalars['Int']['output'];
  swapContractAddress: Scalars['String']['output'];
};

export type PayoutPaymentInput = {
  rskToLightningSwap?: InputMaybe<RskToLightningSwapPaymentDetailsInput>;
  rskToOnChainSwap?: InputMaybe<RskToOnChainSwapPaymentDetailsInput>;
};

export type PayoutRequestInput = {
  /** Use this field to request a batch payout for all contributions in a project (only available for logged in users) */
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars['String']['input']>;
};

export type PayoutRequestResponse = {
  __typename?: 'PayoutRequestResponse';
  payout: Payout;
  payoutMetadata: PayoutMetadata;
};

export type PayoutResponse = {
  __typename?: 'PayoutResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum PayoutStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type PledgeRefund = {
  __typename?: 'PledgeRefund';
  amount: Scalars['Int']['output'];
  expiresAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  project: Project;
  status: PledgeRefundStatus;
};

export type PledgeRefundCancelInput = {
  pledgeRefundId: Scalars['BigInt']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type PledgeRefundGetInput = {
  pledgeRefundId?: InputMaybe<Scalars['BigInt']['input']>;
  swapId?: InputMaybe<Scalars['String']['input']>;
};

export type PledgeRefundGetResponse = {
  __typename?: 'PledgeRefundGetResponse';
  refund: PledgeRefund;
  refundMetadata: PledgeRefundMetadata;
};

export type PledgeRefundInitiateInput = {
  /** The payment details to refund the contributor. */
  pledgeRefundId: Scalars['BigInt']['input'];
  /** The payment details to refund the contributor. */
  pledgeRefundPaymentInput: PledgeRefundPaymentInput;
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars['String']['input']>;
  /** The signature of the contributor for RBTC payment */
  signature: Scalars['String']['input'];
};

export type PledgeRefundInitiateResponse = {
  __typename?: 'PledgeRefundInitiateResponse';
  payment: Payment;
  refund: PledgeRefund;
  swap: Scalars['String']['output'];
};

export type PledgeRefundMetadata = {
  __typename?: 'PledgeRefundMetadata';
  aonContractAddress: Scalars['String']['output'];
  nonce: Scalars['Int']['output'];
  swapContractAddress: Scalars['String']['output'];
};

export type PledgeRefundPaymentInput = {
  rskToLightningSwap?: InputMaybe<RskToLightningSwapPaymentDetailsInput>;
  rskToOnChainSwap?: InputMaybe<RskToOnChainSwapPaymentDetailsInput>;
};

export type PledgeRefundRequestInput = {
  /** Use this field to request a refund for a single contribution. */
  contributionUuid?: InputMaybe<Scalars['String']['input']>;
  /** Use this field to request a batch refund for all contributions in a project (only available for logged in users) */
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars['String']['input']>;
};

export type PledgeRefundRequestResponse = {
  __typename?: 'PledgeRefundRequestResponse';
  refund: PledgeRefund;
  refundMetadata: PledgeRefundMetadata;
};

export type PledgeRefundResponse = {
  __typename?: 'PledgeRefundResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export enum PledgeRefundStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type PledgeRefundsGetResponse = {
  __typename?: 'PledgeRefundsGetResponse';
  refunds: Array<PledgeRefund>;
};

export type PodcastKeysendContributionCreateInput = {
  amount: Scalars['Int']['input'];
  appName: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUsername?: InputMaybe<Scalars['String']['input']>;
  paidAt: Scalars['Date']['input'];
  privateComment?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['BigInt']['input'];
};

export type PodcastKeysendContributionCreateResponse = {
  __typename?: 'PodcastKeysendContributionCreateResponse';
  id: Scalars['BigInt']['output'];
  success: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  /** Total amount of satoshis funded from the Post's page. */
  amountFunded: Scalars['Int']['output'];
  /** Contributions that were created from the Post's page. */
  contributions: Array<Contribution>;
  createdAt: Scalars['String']['output'];
  /** User that created the Post. */
  creator: User;
  /** Short description of the Post. */
  description: Scalars['String']['output'];
  /** Number of funders that were created from the Post's page. */
  fundersCount: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  /** Header image of the Post. */
  image?: Maybe<Scalars['String']['output']>;
  markdown?: Maybe<Scalars['String']['output']>;
  postType?: Maybe<PostType>;
  /** Project within which the Post was created. */
  project?: Maybe<Project>;
  /** Goals linked to this Post. */
  projectGoals: ProjectGoals;
  /** Rewards linked to this Post. */
  projectRewards: Array<ProjectReward>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  /** Date when the Post was sent by email. */
  sentByEmailAt?: Maybe<Scalars['Date']['output']>;
  status: PostStatus;
  /** Title of the Post. */
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PostCreateInput = {
  /** Short description of the Post. */
  description: Scalars['String']['input'];
  /** Header image of the Post. */
  image?: InputMaybe<Scalars['String']['input']>;
  markdown?: InputMaybe<Scalars['String']['input']>;
  postType?: InputMaybe<PostType>;
  projectGoalIds: Array<Scalars['BigInt']['input']>;
  projectId: Scalars['BigInt']['input'];
  projectRewardUUIDs: Array<Scalars['String']['input']>;
  /** Title of the Post. */
  title: Scalars['String']['input'];
};

export type PostEmailSegmentSizeGetInput = {
  emailSendOptions: EmailSendOptionsInput;
  projectId: Scalars['BigInt']['input'];
};

export type PostGetInput = {
  orderBy?: InputMaybe<PostGetOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<PostGetWhereInput>;
};

export type PostGetOrderByInput = {
  publishedAt?: InputMaybe<OrderByOptions>;
};

export type PostGetWhereInput = {
  projectId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type PostPublishInput = {
  emailSendOptions?: InputMaybe<EmailSendOptionsInput>;
  postId: Scalars['BigInt']['input'];
};

export type PostPublishedSubscriptionResponse = {
  __typename?: 'PostPublishedSubscriptionResponse';
  post: Post;
};

export type PostSendByEmailInput = {
  emailSendOptions: EmailSendOptionsInput;
  postId: Scalars['BigInt']['input'];
};

export type PostSendByEmailResponse = {
  __typename?: 'PostSendByEmailResponse';
  recipientCount?: Maybe<Scalars['Int']['output']>;
};

export enum PostStatus {
  Deleted = 'deleted',
  Published = 'published',
  Unpublished = 'unpublished'
}

export enum PostType {
  Announcement = 'ANNOUNCEMENT',
  BehindTheScenes = 'BEHIND_THE_SCENES',
  FeedbackRequest = 'FEEDBACK_REQUEST',
  GoalReached = 'GOAL_REACHED',
  GoalUpdate = 'GOAL_UPDATE',
  Impact = 'IMPACT',
  NewGoal = 'NEW_GOAL',
  NewReward = 'NEW_REWARD',
  RewardUpdate = 'REWARD_UPDATE'
}

export type PostUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Header image of the Entry. */
  image?: InputMaybe<Scalars['String']['input']>;
  markdown?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['BigInt']['input'];
  postType?: InputMaybe<PostType>;
  projectGoalIds: Array<Scalars['BigInt']['input']>;
  projectRewardUUIDs: Array<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PrivateCommentPrompt {
  LightningAddress = 'LIGHTNING_ADDRESS',
  NostrNpub = 'NOSTR_NPUB',
  ProjectRewardSpecs = 'PROJECT_REWARD_SPECS'
}

export type ProfileNotificationSettings = {
  __typename?: 'ProfileNotificationSettings';
  creatorSettings: Array<CreatorNotificationSettings>;
  userSettings: UserNotificationSettings;
};

export type Project = {
  __typename?: 'Project';
  ambassadors: ProjectAmbassadorsConnection;
  aonContractAddress?: Maybe<Scalars['String']['output']>;
  /** AON goal duration in days */
  aonGoalDurationInDays?: Maybe<Scalars['Int']['output']>;
  /** AON goal in sats */
  aonGoalInSats?: Maybe<Scalars['Int']['output']>;
  aonGoalStatus?: Maybe<ProjectAonGoalStatus>;
  /** Total amount raised by the project, in satoshis. */
  balance: Scalars['Int']['output'];
  balanceUsdCent: Scalars['Int']['output'];
  /** Boolean flag to indicate if the project can be deleted. */
  canDelete: Scalars['Boolean']['output'];
  category?: Maybe<ProjectCategory>;
  contributions: Array<Contribution>;
  contributionsCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  defaultGoalId?: Maybe<Scalars['BigInt']['output']>;
  /** Description of the project. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * By default, returns all the entries of a project, both published and unpublished but not deleted.
   * To filter the result set, an explicit input can be passed that specifies a value of true or false for the published field.
   * An unpublished entry is only returned if the requesting user is the creator of the entry.
   */
  entries: Array<Entry>;
  entriesCount?: Maybe<Scalars['Int']['output']>;
  followers: Array<User>;
  followersCount?: Maybe<Scalars['Int']['output']>;
  funders: Array<Funder>;
  fundersCount?: Maybe<Scalars['Int']['output']>;
  /** Funding strategy */
  fundingStrategy?: Maybe<ProjectFundingStrategy>;
  goalsCount?: Maybe<Scalars['Int']['output']>;
  /** Returns the project's grant applications. */
  grantApplications: Array<GrantApplicant>;
  id: Scalars['BigInt']['output'];
  /**
   * Project header images.
   * @deprecated Use images instead.
   */
  image?: Maybe<Scalars['String']['output']>;
  images: Array<Scalars['String']['output']>;
  keys: ProjectKeys;
  lastCreationStep: ProjectCreationStep;
  launchScheduledAt?: Maybe<Scalars['Date']['output']>;
  launchedAt?: Maybe<Scalars['Date']['output']>;
  links: Array<Scalars['String']['output']>;
  location?: Maybe<Location>;
  /** @deprecated milestones are deprecated, use the goals instead */
  milestones: Array<Milestone>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name: Scalars['String']['output'];
  owners: Array<Owner>;
  paidLaunch?: Maybe<Scalars['Boolean']['output']>;
  paymentMethods: PaymentMethods;
  /**
   * By default, returns all the posts of a project, both published and unpublished but not deleted.
   * To filter the result set, an explicit input can be passed that specifies a value of true or false for the published field.
   * An unpublished post is only returned if the requesting user is the creator of the post.
   */
  posts: Array<Post>;
  preLaunchExpiresAt?: Maybe<Scalars['Date']['output']>;
  preLaunchedAt?: Maybe<Scalars['Date']['output']>;
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: Maybe<Scalars['Boolean']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  reviews: Array<ProjectReview>;
  rewardBuyersCount?: Maybe<Scalars['Int']['output']>;
  rewardCurrency?: Maybe<RewardCurrency>;
  rewards: Array<ProjectReward>;
  rewardsCount?: Maybe<Scalars['Int']['output']>;
  /** Short description of the project. */
  shortDescription?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  sponsors: Array<Sponsor>;
  /** Returns summary statistics on the Project views and visitors. */
  statistics?: Maybe<ProjectStatistics>;
  status?: Maybe<ProjectStatus>;
  subCategory?: Maybe<ProjectSubCategory>;
  subscribersCount?: Maybe<Scalars['Int']['output']>;
  tags: Array<Tag>;
  thumbnailImage?: Maybe<Scalars['String']['output']>;
  /** Public title of the project. */
  title: Scalars['String']['output'];
  type: ProjectType;
  updatedAt: Scalars['Date']['output'];
  /** Wallets linked to a Project. */
  wallets: Array<Wallet>;
};


export type ProjectEntriesArgs = {
  input?: InputMaybe<ProjectEntriesGetInput>;
};


export type ProjectGrantApplicationsArgs = {
  input?: InputMaybe<ProjectGrantApplicationsInput>;
};


export type ProjectPostsArgs = {
  input?: InputMaybe<ProjectPostsGetInput>;
};

export type ProjectActivatedSubscriptionResponse = {
  __typename?: 'ProjectActivatedSubscriptionResponse';
  project: Project;
};

export type ProjectActivitiesCount = {
  __typename?: 'ProjectActivitiesCount';
  count: Scalars['Int']['output'];
  project: Project;
};

/** Edge type for Project ambassadors */
export type ProjectAmbassadorEdge = {
  __typename?: 'ProjectAmbassadorEdge';
  /** Cursor for pagination */
  cursor: Scalars['String']['output'];
  /** The ambassador node */
  node: Ambassador;
};

export type ProjectAmbassadorsConnection = {
  __typename?: 'ProjectAmbassadorsConnection';
  /** List of ambassador edges */
  edges: Array<ProjectAmbassadorEdge>;
  /**
   * Information about the pagination of ambassadors
   * @deprecated pagination is not implemented on this query yet
   */
  pageInfo: PageInfo;
  /** Aggregated data about ambassadors */
  stats: ProjectAmbassadorsStats;
};

/** Statistics about project ambassadors */
export type ProjectAmbassadorsStats = {
  __typename?: 'ProjectAmbassadorsStats';
  /** Total number of contributions enabled by ambassadors */
  contributionsCount: Scalars['Int']['output'];
  /** Total amount in satoshis enabled by ambassadors */
  contributionsSum: Scalars['BigInt']['output'];
  /** Total number of ambassadors */
  count: Scalars['Int']['output'];
};

export type ProjectAonGoalAmountUpdateInput = {
  aonGoalInSats: Scalars['Int']['input'];
  aonGoalUsdQuote: Scalars['Int']['input'];
};

export enum ProjectAonGoalStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Claimed = 'CLAIMED',
  Deploying = 'DEPLOYING',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Succeeded = 'SUCCEEDED',
  Unclaimed = 'UNCLAIMED'
}

export type ProjectAonGoalStatusUpdateInput = {
  contractAddress: Scalars['String']['input'];
};

export type ProjectAonGoalStatusUpdateResponse = MutationResponse & {
  __typename?: 'ProjectAonGoalStatusUpdateResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: ProjectAonGoalStatus;
  success: Scalars['Boolean']['output'];
};

export type ProjectAonGoalUpdateInput = {
  aonGoalAmount?: InputMaybe<ProjectAonGoalAmountUpdateInput>;
  aonGoalDurationInDays?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectCategory {
  Advocacy = 'ADVOCACY',
  Cause = 'CAUSE',
  Community = 'COMMUNITY',
  Culture = 'CULTURE',
  Education = 'EDUCATION',
  Other = 'OTHER',
  Tool = 'TOOL'
}

export type ProjectCloseMutationInput = {
  projectId: Scalars['BigInt']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectContributionsGroupedByMethodStats = StatsInterface & {
  __typename?: 'ProjectContributionsGroupedByMethodStats';
  count: Scalars['Int']['output'];
  method: Scalars['String']['output'];
  total: Scalars['Int']['output'];
  totalUsd: Scalars['Float']['output'];
};

export type ProjectContributionsStats = StatsInterface & {
  __typename?: 'ProjectContributionsStats';
  count: Scalars['Int']['output'];
  /** Project contribution over the given datetime range grouped by day, or month. */
  graph: Array<ProjectContributionsStatsGraphData>;
  total: Scalars['Int']['output'];
  totalUsd: Scalars['Float']['output'];
};

export type ProjectContributionsStatsBase = {
  __typename?: 'ProjectContributionsStatsBase';
  contributions: ProjectContributionsStats;
  contributionsGroupedByMethod: Array<ProjectContributionsGroupedByMethodStats>;
};

export type ProjectContributionsStatsGraphData = {
  __typename?: 'ProjectContributionsStatsGraphData';
  graphData?: Maybe<Array<ProjectContributionsStatsGraphDataAmount>>;
  statType: ProjectContributionsStatsGraphDataStatType;
};

export type ProjectContributionsStatsGraphDataAmount = GraphData & {
  __typename?: 'ProjectContributionsStatsGraphDataAmount';
  dateTime: Scalars['Date']['output'];
  value: Scalars['Int']['output'];
};

export enum ProjectContributionsStatsGraphDataStatType {
  Sum = 'SUM'
}

export type ProjectCountriesGetInput = {
  category?: InputMaybe<ProjectCategory>;
  subCategory?: InputMaybe<ProjectSubCategory>;
};

export type ProjectCountriesGetResult = {
  __typename?: 'ProjectCountriesGetResult';
  count: Scalars['Int']['output'];
  country: Country;
};

export enum ProjectCreationStep {
  AboutYou = 'ABOUT_YOU',
  FundingGoal = 'FUNDING_GOAL',
  FundingType = 'FUNDING_TYPE',
  IdentityVerification = 'IDENTITY_VERIFICATION',
  Launch = 'LAUNCH',
  PerksAndProducts = 'PERKS_AND_PRODUCTS',
  ProjectDetails = 'PROJECT_DETAILS',
  Story = 'STORY',
  TaxId = 'TAX_ID',
  Wallet = 'WALLET'
}

export type ProjectDeleteResponse = MutationResponse & {
  __typename?: 'ProjectDeleteResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ProjectEntriesGetInput = {
  where?: InputMaybe<ProjectEntriesGetWhereInput>;
};

export type ProjectEntriesGetWhereInput = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectFollowMutationInput = {
  projectId: Scalars['BigInt']['input'];
};

export type ProjectFollowerStats = {
  __typename?: 'ProjectFollowerStats';
  count: Scalars['Int']['output'];
};

export type ProjectFunderRewardStats = {
  __typename?: 'ProjectFunderRewardStats';
  /** Project rewards sold count over the given datetime range grouped by day, or month. */
  quantityGraph?: Maybe<Array<Maybe<FunderRewardGraphSum>>>;
  /** Project rewards sold count in the given datetime range. */
  quantitySum: Scalars['Int']['output'];
};

export type ProjectFunderStats = {
  __typename?: 'ProjectFunderStats';
  /** Project contributors count in the given datetime range. */
  count: Scalars['Int']['output'];
};

export enum ProjectFundingStrategy {
  AllOrNothing = 'ALL_OR_NOTHING',
  TakeItAll = 'TAKE_IT_ALL'
}

export type ProjectGoal = {
  __typename?: 'ProjectGoal';
  amountContributed: Scalars['Int']['output'];
  completedAt?: Maybe<Scalars['Date']['output']>;
  createdAt: Scalars['Date']['output'];
  currency: ProjectGoalCurrency;
  description?: Maybe<Scalars['String']['output']>;
  emojiUnifiedCode?: Maybe<Scalars['String']['output']>;
  hasReceivedContribution: Scalars['Boolean']['output'];
  id: Scalars['BigInt']['output'];
  posts: Array<Post>;
  progress: Scalars['Float']['output'];
  projectId: Scalars['BigInt']['output'];
  status: ProjectGoalStatus;
  targetAmount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProjectGoalCreateInput = {
  currency: ProjectGoalCurrency;
  description?: InputMaybe<Scalars['String']['input']>;
  emojiUnifiedCode?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['BigInt']['input'];
  targetAmount: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export enum ProjectGoalCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type ProjectGoalDeleteResponse = MutationResponse & {
  __typename?: 'ProjectGoalDeleteResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ProjectGoalOrderingUpdateInput = {
  projectGoalIdsOrder: Array<Scalars['BigInt']['input']>;
  projectId: Scalars['BigInt']['input'];
};

export enum ProjectGoalStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS'
}

export enum ProjectGoalStatusInCreate {
  Inactive = 'INACTIVE',
  InProgress = 'IN_PROGRESS'
}

export type ProjectGoalUpdateInput = {
  currency?: InputMaybe<ProjectGoalCurrency>;
  description?: InputMaybe<Scalars['String']['input']>;
  emojiUnifiedCode?: InputMaybe<Scalars['String']['input']>;
  projectGoalId: Scalars['BigInt']['input'];
  targetAmount?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectGoals = {
  __typename?: 'ProjectGoals';
  completed: Array<ProjectGoal>;
  inProgress: Array<ProjectGoal>;
};

export type ProjectGrantApplicationsInput = {
  where: ProjectGrantApplicationsWhereInput;
};

export type ProjectGrantApplicationsWhereInput = {
  grantStatus: ProjectGrantApplicationsWhereInputEnum;
};

export enum ProjectGrantApplicationsWhereInputEnum {
  FundingOpen = 'FUNDING_OPEN'
}

export type ProjectKeys = {
  __typename?: 'ProjectKeys';
  nostrKeys: NostrKeys;
};

export type ProjectLeaderboardAmbassadorsGetInput = {
  period: ProjectLeaderboardPeriod;
  projectId: Scalars['BigInt']['input'];
  top: Scalars['Int']['input'];
};

export type ProjectLeaderboardAmbassadorsRow = {
  __typename?: 'ProjectLeaderboardAmbassadorsRow';
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  projectsCount: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type ProjectLeaderboardContributorsGetInput = {
  period: ProjectLeaderboardPeriod;
  projectId: Scalars['BigInt']['input'];
  top: Scalars['Int']['input'];
};

export type ProjectLeaderboardContributorsRow = {
  __typename?: 'ProjectLeaderboardContributorsRow';
  commentsCount: Scalars['Int']['output'];
  contributionsCount: Scalars['Int']['output'];
  contributionsTotal: Scalars['Int']['output'];
  contributionsTotalUsd: Scalars['Float']['output'];
  funderId: Scalars['BigInt']['output'];
  user?: Maybe<User>;
};

export enum ProjectLeaderboardPeriod {
  AllTime = 'ALL_TIME',
  Month = 'MONTH',
  Week = 'WEEK'
}

export type ProjectLinkMutationInput = {
  link: Scalars['String']['input'];
  projectId: Scalars['BigInt']['input'];
};

export type ProjectMostFunded = {
  __typename?: 'ProjectMostFunded';
  contributionsSummary?: Maybe<ContributionsSummary>;
  /** The project details */
  project: Project;
};

export type ProjectMostFundedByCategory = {
  __typename?: 'ProjectMostFundedByCategory';
  category?: Maybe<Scalars['String']['output']>;
  projects: Array<ProjectMostFunded>;
  subCategory?: Maybe<Scalars['String']['output']>;
};

export type ProjectMostFundedByTag = {
  __typename?: 'ProjectMostFundedByTag';
  projects: Array<ProjectMostFunded>;
  tagId: Scalars['Int']['output'];
};

export type ProjectPostsGetInput = {
  where?: InputMaybe<ProjectPostsGetWhereInput>;
};

export type ProjectPostsGetWhereInput = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectPreLaunchMutationInput = {
  projectId: Scalars['BigInt']['input'];
};

export type ProjectPublishMutationInput = {
  projectId: Scalars['BigInt']['input'];
};

export type ProjectPutInReviewMutationInput = {
  projectId: Scalars['BigInt']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectRefundablePayment = {
  __typename?: 'ProjectRefundablePayment';
  payments: Array<Payment>;
  project: Project;
};

export type ProjectRegionsGetResult = {
  __typename?: 'ProjectRegionsGetResult';
  count: Scalars['Int']['output'];
  region: Scalars['String']['output'];
};

export type ProjectReview = {
  __typename?: 'ProjectReview';
  createdAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  projectId: Scalars['BigInt']['output'];
  rejectionReasons: Array<Scalars['String']['output']>;
  reviewNotes?: Maybe<Scalars['String']['output']>;
  reviewedAt?: Maybe<Scalars['Date']['output']>;
  status: ProjectReviewStatus;
  updatedAt: Scalars['Date']['output'];
  version: Scalars['Int']['output'];
};

export type ProjectReviewRequestInput = {
  projectId: Scalars['BigInt']['input'];
};

export enum ProjectReviewStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  RevisionsRequested = 'REVISIONS_REQUESTED'
}

export enum ProjectReviewStatusInput {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  RevisionsRequested = 'REVISIONS_REQUESTED'
}

export type ProjectReviewSubmitInput = {
  projectId: Scalars['BigInt']['input'];
  rejectionReasons?: InputMaybe<Array<RejectionReason>>;
  reviewNotes?: InputMaybe<Scalars['String']['input']>;
  status: ProjectReviewStatusInput;
};

export type ProjectReward = {
  __typename?: 'ProjectReward';
  /** Category of ProjectReward */
  category?: Maybe<Scalars['String']['output']>;
  /** Confirmation message for the reward */
  confirmationMessage?: Maybe<Scalars['String']['output']>;
  /** Cost of the reward, priced in USD cents. */
  cost: Scalars['Int']['output'];
  /** The date the creator created the reward */
  createdAt: Scalars['Date']['output'];
  /**
   * Whether the reward is deleted or not. Deleted rewards should not appear in the funding flow. Moreover, deleted
   * rewards should only be visible by the project owner and the users that purchased it.
   */
  deleted: Scalars['Boolean']['output'];
  /** Internally used to track whether a reward was soft deleted */
  deletedAt?: Maybe<Scalars['Date']['output']>;
  /** Short description of the reward. */
  description?: Maybe<Scalars['String']['output']>;
  /** Estimated availability date of a reward that is in development */
  estimatedAvailabilityDate?: Maybe<Scalars['Date']['output']>;
  /** Estimated delivery time from the time of purchase */
  estimatedDeliveryInWeeks?: Maybe<Scalars['Int']['output']>;
  /** Boolean value to indicate whether this reward requires shipping */
  hasShipping: Scalars['Boolean']['output'];
  id: Scalars['BigInt']['output'];
  /**
   * Project reward images.
   * @deprecated Use images instead.
   */
  image?: Maybe<Scalars['String']['output']>;
  images: Array<Scalars['String']['output']>;
  /** Boolean value to indicate whether this reward is an addon */
  isAddon: Scalars['Boolean']['output'];
  /** Boolean value to indicate whether this reward is hidden */
  isHidden: Scalars['Boolean']['output'];
  /** Maximum times the item can be purchased */
  maxClaimable?: Maybe<Scalars['Int']['output']>;
  /** Name of the reward. */
  name: Scalars['String']['output'];
  /** Posts for the reward */
  posts: Array<Post>;
  /** Boolean value to indicate whether this reward is in development or ready to ship */
  preOrder: Scalars['Boolean']['output'];
  /** Private comment prompts for the reward */
  privateCommentPrompts: Array<PrivateCommentPrompt>;
  /** Boolean value to indicate whether this reward requires shipping */
  project: Project;
  /** Currency in which the reward cost is stored. */
  rewardCurrency: RewardCurrency;
  sentByEmailAt?: Maybe<Scalars['Date']['output']>;
  /** Shipping rates for the reward. */
  shippingConfig?: Maybe<ShippingConfig>;
  /** Short description of the reward. */
  shortDescription?: Maybe<Scalars['String']['output']>;
  /** Number of times this Project Reward was sold. */
  sold: Scalars['Int']['output'];
  soldOut: Scalars['Boolean']['output'];
  /** Tracks the stock of the reward */
  stock?: Maybe<Scalars['Int']['output']>;
  /** The last date when the creator has updated the reward */
  updatedAt: Scalars['Date']['output'];
  /** UUID for the reward, it stays consistent throughout the project reward updates (the ID does not) */
  uuid: Scalars['String']['output'];
};

export type ProjectRewardCurrencyUpdate = {
  projectId: Scalars['BigInt']['input'];
  rewardCurrency: RewardCurrency;
};

export type ProjectRewardCurrencyUpdateRewardsInput = {
  cost: Scalars['Int']['input'];
  rewardId: Scalars['BigInt']['input'];
};

export type ProjectRewardTrendingMonthlyGetRow = {
  __typename?: 'ProjectRewardTrendingMonthlyGetRow';
  count: Scalars['Int']['output'];
  projectReward: ProjectReward;
};

export type ProjectRewardTrendingQuarterlyGetRow = {
  __typename?: 'ProjectRewardTrendingQuarterlyGetRow';
  count: Scalars['Int']['output'];
  projectReward: ProjectReward;
};

export type ProjectRewardTrendingWeeklyGetRow = {
  __typename?: 'ProjectRewardTrendingWeeklyGetRow';
  count: Scalars['Int']['output'];
  projectReward: ProjectReward;
};

export type ProjectRewardsGroupedByRewardIdStats = {
  __typename?: 'ProjectRewardsGroupedByRewardIdStats';
  count: Scalars['Int']['output'];
  projectReward: ProjectRewardsGroupedByRewardIdStatsProjectReward;
};

export type ProjectRewardsGroupedByRewardIdStatsProjectReward = {
  __typename?: 'ProjectRewardsGroupedByRewardIdStatsProjectReward';
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Scalars['String']['output']>;
  maxClaimable?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  sold: Scalars['Int']['output'];
  uuid: Scalars['String']['output'];
};

export type ProjectRewardsStats = {
  __typename?: 'ProjectRewardsStats';
  count: Scalars['Int']['output'];
};

export enum ProjectShippingConfigType {
  Flat = 'FLAT',
  Incremental = 'INCREMENTAL',
  PerUnit = 'PER_UNIT'
}

export type ProjectShippingConfigsGetInput = {
  projectId: Scalars['BigInt']['input'];
};

export type ProjectShippingRate = {
  __typename?: 'ProjectShippingRate';
  baseRate: Scalars['Int']['output'];
  country: Scalars['String']['output'];
  incrementRate: Scalars['Int']['output'];
  sameAsDefault?: Maybe<Scalars['Boolean']['output']>;
};

export type ProjectStatistics = {
  __typename?: 'ProjectStatistics';
  totalPageviews: Scalars['Int']['output'];
  totalVisitors: Scalars['Int']['output'];
};

export type ProjectStats = {
  __typename?: 'ProjectStats';
  current?: Maybe<ProjectStatsBase>;
  datetimeRange: DatetimeRange;
  prevTimeRange?: Maybe<ProjectStatsBase>;
};

export type ProjectStatsBase = {
  __typename?: 'ProjectStatsBase';
  projectContributionsStats?: Maybe<ProjectContributionsStatsBase>;
  /** @deprecated will be deprecated */
  projectFollowers?: Maybe<ProjectFollowerStats>;
  /** @deprecated will be deprecated */
  projectFunderRewards?: Maybe<ProjectFunderRewardStats>;
  /** @deprecated will be deprecated */
  projectFunders?: Maybe<ProjectFunderStats>;
  /** @deprecated will be deprecated */
  projectViews?: Maybe<ProjectViewStats>;
};

export enum ProjectStatus {
  Accepted = 'accepted',
  Active = 'active',
  Closed = 'closed',
  Deleted = 'deleted',
  Draft = 'draft',
  InReview = 'in_review',
  Inactive = 'inactive',
  PreLaunch = 'pre_launch'
}

export type ProjectStatusUpdate = {
  projectId: Scalars['BigInt']['input'];
  status: ProjectStatus;
};

export enum ProjectSubCategory {
  App = 'APP',
  Art = 'ART',
  Book = 'BOOK',
  CircularEconomy = 'CIRCULAR_ECONOMY',
  Collectible = 'COLLECTIBLE',
  ContentCreator = 'CONTENT_CREATOR',
  Course = 'COURSE',
  Event = 'EVENT',
  Film = 'FILM',
  Fundraiser = 'FUNDRAISER',
  Game = 'GAME',
  HackerSpace = 'HACKER_SPACE',
  Hardware = 'HARDWARE',
  Humanitarian = 'HUMANITARIAN',
  Journalism = 'JOURNALISM',
  LegalFund = 'LEGAL_FUND',
  Lobby = 'LOBBY',
  Medical = 'MEDICAL',
  Meetup = 'MEETUP',
  Music = 'MUSIC',
  OsSoftware = 'OS_SOFTWARE',
  Other = 'OTHER',
  Podcast = 'PODCAST',
  Promotion = 'PROMOTION',
  Travel = 'TRAVEL'
}

export type ProjectSubscriptionPlan = {
  __typename?: 'ProjectSubscriptionPlan';
  cost: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  currency: SubscriptionCurrencyType;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  interval: UserSubscriptionInterval;
  name: Scalars['String']['output'];
  projectId: Scalars['BigInt']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProjectSubscriptionPlansInput = {
  where: ProjectSubscriptionPlansWhereInput;
};

export type ProjectSubscriptionPlansWhereInput = {
  projectId: Scalars['BigInt']['input'];
};

export enum ProjectType {
  Donation = 'donation',
  Grant = 'grant',
  Reward = 'reward'
}

export type ProjectViewBaseStats = {
  __typename?: 'ProjectViewBaseStats';
  value: Scalars['String']['output'];
  viewCount: Scalars['Int']['output'];
  visitorCount: Scalars['Int']['output'];
};

export type ProjectViewStats = {
  __typename?: 'ProjectViewStats';
  /** Project view/visitor count of each viewing country in the given datetime range. */
  countries: Array<ProjectViewBaseStats>;
  /** Project view/visitor count of each refferal platform in the given datetime range. */
  referrers: Array<ProjectViewBaseStats>;
  /** Project view/visitor count of each viewing region in the given datetime range. */
  regions: Array<ProjectViewBaseStats>;
  /** Project view count in the given datetime range. */
  viewCount: Scalars['Int']['output'];
  /** Project visitor count in the given datetime range. */
  visitorCount: Scalars['Int']['output'];
  /** Project views/visitors count over the given datetime range grouped by day, or month. */
  visitorGraph: Array<Maybe<PageViewCountGraph>>;
};

export type ProjectsGetQueryInput = {
  /**
   * Takes an array of Project OrderBy options. When passing multiple ordering options, each option must
   * be passed in a separate object in the array. This ensures consistent ordering of the orderBy options in the
   * result set.
   */
  orderBy?: InputMaybe<Array<ProjectsOrderByInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: ProjectsGetWhereInput;
};

export type ProjectsGetWhereInput = {
  category?: InputMaybe<ProjectCategory>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ids?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProjectStatus>;
  statuses?: InputMaybe<Array<ProjectStatus>>;
  subCategory?: InputMaybe<ProjectSubCategory>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<ProjectType>;
};

export type ProjectsMostFundedByCategoryInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  range: ProjectsMostFundedByCategoryRange;
  subCategory?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectsMostFundedByCategoryRange {
  Week = 'WEEK'
}

export type ProjectsMostFundedByTagInput = {
  range: ProjectsMostFundedByTagRange;
  tagIds: Array<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectsMostFundedByTagRange {
  Week = 'WEEK'
}

export enum ProjectsOrderByField {
  Balance = 'balance',
  CreatedAt = 'createdAt',
  LaunchedAt = 'launchedAt'
}

export type ProjectsOrderByInput = {
  direction: OrderByDirection;
  field: ProjectsOrderByField;
};

export type ProjectsResponse = {
  __typename?: 'ProjectsResponse';
  projects: Array<Project>;
  summary?: Maybe<ProjectsSummary>;
};

export type ProjectsSummary = {
  __typename?: 'ProjectsSummary';
  /** Total of satoshis raised by projects on the platform. */
  fundedTotal?: Maybe<Scalars['BigInt']['output']>;
  /** Total number of funders on the platform. */
  fundersCount?: Maybe<Scalars['Int']['output']>;
  /** Total number of projects ever created on the platform. */
  projectsCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']['output']>;
  activitiesCountGroupedByProject: Array<ProjectActivitiesCount>;
  /** Returns all activities. */
  activitiesGet: ActivitiesGetResponse;
  badges: Array<Badge>;
  contribution: Contribution;
  contributionsGet?: Maybe<ContributionsGetResponse>;
  contributor: Funder;
  currencyQuoteGet: CurrencyQuoteGetResponse;
  entry?: Maybe<Entry>;
  fundersGet: Array<Funder>;
  getDashboardFunders: Array<Funder>;
  /** Returns all published entries (deprecated, use posts instead) */
  getEntries: Array<Entry>;
  /**
   * Returns the public key of the Lightning node linked to a project, if there is one.
   * @deprecated No longer supported
   */
  getProjectPubkey?: Maybe<Scalars['String']['output']>;
  getProjectReward: ProjectReward;
  getSignedUploadUrl: SignedUploadUrl;
  getWallet: Wallet;
  geyserPromotionsContributionStats: GeyserPromotionsContributionStats;
  grant: Grant;
  grantStatistics: GrantStatistics;
  grants: Array<Grant>;
  guardianUsersGet?: Maybe<GuardianUsersGetResponse>;
  leaderboardGlobalAmbassadorsGet: Array<GlobalAmbassadorLeaderboardRow>;
  leaderboardGlobalContributorsGet: Array<GlobalContributorLeaderboardRow>;
  leaderboardGlobalCreatorsGet: Array<GlobalCreatorLeaderboardRow>;
  leaderboardGlobalProjectsGet: Array<GlobalProjectLeaderboardRow>;
  lightningAddressVerify: LightningAddressVerifyResponse;
  me?: Maybe<User>;
  orderGet?: Maybe<Order>;
  ordersGet?: Maybe<OrdersGetResponse>;
  ordersStatsGet: OrdersStatsBase;
  payment: Payment;
  paymentInvoiceSanctionCheckStatusGet: PaymentInvoiceSanctionCheckStatusResponse;
  paymentRefundsGet?: Maybe<PaymentRefundsGetResponse>;
  /** Get all refundable payments for the logged in user. */
  paymentsRefundableGet: RefundablePaymentsGetResponse;
  payoutGet?: Maybe<PayoutGetResponse>;
  pledgeRefundGet?: Maybe<PledgeRefundGetResponse>;
  pledgeRefundsGet?: Maybe<PledgeRefundsGetResponse>;
  post?: Maybe<Post>;
  postEmailSegmentSizeGet: Scalars['Int']['output'];
  /** Returns all published posts */
  posts: Array<Post>;
  projectCountriesGet: Array<ProjectCountriesGetResult>;
  projectGet?: Maybe<Project>;
  projectGoal: ProjectGoal;
  projectGoals: ProjectGoals;
  projectLeaderboardAmbassadorsGet: Array<ProjectLeaderboardAmbassadorsRow>;
  projectLeaderboardContributorsGet: Array<ProjectLeaderboardContributorsRow>;
  projectNotificationSettingsGet: CreatorNotificationSettings;
  projectRegionsGet: Array<ProjectRegionsGetResult>;
  projectRewardCategoriesGet: Array<Scalars['String']['output']>;
  projectRewardGet: ProjectReward;
  projectRewardsGet: Array<ProjectReward>;
  projectRewardsTrendingMonthlyGet: Array<ProjectRewardTrendingMonthlyGetRow>;
  projectRewardsTrendingQuarterlyGet: Array<ProjectRewardTrendingQuarterlyGetRow>;
  projectRewardsTrendingWeeklyGet: Array<ProjectRewardTrendingWeeklyGetRow>;
  projectShippingConfigsGet: Array<ShippingConfig>;
  projectStatsGet: ProjectStats;
  projectSubscriptionPlan?: Maybe<ProjectSubscriptionPlan>;
  projectSubscriptionPlans: Array<ProjectSubscriptionPlan>;
  /** By default, returns a list of all active projects. */
  projectsGet: ProjectsResponse;
  projectsMostFundedByCategory: Array<ProjectMostFundedByCategory>;
  projectsMostFundedByTag: Array<ProjectMostFundedByTag>;
  projectsSummary: ProjectsSummary;
  shippingAddressesGet: Array<ShippingAddress>;
  statusCheck: Scalars['Boolean']['output'];
  tagsGet: Array<TagsGetResult>;
  tagsMostFundedGet: Array<TagsMostFundedGetResult>;
  user: User;
  userBadge?: Maybe<UserBadge>;
  userBadges: Array<UserBadge>;
  userEmailIsAvailable: Scalars['Boolean']['output'];
  userEmailIsValid: UserEmailIsValidResponse;
  userIpCountry: Scalars['String']['output'];
  userNotificationSettingsGet: ProfileNotificationSettings;
  userSubscription?: Maybe<UserSubscription>;
  userSubscriptions: Array<UserSubscription>;
};


export type QueryActivitiesCountGroupedByProjectArgs = {
  input: ActivitiesCountGroupedByProjectInput;
};


export type QueryActivitiesGetArgs = {
  input?: InputMaybe<GetActivitiesInput>;
};


export type QueryContributionArgs = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryContributionsGetArgs = {
  input?: InputMaybe<GetContributionsInput>;
};


export type QueryContributorArgs = {
  input: GetContributorInput;
};


export type QueryCurrencyQuoteGetArgs = {
  input: CurrencyQuoteGetInput;
};


export type QueryEntryArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryFundersGetArgs = {
  input: GetFundersInput;
};


export type QueryGetDashboardFundersArgs = {
  input?: InputMaybe<GetFundersInput>;
};


export type QueryGetEntriesArgs = {
  input?: InputMaybe<GetEntriesInput>;
};


export type QueryGetProjectPubkeyArgs = {
  projectId: Scalars['BigInt']['input'];
};


export type QueryGetProjectRewardArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryGetSignedUploadUrlArgs = {
  input: FileUploadInput;
};


export type QueryGetWalletArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryGeyserPromotionsContributionStatsArgs = {
  input: GeyserPromotionsContributionStatsInput;
};


export type QueryGrantArgs = {
  input: GrantGetInput;
};


export type QueryGuardianUsersGetArgs = {
  input: GuardianUsersGetInput;
};


export type QueryLeaderboardGlobalAmbassadorsGetArgs = {
  input: LeaderboardGlobalAmbassadorsGetInput;
};


export type QueryLeaderboardGlobalContributorsGetArgs = {
  input: LeaderboardGlobalContributorsGetInput;
};


export type QueryLeaderboardGlobalCreatorsGetArgs = {
  input: LeaderboardGlobalCreatorsGetInput;
};


export type QueryLeaderboardGlobalProjectsGetArgs = {
  input: LeaderboardGlobalProjectsGetInput;
};


export type QueryLightningAddressVerifyArgs = {
  lightningAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderGetArgs = {
  where: UniqueOrderInput;
};


export type QueryOrdersGetArgs = {
  input: OrdersGetInput;
};


export type QueryOrdersStatsGetArgs = {
  input: GetProjectOrdersStatsInput;
};


export type QueryPaymentArgs = {
  input: PaymentGetInput;
};


export type QueryPaymentInvoiceSanctionCheckStatusGetArgs = {
  input: PaymentInvoiceSanctionCheckStatusGetInput;
};


export type QueryPayoutGetArgs = {
  input: PayoutGetInput;
};


export type QueryPledgeRefundGetArgs = {
  input: PledgeRefundGetInput;
};


export type QueryPostArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryPostEmailSegmentSizeGetArgs = {
  input: PostEmailSegmentSizeGetInput;
};


export type QueryPostsArgs = {
  input?: InputMaybe<GetEntriesInput>;
};


export type QueryProjectCountriesGetArgs = {
  input?: InputMaybe<ProjectCountriesGetInput>;
};


export type QueryProjectGetArgs = {
  where: UniqueProjectQueryInput;
};


export type QueryProjectGoalArgs = {
  projectGoalId: Scalars['BigInt']['input'];
};


export type QueryProjectGoalsArgs = {
  input: GetProjectGoalsInput;
};


export type QueryProjectLeaderboardAmbassadorsGetArgs = {
  input: ProjectLeaderboardAmbassadorsGetInput;
};


export type QueryProjectLeaderboardContributorsGetArgs = {
  input: ProjectLeaderboardContributorsGetInput;
};


export type QueryProjectNotificationSettingsGetArgs = {
  projectId: Scalars['BigInt']['input'];
};


export type QueryProjectRewardGetArgs = {
  input: GetProjectRewardInput;
};


export type QueryProjectRewardsGetArgs = {
  input: GetProjectRewardsInput;
};


export type QueryProjectShippingConfigsGetArgs = {
  input: ProjectShippingConfigsGetInput;
};


export type QueryProjectStatsGetArgs = {
  input: GetProjectStatsInput;
};


export type QueryProjectSubscriptionPlanArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryProjectSubscriptionPlansArgs = {
  input: ProjectSubscriptionPlansInput;
};


export type QueryProjectsGetArgs = {
  input?: InputMaybe<ProjectsGetQueryInput>;
};


export type QueryProjectsMostFundedByCategoryArgs = {
  input: ProjectsMostFundedByCategoryInput;
};


export type QueryProjectsMostFundedByTagArgs = {
  input: ProjectsMostFundedByTagInput;
};


export type QueryShippingAddressesGetArgs = {
  input: ShippingAddressesGetInput;
};


export type QueryUserArgs = {
  where: UserGetInput;
};


export type QueryUserBadgeArgs = {
  userBadgeId: Scalars['BigInt']['input'];
};


export type QueryUserBadgesArgs = {
  input: BadgesGetInput;
};


export type QueryUserEmailIsAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserEmailIsValidArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserNotificationSettingsGetArgs = {
  userId: Scalars['BigInt']['input'];
};


export type QueryUserSubscriptionArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryUserSubscriptionsArgs = {
  input: UserSubscriptionsInput;
};

export enum QuoteCurrency {
  Usd = 'USD'
}

export type RefundablePaymentsGetResponse = {
  __typename?: 'RefundablePaymentsGetResponse';
  refundablePayments: Array<ProjectRefundablePayment>;
};

export enum RejectionReason {
  IncompleteProject = 'INCOMPLETE_PROJECT',
  RestrictedProjectType = 'RESTRICTED_PROJECT_TYPE',
  Scam = 'SCAM',
  SellingSecurity = 'SELLING_SECURITY',
  Spam = 'SPAM',
  UnsupportedRegion = 'UNSUPPORTED_REGION'
}

export type ResourceInput = {
  resourceId: Scalars['String']['input'];
  resourceType: FundingResourceType;
};

export enum RewardCurrency {
  Btcsat = 'BTCSAT',
  Usdcent = 'USDCENT'
}

export type RskKeyPair = {
  __typename?: 'RskKeyPair';
  address: Scalars['String']['output'];
  derivationPath: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
};

export type RskKeyPairInput = {
  address: Scalars['String']['input'];
  derivationPath: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
};

export type RskToLightningSwapPaymentDetails = {
  __typename?: 'RskToLightningSwapPaymentDetails';
  lightningInvoiceId: Scalars['String']['output'];
  lightningInvoiceStatus: LightningInvoiceStatus;
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type RskToLightningSwapPaymentDetailsBoltzInput = {
  refundPublicKey: Scalars['String']['input'];
};

export type RskToLightningSwapPaymentDetailsInput = {
  boltz: RskToLightningSwapPaymentDetailsBoltzInput;
  /**
   * The Lightning address to send the swapped funds to.
   * If not provided, the funds will be sent to the user's default lightning address.
   */
  lightningAddress?: InputMaybe<Scalars['String']['input']>;
};

export type RskToOnChainSwapPaymentDetails = {
  __typename?: 'RskToOnChainSwapPaymentDetails';
  onChainAddress: Scalars['String']['output'];
  onChainTxId?: Maybe<Scalars['String']['output']>;
  preimageHash: Scalars['String']['output'];
  swapId: Scalars['String']['output'];
  swapMetadata: Scalars['String']['output'];
};

export type RskToOnChainSwapPaymentDetailsBoltzInput = {
  claimPublicKey: Scalars['String']['input'];
  preimageHash: Scalars['String']['input'];
  userClaimAddress: Scalars['String']['input'];
};

export type RskToOnChainSwapPaymentDetailsInput = {
  boltz: RskToOnChainSwapPaymentDetailsBoltzInput;
};

export type SendOtpByEmailInput = {
  action: MfaAction;
  email?: InputMaybe<Scalars['String']['input']>;
};

export enum SettingValueType {
  Boolean = 'BOOLEAN',
  Enum = 'ENUM',
  Integer = 'INTEGER',
  String = 'STRING'
}

export type ShippingAddress = {
  __typename?: 'ShippingAddress';
  addressLines: Array<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type ShippingAddressCreateInput = {
  addressLines: Array<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingAddressesGetInput = {
  userId: Scalars['BigInt']['input'];
};

export type ShippingConfig = {
  __typename?: 'ShippingConfig';
  globalShipping: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  shippingRates?: Maybe<Array<ProjectShippingRate>>;
  type: ProjectShippingConfigType;
};

export enum ShippingDestination {
  International = 'international',
  National = 'national'
}

export type SignedUploadUrl = {
  __typename?: 'SignedUploadUrl';
  /** Distribution URL from which the image will be served */
  distributionUrl: Scalars['String']['output'];
  /** Signed URL used by the client to upload an image */
  uploadUrl: Scalars['String']['output'];
};

export type SourceResource = Activity | Entry | Project;

export type Sponsor = {
  __typename?: 'Sponsor';
  createdAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: SponsorStatus;
  url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum SponsorStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type StatsInterface = {
  count: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalUsd: Scalars['Float']['output'];
};

export type StripeCheckoutSessionInput = {
  returnUrl: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']['output']>;
  activityCreated: Activity;
  contributionStatusUpdated: ContributionStatusUpdatedSubscriptionResponse;
  entryPublished: EntryPublishedSubscriptionResponse;
  paymentStatusUpdated: Payment;
  postPublished: PostPublishedSubscriptionResponse;
  projectActivated: ProjectActivatedSubscriptionResponse;
};


export type SubscriptionActivityCreatedArgs = {
  input?: InputMaybe<ActivityCreatedSubscriptionInput>;
};


export type SubscriptionContributionStatusUpdatedArgs = {
  input?: InputMaybe<ContributionStatusUpdatedInput>;
};


export type SubscriptionPaymentStatusUpdatedArgs = {
  input: PaymentStatusUpdatedInput;
};

export enum SubscriptionCurrencyType {
  Usdcent = 'USDCENT'
}

export type SubscriptionPaymentConfirmationInput = {
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  userSubscriptionUuid: Scalars['String']['input'];
};

export type Swap = {
  __typename?: 'Swap';
  json: Scalars['String']['output'];
};

export type TotpInput = {
  totp: Scalars['Int']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
};

export type TagCreateInput = {
  label: Scalars['String']['input'];
};

export type TagsGetResult = {
  __typename?: 'TagsGetResult';
  count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
};

export type TagsMostFundedGetResult = {
  __typename?: 'TagsMostFundedGetResult';
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
};

export type TwoFaInput = {
  OTP?: InputMaybe<OtpInput>;
  /** TOTP is not supported yet. */
  TOTP?: InputMaybe<TotpInput>;
};

export type UniqueOrderInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UniqueProjectQueryInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Project's Nostr Public Key in HEX format */
  nostrPublicKey?: InputMaybe<Scalars['String']['input']>;
};

export enum UpdatableOrderStatus {
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Shipped = 'SHIPPED'
}

export type UpdateEntryInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entryId: Scalars['BigInt']['input'];
  /** Header image of the Entry. */
  image?: InputMaybe<Scalars['String']['input']>;
  markdown?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  /** AON goal update inputs */
  aonGoal?: InputMaybe<ProjectAonGoalUpdateInput>;
  /** Project category */
  category?: InputMaybe<ProjectCategory>;
  /** Project ISO3166 country code */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** Description of the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Funding strategy */
  fundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  /** Project header images. */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Project creation step */
  lastCreationStep?: InputMaybe<ProjectCreationStep>;
  /** Scheduled launch date */
  launchScheduledAt?: InputMaybe<Scalars['Date']['input']>;
  /** Project links */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Project name, used both for the project URL, project lightning address and NIP05. */
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['BigInt']['input'];
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Project region */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The currency used to price rewards for the project. Currently only USDCENT supported. Should become an Enum. */
  rewardCurrency?: InputMaybe<RewardCurrency>;
  /** A short description of the project. */
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  /** Project sub-category */
  subCategory?: InputMaybe<ProjectSubCategory>;
  /** Project tags */
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Project thumbnail image. */
  thumbnailImage?: InputMaybe<Scalars['String']['input']>;
  /** Public title of the project. */
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ProjectType>;
};

export type UpdateProjectRewardInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  confirmationMessage?: InputMaybe<Scalars['String']['input']>;
  /** Cost of the reward, priced in USD cents */
  cost?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedAvailabilityDate?: InputMaybe<Scalars['Date']['input']>;
  estimatedDeliveryInWeeks?: InputMaybe<Scalars['Int']['input']>;
  hasShipping?: InputMaybe<Scalars['Boolean']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isAddon?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  maxClaimable?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preOrder?: InputMaybe<Scalars['Boolean']['input']>;
  privateCommentPrompts?: InputMaybe<Array<PrivateCommentPrompt>>;
  projectRewardId: Scalars['BigInt']['input'];
  shippingConfigId?: InputMaybe<Scalars['BigInt']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectShippingConfigInput = {
  globalShipping: Scalars['Boolean']['input'];
  id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  shippingRates: Array<UpdateProjectShippingFeeRateInput>;
  type: ProjectShippingConfigType;
};

export type UpdateProjectShippingFeeRateInput = {
  baseRate: Scalars['Int']['input'];
  country: Scalars['String']['input'];
  incrementRate: Scalars['Int']['input'];
  sameAsDefault: Scalars['Boolean']['input'];
};

export type UpdateProjectSubscriptionPlanInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  currency?: InputMaybe<SubscriptionCurrencyType>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['BigInt']['input'];
  intervalType?: InputMaybe<UserSubscriptionInterval>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['BigInt']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserSubscriptionInput = {
  id: Scalars['BigInt']['input'];
  status?: InputMaybe<UserSubscriptionStatus>;
};

export type UpdateWalletInput = {
  feePercentage?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['BigInt']['input'];
  lightningAddressConnectionDetailsInput?: InputMaybe<LightningAddressConnectionDetailsUpdateInput>;
  lndConnectionDetailsInput?: InputMaybe<LndConnectionDetailsUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  nwcConnectionDetailsInput?: InputMaybe<NwcConnectionDetailsUpdateInput>;
  twoFAInput?: InputMaybe<TwoFaInput>;
};

export type UpdateWalletStateInput = {
  status: WalletStatus;
  statusCode: WalletStatusCode;
  walletId: Scalars['BigInt']['input'];
};

export type User = {
  __typename?: 'User';
  accountKeys?: Maybe<UserAccountKeys>;
  badges: Array<UserBadge>;
  bio?: Maybe<Scalars['String']['output']>;
  complianceDetails: UserComplianceDetails;
  /** Returns a user's contributions across all projects. */
  contributions: Array<Contribution>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerifiedAt?: Maybe<Scalars['Date']['output']>;
  /** The type of entity that the User is in real life. For example, a person, a company, or a non-profit. */
  entityType?: Maybe<UserEntityType>;
  /**
   * By default, returns all the entries of a user, both published and unpublished but not deleted.
   * To filter the result set, an explicit input can be passed that specifies a value of true or false for the published field.
   * An unpublished entry is only returned if the requesting user is the creator of the entry.
   */
  entries: Array<Entry>;
  /**
   * External accounts linked to the User. It can be a twitter account if the User linked their account. For anonymous
   * users, this field can contain the wallet or app from which they funded, eg: Fountain, Breeze, etc.
   */
  externalAccounts: Array<ExternalAccount>;
  guardianType?: Maybe<GuardianType>;
  hasSocialAccount: Scalars['Boolean']['output'];
  heroId: Scalars['String']['output'];
  heroStats: UserHeroStats;
  id: Scalars['BigInt']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isEmailVerified: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
  ownerOf: Array<OwnerOf>;
  /**
   * By default, returns all the posts of a user, both published and unpublished but not deleted.
   * To filter the result set, an explicit input can be passed that specifies a value of true or false for the published field.
   * An unpublished post is only returned if the requesting user is the creator of the post.
   */
  posts: Array<Post>;
  /** Details on the participation of a User in a project. */
  projectContributions: Array<UserProjectContribution>;
  projectFollows: Array<Project>;
  /**
   * Returns the projects of a user. By default, this field returns all the projects for that user, both draft and non-draft.
   * To filter the result set, an explicit input can be passed that specifies a value of the status field.
   */
  projects: Array<Project>;
  /** @deprecated Use heroStats.rank instead */
  ranking?: Maybe<Scalars['BigInt']['output']>;
  taxProfile?: Maybe<UserTaxProfile>;
  taxProfileId?: Maybe<Scalars['BigInt']['output']>;
  username: Scalars['String']['output'];
  wallet?: Maybe<Wallet>;
};


export type UserContributionsArgs = {
  input?: InputMaybe<UserContributionsInput>;
};


export type UserEntriesArgs = {
  input?: InputMaybe<UserEntriesGetInput>;
};


export type UserPostsArgs = {
  input?: InputMaybe<UserPostsGetInput>;
};


export type UserProjectsArgs = {
  input?: InputMaybe<UserProjectsGetInput>;
};

export type UserAccountKeys = {
  __typename?: 'UserAccountKeys';
  createdAt: Scalars['Date']['output'];
  encryptedSeed: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  rskKeyPair: RskKeyPair;
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['BigInt']['output'];
};

export type UserAccountKeysUpdateInput = {
  encryptedSeed: Scalars['String']['input'];
  rskKeyPair: RskKeyPairInput;
};

export type UserBadge = {
  __typename?: 'UserBadge';
  badge: Badge;
  badgeAwardEventId?: Maybe<Scalars['String']['output']>;
  contributionId?: Maybe<Scalars['BigInt']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  status?: Maybe<UserBadgeStatus>;
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['BigInt']['output'];
};

export enum UserBadgeStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING'
}

export type UserComplianceDetails = {
  __typename?: 'UserComplianceDetails';
  contributionLimits: UserContributionLimits;
  currentVerificationLevel: UserVerificationLevelStatus;
  verificationLevels: Array<UserVerificationLevelStatus>;
  verifiedDetails: UserVerifiedDetails;
};

export type UserContributionLimit = {
  __typename?: 'UserContributionLimit';
  limit: Scalars['Float']['output'];
  nextReset: Scalars['Date']['output'];
  reached: Scalars['Boolean']['output'];
  remaining: Scalars['Float']['output'];
};

export type UserContributionLimits = {
  __typename?: 'UserContributionLimits';
  monthly: UserContributionLimit;
};

export type UserContributionsInput = {
  pagination?: InputMaybe<PaginationInput>;
};

export type UserEmailIsValidResponse = {
  __typename?: 'UserEmailIsValidResponse';
  isAvailable: Scalars['Boolean']['output'];
  isDeliverable: Scalars['Boolean']['output'];
  isValid: Scalars['Boolean']['output'];
  reason?: Maybe<Scalars['String']['output']>;
};

export type UserEmailUpdateInput = {
  email: Scalars['String']['input'];
  /** The two-factor authentication input is required if the user already has an email set. */
  twoFAInput?: InputMaybe<TwoFaInput>;
};

export enum UserEntityType {
  Company = 'COMPANY',
  NonProfit = 'NON_PROFIT',
  Person = 'PERSON'
}

export type UserEntriesGetInput = {
  where?: InputMaybe<UserEntriesGetWhereInput>;
};

export type UserEntriesGetWhereInput = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserGetInput = {
  heroId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UserHeroStats = {
  __typename?: 'UserHeroStats';
  ambassadorStats: AmbassadorStats;
  contributorStats: ContributorStats;
  creatorStats: CreatorStats;
};

export type UserNotificationSettings = {
  __typename?: 'UserNotificationSettings';
  notificationSettings: Array<NotificationSettings>;
  userId: Scalars['BigInt']['output'];
};

export type UserPostsGetInput = {
  where?: InputMaybe<UserPostsGetWhereInput>;
};

export type UserPostsGetWhereInput = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserProjectContribution = {
  __typename?: 'UserProjectContribution';
  /** Funder linked to the funding contribution. Only present if the contribution was a funding contribution. */
  funder?: Maybe<Funder>;
  /**
   * Boolean value indicating if the User was an ambassador of the project.
   * @deprecated No longer supported
   */
  isAmbassador: Scalars['Boolean']['output'];
  /** Boolean value indicating if the User funded the project. */
  isFunder: Scalars['Boolean']['output'];
  /**
   * Boolean value indicating if the User was a sponsor for the project.
   * @deprecated No longer supported
   */
  isSponsor: Scalars['Boolean']['output'];
  /** Project linked to the contributions. */
  project: Project;
};

export type UserProjectsGetInput = {
  where?: InputMaybe<UserProjectsGetWhereInput>;
};

export type UserProjectsGetWhereInput = {
  status?: InputMaybe<ProjectStatus>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  canceledAt?: Maybe<Scalars['Date']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  nextBillingDate: Scalars['Date']['output'];
  projectSubscriptionPlan: ProjectSubscriptionPlan;
  startDate: Scalars['Date']['output'];
  status: UserSubscriptionStatus;
  updatedAt: Scalars['Date']['output'];
};

export enum UserSubscriptionInterval {
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export enum UserSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Paused = 'PAUSED'
}

export type UserSubscriptionsInput = {
  where: UserSubscriptionsWhereInput;
};

export type UserSubscriptionsWhereInput = {
  userId: Scalars['BigInt']['input'];
};

export type UserTaxProfile = {
  __typename?: 'UserTaxProfile';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  legalEntityType: LegalEntityType;
  state?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['BigInt']['output'];
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserTaxProfileUpdateInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  legalEntityType: LegalEntityType;
  state?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export enum UserVerificationLevel {
  Level_0 = 'LEVEL_0',
  Level_1 = 'LEVEL_1',
  Level_2 = 'LEVEL_2',
  Level_3 = 'LEVEL_3'
}

export enum UserVerificationLevelInput {
  Level_2 = 'LEVEL_2',
  Level_3 = 'LEVEL_3'
}

export type UserVerificationLevelStatus = {
  __typename?: 'UserVerificationLevelStatus';
  level: UserVerificationLevel;
  status: UserVerificationStatus;
  verifiedAt?: Maybe<Scalars['Date']['output']>;
};

export enum UserVerificationStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type UserVerificationTokenGenerateInput = {
  verificationLevel: UserVerificationLevelInput;
};

export type UserVerificationTokenGenerateResponse = {
  __typename?: 'UserVerificationTokenGenerateResponse';
  token: Scalars['String']['output'];
  verificationLevel: UserVerificationLevel;
};

export type UserVerifiedDetails = {
  __typename?: 'UserVerifiedDetails';
  email?: Maybe<VerificationResult>;
  identity?: Maybe<VerificationResult>;
  phoneNumber?: Maybe<VerificationResult>;
};

export type VerificationResult = {
  __typename?: 'VerificationResult';
  verified?: Maybe<Scalars['Boolean']['output']>;
  verifiedAt?: Maybe<Scalars['Date']['output']>;
};

export enum VotingSystem {
  OneToOne = 'ONE_TO_ONE',
  StepLog_10 = 'STEP_LOG_10'
}

export type Wallet = {
  __typename?: 'Wallet';
  connectionDetails: ConnectionDetails;
  /** The fee percentage applied to contributions going to this wallet. */
  feePercentage?: Maybe<Scalars['Float']['output']>;
  id: Scalars['BigInt']['output'];
  /** Funding limits on this wallet */
  limits?: Maybe<WalletLimits>;
  /** Wallet name */
  name?: Maybe<Scalars['String']['output']>;
  state: WalletState;
};

export type WalletContributionLimits = {
  __typename?: 'WalletContributionLimits';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  offChain?: Maybe<WalletOffChainContributionLimits>;
  onChain?: Maybe<WalletOnChainContributionLimits>;
};

export type WalletLimits = {
  __typename?: 'WalletLimits';
  contribution?: Maybe<WalletContributionLimits>;
};

export type WalletOffChainContributionLimits = {
  __typename?: 'WalletOffChainContributionLimits';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type WalletOnChainContributionLimits = {
  __typename?: 'WalletOnChainContributionLimits';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type WalletResourceInput = {
  resourceId: Scalars['BigInt']['input'];
  resourceType: WalletResourceType;
};

export enum WalletResourceType {
  Project = 'project',
  User = 'user'
}

export type WalletState = {
  __typename?: 'WalletState';
  /**
   * The status field is meant to be displayed in the the public view of a project to provide insight to the user
   * that wants to contribute to the project.
   */
  status: WalletStatus;
  /**
   * The status code is a more descriptive field about the wallet status. It is meant to be displayed to the
   * project creator to help them understand what is wrong with their wallet connection. The field can only be queried
   * by the project creator.
   */
  statusCode: WalletStatusCode;
};

export enum WalletStatus {
  Inactive = 'INACTIVE',
  Ok = 'OK',
  Unstable = 'UNSTABLE'
}

export enum WalletStatusCode {
  NotFound = 'NOT_FOUND',
  NoRoute = 'NO_ROUTE',
  Ok = 'OK',
  Unknown = 'UNKNOWN',
  Unreachable = 'UNREACHABLE',
  WalletLocked = 'WALLET_LOCKED'
}

export type DashboardFundersGetInput = {
  orderBy?: InputMaybe<GetFundersOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GetDashboardFundersWhereInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  ActivityResource: ( Omit<Contribution, 'bitcoinQuote' | 'payments' | 'sourceResource'> & { bitcoinQuote?: Maybe<_RefType['BitcoinQuote']>, payments: Array<_RefType['Payment']>, sourceResource?: Maybe<_RefType['SourceResource']> } ) | ( Omit<Entry, 'contributions' | 'creator' | 'project'> & { contributions: Array<_RefType['Contribution']>, creator: _RefType['User'], project?: Maybe<_RefType['Project']> } ) | ( Omit<Post, 'contributions' | 'creator' | 'project'> & { contributions: Array<_RefType['Contribution']>, creator: _RefType['User'], project?: Maybe<_RefType['Project']> } ) | ( Omit<Project, 'ambassadors' | 'contributions' | 'entries' | 'followers' | 'grantApplications' | 'owners' | 'sponsors' | 'wallets'> & { ambassadors: _RefType['ProjectAmbassadorsConnection'], contributions: Array<_RefType['Contribution']>, entries: Array<_RefType['Entry']>, followers: Array<_RefType['User']>, grantApplications: Array<_RefType['GrantApplicant']>, owners: Array<_RefType['Owner']>, sponsors: Array<_RefType['Sponsor']>, wallets: Array<_RefType['Wallet']> } ) | ( ProjectGoal ) | ( Omit<ProjectReward, 'project'> & { project: _RefType['Project'] } );
  ConnectionDetails: ( LightningAddressConnectionDetails ) | ( LndConnectionDetailsPrivate ) | ( LndConnectionDetailsPublic ) | ( NwcConnectionDetailsPrivate );
  Grant: ( Omit<BoardVoteGrant, 'applicants' | 'boardMembers' | 'sponsors'> & { applicants: Array<_RefType['GrantApplicant']>, boardMembers: Array<_RefType['GrantBoardMember']>, sponsors: Array<_RefType['Sponsor']> } ) | ( Omit<CommunityVoteGrant, 'applicants' | 'sponsors'> & { applicants: Array<_RefType['GrantApplicant']>, sponsors: Array<_RefType['Sponsor']> } );
  PaymentDetails: ( FiatToLightningSwapPaymentDetails ) | ( LightningPaymentDetails ) | ( LightningToRskSwapPaymentDetails ) | ( OnChainToLightningSwapPaymentDetails ) | ( OnChainToRskSwapPaymentDetails );
  SourceResource: ( Omit<Activity, 'project' | 'resource'> & { project: _RefType['Project'], resource: _RefType['ActivityResource'] } ) | ( Omit<Entry, 'contributions' | 'creator' | 'project'> & { contributions: Array<_RefType['Contribution']>, creator: _RefType['User'], project?: Maybe<_RefType['Project']> } ) | ( Omit<Project, 'ambassadors' | 'contributions' | 'entries' | 'followers' | 'grantApplications' | 'owners' | 'sponsors' | 'wallets'> & { ambassadors: _RefType['ProjectAmbassadorsConnection'], contributions: Array<_RefType['Contribution']>, entries: Array<_RefType['Entry']>, followers: Array<_RefType['User']>, grantApplications: Array<_RefType['GrantApplicant']>, owners: Array<_RefType['Owner']>, sponsors: Array<_RefType['Sponsor']>, wallets: Array<_RefType['Wallet']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  GraphData: ( ProjectContributionsStatsGraphDataAmount );
  GraphSumData: ( FunderRewardGraphSum );
  HeroStats: ( AmbassadorStats ) | ( ContributorStats ) | ( CreatorStats );
  LndConnectionDetails: never;
  MutationResponse: ( DeleteUserResponse ) | ( ProjectAonGoalStatusUpdateResponse ) | ( ProjectDeleteResponse ) | ( ProjectGoalDeleteResponse );
  StatsInterface: ( ProjectContributionsGroupedByMethodStats ) | ( ProjectContributionsStats );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActivitiesCountGroupedByProjectInput: ActivitiesCountGroupedByProjectInput;
  ActivitiesGetResponse: ResolverTypeWrapper<Omit<ActivitiesGetResponse, 'activities'> & { activities: Array<ResolversTypes['Activity']> }>;
  Activity: ResolverTypeWrapper<Omit<Activity, 'project' | 'resource'> & { project: ResolversTypes['Project'], resource: ResolversTypes['ActivityResource'] }>;
  ActivityCreatedSubscriptionInput: ActivityCreatedSubscriptionInput;
  ActivityCreatedSubscriptionWhereInput: ActivityCreatedSubscriptionWhereInput;
  ActivityFeedName: ActivityFeedName;
  ActivityResource: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ActivityResource']>;
  ActivityResourceType: ActivityResourceType;
  Ambassador: ResolverTypeWrapper<Omit<Ambassador, 'user'> & { user: ResolversTypes['User'] }>;
  AmbassadorAddInput: AmbassadorAddInput;
  AmbassadorStats: ResolverTypeWrapper<AmbassadorStats>;
  AmbassadorUpdateInput: AmbassadorUpdateInput;
  AmountCurrency: AmountCurrency;
  AmountSummary: ResolverTypeWrapper<AmountSummary>;
  AnalyticsGroupByInterval: AnalyticsGroupByInterval;
  Badge: ResolverTypeWrapper<Badge>;
  BadgeClaimInput: BadgeClaimInput;
  BadgesGetInput: BadgesGetInput;
  BadgesGetWhereInput: BadgesGetWhereInput;
  BaseCurrency: BaseCurrency;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BitcoinPaymentMethods: ResolverTypeWrapper<BitcoinPaymentMethods>;
  BitcoinQuote: ResolverTypeWrapper<BitcoinQuote>;
  BoardVoteGrant: ResolverTypeWrapper<Omit<BoardVoteGrant, 'applicants' | 'boardMembers' | 'sponsors'> & { applicants: Array<ResolversTypes['GrantApplicant']>, boardMembers: Array<ResolversTypes['GrantBoardMember']>, sponsors: Array<ResolversTypes['Sponsor']> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CommunityVoteGrant: ResolverTypeWrapper<Omit<CommunityVoteGrant, 'applicants' | 'sponsors'> & { applicants: Array<ResolversTypes['GrantApplicant']>, sponsors: Array<ResolversTypes['Sponsor']> }>;
  CompetitionVoteGrantVoteSummary: ResolverTypeWrapper<CompetitionVoteGrantVoteSummary>;
  ConnectionDetails: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ConnectionDetails']>;
  Contribution: ResolverTypeWrapper<Omit<Contribution, 'bitcoinQuote' | 'payments' | 'sourceResource'> & { bitcoinQuote?: Maybe<ResolversTypes['BitcoinQuote']>, payments: Array<ResolversTypes['Payment']>, sourceResource?: Maybe<ResolversTypes['SourceResource']> }>;
  ContributionCreateInput: ContributionCreateInput;
  ContributionEmailUpdateInput: ContributionEmailUpdateInput;
  ContributionFiatPaymentDetails: ResolverTypeWrapper<Omit<ContributionFiatPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionFiatPaymentDetailsInput: ContributionFiatPaymentDetailsInput;
  ContributionFiatPaymentDetailsStripeInput: ContributionFiatPaymentDetailsStripeInput;
  ContributionFiatSwapPaymentDetails: ResolverTypeWrapper<Omit<ContributionFiatSwapPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionFiatSwapPaymentDetailsBanxaInput: ContributionFiatSwapPaymentDetailsBanxaInput;
  ContributionFiatSwapPaymentDetailsBoltzInput: ContributionFiatSwapPaymentDetailsBoltzInput;
  ContributionFiatSwapPaymentDetailsInput: ContributionFiatSwapPaymentDetailsInput;
  ContributionLightningPaymentDetails: ResolverTypeWrapper<Omit<ContributionLightningPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionLightningPaymentDetailsInput: ContributionLightningPaymentDetailsInput;
  ContributionLightningToRskSwapPaymentDetails: ResolverTypeWrapper<Omit<ContributionLightningToRskSwapPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionLightningToRskSwapPaymentDetailsBoltzInput: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  ContributionLightningToRskSwapPaymentDetailsInput: ContributionLightningToRskSwapPaymentDetailsInput;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionMutationResponse: ResolverTypeWrapper<Omit<ContributionMutationResponse, 'contribution' | 'payments'> & { contribution: ResolversTypes['Contribution'], payments: ResolversTypes['ContributionPaymentsDetails'] }>;
  ContributionOnChainSwapPaymentDetails: ResolverTypeWrapper<Omit<ContributionOnChainSwapPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionOnChainSwapPaymentDetailsInput: ContributionOnChainSwapPaymentDetailsInput;
  ContributionOnChainToRskSwapPaymentDetails: ResolverTypeWrapper<Omit<ContributionOnChainToRskSwapPaymentDetails, 'fees'> & { fees: Array<ResolversTypes['PaymentFee']> }>;
  ContributionOnChainToRskSwapPaymentDetailsBoltzInput: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  ContributionOnChainToRskSwapPaymentDetailsInput: ContributionOnChainToRskSwapPaymentDetailsInput;
  ContributionPaymentsAddInput: ContributionPaymentsAddInput;
  ContributionPaymentsAddResponse: ResolverTypeWrapper<Omit<ContributionPaymentsAddResponse, 'payments'> & { payments: ResolversTypes['ContributionPaymentsDetails'] }>;
  ContributionPaymentsDetails: ResolverTypeWrapper<Omit<ContributionPaymentsDetails, 'fiat' | 'fiatSwap' | 'lightning' | 'lightningToRskSwap' | 'onChainSwap' | 'onChainToRskSwap'> & { fiat?: Maybe<ResolversTypes['ContributionFiatPaymentDetails']>, fiatSwap?: Maybe<ResolversTypes['ContributionFiatSwapPaymentDetails']>, lightning?: Maybe<ResolversTypes['ContributionLightningPaymentDetails']>, lightningToRskSwap?: Maybe<ResolversTypes['ContributionLightningToRskSwapPaymentDetails']>, onChainSwap?: Maybe<ResolversTypes['ContributionOnChainSwapPaymentDetails']>, onChainToRskSwap?: Maybe<ResolversTypes['ContributionOnChainToRskSwapPaymentDetails']> }>;
  ContributionPaymentsInput: ContributionPaymentsInput;
  ContributionStatus: ContributionStatus;
  ContributionStatusUpdatedInput: ContributionStatusUpdatedInput;
  ContributionStatusUpdatedSubscriptionResponse: ResolverTypeWrapper<Omit<ContributionStatusUpdatedSubscriptionResponse, 'contribution'> & { contribution: ResolversTypes['Contribution'] }>;
  ContributionsGetResponse: ResolverTypeWrapper<Omit<ContributionsGetResponse, 'contributions'> & { contributions: Array<ResolversTypes['Contribution']> }>;
  ContributionsSummary: ResolverTypeWrapper<ContributionsSummary>;
  ContributionsSummaryPeriod: ContributionsSummaryPeriod;
  ContributionsWhereContributionStatus: ContributionsWhereContributionStatus;
  ContributorContributionsSummary: ResolverTypeWrapper<ContributorContributionsSummary>;
  ContributorStats: ResolverTypeWrapper<ContributorStats>;
  Country: ResolverTypeWrapper<Country>;
  CreateEntryInput: CreateEntryInput;
  CreateProjectInput: CreateProjectInput;
  CreateProjectRewardInput: CreateProjectRewardInput;
  CreateProjectShippingConfigInput: CreateProjectShippingConfigInput;
  CreateProjectSubscriptionPlanInput: CreateProjectSubscriptionPlanInput;
  CreateUserSubscriptionInput: CreateUserSubscriptionInput;
  CreateWalletInput: CreateWalletInput;
  CreatorNotificationSettings: ResolverTypeWrapper<CreatorNotificationSettings>;
  CreatorNotificationSettingsProject: ResolverTypeWrapper<CreatorNotificationSettingsProject>;
  CreatorStats: ResolverTypeWrapper<CreatorStats>;
  Currency: Currency;
  CurrencyQuoteGetInput: CurrencyQuoteGetInput;
  CurrencyQuoteGetResponse: ResolverTypeWrapper<CurrencyQuoteGetResponse>;
  CursorInput: CursorInput;
  CursorInputString: CursorInputString;
  CursorPaginationResponse: ResolverTypeWrapper<CursorPaginationResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateRangeInput: DateRangeInput;
  DatetimeRange: ResolverTypeWrapper<DatetimeRange>;
  DeleteProjectInput: DeleteProjectInput;
  DeleteProjectRewardInput: DeleteProjectRewardInput;
  DeleteUserResponse: ResolverTypeWrapper<DeleteUserResponse>;
  DistributionSystem: DistributionSystem;
  EmailSendOptionsInput: EmailSendOptionsInput;
  EmailSubscriberSegment: EmailSubscriberSegment;
  EmailVerifyInput: EmailVerifyInput;
  Entry: ResolverTypeWrapper<Omit<Entry, 'contributions' | 'creator' | 'project'> & { contributions: Array<ResolversTypes['Contribution']>, creator: ResolversTypes['User'], project?: Maybe<ResolversTypes['Project']> }>;
  EntryPublishedSubscriptionResponse: ResolverTypeWrapper<Omit<EntryPublishedSubscriptionResponse, 'entry'> & { entry: ResolversTypes['Entry'] }>;
  EntryStatus: EntryStatus;
  EntryType: EntryType;
  ExternalAccount: ResolverTypeWrapper<ExternalAccount>;
  FeeCurrency: FeeCurrency;
  FiatPaymentMethods: ResolverTypeWrapper<FiatPaymentMethods>;
  FiatToLightningSwapPaymentDetails: ResolverTypeWrapper<FiatToLightningSwapPaymentDetails>;
  FileUploadInput: FileUploadInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Funder: ResolverTypeWrapper<Omit<Funder, 'contributions' | 'user'> & { contributions: Array<ResolversTypes['Contribution']>, user?: Maybe<ResolversTypes['User']> }>;
  FunderRewardGraphSum: ResolverTypeWrapper<FunderRewardGraphSum>;
  FundingResourceType: FundingResourceType;
  GetActivitiesInput: GetActivitiesInput;
  GetActivityOrderByInput: GetActivityOrderByInput;
  GetActivityPaginationInput: GetActivityPaginationInput;
  GetActivityWhereInput: GetActivityWhereInput;
  GetContributionsInput: GetContributionsInput;
  GetContributionsOrderByInput: GetContributionsOrderByInput;
  GetContributionsWhereInput: GetContributionsWhereInput;
  GetContributorContributionsInput: GetContributorContributionsInput;
  GetContributorContributionsWhereInput: GetContributorContributionsWhereInput;
  GetContributorInput: GetContributorInput;
  GetDashboardFundersWhereInput: GetDashboardFundersWhereInput;
  GetEntriesInput: GetEntriesInput;
  GetEntriesOrderByInput: GetEntriesOrderByInput;
  GetEntriesWhereInput: GetEntriesWhereInput;
  GetFunderWhereInput: GetFunderWhereInput;
  GetFundersInput: GetFundersInput;
  GetFundersOrderByInput: GetFundersOrderByInput;
  GetProjectGoalsInput: GetProjectGoalsInput;
  GetProjectOrdersStatsInput: GetProjectOrdersStatsInput;
  GetProjectOrdersStatsWhereInput: GetProjectOrdersStatsWhereInput;
  GetProjectRewardInput: GetProjectRewardInput;
  GetProjectRewardWhereInput: GetProjectRewardWhereInput;
  GetProjectRewardsInput: GetProjectRewardsInput;
  GetProjectRewardsWhereInput: GetProjectRewardsWhereInput;
  GetProjectStatsInput: GetProjectStatsInput;
  GetProjectStatsWhereInput: GetProjectStatsWhereInput;
  GeyserPromotionsContributionStats: ResolverTypeWrapper<GeyserPromotionsContributionStats>;
  GeyserPromotionsContributionStatsInput: GeyserPromotionsContributionStatsInput;
  GeyserPromotionsContributionStatsWhereInput: GeyserPromotionsContributionStatsWhereInput;
  GlobalAmbassadorLeaderboardRow: ResolverTypeWrapper<GlobalAmbassadorLeaderboardRow>;
  GlobalContributorLeaderboardRow: ResolverTypeWrapper<GlobalContributorLeaderboardRow>;
  GlobalCreatorLeaderboardRow: ResolverTypeWrapper<GlobalCreatorLeaderboardRow>;
  GlobalProjectLeaderboardRow: ResolverTypeWrapper<GlobalProjectLeaderboardRow>;
  Grant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Grant']>;
  GrantApplicant: ResolverTypeWrapper<Omit<GrantApplicant, 'contributors' | 'grant' | 'project'> & { contributors: Array<ResolversTypes['GrantApplicantContributor']>, grant: ResolversTypes['Grant'], project: ResolversTypes['Project'] }>;
  GrantApplicantContributor: ResolverTypeWrapper<Omit<GrantApplicantContributor, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  GrantApplicantContributorInput: GrantApplicantContributorInput;
  GrantApplicantContributorWhereInput: GrantApplicantContributorWhereInput;
  GrantApplicantFunding: ResolverTypeWrapper<GrantApplicantFunding>;
  GrantApplicantStatus: GrantApplicantStatus;
  GrantApplicantStatusFilter: GrantApplicantStatusFilter;
  GrantApplicantsGetInput: GrantApplicantsGetInput;
  GrantApplicantsGetOrderByInput: GrantApplicantsGetOrderByInput;
  GrantApplicantsGetWhereInput: GrantApplicantsGetWhereInput;
  GrantApplicantsOrderByField: GrantApplicantsOrderByField;
  GrantApplyInput: GrantApplyInput;
  GrantBoardMember: ResolverTypeWrapper<Omit<GrantBoardMember, 'user'> & { user: ResolversTypes['User'] }>;
  GrantGetInput: GrantGetInput;
  GrantGetWhereInput: GrantGetWhereInput;
  GrantGuardiansFunding: ResolverTypeWrapper<GrantGuardiansFunding>;
  GrantStatistics: ResolverTypeWrapper<GrantStatistics>;
  GrantStatisticsApplicant: ResolverTypeWrapper<GrantStatisticsApplicant>;
  GrantStatisticsGrant: ResolverTypeWrapper<GrantStatisticsGrant>;
  GrantStatus: ResolverTypeWrapper<GrantStatus>;
  GrantStatusEnum: GrantStatusEnum;
  GrantType: GrantType;
  GraphData: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['GraphData']>;
  GraphSumData: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['GraphSumData']>;
  GuardianResult: ResolverTypeWrapper<GuardianResult>;
  GuardianType: GuardianType;
  GuardianUser: ResolverTypeWrapper<GuardianUser>;
  GuardianUsersGetInput: GuardianUsersGetInput;
  GuardianUsersGetResponse: ResolverTypeWrapper<GuardianUsersGetResponse>;
  GuardianUsersGetWhereInput: GuardianUsersGetWhereInput;
  HeroStats: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['HeroStats']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LeaderboardGlobalAmbassadorsGetInput: LeaderboardGlobalAmbassadorsGetInput;
  LeaderboardGlobalContributorsGetInput: LeaderboardGlobalContributorsGetInput;
  LeaderboardGlobalCreatorsGetInput: LeaderboardGlobalCreatorsGetInput;
  LeaderboardGlobalProjectsGetInput: LeaderboardGlobalProjectsGetInput;
  LeaderboardPeriod: LeaderboardPeriod;
  LegalEntityType: LegalEntityType;
  LightningAddressConnectionDetails: ResolverTypeWrapper<LightningAddressConnectionDetails>;
  LightningAddressConnectionDetailsCreateInput: LightningAddressConnectionDetailsCreateInput;
  LightningAddressConnectionDetailsUpdateInput: LightningAddressConnectionDetailsUpdateInput;
  LightningAddressContributionLimits: ResolverTypeWrapper<LightningAddressContributionLimits>;
  LightningAddressVerifyResponse: ResolverTypeWrapper<LightningAddressVerifyResponse>;
  LightningInvoiceStatus: LightningInvoiceStatus;
  LightningPaymentDetails: ResolverTypeWrapper<LightningPaymentDetails>;
  LightningPaymentMethods: ResolverTypeWrapper<LightningPaymentMethods>;
  LightningToRskSwapPaymentDetails: ResolverTypeWrapper<LightningToRskSwapPaymentDetails>;
  LndConnectionDetails: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['LndConnectionDetails']>;
  LndConnectionDetailsCreateInput: LndConnectionDetailsCreateInput;
  LndConnectionDetailsPrivate: ResolverTypeWrapper<LndConnectionDetailsPrivate>;
  LndConnectionDetailsPublic: ResolverTypeWrapper<LndConnectionDetailsPublic>;
  LndConnectionDetailsUpdateInput: LndConnectionDetailsUpdateInput;
  LndNodeType: LndNodeType;
  Location: ResolverTypeWrapper<Location>;
  MFAAction: MfaAction;
  Milestone: ResolverTypeWrapper<Milestone>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MutationResponse']>;
  NWCConnectionDetailsCreateInput: NwcConnectionDetailsCreateInput;
  NWCConnectionDetailsPrivate: ResolverTypeWrapper<NwcConnectionDetailsPrivate>;
  NWCConnectionDetailsPublic: ResolverTypeWrapper<NwcConnectionDetailsPublic>;
  NWCConnectionDetailsUpdateInput: NwcConnectionDetailsUpdateInput;
  NostrKeys: ResolverTypeWrapper<NostrKeys>;
  NostrPrivateKey: ResolverTypeWrapper<NostrPrivateKey>;
  NostrPublicKey: ResolverTypeWrapper<NostrPublicKey>;
  NotificationChannel: NotificationChannel;
  NotificationConfiguration: ResolverTypeWrapper<NotificationConfiguration>;
  NotificationSettings: ResolverTypeWrapper<NotificationSettings>;
  OTPInput: OtpInput;
  OTPLoginInput: OtpLoginInput;
  OTPResponse: ResolverTypeWrapper<OtpResponse>;
  OffsetBasedPaginationInput: OffsetBasedPaginationInput;
  OnChainPaymentMethods: ResolverTypeWrapper<OnChainPaymentMethods>;
  OnChainToLightningSwapPaymentDetails: ResolverTypeWrapper<OnChainToLightningSwapPaymentDetails>;
  OnChainToRskSwapPaymentDetails: ResolverTypeWrapper<OnChainToRskSwapPaymentDetails>;
  OnChainTxInput: OnChainTxInput;
  Order: ResolverTypeWrapper<Omit<Order, 'contribution' | 'project' | 'user'> & { contribution: ResolversTypes['Contribution'], project: ResolversTypes['Project'], user?: Maybe<ResolversTypes['User']> }>;
  OrderBitcoinQuoteInput: OrderBitcoinQuoteInput;
  OrderByDirection: OrderByDirection;
  OrderByOptions: OrderByOptions;
  OrderContributionInput: OrderContributionInput;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemInput: OrderItemInput;
  OrderItemType: OrderItemType;
  OrderStatusUpdateInput: OrderStatusUpdateInput;
  OrdersGetInput: OrdersGetInput;
  OrdersGetOrderByField: OrdersGetOrderByField;
  OrdersGetOrderByInput: OrdersGetOrderByInput;
  OrdersGetResponse: ResolverTypeWrapper<OrdersGetResponse>;
  OrdersGetStatus: OrdersGetStatus;
  OrdersGetWhereInput: OrdersGetWhereInput;
  OrdersStatsBase: ResolverTypeWrapper<OrdersStatsBase>;
  Owner: ResolverTypeWrapper<Omit<Owner, 'user'> & { user: ResolversTypes['User'] }>;
  OwnerOf: ResolverTypeWrapper<Omit<OwnerOf, 'owner' | 'project'> & { owner?: Maybe<ResolversTypes['Owner']>, project?: Maybe<ResolversTypes['Project']> }>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageViewCountGraph: ResolverTypeWrapper<PageViewCountGraph>;
  PaginationCursor: ResolverTypeWrapper<PaginationCursor>;
  PaginationInput: PaginationInput;
  Payment: ResolverTypeWrapper<Omit<Payment, 'fees' | 'paymentDetails'> & { fees: Array<ResolversTypes['PaymentFee']>, paymentDetails: ResolversTypes['PaymentDetails'] }>;
  PaymentCancelInput: PaymentCancelInput;
  PaymentCancelResponse: ResolverTypeWrapper<PaymentCancelResponse>;
  PaymentConfirmInput: PaymentConfirmInput;
  PaymentConfirmOnChainSwapInput: PaymentConfirmOnChainSwapInput;
  PaymentConfirmResponse: ResolverTypeWrapper<PaymentConfirmResponse>;
  PaymentCurrency: PaymentCurrency;
  PaymentDetails: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PaymentDetails']>;
  PaymentFailInput: PaymentFailInput;
  PaymentFailResponse: ResolverTypeWrapper<PaymentFailResponse>;
  PaymentFee: ResolverTypeWrapper<PaymentFee>;
  PaymentFeePayer: PaymentFeePayer;
  PaymentFeeType: PaymentFeeType;
  PaymentGetInput: PaymentGetInput;
  PaymentInvoiceCancelResponse: ResolverTypeWrapper<PaymentInvoiceCancelResponse>;
  PaymentInvoiceSanctionCheckStatus: PaymentInvoiceSanctionCheckStatus;
  PaymentInvoiceSanctionCheckStatusGetInput: PaymentInvoiceSanctionCheckStatusGetInput;
  PaymentInvoiceSanctionCheckStatusResponse: ResolverTypeWrapper<PaymentInvoiceSanctionCheckStatusResponse>;
  PaymentMethods: ResolverTypeWrapper<PaymentMethods>;
  PaymentPendInput: PaymentPendInput;
  PaymentPendOnChainSwapInput: PaymentPendOnChainSwapInput;
  PaymentPendResponse: ResolverTypeWrapper<PaymentPendResponse>;
  PaymentRefund: ResolverTypeWrapper<PaymentRefund>;
  PaymentRefundCompleteInput: PaymentRefundCompleteInput;
  PaymentRefundCompleteResponse: ResolverTypeWrapper<PaymentRefundCompleteResponse>;
  PaymentRefundStatus: PaymentRefundStatus;
  PaymentRefundsGetResponse: ResolverTypeWrapper<PaymentRefundsGetResponse>;
  PaymentStatus: PaymentStatus;
  PaymentStatusUpdatedInput: PaymentStatusUpdatedInput;
  PaymentSwapClaimTxBroadcastInput: PaymentSwapClaimTxBroadcastInput;
  PaymentSwapClaimTxBroadcastResponse: ResolverTypeWrapper<PaymentSwapClaimTxBroadcastResponse>;
  PaymentSwapClaimTxSetInput: PaymentSwapClaimTxSetInput;
  PaymentSwapClaimTxSetResponse: ResolverTypeWrapper<PaymentSwapClaimTxSetResponse>;
  PaymentType: PaymentType;
  Payout: ResolverTypeWrapper<Payout>;
  PayoutCancelInput: PayoutCancelInput;
  PayoutCurrency: PayoutCurrency;
  PayoutGetInput: PayoutGetInput;
  PayoutGetResponse: ResolverTypeWrapper<PayoutGetResponse>;
  PayoutInitiateInput: PayoutInitiateInput;
  PayoutInitiateResponse: ResolverTypeWrapper<Omit<PayoutInitiateResponse, 'payment'> & { payment: ResolversTypes['Payment'] }>;
  PayoutMetadata: ResolverTypeWrapper<PayoutMetadata>;
  PayoutPaymentInput: PayoutPaymentInput;
  PayoutRequestInput: PayoutRequestInput;
  PayoutRequestResponse: ResolverTypeWrapper<PayoutRequestResponse>;
  PayoutResponse: ResolverTypeWrapper<PayoutResponse>;
  PayoutStatus: PayoutStatus;
  PledgeRefund: ResolverTypeWrapper<Omit<PledgeRefund, 'project'> & { project: ResolversTypes['Project'] }>;
  PledgeRefundCancelInput: PledgeRefundCancelInput;
  PledgeRefundGetInput: PledgeRefundGetInput;
  PledgeRefundGetResponse: ResolverTypeWrapper<Omit<PledgeRefundGetResponse, 'refund'> & { refund: ResolversTypes['PledgeRefund'] }>;
  PledgeRefundInitiateInput: PledgeRefundInitiateInput;
  PledgeRefundInitiateResponse: ResolverTypeWrapper<Omit<PledgeRefundInitiateResponse, 'payment' | 'refund'> & { payment: ResolversTypes['Payment'], refund: ResolversTypes['PledgeRefund'] }>;
  PledgeRefundMetadata: ResolverTypeWrapper<PledgeRefundMetadata>;
  PledgeRefundPaymentInput: PledgeRefundPaymentInput;
  PledgeRefundRequestInput: PledgeRefundRequestInput;
  PledgeRefundRequestResponse: ResolverTypeWrapper<Omit<PledgeRefundRequestResponse, 'refund'> & { refund: ResolversTypes['PledgeRefund'] }>;
  PledgeRefundResponse: ResolverTypeWrapper<PledgeRefundResponse>;
  PledgeRefundStatus: PledgeRefundStatus;
  PledgeRefundsGetResponse: ResolverTypeWrapper<Omit<PledgeRefundsGetResponse, 'refunds'> & { refunds: Array<ResolversTypes['PledgeRefund']> }>;
  PodcastKeysendContributionCreateInput: PodcastKeysendContributionCreateInput;
  PodcastKeysendContributionCreateResponse: ResolverTypeWrapper<PodcastKeysendContributionCreateResponse>;
  Post: ResolverTypeWrapper<Omit<Post, 'contributions' | 'creator' | 'project'> & { contributions: Array<ResolversTypes['Contribution']>, creator: ResolversTypes['User'], project?: Maybe<ResolversTypes['Project']> }>;
  PostCreateInput: PostCreateInput;
  PostEmailSegmentSizeGetInput: PostEmailSegmentSizeGetInput;
  PostGetInput: PostGetInput;
  PostGetOrderByInput: PostGetOrderByInput;
  PostGetWhereInput: PostGetWhereInput;
  PostPublishInput: PostPublishInput;
  PostPublishedSubscriptionResponse: ResolverTypeWrapper<PostPublishedSubscriptionResponse>;
  PostSendByEmailInput: PostSendByEmailInput;
  PostSendByEmailResponse: ResolverTypeWrapper<PostSendByEmailResponse>;
  PostStatus: PostStatus;
  PostType: PostType;
  PostUpdateInput: PostUpdateInput;
  PrivateCommentPrompt: PrivateCommentPrompt;
  ProfileNotificationSettings: ResolverTypeWrapper<ProfileNotificationSettings>;
  Project: ResolverTypeWrapper<Omit<Project, 'ambassadors' | 'contributions' | 'entries' | 'followers' | 'grantApplications' | 'owners' | 'sponsors' | 'wallets'> & { ambassadors: ResolversTypes['ProjectAmbassadorsConnection'], contributions: Array<ResolversTypes['Contribution']>, entries: Array<ResolversTypes['Entry']>, followers: Array<ResolversTypes['User']>, grantApplications: Array<ResolversTypes['GrantApplicant']>, owners: Array<ResolversTypes['Owner']>, sponsors: Array<ResolversTypes['Sponsor']>, wallets: Array<ResolversTypes['Wallet']> }>;
  ProjectActivatedSubscriptionResponse: ResolverTypeWrapper<Omit<ProjectActivatedSubscriptionResponse, 'project'> & { project: ResolversTypes['Project'] }>;
  ProjectActivitiesCount: ResolverTypeWrapper<Omit<ProjectActivitiesCount, 'project'> & { project: ResolversTypes['Project'] }>;
  ProjectAmbassadorEdge: ResolverTypeWrapper<Omit<ProjectAmbassadorEdge, 'node'> & { node: ResolversTypes['Ambassador'] }>;
  ProjectAmbassadorsConnection: ResolverTypeWrapper<Omit<ProjectAmbassadorsConnection, 'edges'> & { edges: Array<ResolversTypes['ProjectAmbassadorEdge']> }>;
  ProjectAmbassadorsStats: ResolverTypeWrapper<ProjectAmbassadorsStats>;
  ProjectAonGoalAmountUpdateInput: ProjectAonGoalAmountUpdateInput;
  ProjectAonGoalStatus: ProjectAonGoalStatus;
  ProjectAonGoalStatusUpdateInput: ProjectAonGoalStatusUpdateInput;
  ProjectAonGoalStatusUpdateResponse: ResolverTypeWrapper<ProjectAonGoalStatusUpdateResponse>;
  ProjectAonGoalUpdateInput: ProjectAonGoalUpdateInput;
  ProjectCategory: ProjectCategory;
  ProjectCloseMutationInput: ProjectCloseMutationInput;
  ProjectContributionsGroupedByMethodStats: ResolverTypeWrapper<ProjectContributionsGroupedByMethodStats>;
  ProjectContributionsStats: ResolverTypeWrapper<ProjectContributionsStats>;
  ProjectContributionsStatsBase: ResolverTypeWrapper<ProjectContributionsStatsBase>;
  ProjectContributionsStatsGraphData: ResolverTypeWrapper<ProjectContributionsStatsGraphData>;
  ProjectContributionsStatsGraphDataAmount: ResolverTypeWrapper<ProjectContributionsStatsGraphDataAmount>;
  ProjectContributionsStatsGraphDataStatType: ProjectContributionsStatsGraphDataStatType;
  ProjectCountriesGetInput: ProjectCountriesGetInput;
  ProjectCountriesGetResult: ResolverTypeWrapper<ProjectCountriesGetResult>;
  ProjectCreationStep: ProjectCreationStep;
  ProjectDeleteResponse: ResolverTypeWrapper<ProjectDeleteResponse>;
  ProjectEntriesGetInput: ProjectEntriesGetInput;
  ProjectEntriesGetWhereInput: ProjectEntriesGetWhereInput;
  ProjectFollowMutationInput: ProjectFollowMutationInput;
  ProjectFollowerStats: ResolverTypeWrapper<ProjectFollowerStats>;
  ProjectFunderRewardStats: ResolverTypeWrapper<ProjectFunderRewardStats>;
  ProjectFunderStats: ResolverTypeWrapper<ProjectFunderStats>;
  ProjectFundingStrategy: ProjectFundingStrategy;
  ProjectGoal: ResolverTypeWrapper<ProjectGoal>;
  ProjectGoalCreateInput: ProjectGoalCreateInput;
  ProjectGoalCurrency: ProjectGoalCurrency;
  ProjectGoalDeleteResponse: ResolverTypeWrapper<ProjectGoalDeleteResponse>;
  ProjectGoalOrderingUpdateInput: ProjectGoalOrderingUpdateInput;
  ProjectGoalStatus: ProjectGoalStatus;
  ProjectGoalStatusInCreate: ProjectGoalStatusInCreate;
  ProjectGoalUpdateInput: ProjectGoalUpdateInput;
  ProjectGoals: ResolverTypeWrapper<ProjectGoals>;
  ProjectGrantApplicationsInput: ProjectGrantApplicationsInput;
  ProjectGrantApplicationsWhereInput: ProjectGrantApplicationsWhereInput;
  ProjectGrantApplicationsWhereInputEnum: ProjectGrantApplicationsWhereInputEnum;
  ProjectKeys: ResolverTypeWrapper<ProjectKeys>;
  ProjectLeaderboardAmbassadorsGetInput: ProjectLeaderboardAmbassadorsGetInput;
  ProjectLeaderboardAmbassadorsRow: ResolverTypeWrapper<Omit<ProjectLeaderboardAmbassadorsRow, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  ProjectLeaderboardContributorsGetInput: ProjectLeaderboardContributorsGetInput;
  ProjectLeaderboardContributorsRow: ResolverTypeWrapper<Omit<ProjectLeaderboardContributorsRow, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  ProjectLeaderboardPeriod: ProjectLeaderboardPeriod;
  ProjectLinkMutationInput: ProjectLinkMutationInput;
  ProjectMostFunded: ResolverTypeWrapper<Omit<ProjectMostFunded, 'project'> & { project: ResolversTypes['Project'] }>;
  ProjectMostFundedByCategory: ResolverTypeWrapper<Omit<ProjectMostFundedByCategory, 'projects'> & { projects: Array<ResolversTypes['ProjectMostFunded']> }>;
  ProjectMostFundedByTag: ResolverTypeWrapper<Omit<ProjectMostFundedByTag, 'projects'> & { projects: Array<ResolversTypes['ProjectMostFunded']> }>;
  ProjectPostsGetInput: ProjectPostsGetInput;
  ProjectPostsGetWhereInput: ProjectPostsGetWhereInput;
  ProjectPreLaunchMutationInput: ProjectPreLaunchMutationInput;
  ProjectPublishMutationInput: ProjectPublishMutationInput;
  ProjectPutInReviewMutationInput: ProjectPutInReviewMutationInput;
  ProjectRefundablePayment: ResolverTypeWrapper<Omit<ProjectRefundablePayment, 'payments' | 'project'> & { payments: Array<ResolversTypes['Payment']>, project: ResolversTypes['Project'] }>;
  ProjectRegionsGetResult: ResolverTypeWrapper<ProjectRegionsGetResult>;
  ProjectReview: ResolverTypeWrapper<ProjectReview>;
  ProjectReviewRequestInput: ProjectReviewRequestInput;
  ProjectReviewStatus: ProjectReviewStatus;
  ProjectReviewStatusInput: ProjectReviewStatusInput;
  ProjectReviewSubmitInput: ProjectReviewSubmitInput;
  ProjectReward: ResolverTypeWrapper<Omit<ProjectReward, 'project'> & { project: ResolversTypes['Project'] }>;
  ProjectRewardCurrencyUpdate: ProjectRewardCurrencyUpdate;
  ProjectRewardCurrencyUpdateRewardsInput: ProjectRewardCurrencyUpdateRewardsInput;
  ProjectRewardTrendingMonthlyGetRow: ResolverTypeWrapper<ProjectRewardTrendingMonthlyGetRow>;
  ProjectRewardTrendingQuarterlyGetRow: ResolverTypeWrapper<ProjectRewardTrendingQuarterlyGetRow>;
  ProjectRewardTrendingWeeklyGetRow: ResolverTypeWrapper<ProjectRewardTrendingWeeklyGetRow>;
  ProjectRewardsGroupedByRewardIdStats: ResolverTypeWrapper<ProjectRewardsGroupedByRewardIdStats>;
  ProjectRewardsGroupedByRewardIdStatsProjectReward: ResolverTypeWrapper<ProjectRewardsGroupedByRewardIdStatsProjectReward>;
  ProjectRewardsStats: ResolverTypeWrapper<ProjectRewardsStats>;
  ProjectShippingConfigType: ProjectShippingConfigType;
  ProjectShippingConfigsGetInput: ProjectShippingConfigsGetInput;
  ProjectShippingRate: ResolverTypeWrapper<ProjectShippingRate>;
  ProjectStatistics: ResolverTypeWrapper<ProjectStatistics>;
  ProjectStats: ResolverTypeWrapper<ProjectStats>;
  ProjectStatsBase: ResolverTypeWrapper<ProjectStatsBase>;
  ProjectStatus: ProjectStatus;
  ProjectStatusUpdate: ProjectStatusUpdate;
  ProjectSubCategory: ProjectSubCategory;
  ProjectSubscriptionPlan: ResolverTypeWrapper<ProjectSubscriptionPlan>;
  ProjectSubscriptionPlansInput: ProjectSubscriptionPlansInput;
  ProjectSubscriptionPlansWhereInput: ProjectSubscriptionPlansWhereInput;
  ProjectType: ProjectType;
  ProjectViewBaseStats: ResolverTypeWrapper<ProjectViewBaseStats>;
  ProjectViewStats: ResolverTypeWrapper<ProjectViewStats>;
  ProjectsGetQueryInput: ProjectsGetQueryInput;
  ProjectsGetWhereInput: ProjectsGetWhereInput;
  ProjectsMostFundedByCategoryInput: ProjectsMostFundedByCategoryInput;
  ProjectsMostFundedByCategoryRange: ProjectsMostFundedByCategoryRange;
  ProjectsMostFundedByTagInput: ProjectsMostFundedByTagInput;
  ProjectsMostFundedByTagRange: ProjectsMostFundedByTagRange;
  ProjectsOrderByField: ProjectsOrderByField;
  ProjectsOrderByInput: ProjectsOrderByInput;
  ProjectsResponse: ResolverTypeWrapper<Omit<ProjectsResponse, 'projects'> & { projects: Array<ResolversTypes['Project']> }>;
  ProjectsSummary: ResolverTypeWrapper<ProjectsSummary>;
  Query: ResolverTypeWrapper<{}>;
  QuoteCurrency: QuoteCurrency;
  RefundablePaymentsGetResponse: ResolverTypeWrapper<Omit<RefundablePaymentsGetResponse, 'refundablePayments'> & { refundablePayments: Array<ResolversTypes['ProjectRefundablePayment']> }>;
  RejectionReason: RejectionReason;
  ResourceInput: ResourceInput;
  RewardCurrency: RewardCurrency;
  RskKeyPair: ResolverTypeWrapper<RskKeyPair>;
  RskKeyPairInput: RskKeyPairInput;
  RskToLightningSwapPaymentDetails: ResolverTypeWrapper<RskToLightningSwapPaymentDetails>;
  RskToLightningSwapPaymentDetailsBoltzInput: RskToLightningSwapPaymentDetailsBoltzInput;
  RskToLightningSwapPaymentDetailsInput: RskToLightningSwapPaymentDetailsInput;
  RskToOnChainSwapPaymentDetails: ResolverTypeWrapper<RskToOnChainSwapPaymentDetails>;
  RskToOnChainSwapPaymentDetailsBoltzInput: RskToOnChainSwapPaymentDetailsBoltzInput;
  RskToOnChainSwapPaymentDetailsInput: RskToOnChainSwapPaymentDetailsInput;
  SendOtpByEmailInput: SendOtpByEmailInput;
  SettingValueType: SettingValueType;
  ShippingAddress: ResolverTypeWrapper<ShippingAddress>;
  ShippingAddressCreateInput: ShippingAddressCreateInput;
  ShippingAddressesGetInput: ShippingAddressesGetInput;
  ShippingConfig: ResolverTypeWrapper<ShippingConfig>;
  ShippingDestination: ShippingDestination;
  SignedUploadUrl: ResolverTypeWrapper<SignedUploadUrl>;
  SourceResource: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SourceResource']>;
  Sponsor: ResolverTypeWrapper<Omit<Sponsor, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  SponsorStatus: SponsorStatus;
  StatsInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['StatsInterface']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StripeCheckoutSessionInput: StripeCheckoutSessionInput;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionCurrencyType: SubscriptionCurrencyType;
  SubscriptionPaymentConfirmationInput: SubscriptionPaymentConfirmationInput;
  Swap: ResolverTypeWrapper<Swap>;
  TOTPInput: TotpInput;
  Tag: ResolverTypeWrapper<Tag>;
  TagCreateInput: TagCreateInput;
  TagsGetResult: ResolverTypeWrapper<TagsGetResult>;
  TagsMostFundedGetResult: ResolverTypeWrapper<TagsMostFundedGetResult>;
  TwoFAInput: TwoFaInput;
  UniqueOrderInput: UniqueOrderInput;
  UniqueProjectQueryInput: UniqueProjectQueryInput;
  UpdatableOrderStatus: UpdatableOrderStatus;
  UpdateEntryInput: UpdateEntryInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateProjectRewardInput: UpdateProjectRewardInput;
  UpdateProjectShippingConfigInput: UpdateProjectShippingConfigInput;
  UpdateProjectShippingFeeRateInput: UpdateProjectShippingFeeRateInput;
  UpdateProjectSubscriptionPlanInput: UpdateProjectSubscriptionPlanInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserSubscriptionInput: UpdateUserSubscriptionInput;
  UpdateWalletInput: UpdateWalletInput;
  UpdateWalletStateInput: UpdateWalletStateInput;
  User: ResolverTypeWrapper<Omit<User, 'contributions' | 'entries' | 'ownerOf' | 'projectFollows' | 'projects' | 'wallet'> & { contributions: Array<ResolversTypes['Contribution']>, entries: Array<ResolversTypes['Entry']>, ownerOf: Array<ResolversTypes['OwnerOf']>, projectFollows: Array<ResolversTypes['Project']>, projects: Array<ResolversTypes['Project']>, wallet?: Maybe<ResolversTypes['Wallet']> }>;
  UserAccountKeys: ResolverTypeWrapper<UserAccountKeys>;
  UserAccountKeysUpdateInput: UserAccountKeysUpdateInput;
  UserBadge: ResolverTypeWrapper<UserBadge>;
  UserBadgeStatus: UserBadgeStatus;
  UserComplianceDetails: ResolverTypeWrapper<UserComplianceDetails>;
  UserContributionLimit: ResolverTypeWrapper<UserContributionLimit>;
  UserContributionLimits: ResolverTypeWrapper<UserContributionLimits>;
  UserContributionsInput: UserContributionsInput;
  UserEmailIsValidResponse: ResolverTypeWrapper<UserEmailIsValidResponse>;
  UserEmailUpdateInput: UserEmailUpdateInput;
  UserEntityType: UserEntityType;
  UserEntriesGetInput: UserEntriesGetInput;
  UserEntriesGetWhereInput: UserEntriesGetWhereInput;
  UserGetInput: UserGetInput;
  UserHeroStats: ResolverTypeWrapper<UserHeroStats>;
  UserNotificationSettings: ResolverTypeWrapper<UserNotificationSettings>;
  UserPostsGetInput: UserPostsGetInput;
  UserPostsGetWhereInput: UserPostsGetWhereInput;
  UserProjectContribution: ResolverTypeWrapper<Omit<UserProjectContribution, 'project'> & { project: ResolversTypes['Project'] }>;
  UserProjectsGetInput: UserProjectsGetInput;
  UserProjectsGetWhereInput: UserProjectsGetWhereInput;
  UserSubscription: ResolverTypeWrapper<UserSubscription>;
  UserSubscriptionInterval: UserSubscriptionInterval;
  UserSubscriptionStatus: UserSubscriptionStatus;
  UserSubscriptionsInput: UserSubscriptionsInput;
  UserSubscriptionsWhereInput: UserSubscriptionsWhereInput;
  UserTaxProfile: ResolverTypeWrapper<UserTaxProfile>;
  UserTaxProfileUpdateInput: UserTaxProfileUpdateInput;
  UserVerificationLevel: UserVerificationLevel;
  UserVerificationLevelInput: UserVerificationLevelInput;
  UserVerificationLevelStatus: ResolverTypeWrapper<UserVerificationLevelStatus>;
  UserVerificationStatus: UserVerificationStatus;
  UserVerificationTokenGenerateInput: UserVerificationTokenGenerateInput;
  UserVerificationTokenGenerateResponse: ResolverTypeWrapper<UserVerificationTokenGenerateResponse>;
  UserVerifiedDetails: ResolverTypeWrapper<UserVerifiedDetails>;
  VerificationResult: ResolverTypeWrapper<VerificationResult>;
  VotingSystem: VotingSystem;
  Wallet: ResolverTypeWrapper<Omit<Wallet, 'connectionDetails'> & { connectionDetails: ResolversTypes['ConnectionDetails'] }>;
  WalletContributionLimits: ResolverTypeWrapper<WalletContributionLimits>;
  WalletLimits: ResolverTypeWrapper<WalletLimits>;
  WalletOffChainContributionLimits: ResolverTypeWrapper<WalletOffChainContributionLimits>;
  WalletOnChainContributionLimits: ResolverTypeWrapper<WalletOnChainContributionLimits>;
  WalletResourceInput: WalletResourceInput;
  WalletResourceType: WalletResourceType;
  WalletState: ResolverTypeWrapper<WalletState>;
  WalletStatus: WalletStatus;
  WalletStatusCode: WalletStatusCode;
  dashboardFundersGetInput: DashboardFundersGetInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivitiesCountGroupedByProjectInput: ActivitiesCountGroupedByProjectInput;
  ActivitiesGetResponse: Omit<ActivitiesGetResponse, 'activities'> & { activities: Array<ResolversParentTypes['Activity']> };
  Activity: Omit<Activity, 'project' | 'resource'> & { project: ResolversParentTypes['Project'], resource: ResolversParentTypes['ActivityResource'] };
  ActivityCreatedSubscriptionInput: ActivityCreatedSubscriptionInput;
  ActivityCreatedSubscriptionWhereInput: ActivityCreatedSubscriptionWhereInput;
  ActivityResource: ResolversUnionTypes<ResolversParentTypes>['ActivityResource'];
  Ambassador: Omit<Ambassador, 'user'> & { user: ResolversParentTypes['User'] };
  AmbassadorAddInput: AmbassadorAddInput;
  AmbassadorStats: AmbassadorStats;
  AmbassadorUpdateInput: AmbassadorUpdateInput;
  AmountSummary: AmountSummary;
  Badge: Badge;
  BadgeClaimInput: BadgeClaimInput;
  BadgesGetInput: BadgesGetInput;
  BadgesGetWhereInput: BadgesGetWhereInput;
  BigInt: Scalars['BigInt']['output'];
  BitcoinPaymentMethods: BitcoinPaymentMethods;
  BitcoinQuote: BitcoinQuote;
  BoardVoteGrant: Omit<BoardVoteGrant, 'applicants' | 'boardMembers' | 'sponsors'> & { applicants: Array<ResolversParentTypes['GrantApplicant']>, boardMembers: Array<ResolversParentTypes['GrantBoardMember']>, sponsors: Array<ResolversParentTypes['Sponsor']> };
  Boolean: Scalars['Boolean']['output'];
  CommunityVoteGrant: Omit<CommunityVoteGrant, 'applicants' | 'sponsors'> & { applicants: Array<ResolversParentTypes['GrantApplicant']>, sponsors: Array<ResolversParentTypes['Sponsor']> };
  CompetitionVoteGrantVoteSummary: CompetitionVoteGrantVoteSummary;
  ConnectionDetails: ResolversUnionTypes<ResolversParentTypes>['ConnectionDetails'];
  Contribution: Omit<Contribution, 'bitcoinQuote' | 'payments' | 'sourceResource'> & { bitcoinQuote?: Maybe<ResolversParentTypes['BitcoinQuote']>, payments: Array<ResolversParentTypes['Payment']>, sourceResource?: Maybe<ResolversParentTypes['SourceResource']> };
  ContributionCreateInput: ContributionCreateInput;
  ContributionEmailUpdateInput: ContributionEmailUpdateInput;
  ContributionFiatPaymentDetails: Omit<ContributionFiatPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionFiatPaymentDetailsInput: ContributionFiatPaymentDetailsInput;
  ContributionFiatPaymentDetailsStripeInput: ContributionFiatPaymentDetailsStripeInput;
  ContributionFiatSwapPaymentDetails: Omit<ContributionFiatSwapPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionFiatSwapPaymentDetailsBanxaInput: ContributionFiatSwapPaymentDetailsBanxaInput;
  ContributionFiatSwapPaymentDetailsBoltzInput: ContributionFiatSwapPaymentDetailsBoltzInput;
  ContributionFiatSwapPaymentDetailsInput: ContributionFiatSwapPaymentDetailsInput;
  ContributionLightningPaymentDetails: Omit<ContributionLightningPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionLightningPaymentDetailsInput: ContributionLightningPaymentDetailsInput;
  ContributionLightningToRskSwapPaymentDetails: Omit<ContributionLightningToRskSwapPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionLightningToRskSwapPaymentDetailsBoltzInput: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  ContributionLightningToRskSwapPaymentDetailsInput: ContributionLightningToRskSwapPaymentDetailsInput;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionMutationResponse: Omit<ContributionMutationResponse, 'contribution' | 'payments'> & { contribution: ResolversParentTypes['Contribution'], payments: ResolversParentTypes['ContributionPaymentsDetails'] };
  ContributionOnChainSwapPaymentDetails: Omit<ContributionOnChainSwapPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionOnChainSwapPaymentDetailsInput: ContributionOnChainSwapPaymentDetailsInput;
  ContributionOnChainToRskSwapPaymentDetails: Omit<ContributionOnChainToRskSwapPaymentDetails, 'fees'> & { fees: Array<ResolversParentTypes['PaymentFee']> };
  ContributionOnChainToRskSwapPaymentDetailsBoltzInput: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  ContributionOnChainToRskSwapPaymentDetailsInput: ContributionOnChainToRskSwapPaymentDetailsInput;
  ContributionPaymentsAddInput: ContributionPaymentsAddInput;
  ContributionPaymentsAddResponse: Omit<ContributionPaymentsAddResponse, 'payments'> & { payments: ResolversParentTypes['ContributionPaymentsDetails'] };
  ContributionPaymentsDetails: Omit<ContributionPaymentsDetails, 'fiat' | 'fiatSwap' | 'lightning' | 'lightningToRskSwap' | 'onChainSwap' | 'onChainToRskSwap'> & { fiat?: Maybe<ResolversParentTypes['ContributionFiatPaymentDetails']>, fiatSwap?: Maybe<ResolversParentTypes['ContributionFiatSwapPaymentDetails']>, lightning?: Maybe<ResolversParentTypes['ContributionLightningPaymentDetails']>, lightningToRskSwap?: Maybe<ResolversParentTypes['ContributionLightningToRskSwapPaymentDetails']>, onChainSwap?: Maybe<ResolversParentTypes['ContributionOnChainSwapPaymentDetails']>, onChainToRskSwap?: Maybe<ResolversParentTypes['ContributionOnChainToRskSwapPaymentDetails']> };
  ContributionPaymentsInput: ContributionPaymentsInput;
  ContributionStatusUpdatedInput: ContributionStatusUpdatedInput;
  ContributionStatusUpdatedSubscriptionResponse: Omit<ContributionStatusUpdatedSubscriptionResponse, 'contribution'> & { contribution: ResolversParentTypes['Contribution'] };
  ContributionsGetResponse: Omit<ContributionsGetResponse, 'contributions'> & { contributions: Array<ResolversParentTypes['Contribution']> };
  ContributionsSummary: ContributionsSummary;
  ContributorContributionsSummary: ContributorContributionsSummary;
  ContributorStats: ContributorStats;
  Country: Country;
  CreateEntryInput: CreateEntryInput;
  CreateProjectInput: CreateProjectInput;
  CreateProjectRewardInput: CreateProjectRewardInput;
  CreateProjectShippingConfigInput: CreateProjectShippingConfigInput;
  CreateProjectSubscriptionPlanInput: CreateProjectSubscriptionPlanInput;
  CreateUserSubscriptionInput: CreateUserSubscriptionInput;
  CreateWalletInput: CreateWalletInput;
  CreatorNotificationSettings: CreatorNotificationSettings;
  CreatorNotificationSettingsProject: CreatorNotificationSettingsProject;
  CreatorStats: CreatorStats;
  CurrencyQuoteGetInput: CurrencyQuoteGetInput;
  CurrencyQuoteGetResponse: CurrencyQuoteGetResponse;
  CursorInput: CursorInput;
  CursorInputString: CursorInputString;
  CursorPaginationResponse: CursorPaginationResponse;
  Date: Scalars['Date']['output'];
  DateRangeInput: DateRangeInput;
  DatetimeRange: DatetimeRange;
  DeleteProjectInput: DeleteProjectInput;
  DeleteProjectRewardInput: DeleteProjectRewardInput;
  DeleteUserResponse: DeleteUserResponse;
  EmailSendOptionsInput: EmailSendOptionsInput;
  EmailVerifyInput: EmailVerifyInput;
  Entry: Omit<Entry, 'contributions' | 'creator' | 'project'> & { contributions: Array<ResolversParentTypes['Contribution']>, creator: ResolversParentTypes['User'], project?: Maybe<ResolversParentTypes['Project']> };
  EntryPublishedSubscriptionResponse: Omit<EntryPublishedSubscriptionResponse, 'entry'> & { entry: ResolversParentTypes['Entry'] };
  ExternalAccount: ExternalAccount;
  FiatPaymentMethods: FiatPaymentMethods;
  FiatToLightningSwapPaymentDetails: FiatToLightningSwapPaymentDetails;
  FileUploadInput: FileUploadInput;
  Float: Scalars['Float']['output'];
  Funder: Omit<Funder, 'contributions' | 'user'> & { contributions: Array<ResolversParentTypes['Contribution']>, user?: Maybe<ResolversParentTypes['User']> };
  FunderRewardGraphSum: FunderRewardGraphSum;
  GetActivitiesInput: GetActivitiesInput;
  GetActivityOrderByInput: GetActivityOrderByInput;
  GetActivityPaginationInput: GetActivityPaginationInput;
  GetActivityWhereInput: GetActivityWhereInput;
  GetContributionsInput: GetContributionsInput;
  GetContributionsOrderByInput: GetContributionsOrderByInput;
  GetContributionsWhereInput: GetContributionsWhereInput;
  GetContributorContributionsInput: GetContributorContributionsInput;
  GetContributorContributionsWhereInput: GetContributorContributionsWhereInput;
  GetContributorInput: GetContributorInput;
  GetDashboardFundersWhereInput: GetDashboardFundersWhereInput;
  GetEntriesInput: GetEntriesInput;
  GetEntriesOrderByInput: GetEntriesOrderByInput;
  GetEntriesWhereInput: GetEntriesWhereInput;
  GetFunderWhereInput: GetFunderWhereInput;
  GetFundersInput: GetFundersInput;
  GetFundersOrderByInput: GetFundersOrderByInput;
  GetProjectGoalsInput: GetProjectGoalsInput;
  GetProjectOrdersStatsInput: GetProjectOrdersStatsInput;
  GetProjectOrdersStatsWhereInput: GetProjectOrdersStatsWhereInput;
  GetProjectRewardInput: GetProjectRewardInput;
  GetProjectRewardWhereInput: GetProjectRewardWhereInput;
  GetProjectRewardsInput: GetProjectRewardsInput;
  GetProjectRewardsWhereInput: GetProjectRewardsWhereInput;
  GetProjectStatsInput: GetProjectStatsInput;
  GetProjectStatsWhereInput: GetProjectStatsWhereInput;
  GeyserPromotionsContributionStats: GeyserPromotionsContributionStats;
  GeyserPromotionsContributionStatsInput: GeyserPromotionsContributionStatsInput;
  GeyserPromotionsContributionStatsWhereInput: GeyserPromotionsContributionStatsWhereInput;
  GlobalAmbassadorLeaderboardRow: GlobalAmbassadorLeaderboardRow;
  GlobalContributorLeaderboardRow: GlobalContributorLeaderboardRow;
  GlobalCreatorLeaderboardRow: GlobalCreatorLeaderboardRow;
  GlobalProjectLeaderboardRow: GlobalProjectLeaderboardRow;
  Grant: ResolversUnionTypes<ResolversParentTypes>['Grant'];
  GrantApplicant: Omit<GrantApplicant, 'contributors' | 'grant' | 'project'> & { contributors: Array<ResolversParentTypes['GrantApplicantContributor']>, grant: ResolversParentTypes['Grant'], project: ResolversParentTypes['Project'] };
  GrantApplicantContributor: Omit<GrantApplicantContributor, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  GrantApplicantContributorInput: GrantApplicantContributorInput;
  GrantApplicantContributorWhereInput: GrantApplicantContributorWhereInput;
  GrantApplicantFunding: GrantApplicantFunding;
  GrantApplicantsGetInput: GrantApplicantsGetInput;
  GrantApplicantsGetOrderByInput: GrantApplicantsGetOrderByInput;
  GrantApplicantsGetWhereInput: GrantApplicantsGetWhereInput;
  GrantApplyInput: GrantApplyInput;
  GrantBoardMember: Omit<GrantBoardMember, 'user'> & { user: ResolversParentTypes['User'] };
  GrantGetInput: GrantGetInput;
  GrantGetWhereInput: GrantGetWhereInput;
  GrantGuardiansFunding: GrantGuardiansFunding;
  GrantStatistics: GrantStatistics;
  GrantStatisticsApplicant: GrantStatisticsApplicant;
  GrantStatisticsGrant: GrantStatisticsGrant;
  GrantStatus: GrantStatus;
  GraphData: ResolversInterfaceTypes<ResolversParentTypes>['GraphData'];
  GraphSumData: ResolversInterfaceTypes<ResolversParentTypes>['GraphSumData'];
  GuardianResult: GuardianResult;
  GuardianUser: GuardianUser;
  GuardianUsersGetInput: GuardianUsersGetInput;
  GuardianUsersGetResponse: GuardianUsersGetResponse;
  GuardianUsersGetWhereInput: GuardianUsersGetWhereInput;
  HeroStats: ResolversInterfaceTypes<ResolversParentTypes>['HeroStats'];
  Int: Scalars['Int']['output'];
  LeaderboardGlobalAmbassadorsGetInput: LeaderboardGlobalAmbassadorsGetInput;
  LeaderboardGlobalContributorsGetInput: LeaderboardGlobalContributorsGetInput;
  LeaderboardGlobalCreatorsGetInput: LeaderboardGlobalCreatorsGetInput;
  LeaderboardGlobalProjectsGetInput: LeaderboardGlobalProjectsGetInput;
  LightningAddressConnectionDetails: LightningAddressConnectionDetails;
  LightningAddressConnectionDetailsCreateInput: LightningAddressConnectionDetailsCreateInput;
  LightningAddressConnectionDetailsUpdateInput: LightningAddressConnectionDetailsUpdateInput;
  LightningAddressContributionLimits: LightningAddressContributionLimits;
  LightningAddressVerifyResponse: LightningAddressVerifyResponse;
  LightningPaymentDetails: LightningPaymentDetails;
  LightningPaymentMethods: LightningPaymentMethods;
  LightningToRskSwapPaymentDetails: LightningToRskSwapPaymentDetails;
  LndConnectionDetails: ResolversInterfaceTypes<ResolversParentTypes>['LndConnectionDetails'];
  LndConnectionDetailsCreateInput: LndConnectionDetailsCreateInput;
  LndConnectionDetailsPrivate: LndConnectionDetailsPrivate;
  LndConnectionDetailsPublic: LndConnectionDetailsPublic;
  LndConnectionDetailsUpdateInput: LndConnectionDetailsUpdateInput;
  Location: Location;
  Milestone: Milestone;
  Mutation: {};
  MutationResponse: ResolversInterfaceTypes<ResolversParentTypes>['MutationResponse'];
  NWCConnectionDetailsCreateInput: NwcConnectionDetailsCreateInput;
  NWCConnectionDetailsPrivate: NwcConnectionDetailsPrivate;
  NWCConnectionDetailsPublic: NwcConnectionDetailsPublic;
  NWCConnectionDetailsUpdateInput: NwcConnectionDetailsUpdateInput;
  NostrKeys: NostrKeys;
  NostrPrivateKey: NostrPrivateKey;
  NostrPublicKey: NostrPublicKey;
  NotificationConfiguration: NotificationConfiguration;
  NotificationSettings: NotificationSettings;
  OTPInput: OtpInput;
  OTPLoginInput: OtpLoginInput;
  OTPResponse: OtpResponse;
  OffsetBasedPaginationInput: OffsetBasedPaginationInput;
  OnChainPaymentMethods: OnChainPaymentMethods;
  OnChainToLightningSwapPaymentDetails: OnChainToLightningSwapPaymentDetails;
  OnChainToRskSwapPaymentDetails: OnChainToRskSwapPaymentDetails;
  OnChainTxInput: OnChainTxInput;
  Order: Omit<Order, 'contribution' | 'project' | 'user'> & { contribution: ResolversParentTypes['Contribution'], project: ResolversParentTypes['Project'], user?: Maybe<ResolversParentTypes['User']> };
  OrderBitcoinQuoteInput: OrderBitcoinQuoteInput;
  OrderContributionInput: OrderContributionInput;
  OrderItem: OrderItem;
  OrderItemInput: OrderItemInput;
  OrderStatusUpdateInput: OrderStatusUpdateInput;
  OrdersGetInput: OrdersGetInput;
  OrdersGetOrderByInput: OrdersGetOrderByInput;
  OrdersGetResponse: OrdersGetResponse;
  OrdersGetWhereInput: OrdersGetWhereInput;
  OrdersStatsBase: OrdersStatsBase;
  Owner: Omit<Owner, 'user'> & { user: ResolversParentTypes['User'] };
  OwnerOf: Omit<OwnerOf, 'owner' | 'project'> & { owner?: Maybe<ResolversParentTypes['Owner']>, project?: Maybe<ResolversParentTypes['Project']> };
  PageInfo: PageInfo;
  PageViewCountGraph: PageViewCountGraph;
  PaginationCursor: PaginationCursor;
  PaginationInput: PaginationInput;
  Payment: Omit<Payment, 'fees' | 'paymentDetails'> & { fees: Array<ResolversParentTypes['PaymentFee']>, paymentDetails: ResolversParentTypes['PaymentDetails'] };
  PaymentCancelInput: PaymentCancelInput;
  PaymentCancelResponse: PaymentCancelResponse;
  PaymentConfirmInput: PaymentConfirmInput;
  PaymentConfirmOnChainSwapInput: PaymentConfirmOnChainSwapInput;
  PaymentConfirmResponse: PaymentConfirmResponse;
  PaymentDetails: ResolversUnionTypes<ResolversParentTypes>['PaymentDetails'];
  PaymentFailInput: PaymentFailInput;
  PaymentFailResponse: PaymentFailResponse;
  PaymentFee: PaymentFee;
  PaymentGetInput: PaymentGetInput;
  PaymentInvoiceCancelResponse: PaymentInvoiceCancelResponse;
  PaymentInvoiceSanctionCheckStatusGetInput: PaymentInvoiceSanctionCheckStatusGetInput;
  PaymentInvoiceSanctionCheckStatusResponse: PaymentInvoiceSanctionCheckStatusResponse;
  PaymentMethods: PaymentMethods;
  PaymentPendInput: PaymentPendInput;
  PaymentPendOnChainSwapInput: PaymentPendOnChainSwapInput;
  PaymentPendResponse: PaymentPendResponse;
  PaymentRefund: PaymentRefund;
  PaymentRefundCompleteInput: PaymentRefundCompleteInput;
  PaymentRefundCompleteResponse: PaymentRefundCompleteResponse;
  PaymentRefundsGetResponse: PaymentRefundsGetResponse;
  PaymentStatusUpdatedInput: PaymentStatusUpdatedInput;
  PaymentSwapClaimTxBroadcastInput: PaymentSwapClaimTxBroadcastInput;
  PaymentSwapClaimTxBroadcastResponse: PaymentSwapClaimTxBroadcastResponse;
  PaymentSwapClaimTxSetInput: PaymentSwapClaimTxSetInput;
  PaymentSwapClaimTxSetResponse: PaymentSwapClaimTxSetResponse;
  Payout: Payout;
  PayoutCancelInput: PayoutCancelInput;
  PayoutGetInput: PayoutGetInput;
  PayoutGetResponse: PayoutGetResponse;
  PayoutInitiateInput: PayoutInitiateInput;
  PayoutInitiateResponse: Omit<PayoutInitiateResponse, 'payment'> & { payment: ResolversParentTypes['Payment'] };
  PayoutMetadata: PayoutMetadata;
  PayoutPaymentInput: PayoutPaymentInput;
  PayoutRequestInput: PayoutRequestInput;
  PayoutRequestResponse: PayoutRequestResponse;
  PayoutResponse: PayoutResponse;
  PledgeRefund: Omit<PledgeRefund, 'project'> & { project: ResolversParentTypes['Project'] };
  PledgeRefundCancelInput: PledgeRefundCancelInput;
  PledgeRefundGetInput: PledgeRefundGetInput;
  PledgeRefundGetResponse: Omit<PledgeRefundGetResponse, 'refund'> & { refund: ResolversParentTypes['PledgeRefund'] };
  PledgeRefundInitiateInput: PledgeRefundInitiateInput;
  PledgeRefundInitiateResponse: Omit<PledgeRefundInitiateResponse, 'payment' | 'refund'> & { payment: ResolversParentTypes['Payment'], refund: ResolversParentTypes['PledgeRefund'] };
  PledgeRefundMetadata: PledgeRefundMetadata;
  PledgeRefundPaymentInput: PledgeRefundPaymentInput;
  PledgeRefundRequestInput: PledgeRefundRequestInput;
  PledgeRefundRequestResponse: Omit<PledgeRefundRequestResponse, 'refund'> & { refund: ResolversParentTypes['PledgeRefund'] };
  PledgeRefundResponse: PledgeRefundResponse;
  PledgeRefundsGetResponse: Omit<PledgeRefundsGetResponse, 'refunds'> & { refunds: Array<ResolversParentTypes['PledgeRefund']> };
  PodcastKeysendContributionCreateInput: PodcastKeysendContributionCreateInput;
  PodcastKeysendContributionCreateResponse: PodcastKeysendContributionCreateResponse;
  Post: Omit<Post, 'contributions' | 'creator' | 'project'> & { contributions: Array<ResolversParentTypes['Contribution']>, creator: ResolversParentTypes['User'], project?: Maybe<ResolversParentTypes['Project']> };
  PostCreateInput: PostCreateInput;
  PostEmailSegmentSizeGetInput: PostEmailSegmentSizeGetInput;
  PostGetInput: PostGetInput;
  PostGetOrderByInput: PostGetOrderByInput;
  PostGetWhereInput: PostGetWhereInput;
  PostPublishInput: PostPublishInput;
  PostPublishedSubscriptionResponse: PostPublishedSubscriptionResponse;
  PostSendByEmailInput: PostSendByEmailInput;
  PostSendByEmailResponse: PostSendByEmailResponse;
  PostUpdateInput: PostUpdateInput;
  ProfileNotificationSettings: ProfileNotificationSettings;
  Project: Omit<Project, 'ambassadors' | 'contributions' | 'entries' | 'followers' | 'grantApplications' | 'owners' | 'sponsors' | 'wallets'> & { ambassadors: ResolversParentTypes['ProjectAmbassadorsConnection'], contributions: Array<ResolversParentTypes['Contribution']>, entries: Array<ResolversParentTypes['Entry']>, followers: Array<ResolversParentTypes['User']>, grantApplications: Array<ResolversParentTypes['GrantApplicant']>, owners: Array<ResolversParentTypes['Owner']>, sponsors: Array<ResolversParentTypes['Sponsor']>, wallets: Array<ResolversParentTypes['Wallet']> };
  ProjectActivatedSubscriptionResponse: Omit<ProjectActivatedSubscriptionResponse, 'project'> & { project: ResolversParentTypes['Project'] };
  ProjectActivitiesCount: Omit<ProjectActivitiesCount, 'project'> & { project: ResolversParentTypes['Project'] };
  ProjectAmbassadorEdge: Omit<ProjectAmbassadorEdge, 'node'> & { node: ResolversParentTypes['Ambassador'] };
  ProjectAmbassadorsConnection: Omit<ProjectAmbassadorsConnection, 'edges'> & { edges: Array<ResolversParentTypes['ProjectAmbassadorEdge']> };
  ProjectAmbassadorsStats: ProjectAmbassadorsStats;
  ProjectAonGoalAmountUpdateInput: ProjectAonGoalAmountUpdateInput;
  ProjectAonGoalStatusUpdateInput: ProjectAonGoalStatusUpdateInput;
  ProjectAonGoalStatusUpdateResponse: ProjectAonGoalStatusUpdateResponse;
  ProjectAonGoalUpdateInput: ProjectAonGoalUpdateInput;
  ProjectCloseMutationInput: ProjectCloseMutationInput;
  ProjectContributionsGroupedByMethodStats: ProjectContributionsGroupedByMethodStats;
  ProjectContributionsStats: ProjectContributionsStats;
  ProjectContributionsStatsBase: ProjectContributionsStatsBase;
  ProjectContributionsStatsGraphData: ProjectContributionsStatsGraphData;
  ProjectContributionsStatsGraphDataAmount: ProjectContributionsStatsGraphDataAmount;
  ProjectCountriesGetInput: ProjectCountriesGetInput;
  ProjectCountriesGetResult: ProjectCountriesGetResult;
  ProjectDeleteResponse: ProjectDeleteResponse;
  ProjectEntriesGetInput: ProjectEntriesGetInput;
  ProjectEntriesGetWhereInput: ProjectEntriesGetWhereInput;
  ProjectFollowMutationInput: ProjectFollowMutationInput;
  ProjectFollowerStats: ProjectFollowerStats;
  ProjectFunderRewardStats: ProjectFunderRewardStats;
  ProjectFunderStats: ProjectFunderStats;
  ProjectGoal: ProjectGoal;
  ProjectGoalCreateInput: ProjectGoalCreateInput;
  ProjectGoalDeleteResponse: ProjectGoalDeleteResponse;
  ProjectGoalOrderingUpdateInput: ProjectGoalOrderingUpdateInput;
  ProjectGoalUpdateInput: ProjectGoalUpdateInput;
  ProjectGoals: ProjectGoals;
  ProjectGrantApplicationsInput: ProjectGrantApplicationsInput;
  ProjectGrantApplicationsWhereInput: ProjectGrantApplicationsWhereInput;
  ProjectKeys: ProjectKeys;
  ProjectLeaderboardAmbassadorsGetInput: ProjectLeaderboardAmbassadorsGetInput;
  ProjectLeaderboardAmbassadorsRow: Omit<ProjectLeaderboardAmbassadorsRow, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  ProjectLeaderboardContributorsGetInput: ProjectLeaderboardContributorsGetInput;
  ProjectLeaderboardContributorsRow: Omit<ProjectLeaderboardContributorsRow, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  ProjectLinkMutationInput: ProjectLinkMutationInput;
  ProjectMostFunded: Omit<ProjectMostFunded, 'project'> & { project: ResolversParentTypes['Project'] };
  ProjectMostFundedByCategory: Omit<ProjectMostFundedByCategory, 'projects'> & { projects: Array<ResolversParentTypes['ProjectMostFunded']> };
  ProjectMostFundedByTag: Omit<ProjectMostFundedByTag, 'projects'> & { projects: Array<ResolversParentTypes['ProjectMostFunded']> };
  ProjectPostsGetInput: ProjectPostsGetInput;
  ProjectPostsGetWhereInput: ProjectPostsGetWhereInput;
  ProjectPreLaunchMutationInput: ProjectPreLaunchMutationInput;
  ProjectPublishMutationInput: ProjectPublishMutationInput;
  ProjectPutInReviewMutationInput: ProjectPutInReviewMutationInput;
  ProjectRefundablePayment: Omit<ProjectRefundablePayment, 'payments' | 'project'> & { payments: Array<ResolversParentTypes['Payment']>, project: ResolversParentTypes['Project'] };
  ProjectRegionsGetResult: ProjectRegionsGetResult;
  ProjectReview: ProjectReview;
  ProjectReviewRequestInput: ProjectReviewRequestInput;
  ProjectReviewSubmitInput: ProjectReviewSubmitInput;
  ProjectReward: Omit<ProjectReward, 'project'> & { project: ResolversParentTypes['Project'] };
  ProjectRewardCurrencyUpdate: ProjectRewardCurrencyUpdate;
  ProjectRewardCurrencyUpdateRewardsInput: ProjectRewardCurrencyUpdateRewardsInput;
  ProjectRewardTrendingMonthlyGetRow: ProjectRewardTrendingMonthlyGetRow;
  ProjectRewardTrendingQuarterlyGetRow: ProjectRewardTrendingQuarterlyGetRow;
  ProjectRewardTrendingWeeklyGetRow: ProjectRewardTrendingWeeklyGetRow;
  ProjectRewardsGroupedByRewardIdStats: ProjectRewardsGroupedByRewardIdStats;
  ProjectRewardsGroupedByRewardIdStatsProjectReward: ProjectRewardsGroupedByRewardIdStatsProjectReward;
  ProjectRewardsStats: ProjectRewardsStats;
  ProjectShippingConfigsGetInput: ProjectShippingConfigsGetInput;
  ProjectShippingRate: ProjectShippingRate;
  ProjectStatistics: ProjectStatistics;
  ProjectStats: ProjectStats;
  ProjectStatsBase: ProjectStatsBase;
  ProjectStatusUpdate: ProjectStatusUpdate;
  ProjectSubscriptionPlan: ProjectSubscriptionPlan;
  ProjectSubscriptionPlansInput: ProjectSubscriptionPlansInput;
  ProjectSubscriptionPlansWhereInput: ProjectSubscriptionPlansWhereInput;
  ProjectViewBaseStats: ProjectViewBaseStats;
  ProjectViewStats: ProjectViewStats;
  ProjectsGetQueryInput: ProjectsGetQueryInput;
  ProjectsGetWhereInput: ProjectsGetWhereInput;
  ProjectsMostFundedByCategoryInput: ProjectsMostFundedByCategoryInput;
  ProjectsMostFundedByTagInput: ProjectsMostFundedByTagInput;
  ProjectsOrderByInput: ProjectsOrderByInput;
  ProjectsResponse: Omit<ProjectsResponse, 'projects'> & { projects: Array<ResolversParentTypes['Project']> };
  ProjectsSummary: ProjectsSummary;
  Query: {};
  RefundablePaymentsGetResponse: Omit<RefundablePaymentsGetResponse, 'refundablePayments'> & { refundablePayments: Array<ResolversParentTypes['ProjectRefundablePayment']> };
  ResourceInput: ResourceInput;
  RskKeyPair: RskKeyPair;
  RskKeyPairInput: RskKeyPairInput;
  RskToLightningSwapPaymentDetails: RskToLightningSwapPaymentDetails;
  RskToLightningSwapPaymentDetailsBoltzInput: RskToLightningSwapPaymentDetailsBoltzInput;
  RskToLightningSwapPaymentDetailsInput: RskToLightningSwapPaymentDetailsInput;
  RskToOnChainSwapPaymentDetails: RskToOnChainSwapPaymentDetails;
  RskToOnChainSwapPaymentDetailsBoltzInput: RskToOnChainSwapPaymentDetailsBoltzInput;
  RskToOnChainSwapPaymentDetailsInput: RskToOnChainSwapPaymentDetailsInput;
  SendOtpByEmailInput: SendOtpByEmailInput;
  ShippingAddress: ShippingAddress;
  ShippingAddressCreateInput: ShippingAddressCreateInput;
  ShippingAddressesGetInput: ShippingAddressesGetInput;
  ShippingConfig: ShippingConfig;
  SignedUploadUrl: SignedUploadUrl;
  SourceResource: ResolversUnionTypes<ResolversParentTypes>['SourceResource'];
  Sponsor: Omit<Sponsor, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  StatsInterface: ResolversInterfaceTypes<ResolversParentTypes>['StatsInterface'];
  String: Scalars['String']['output'];
  StripeCheckoutSessionInput: StripeCheckoutSessionInput;
  Subscription: {};
  SubscriptionPaymentConfirmationInput: SubscriptionPaymentConfirmationInput;
  Swap: Swap;
  TOTPInput: TotpInput;
  Tag: Tag;
  TagCreateInput: TagCreateInput;
  TagsGetResult: TagsGetResult;
  TagsMostFundedGetResult: TagsMostFundedGetResult;
  TwoFAInput: TwoFaInput;
  UniqueOrderInput: UniqueOrderInput;
  UniqueProjectQueryInput: UniqueProjectQueryInput;
  UpdateEntryInput: UpdateEntryInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateProjectRewardInput: UpdateProjectRewardInput;
  UpdateProjectShippingConfigInput: UpdateProjectShippingConfigInput;
  UpdateProjectShippingFeeRateInput: UpdateProjectShippingFeeRateInput;
  UpdateProjectSubscriptionPlanInput: UpdateProjectSubscriptionPlanInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserSubscriptionInput: UpdateUserSubscriptionInput;
  UpdateWalletInput: UpdateWalletInput;
  UpdateWalletStateInput: UpdateWalletStateInput;
  User: Omit<User, 'contributions' | 'entries' | 'ownerOf' | 'projectFollows' | 'projects' | 'wallet'> & { contributions: Array<ResolversParentTypes['Contribution']>, entries: Array<ResolversParentTypes['Entry']>, ownerOf: Array<ResolversParentTypes['OwnerOf']>, projectFollows: Array<ResolversParentTypes['Project']>, projects: Array<ResolversParentTypes['Project']>, wallet?: Maybe<ResolversParentTypes['Wallet']> };
  UserAccountKeys: UserAccountKeys;
  UserAccountKeysUpdateInput: UserAccountKeysUpdateInput;
  UserBadge: UserBadge;
  UserComplianceDetails: UserComplianceDetails;
  UserContributionLimit: UserContributionLimit;
  UserContributionLimits: UserContributionLimits;
  UserContributionsInput: UserContributionsInput;
  UserEmailIsValidResponse: UserEmailIsValidResponse;
  UserEmailUpdateInput: UserEmailUpdateInput;
  UserEntriesGetInput: UserEntriesGetInput;
  UserEntriesGetWhereInput: UserEntriesGetWhereInput;
  UserGetInput: UserGetInput;
  UserHeroStats: UserHeroStats;
  UserNotificationSettings: UserNotificationSettings;
  UserPostsGetInput: UserPostsGetInput;
  UserPostsGetWhereInput: UserPostsGetWhereInput;
  UserProjectContribution: Omit<UserProjectContribution, 'project'> & { project: ResolversParentTypes['Project'] };
  UserProjectsGetInput: UserProjectsGetInput;
  UserProjectsGetWhereInput: UserProjectsGetWhereInput;
  UserSubscription: UserSubscription;
  UserSubscriptionsInput: UserSubscriptionsInput;
  UserSubscriptionsWhereInput: UserSubscriptionsWhereInput;
  UserTaxProfile: UserTaxProfile;
  UserTaxProfileUpdateInput: UserTaxProfileUpdateInput;
  UserVerificationLevelStatus: UserVerificationLevelStatus;
  UserVerificationTokenGenerateInput: UserVerificationTokenGenerateInput;
  UserVerificationTokenGenerateResponse: UserVerificationTokenGenerateResponse;
  UserVerifiedDetails: UserVerifiedDetails;
  VerificationResult: VerificationResult;
  Wallet: Omit<Wallet, 'connectionDetails'> & { connectionDetails: ResolversParentTypes['ConnectionDetails'] };
  WalletContributionLimits: WalletContributionLimits;
  WalletLimits: WalletLimits;
  WalletOffChainContributionLimits: WalletOffChainContributionLimits;
  WalletOnChainContributionLimits: WalletOnChainContributionLimits;
  WalletResourceInput: WalletResourceInput;
  WalletState: WalletState;
  dashboardFundersGetInput: DashboardFundersGetInput;
};

export type ActivitiesGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivitiesGetResponse'] = ResolversParentTypes['ActivitiesGetResponse']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['CursorPaginationResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  activityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['ActivityResource'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityResource'] = ResolversParentTypes['ActivityResource']> = {
  __resolveType: TypeResolveFn<'Contribution' | 'Entry' | 'Post' | 'Project' | 'ProjectGoal' | 'ProjectReward', ParentType, ContextType>;
};

export type AmbassadorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ambassador'] = ResolversParentTypes['Ambassador']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsSum?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  payoutRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmbassadorStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AmbassadorStats'] = ResolversParentTypes['AmbassadorStats']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmountSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AmountSummary'] = ResolversParentTypes['AmountSummary']> = {
  donationAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rewardsCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shippingCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BadgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Badge'] = ResolversParentTypes['Badge']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumb?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uniqueName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BitcoinPaymentMethodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BitcoinPaymentMethods'] = ResolversParentTypes['BitcoinPaymentMethods']> = {
  lightning?: Resolver<ResolversTypes['LightningPaymentMethods'], ParentType, ContextType>;
  onChain?: Resolver<ResolversTypes['OnChainPaymentMethods'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['BitcoinQuote'] = ResolversParentTypes['BitcoinQuote']> = {
  quote?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quoteCurrency?: Resolver<ResolversTypes['QuoteCurrency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoardVoteGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['BoardVoteGrant'] = ResolversParentTypes['BoardVoteGrant']> = {
  applicants?: Resolver<Array<ResolversTypes['GrantApplicant']>, ParentType, ContextType, Partial<BoardVoteGrantApplicantsArgs>>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  boardMembers?: Resolver<Array<ResolversTypes['GrantBoardMember']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sponsors?: Resolver<Array<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['GrantStatusEnum'], ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['GrantStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['GrantType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityVoteGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityVoteGrant'] = ResolversParentTypes['CommunityVoteGrant']> = {
  applicants?: Resolver<Array<ResolversTypes['GrantApplicant']>, ParentType, ContextType, Partial<CommunityVoteGrantApplicantsArgs>>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distributionSystem?: Resolver<ResolversTypes['DistributionSystem'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sponsors?: Resolver<Array<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['GrantStatusEnum'], ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['GrantStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['GrantType'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['CompetitionVoteGrantVoteSummary'], ParentType, ContextType>;
  votingSystem?: Resolver<ResolversTypes['VotingSystem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompetitionVoteGrantVoteSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompetitionVoteGrantVoteSummary'] = ResolversParentTypes['CompetitionVoteGrantVoteSummary']> = {
  voteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voterCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConnectionDetails'] = ResolversParentTypes['ConnectionDetails']> = {
  __resolveType: TypeResolveFn<'LightningAddressConnectionDetails' | 'LndConnectionDetailsPrivate' | 'LndConnectionDetailsPublic' | 'NWCConnectionDetailsPrivate', ParentType, ContextType>;
};

export type ContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bitcoinQuote?: Resolver<Maybe<ResolversTypes['BitcoinQuote']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creatorEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorTaxProfile?: Resolver<Maybe<ResolversTypes['UserTaxProfile']>, ParentType, ContextType>;
  donationAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  funder?: Resolver<ResolversTypes['Funder'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isAnonymous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSubscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  payments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType>;
  privateComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectGoalId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sourceResource?: Resolver<Maybe<ResolversTypes['SourceResource']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ContributionStatus'], ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionFiatPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionFiatPaymentDetails'] = ResolversParentTypes['ContributionFiatPaymentDetails']> = {
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stripeClientSecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionFiatSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionFiatSwapPaymentDetails'] = ResolversParentTypes['ContributionFiatSwapPaymentDetails']> = {
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  checkoutUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionLightningPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionLightningPaymentDetails'] = ResolversParentTypes['ContributionLightningPaymentDetails']> = {
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  paymentRequest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionLightningToRskSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionLightningToRskSwapPaymentDetails'] = ResolversParentTypes['ContributionLightningToRskSwapPaymentDetails']> = {
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  paymentRequest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionMutationResponse'] = ResolversParentTypes['ContributionMutationResponse']> = {
  contribution?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType>;
  payments?: Resolver<ResolversTypes['ContributionPaymentsDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionOnChainSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionOnChainSwapPaymentDetails'] = ResolversParentTypes['ContributionOnChainSwapPaymentDetails']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionOnChainToRskSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionOnChainToRskSwapPaymentDetails'] = ResolversParentTypes['ContributionOnChainToRskSwapPaymentDetails']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountDueCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionPaymentsAddResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionPaymentsAddResponse'] = ResolversParentTypes['ContributionPaymentsAddResponse']> = {
  payments?: Resolver<ResolversTypes['ContributionPaymentsDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionPaymentsDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionPaymentsDetails'] = ResolversParentTypes['ContributionPaymentsDetails']> = {
  fiat?: Resolver<Maybe<ResolversTypes['ContributionFiatPaymentDetails']>, ParentType, ContextType>;
  fiatSwap?: Resolver<Maybe<ResolversTypes['ContributionFiatSwapPaymentDetails']>, ParentType, ContextType>;
  lightning?: Resolver<Maybe<ResolversTypes['ContributionLightningPaymentDetails']>, ParentType, ContextType>;
  lightningToRskSwap?: Resolver<Maybe<ResolversTypes['ContributionLightningToRskSwapPaymentDetails']>, ParentType, ContextType>;
  onChainSwap?: Resolver<Maybe<ResolversTypes['ContributionOnChainSwapPaymentDetails']>, ParentType, ContextType>;
  onChainToRskSwap?: Resolver<Maybe<ResolversTypes['ContributionOnChainToRskSwapPaymentDetails']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionStatusUpdatedSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionStatusUpdatedSubscriptionResponse'] = ResolversParentTypes['ContributionStatusUpdatedSubscriptionResponse']> = {
  contribution?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionsGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionsGetResponse'] = ResolversParentTypes['ContributionsGetResponse']> = {
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['CursorPaginationResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionsSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionsSummary'] = ResolversParentTypes['ContributionsSummary']> = {
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorContributionsSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorContributionsSummary'] = ResolversParentTypes['ContributorContributionsSummary']> = {
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorStats'] = ResolversParentTypes['ContributorStats']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorNotificationSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatorNotificationSettings'] = ResolversParentTypes['CreatorNotificationSettings']> = {
  notificationSettings?: Resolver<Array<ResolversTypes['NotificationSettings']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['CreatorNotificationSettingsProject'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorNotificationSettingsProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatorNotificationSettingsProject'] = ResolversParentTypes['CreatorNotificationSettingsProject']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatorStats'] = ResolversParentTypes['CreatorStats']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyQuoteGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyQuoteGetResponse'] = ResolversParentTypes['CurrencyQuoteGetResponse']> = {
  baseCurrency?: Resolver<ResolversTypes['BaseCurrency'], ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quoteCurrency?: Resolver<ResolversTypes['QuoteCurrency'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CursorPaginationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CursorPaginationResponse'] = ResolversParentTypes['CursorPaginationResponse']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cursor?: Resolver<Maybe<ResolversTypes['PaginationCursor']>, ParentType, ContextType>;
  take?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DatetimeRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DatetimeRange'] = ResolversParentTypes['DatetimeRange']> = {
  endDateTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  startDateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserResponse'] = ResolversParentTypes['DeleteUserResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  amountFunded?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fundersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  markdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['EntryStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EntryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPublishedSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPublishedSubscriptionResponse'] = ResolversParentTypes['EntryPublishedSubscriptionResponse']> = {
  entry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalAccount'] = ResolversParentTypes['ExternalAccount']> = {
  accountType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FiatPaymentMethodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FiatPaymentMethods'] = ResolversParentTypes['FiatPaymentMethods']> = {
  banxa?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stripe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FiatToLightningSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FiatToLightningSwapPaymentDetails'] = ResolversParentTypes['FiatToLightningSwapPaymentDetails']> = {
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lightningInvoiceStatus?: Resolver<ResolversTypes['LightningInvoiceStatus'], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Funder'] = ResolversParentTypes['Funder']> = {
  amountFunded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  confirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  confirmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType, Partial<FunderContributionsArgs>>;
  contributionsSummary?: Resolver<Maybe<ResolversTypes['ContributorContributionsSummary']>, ParentType, ContextType, Partial<FunderContributionsSummaryArgs>>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timesFunded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunderRewardGraphSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['FunderRewardGraphSum'] = ResolversParentTypes['FunderRewardGraphSum']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  rewardId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rewardName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeyserPromotionsContributionStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeyserPromotionsContributionStats'] = ResolversParentTypes['GeyserPromotionsContributionStats']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsSum?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  contributionsSumUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalAmbassadorLeaderboardRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalAmbassadorLeaderboardRow'] = ResolversParentTypes['GlobalAmbassadorLeaderboardRow']> = {
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userGuardianType?: Resolver<Maybe<ResolversTypes['GuardianType']>, ParentType, ContextType>;
  userHeroId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalContributorLeaderboardRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalContributorLeaderboardRow'] = ResolversParentTypes['GlobalContributorLeaderboardRow']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsContributedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userGuardianType?: Resolver<Maybe<ResolversTypes['GuardianType']>, ParentType, ContextType>;
  userHeroId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalCreatorLeaderboardRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalCreatorLeaderboardRow'] = ResolversParentTypes['GlobalCreatorLeaderboardRow']> = {
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userGuardianType?: Resolver<Maybe<ResolversTypes['GuardianType']>, ParentType, ContextType>;
  userHeroId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalProjectLeaderboardRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalProjectLeaderboardRow'] = ResolversParentTypes['GlobalProjectLeaderboardRow']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectThumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grant'] = ResolversParentTypes['Grant']> = {
  __resolveType: TypeResolveFn<'BoardVoteGrant' | 'CommunityVoteGrant', ParentType, ContextType>;
};

export type GrantApplicantResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantApplicant'] = ResolversParentTypes['GrantApplicant']> = {
  contributors?: Resolver<Array<ResolversTypes['GrantApplicantContributor']>, ParentType, ContextType, Partial<GrantApplicantContributorsArgs>>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  funding?: Resolver<ResolversTypes['GrantApplicantFunding'], ParentType, ContextType>;
  grant?: Resolver<ResolversTypes['Grant'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['GrantApplicantStatus'], ParentType, ContextType>;
  voteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantApplicantContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantApplicantContributor'] = ResolversParentTypes['GrantApplicantContributor']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timesContributed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  voteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantApplicantFundingResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantApplicantFunding'] = ResolversParentTypes['GrantApplicantFunding']> = {
  communityFunding?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  grantAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  grantAmountDistributed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantBoardMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantBoardMember'] = ResolversParentTypes['GrantBoardMember']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantGuardiansFundingResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantGuardiansFunding'] = ResolversParentTypes['GrantGuardiansFunding']> = {
  contributedTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantStatistics'] = ResolversParentTypes['GrantStatistics']> = {
  applicants?: Resolver<Maybe<ResolversTypes['GrantStatisticsApplicant']>, ParentType, ContextType>;
  grantGuardiansFunding?: Resolver<ResolversTypes['GrantGuardiansFunding'], ParentType, ContextType>;
  grants?: Resolver<Maybe<ResolversTypes['GrantStatisticsGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsApplicantResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantStatisticsApplicant'] = ResolversParentTypes['GrantStatisticsApplicant']> = {
  countFunded?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantStatisticsGrant'] = ResolversParentTypes['GrantStatisticsGrant']> = {
  amountFunded?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amountGranted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantStatus'] = ResolversParentTypes['GrantStatus']> = {
  endAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['GrantStatusEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphData'] = ResolversParentTypes['GraphData']> = {
  __resolveType: TypeResolveFn<'ProjectContributionsStatsGraphDataAmount', ParentType, ContextType>;
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type GraphSumDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphSumData'] = ResolversParentTypes['GraphSumData']> = {
  __resolveType: TypeResolveFn<'FunderRewardGraphSum', ParentType, ContextType>;
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type GuardianResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuardianResult'] = ResolversParentTypes['GuardianResult']> = {
  guardianType?: Resolver<ResolversTypes['GuardianType'], ParentType, ContextType>;
  soldCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['GuardianUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuardianUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuardianUser'] = ResolversParentTypes['GuardianUser']> = {
  guardianType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuardianUsersGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuardianUsersGetResponse'] = ResolversParentTypes['GuardianUsersGetResponse']> = {
  guardianUsers?: Resolver<Array<ResolversTypes['GuardianResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroStats'] = ResolversParentTypes['HeroStats']> = {
  __resolveType: TypeResolveFn<'AmbassadorStats' | 'ContributorStats' | 'CreatorStats', ParentType, ContextType>;
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type LightningAddressConnectionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningAddressConnectionDetails'] = ResolversParentTypes['LightningAddressConnectionDetails']> = {
  lightningAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningAddressContributionLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningAddressContributionLimits'] = ResolversParentTypes['LightningAddressContributionLimits']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningAddressVerifyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningAddressVerifyResponse'] = ResolversParentTypes['LightningAddressVerifyResponse']> = {
  limits?: Resolver<Maybe<ResolversTypes['LightningAddressContributionLimits']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningPaymentDetails'] = ResolversParentTypes['LightningPaymentDetails']> = {
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lightningInvoiceStatus?: Resolver<ResolversTypes['LightningInvoiceStatus'], ParentType, ContextType>;
  zapRequest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningPaymentMethodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningPaymentMethods'] = ResolversParentTypes['LightningPaymentMethods']> = {
  bolt11?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningToRskSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningToRskSwapPaymentDetails'] = ResolversParentTypes['LightningToRskSwapPaymentDetails']> = {
  claimPublicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preimageHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refundPublicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LndConnectionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LndConnectionDetails'] = ResolversParentTypes['LndConnectionDetails']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  grpcPort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lndNodeType?: Resolver<ResolversTypes['LndNodeType'], ParentType, ContextType>;
  macaroon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tlsCertificate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type LndConnectionDetailsPrivateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LndConnectionDetailsPrivate'] = ResolversParentTypes['LndConnectionDetailsPrivate']> = {
  grpcPort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lndNodeType?: Resolver<ResolversTypes['LndNodeType'], ParentType, ContextType>;
  macaroon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pubkey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tlsCertificate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LndConnectionDetailsPublicResolvers<ContextType = any, ParentType extends ResolversParentTypes['LndConnectionDetailsPublic'] = ResolversParentTypes['LndConnectionDetailsPublic']> = {
  pubkey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MilestoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Milestone'] = ResolversParentTypes['Milestone']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ambassadorAdd?: Resolver<Maybe<ResolversTypes['Ambassador']>, ParentType, ContextType, RequireFields<MutationAmbassadorAddArgs, 'input'>>;
  ambassadorUpdate?: Resolver<Maybe<ResolversTypes['Ambassador']>, ParentType, ContextType, RequireFields<MutationAmbassadorUpdateArgs, 'input'>>;
  claimBadge?: Resolver<ResolversTypes['UserBadge'], ParentType, ContextType, RequireFields<MutationClaimBadgeArgs, 'input'>>;
  contributionCreate?: Resolver<ResolversTypes['ContributionMutationResponse'], ParentType, ContextType, RequireFields<MutationContributionCreateArgs, 'input'>>;
  contributionEmailUpdate?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType, Partial<MutationContributionEmailUpdateArgs>>;
  contributionPaymentsAdd?: Resolver<ResolversTypes['ContributionPaymentsAddResponse'], ParentType, ContextType, RequireFields<MutationContributionPaymentsAddArgs, 'input'>>;
  createEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationCreateEntryArgs, 'input'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'input'>>;
  creatorNotificationConfigurationValueUpdate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreatorNotificationConfigurationValueUpdateArgs, 'creatorNotificationConfigurationId' | 'value'>>;
  deleteEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationDeleteEntryArgs, 'id'>>;
  grantApply?: Resolver<ResolversTypes['GrantApplicant'], ParentType, ContextType, Partial<MutationGrantApplyArgs>>;
  orderStatusUpdate?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationOrderStatusUpdateArgs, 'input'>>;
  paymentCancel?: Resolver<ResolversTypes['PaymentCancelResponse'], ParentType, ContextType, RequireFields<MutationPaymentCancelArgs, 'input'>>;
  paymentConfirm?: Resolver<ResolversTypes['PaymentConfirmResponse'], ParentType, ContextType, RequireFields<MutationPaymentConfirmArgs, 'input'>>;
  paymentFail?: Resolver<ResolversTypes['PaymentFailResponse'], ParentType, ContextType, RequireFields<MutationPaymentFailArgs, 'input'>>;
  paymentInvoiceCancel?: Resolver<ResolversTypes['PaymentInvoiceCancelResponse'], ParentType, ContextType, RequireFields<MutationPaymentInvoiceCancelArgs, 'invoiceId'>>;
  paymentPend?: Resolver<ResolversTypes['PaymentPendResponse'], ParentType, ContextType, RequireFields<MutationPaymentPendArgs, 'input'>>;
  paymentRefundComplete?: Resolver<ResolversTypes['PaymentRefundCompleteResponse'], ParentType, ContextType, RequireFields<MutationPaymentRefundCompleteArgs, 'input'>>;
  paymentSwapClaimTxBroadcast?: Resolver<ResolversTypes['PaymentSwapClaimTxBroadcastResponse'], ParentType, ContextType, RequireFields<MutationPaymentSwapClaimTxBroadcastArgs, 'input'>>;
  paymentSwapClaimTxSet?: Resolver<ResolversTypes['PaymentSwapClaimTxSetResponse'], ParentType, ContextType, RequireFields<MutationPaymentSwapClaimTxSetArgs, 'input'>>;
  payoutCancel?: Resolver<ResolversTypes['PayoutResponse'], ParentType, ContextType, RequireFields<MutationPayoutCancelArgs, 'input'>>;
  payoutInitiate?: Resolver<ResolversTypes['PayoutInitiateResponse'], ParentType, ContextType, RequireFields<MutationPayoutInitiateArgs, 'input'>>;
  payoutRequest?: Resolver<ResolversTypes['PayoutRequestResponse'], ParentType, ContextType, RequireFields<MutationPayoutRequestArgs, 'input'>>;
  pledgeRefundCancel?: Resolver<ResolversTypes['PledgeRefundResponse'], ParentType, ContextType, RequireFields<MutationPledgeRefundCancelArgs, 'input'>>;
  pledgeRefundInitiate?: Resolver<ResolversTypes['PledgeRefundInitiateResponse'], ParentType, ContextType, RequireFields<MutationPledgeRefundInitiateArgs, 'input'>>;
  pledgeRefundRequest?: Resolver<ResolversTypes['PledgeRefundRequestResponse'], ParentType, ContextType, RequireFields<MutationPledgeRefundRequestArgs, 'input'>>;
  podcastKeysendContributionCreate?: Resolver<ResolversTypes['PodcastKeysendContributionCreateResponse'], ParentType, ContextType, RequireFields<MutationPodcastKeysendContributionCreateArgs, 'input'>>;
  postCreate?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationPostCreateArgs, 'input'>>;
  postDelete?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationPostDeleteArgs, 'id'>>;
  postPublish?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationPostPublishArgs, 'input'>>;
  postSendByEmail?: Resolver<ResolversTypes['PostSendByEmailResponse'], ParentType, ContextType, RequireFields<MutationPostSendByEmailArgs, 'input'>>;
  postUpdate?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationPostUpdateArgs, 'input'>>;
  projectAonGoalMarkCancelled?: Resolver<ResolversTypes['ProjectAonGoalStatusUpdateResponse'], ParentType, ContextType, RequireFields<MutationProjectAonGoalMarkCancelledArgs, 'input'>>;
  projectAonGoalMarkClaimed?: Resolver<ResolversTypes['ProjectAonGoalStatusUpdateResponse'], ParentType, ContextType, RequireFields<MutationProjectAonGoalMarkClaimedArgs, 'input'>>;
  projectAonGoalMarkRefunded?: Resolver<ResolversTypes['ProjectAonGoalStatusUpdateResponse'], ParentType, ContextType, RequireFields<MutationProjectAonGoalMarkRefundedArgs, 'input'>>;
  projectClose?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectCloseArgs, 'input'>>;
  projectCreate?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectCreateArgs, 'input'>>;
  projectDelete?: Resolver<ResolversTypes['ProjectDeleteResponse'], ParentType, ContextType, RequireFields<MutationProjectDeleteArgs, 'input'>>;
  projectFollow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProjectFollowArgs, 'input'>>;
  projectGoalCreate?: Resolver<Array<ResolversTypes['ProjectGoal']>, ParentType, ContextType, RequireFields<MutationProjectGoalCreateArgs, 'input'>>;
  projectGoalDelete?: Resolver<ResolversTypes['ProjectGoalDeleteResponse'], ParentType, ContextType, RequireFields<MutationProjectGoalDeleteArgs, 'projectGoalId'>>;
  projectGoalOrderingUpdate?: Resolver<Array<ResolversTypes['ProjectGoal']>, ParentType, ContextType, RequireFields<MutationProjectGoalOrderingUpdateArgs, 'input'>>;
  projectGoalUpdate?: Resolver<ResolversTypes['ProjectGoal'], ParentType, ContextType, RequireFields<MutationProjectGoalUpdateArgs, 'input'>>;
  projectPreLaunch?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectPreLaunchArgs, 'input'>>;
  projectPublish?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectPublishArgs, 'input'>>;
  projectPutInReview?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectPutInReviewArgs, 'input'>>;
  projectReviewRequest?: Resolver<ResolversTypes['ProjectReview'], ParentType, ContextType, RequireFields<MutationProjectReviewRequestArgs, 'input'>>;
  projectReviewSubmit?: Resolver<ResolversTypes['ProjectReview'], ParentType, ContextType, RequireFields<MutationProjectReviewSubmitArgs, 'input'>>;
  projectRewardCreate?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType, RequireFields<MutationProjectRewardCreateArgs, 'input'>>;
  projectRewardCurrencyUpdate?: Resolver<Array<ResolversTypes['ProjectReward']>, ParentType, ContextType, RequireFields<MutationProjectRewardCurrencyUpdateArgs, 'input'>>;
  projectRewardDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProjectRewardDeleteArgs, 'input'>>;
  projectRewardUpdate?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType, RequireFields<MutationProjectRewardUpdateArgs, 'input'>>;
  projectShippingConfigCreate?: Resolver<ResolversTypes['ShippingConfig'], ParentType, ContextType, RequireFields<MutationProjectShippingConfigCreateArgs, 'input'>>;
  projectShippingConfigUpdate?: Resolver<ResolversTypes['ShippingConfig'], ParentType, ContextType, RequireFields<MutationProjectShippingConfigUpdateArgs, 'input'>>;
  projectStatusUpdate?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectStatusUpdateArgs, 'input'>>;
  projectSubscriptionPlanCreate?: Resolver<ResolversTypes['ProjectSubscriptionPlan'], ParentType, ContextType, RequireFields<MutationProjectSubscriptionPlanCreateArgs, 'input'>>;
  projectSubscriptionPlanDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProjectSubscriptionPlanDeleteArgs, 'id'>>;
  projectSubscriptionPlanUpdate?: Resolver<ResolversTypes['ProjectSubscriptionPlan'], ParentType, ContextType, RequireFields<MutationProjectSubscriptionPlanUpdateArgs, 'input'>>;
  projectUnfollow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProjectUnfollowArgs, 'input'>>;
  projectUpdate?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationProjectUpdateArgs, 'input'>>;
  publishEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationPublishEntryArgs, 'id'>>;
  sendOTPByEmail?: Resolver<ResolversTypes['OTPResponse'], ParentType, ContextType, RequireFields<MutationSendOtpByEmailArgs, 'input'>>;
  shippingAddressCreate?: Resolver<ResolversTypes['ShippingAddress'], ParentType, ContextType, RequireFields<MutationShippingAddressCreateArgs, 'input'>>;
  tagCreate?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationTagCreateArgs, 'input'>>;
  unlinkExternalAccount?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUnlinkExternalAccountArgs, 'id'>>;
  updateEntry?: Resolver<ResolversTypes['Entry'], ParentType, ContextType, RequireFields<MutationUpdateEntryArgs, 'input'>>;
  updateProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateWalletState?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationUpdateWalletStateArgs, 'input'>>;
  userAccountKeysUpdate?: Resolver<ResolversTypes['UserAccountKeys'], ParentType, ContextType, RequireFields<MutationUserAccountKeysUpdateArgs, 'input'>>;
  userBadgeAward?: Resolver<ResolversTypes['UserBadge'], ParentType, ContextType, RequireFields<MutationUserBadgeAwardArgs, 'userBadgeId'>>;
  userDelete?: Resolver<ResolversTypes['DeleteUserResponse'], ParentType, ContextType>;
  userEmailUpdate?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUserEmailUpdateArgs, 'input'>>;
  userEmailVerify?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUserEmailVerifyArgs, 'input'>>;
  userNotificationConfigurationValueUpdate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUserNotificationConfigurationValueUpdateArgs, 'userNotificationConfigurationId' | 'value'>>;
  userSubscriptionCancel?: Resolver<ResolversTypes['UserSubscription'], ParentType, ContextType, RequireFields<MutationUserSubscriptionCancelArgs, 'id'>>;
  userSubscriptionUpdate?: Resolver<ResolversTypes['UserSubscription'], ParentType, ContextType, RequireFields<MutationUserSubscriptionUpdateArgs, 'input'>>;
  userTaxProfileUpdate?: Resolver<ResolversTypes['UserTaxProfile'], ParentType, ContextType, RequireFields<MutationUserTaxProfileUpdateArgs, 'input'>>;
  userVerificationTokenGenerate?: Resolver<ResolversTypes['UserVerificationTokenGenerateResponse'], ParentType, ContextType, RequireFields<MutationUserVerificationTokenGenerateArgs, 'input'>>;
  walletCreate?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationWalletCreateArgs, 'input'>>;
  walletDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationWalletDeleteArgs, 'id'>>;
  walletUpdate?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationWalletUpdateArgs, 'input'>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'DeleteUserResponse' | 'ProjectAonGoalStatusUpdateResponse' | 'ProjectDeleteResponse' | 'ProjectGoalDeleteResponse', ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type NwcConnectionDetailsPrivateResolvers<ContextType = any, ParentType extends ResolversParentTypes['NWCConnectionDetailsPrivate'] = ResolversParentTypes['NWCConnectionDetailsPrivate']> = {
  nwcUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NwcConnectionDetailsPublicResolvers<ContextType = any, ParentType extends ResolversParentTypes['NWCConnectionDetailsPublic'] = ResolversParentTypes['NWCConnectionDetailsPublic']> = {
  nwcUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NostrKeysResolvers<ContextType = any, ParentType extends ResolversParentTypes['NostrKeys'] = ResolversParentTypes['NostrKeys']> = {
  privateKey?: Resolver<Maybe<ResolversTypes['NostrPrivateKey']>, ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['NostrPublicKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NostrPrivateKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['NostrPrivateKey'] = ResolversParentTypes['NostrPrivateKey']> = {
  hex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nsec?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NostrPublicKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['NostrPublicKey'] = ResolversParentTypes['NostrPublicKey']> = {
  hex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  npub?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationConfiguration'] = ResolversParentTypes['NotificationConfiguration']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SettingValueType']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationSettings'] = ResolversParentTypes['NotificationSettings']> = {
  channel?: Resolver<Maybe<ResolversTypes['NotificationChannel']>, ParentType, ContextType>;
  configurations?: Resolver<Array<ResolversTypes['NotificationConfiguration']>, ParentType, ContextType>;
  isEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  notificationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OtpResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OTPResponse'] = ResolversParentTypes['OTPResponse']> = {
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  otpVerificationToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainPaymentMethodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnChainPaymentMethods'] = ResolversParentTypes['OnChainPaymentMethods']> = {
  boltzSwap?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  native?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainToLightningSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnChainToLightningSwapPaymentDetails'] = ResolversParentTypes['OnChainToLightningSwapPaymentDetails']> = {
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lightningInvoiceStatus?: Resolver<ResolversTypes['LightningInvoiceStatus'], ParentType, ContextType>;
  onChainAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onChainTxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainToRskSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnChainToRskSwapPaymentDetails'] = ResolversParentTypes['OnChainToRskSwapPaymentDetails']> = {
  onChainAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onChainTxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preimageHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  confirmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  contribution?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deliveredAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  itemsTotalInSats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  referenceCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['ShippingAddress']>, ParentType, ContextType>;
  shippingFeeTotalInSats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalInSats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  item?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitPriceInSats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersGetResponse'] = ResolversParentTypes['OrdersGetResponse']> = {
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['CursorPaginationResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersStatsBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersStatsBase'] = ResolversParentTypes['OrdersStatsBase']> = {
  projectRewards?: Resolver<ResolversTypes['ProjectRewardsStats'], ParentType, ContextType>;
  projectRewardsGroupedByProjectRewardId?: Resolver<Array<ResolversTypes['ProjectRewardsGroupedByRewardIdStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerOfResolvers<ContextType = any, ParentType extends ResolversParentTypes['OwnerOf'] = ResolversParentTypes['OwnerOf']> = {
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageViewCountGraphResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageViewCountGraph'] = ResolversParentTypes['PageViewCountGraph']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationCursorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationCursor'] = ResolversParentTypes['PaginationCursor']> = {
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  accountingAmountDue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  accountingAmountPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ambassadorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  baseAccountingAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  canceledAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  contributionPodcastKeysendId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  contributionUUID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  failureReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes['PaymentFee']>, ParentType, ContextType>;
  funder?: Resolver<ResolversTypes['Funder'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paidAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  paymentAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentCurrency?: Resolver<ResolversTypes['PaymentCurrency'], ParentType, ContextType>;
  paymentDetails?: Resolver<ResolversTypes['PaymentDetails'], ParentType, ContextType>;
  paymentType?: Resolver<ResolversTypes['PaymentType'], ParentType, ContextType>;
  payoutAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payoutCurrency?: Resolver<ResolversTypes['PayoutCurrency'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  userSubscriptionId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentCancelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentCancelResponse'] = ResolversParentTypes['PaymentCancelResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentConfirmResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentConfirmResponse'] = ResolversParentTypes['PaymentConfirmResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentDetails'] = ResolversParentTypes['PaymentDetails']> = {
  __resolveType: TypeResolveFn<'FiatToLightningSwapPaymentDetails' | 'LightningPaymentDetails' | 'LightningToRskSwapPaymentDetails' | 'OnChainToLightningSwapPaymentDetails' | 'OnChainToRskSwapPaymentDetails', ParentType, ContextType>;
};

export type PaymentFailResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentFailResponse'] = ResolversParentTypes['PaymentFailResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentFee'] = ResolversParentTypes['PaymentFee']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feeAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeCurrency?: Resolver<ResolversTypes['FeeCurrency'], ParentType, ContextType>;
  feePayer?: Resolver<Maybe<ResolversTypes['PaymentFeePayer']>, ParentType, ContextType>;
  feeType?: Resolver<Maybe<ResolversTypes['PaymentFeeType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentInvoiceCancelResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentInvoiceCancelResponse'] = ResolversParentTypes['PaymentInvoiceCancelResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentInvoiceSanctionCheckStatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentInvoiceSanctionCheckStatusResponse'] = ResolversParentTypes['PaymentInvoiceSanctionCheckStatusResponse']> = {
  status?: Resolver<ResolversTypes['PaymentInvoiceSanctionCheckStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethods'] = ResolversParentTypes['PaymentMethods']> = {
  bitcoin?: Resolver<ResolversTypes['BitcoinPaymentMethods'], ParentType, ContextType>;
  fiat?: Resolver<ResolversTypes['FiatPaymentMethods'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentPendResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentPendResponse'] = ResolversParentTypes['PaymentPendResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentRefund'] = ResolversParentTypes['PaymentRefund']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentRefundStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundCompleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentRefundCompleteResponse'] = ResolversParentTypes['PaymentRefundCompleteResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundsGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentRefundsGetResponse'] = ResolversParentTypes['PaymentRefundsGetResponse']> = {
  refunds?: Resolver<Array<ResolversTypes['PaymentRefund']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapClaimTxBroadcastResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSwapClaimTxBroadcastResponse'] = ResolversParentTypes['PaymentSwapClaimTxBroadcastResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapClaimTxSetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSwapClaimTxSetResponse'] = ResolversParentTypes['PaymentSwapClaimTxSetResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payout'] = ResolversParentTypes['Payout']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PayoutStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutGetResponse'] = ResolversParentTypes['PayoutGetResponse']> = {
  payout?: Resolver<ResolversTypes['Payout'], ParentType, ContextType>;
  payoutMetadata?: Resolver<ResolversTypes['PayoutMetadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutInitiateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutInitiateResponse'] = ResolversParentTypes['PayoutInitiateResponse']> = {
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>;
  payout?: Resolver<ResolversTypes['Payout'], ParentType, ContextType>;
  swap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutMetadata'] = ResolversParentTypes['PayoutMetadata']> = {
  aonContractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  swapContractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutRequestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutRequestResponse'] = ResolversParentTypes['PayoutRequestResponse']> = {
  payout?: Resolver<ResolversTypes['Payout'], ParentType, ContextType>;
  payoutMetadata?: Resolver<ResolversTypes['PayoutMetadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayoutResponse'] = ResolversParentTypes['PayoutResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefund'] = ResolversParentTypes['PledgeRefund']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PledgeRefundStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundGetResponse'] = ResolversParentTypes['PledgeRefundGetResponse']> = {
  refund?: Resolver<ResolversTypes['PledgeRefund'], ParentType, ContextType>;
  refundMetadata?: Resolver<ResolversTypes['PledgeRefundMetadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundInitiateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundInitiateResponse'] = ResolversParentTypes['PledgeRefundInitiateResponse']> = {
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['PledgeRefund'], ParentType, ContextType>;
  swap?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundMetadata'] = ResolversParentTypes['PledgeRefundMetadata']> = {
  aonContractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  swapContractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundRequestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundRequestResponse'] = ResolversParentTypes['PledgeRefundRequestResponse']> = {
  refund?: Resolver<ResolversTypes['PledgeRefund'], ParentType, ContextType>;
  refundMetadata?: Resolver<ResolversTypes['PledgeRefundMetadata'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundResponse'] = ResolversParentTypes['PledgeRefundResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundsGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeRefundsGetResponse'] = ResolversParentTypes['PledgeRefundsGetResponse']> = {
  refunds?: Resolver<Array<ResolversTypes['PledgeRefund']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PodcastKeysendContributionCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PodcastKeysendContributionCreateResponse'] = ResolversParentTypes['PodcastKeysendContributionCreateResponse']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  amountFunded?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fundersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  markdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postType?: Resolver<Maybe<ResolversTypes['PostType']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectGoals?: Resolver<ResolversTypes['ProjectGoals'], ParentType, ContextType>;
  projectRewards?: Resolver<Array<ResolversTypes['ProjectReward']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentByEmailAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PostStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPublishedSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPublishedSubscriptionResponse'] = ResolversParentTypes['PostPublishedSubscriptionResponse']> = {
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostSendByEmailResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSendByEmailResponse'] = ResolversParentTypes['PostSendByEmailResponse']> = {
  recipientCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileNotificationSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileNotificationSettings'] = ResolversParentTypes['ProfileNotificationSettings']> = {
  creatorSettings?: Resolver<Array<ResolversTypes['CreatorNotificationSettings']>, ParentType, ContextType>;
  userSettings?: Resolver<ResolversTypes['UserNotificationSettings'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  ambassadors?: Resolver<ResolversTypes['ProjectAmbassadorsConnection'], ParentType, ContextType>;
  aonContractAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aonGoalDurationInDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aonGoalInSats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aonGoalStatus?: Resolver<Maybe<ResolversTypes['ProjectAonGoalStatus']>, ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  balanceUsdCent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  canDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['ProjectCategory']>, ParentType, ContextType>;
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType>;
  contributionsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  defaultGoalId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entries?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType, Partial<ProjectEntriesArgs>>;
  entriesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  followersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  funders?: Resolver<Array<ResolversTypes['Funder']>, ParentType, ContextType>;
  fundersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fundingStrategy?: Resolver<Maybe<ResolversTypes['ProjectFundingStrategy']>, ParentType, ContextType>;
  goalsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grantApplications?: Resolver<Array<ResolversTypes['GrantApplicant']>, ParentType, ContextType, Partial<ProjectGrantApplicationsArgs>>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  keys?: Resolver<ResolversTypes['ProjectKeys'], ParentType, ContextType>;
  lastCreationStep?: Resolver<ResolversTypes['ProjectCreationStep'], ParentType, ContextType>;
  launchScheduledAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launchedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  milestones?: Resolver<Array<ResolversTypes['Milestone']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['Owner']>, ParentType, ContextType>;
  paidLaunch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paymentMethods?: Resolver<ResolversTypes['PaymentMethods'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<ProjectPostsArgs>>;
  preLaunchExpiresAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  preLaunchedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  promotionsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rejectionReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['ProjectReview']>, ParentType, ContextType>;
  rewardBuyersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rewardCurrency?: Resolver<Maybe<ResolversTypes['RewardCurrency']>, ParentType, ContextType>;
  rewards?: Resolver<Array<ResolversTypes['ProjectReward']>, ParentType, ContextType>;
  rewardsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sponsors?: Resolver<Array<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  statistics?: Resolver<Maybe<ResolversTypes['ProjectStatistics']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ProjectStatus']>, ParentType, ContextType>;
  subCategory?: Resolver<Maybe<ResolversTypes['ProjectSubCategory']>, ParentType, ContextType>;
  subscribersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  thumbnailImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProjectType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  wallets?: Resolver<Array<ResolversTypes['Wallet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectActivatedSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectActivatedSubscriptionResponse'] = ResolversParentTypes['ProjectActivatedSubscriptionResponse']> = {
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectActivitiesCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectActivitiesCount'] = ResolversParentTypes['ProjectActivitiesCount']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectAmbassadorEdge'] = ResolversParentTypes['ProjectAmbassadorEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Ambassador'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectAmbassadorsConnection'] = ResolversParentTypes['ProjectAmbassadorsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectAmbassadorEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['ProjectAmbassadorsStats'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorsStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectAmbassadorsStats'] = ResolversParentTypes['ProjectAmbassadorsStats']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsSum?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAonGoalStatusUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectAonGoalStatusUpdateResponse'] = ResolversParentTypes['ProjectAonGoalStatusUpdateResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectAonGoalStatus'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsGroupedByMethodStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectContributionsGroupedByMethodStats'] = ResolversParentTypes['ProjectContributionsGroupedByMethodStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectContributionsStats'] = ResolversParentTypes['ProjectContributionsStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  graph?: Resolver<Array<ResolversTypes['ProjectContributionsStatsGraphData']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectContributionsStatsBase'] = ResolversParentTypes['ProjectContributionsStatsBase']> = {
  contributions?: Resolver<ResolversTypes['ProjectContributionsStats'], ParentType, ContextType>;
  contributionsGroupedByMethod?: Resolver<Array<ResolversTypes['ProjectContributionsGroupedByMethodStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsGraphDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectContributionsStatsGraphData'] = ResolversParentTypes['ProjectContributionsStatsGraphData']> = {
  graphData?: Resolver<Maybe<Array<ResolversTypes['ProjectContributionsStatsGraphDataAmount']>>, ParentType, ContextType>;
  statType?: Resolver<ResolversTypes['ProjectContributionsStatsGraphDataStatType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsGraphDataAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectContributionsStatsGraphDataAmount'] = ResolversParentTypes['ProjectContributionsStatsGraphDataAmount']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCountriesGetResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCountriesGetResult'] = ResolversParentTypes['ProjectCountriesGetResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectDeleteResponse'] = ResolversParentTypes['ProjectDeleteResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFollowerStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectFollowerStats'] = ResolversParentTypes['ProjectFollowerStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFunderRewardStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectFunderRewardStats'] = ResolversParentTypes['ProjectFunderRewardStats']> = {
  quantityGraph?: Resolver<Maybe<Array<Maybe<ResolversTypes['FunderRewardGraphSum']>>>, ParentType, ContextType>;
  quantitySum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFunderStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectFunderStats'] = ResolversParentTypes['ProjectFunderStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectGoal'] = ResolversParentTypes['ProjectGoal']> = {
  amountContributed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['ProjectGoalCurrency'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emojiUnifiedCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasReceivedContribution?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectGoalStatus'], ParentType, ContextType>;
  targetAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectGoalDeleteResponse'] = ResolversParentTypes['ProjectGoalDeleteResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectGoals'] = ResolversParentTypes['ProjectGoals']> = {
  completed?: Resolver<Array<ResolversTypes['ProjectGoal']>, ParentType, ContextType>;
  inProgress?: Resolver<Array<ResolversTypes['ProjectGoal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectKeysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectKeys'] = ResolversParentTypes['ProjectKeys']> = {
  nostrKeys?: Resolver<ResolversTypes['NostrKeys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLeaderboardAmbassadorsRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLeaderboardAmbassadorsRow'] = ResolversParentTypes['ProjectLeaderboardAmbassadorsRow']> = {
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLeaderboardContributorsRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLeaderboardContributorsRow'] = ResolversParentTypes['ProjectLeaderboardContributorsRow']> = {
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  funderId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectMostFunded'] = ResolversParentTypes['ProjectMostFunded']> = {
  contributionsSummary?: Resolver<Maybe<ResolversTypes['ContributionsSummary']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedByCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectMostFundedByCategory'] = ResolversParentTypes['ProjectMostFundedByCategory']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['ProjectMostFunded']>, ParentType, ContextType>;
  subCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedByTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectMostFundedByTag'] = ResolversParentTypes['ProjectMostFundedByTag']> = {
  projects?: Resolver<Array<ResolversTypes['ProjectMostFunded']>, ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRefundablePaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRefundablePayment'] = ResolversParentTypes['ProjectRefundablePayment']> = {
  payments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRegionsGetResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRegionsGetResult'] = ResolversParentTypes['ProjectRegionsGetResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectReview'] = ResolversParentTypes['ProjectReview']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rejectionReasons?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  reviewNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectReviewStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectReward'] = ResolversParentTypes['ProjectReward']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  estimatedAvailabilityDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  estimatedDeliveryInWeeks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  isAddon?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxClaimable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  preOrder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  privateCommentPrompts?: Resolver<Array<ResolversTypes['PrivateCommentPrompt']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  rewardCurrency?: Resolver<ResolversTypes['RewardCurrency'], ParentType, ContextType>;
  sentByEmailAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  shippingConfig?: Resolver<Maybe<ResolversTypes['ShippingConfig']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingMonthlyGetRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardTrendingMonthlyGetRow'] = ResolversParentTypes['ProjectRewardTrendingMonthlyGetRow']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectReward?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingQuarterlyGetRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardTrendingQuarterlyGetRow'] = ResolversParentTypes['ProjectRewardTrendingQuarterlyGetRow']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectReward?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingWeeklyGetRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardTrendingWeeklyGetRow'] = ResolversParentTypes['ProjectRewardTrendingWeeklyGetRow']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectReward?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsGroupedByRewardIdStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardsGroupedByRewardIdStats'] = ResolversParentTypes['ProjectRewardsGroupedByRewardIdStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectReward?: Resolver<ResolversTypes['ProjectRewardsGroupedByRewardIdStatsProjectReward'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsGroupedByRewardIdStatsProjectRewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardsGroupedByRewardIdStatsProjectReward'] = ResolversParentTypes['ProjectRewardsGroupedByRewardIdStatsProjectReward']> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxClaimable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectRewardsStats'] = ResolversParentTypes['ProjectRewardsStats']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectShippingRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectShippingRate'] = ResolversParentTypes['ProjectShippingRate']> = {
  baseRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  incrementRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sameAsDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectStatistics'] = ResolversParentTypes['ProjectStatistics']> = {
  totalPageviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVisitors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectStats'] = ResolversParentTypes['ProjectStats']> = {
  current?: Resolver<Maybe<ResolversTypes['ProjectStatsBase']>, ParentType, ContextType>;
  datetimeRange?: Resolver<ResolversTypes['DatetimeRange'], ParentType, ContextType>;
  prevTimeRange?: Resolver<Maybe<ResolversTypes['ProjectStatsBase']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatsBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectStatsBase'] = ResolversParentTypes['ProjectStatsBase']> = {
  projectContributionsStats?: Resolver<Maybe<ResolversTypes['ProjectContributionsStatsBase']>, ParentType, ContextType>;
  projectFollowers?: Resolver<Maybe<ResolversTypes['ProjectFollowerStats']>, ParentType, ContextType>;
  projectFunderRewards?: Resolver<Maybe<ResolversTypes['ProjectFunderRewardStats']>, ParentType, ContextType>;
  projectFunders?: Resolver<Maybe<ResolversTypes['ProjectFunderStats']>, ParentType, ContextType>;
  projectViews?: Resolver<Maybe<ResolversTypes['ProjectViewStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectSubscriptionPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectSubscriptionPlan'] = ResolversParentTypes['ProjectSubscriptionPlan']> = {
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['SubscriptionCurrencyType'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['UserSubscriptionInterval'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectViewBaseStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectViewBaseStats'] = ResolversParentTypes['ProjectViewBaseStats']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectViewStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectViewStats'] = ResolversParentTypes['ProjectViewStats']> = {
  countries?: Resolver<Array<ResolversTypes['ProjectViewBaseStats']>, ParentType, ContextType>;
  referrers?: Resolver<Array<ResolversTypes['ProjectViewBaseStats']>, ParentType, ContextType>;
  regions?: Resolver<Array<ResolversTypes['ProjectViewBaseStats']>, ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visitorGraph?: Resolver<Array<Maybe<ResolversTypes['PageViewCountGraph']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectsResponse'] = ResolversParentTypes['ProjectsResponse']> = {
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['ProjectsSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectsSummary'] = ResolversParentTypes['ProjectsSummary']> = {
  fundedTotal?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  fundersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  projectsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activitiesCountGroupedByProject?: Resolver<Array<ResolversTypes['ProjectActivitiesCount']>, ParentType, ContextType, RequireFields<QueryActivitiesCountGroupedByProjectArgs, 'input'>>;
  activitiesGet?: Resolver<ResolversTypes['ActivitiesGetResponse'], ParentType, ContextType, Partial<QueryActivitiesGetArgs>>;
  badges?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType>;
  contribution?: Resolver<ResolversTypes['Contribution'], ParentType, ContextType, Partial<QueryContributionArgs>>;
  contributionsGet?: Resolver<Maybe<ResolversTypes['ContributionsGetResponse']>, ParentType, ContextType, Partial<QueryContributionsGetArgs>>;
  contributor?: Resolver<ResolversTypes['Funder'], ParentType, ContextType, RequireFields<QueryContributorArgs, 'input'>>;
  currencyQuoteGet?: Resolver<ResolversTypes['CurrencyQuoteGetResponse'], ParentType, ContextType, RequireFields<QueryCurrencyQuoteGetArgs, 'input'>>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, RequireFields<QueryEntryArgs, 'id'>>;
  fundersGet?: Resolver<Array<ResolversTypes['Funder']>, ParentType, ContextType, RequireFields<QueryFundersGetArgs, 'input'>>;
  getDashboardFunders?: Resolver<Array<ResolversTypes['Funder']>, ParentType, ContextType, Partial<QueryGetDashboardFundersArgs>>;
  getEntries?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType, Partial<QueryGetEntriesArgs>>;
  getProjectPubkey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetProjectPubkeyArgs, 'projectId'>>;
  getProjectReward?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType, RequireFields<QueryGetProjectRewardArgs, 'id'>>;
  getSignedUploadUrl?: Resolver<ResolversTypes['SignedUploadUrl'], ParentType, ContextType, RequireFields<QueryGetSignedUploadUrlArgs, 'input'>>;
  getWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<QueryGetWalletArgs, 'id'>>;
  geyserPromotionsContributionStats?: Resolver<ResolversTypes['GeyserPromotionsContributionStats'], ParentType, ContextType, RequireFields<QueryGeyserPromotionsContributionStatsArgs, 'input'>>;
  grant?: Resolver<ResolversTypes['Grant'], ParentType, ContextType, RequireFields<QueryGrantArgs, 'input'>>;
  grantStatistics?: Resolver<ResolversTypes['GrantStatistics'], ParentType, ContextType>;
  grants?: Resolver<Array<ResolversTypes['Grant']>, ParentType, ContextType>;
  guardianUsersGet?: Resolver<Maybe<ResolversTypes['GuardianUsersGetResponse']>, ParentType, ContextType, RequireFields<QueryGuardianUsersGetArgs, 'input'>>;
  leaderboardGlobalAmbassadorsGet?: Resolver<Array<ResolversTypes['GlobalAmbassadorLeaderboardRow']>, ParentType, ContextType, RequireFields<QueryLeaderboardGlobalAmbassadorsGetArgs, 'input'>>;
  leaderboardGlobalContributorsGet?: Resolver<Array<ResolversTypes['GlobalContributorLeaderboardRow']>, ParentType, ContextType, RequireFields<QueryLeaderboardGlobalContributorsGetArgs, 'input'>>;
  leaderboardGlobalCreatorsGet?: Resolver<Array<ResolversTypes['GlobalCreatorLeaderboardRow']>, ParentType, ContextType, RequireFields<QueryLeaderboardGlobalCreatorsGetArgs, 'input'>>;
  leaderboardGlobalProjectsGet?: Resolver<Array<ResolversTypes['GlobalProjectLeaderboardRow']>, ParentType, ContextType, RequireFields<QueryLeaderboardGlobalProjectsGetArgs, 'input'>>;
  lightningAddressVerify?: Resolver<ResolversTypes['LightningAddressVerifyResponse'], ParentType, ContextType, Partial<QueryLightningAddressVerifyArgs>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  orderGet?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderGetArgs, 'where'>>;
  ordersGet?: Resolver<Maybe<ResolversTypes['OrdersGetResponse']>, ParentType, ContextType, RequireFields<QueryOrdersGetArgs, 'input'>>;
  ordersStatsGet?: Resolver<ResolversTypes['OrdersStatsBase'], ParentType, ContextType, RequireFields<QueryOrdersStatsGetArgs, 'input'>>;
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<QueryPaymentArgs, 'input'>>;
  paymentInvoiceSanctionCheckStatusGet?: Resolver<ResolversTypes['PaymentInvoiceSanctionCheckStatusResponse'], ParentType, ContextType, RequireFields<QueryPaymentInvoiceSanctionCheckStatusGetArgs, 'input'>>;
  paymentRefundsGet?: Resolver<Maybe<ResolversTypes['PaymentRefundsGetResponse']>, ParentType, ContextType>;
  paymentsRefundableGet?: Resolver<ResolversTypes['RefundablePaymentsGetResponse'], ParentType, ContextType>;
  payoutGet?: Resolver<Maybe<ResolversTypes['PayoutGetResponse']>, ParentType, ContextType, RequireFields<QueryPayoutGetArgs, 'input'>>;
  pledgeRefundGet?: Resolver<Maybe<ResolversTypes['PledgeRefundGetResponse']>, ParentType, ContextType, RequireFields<QueryPledgeRefundGetArgs, 'input'>>;
  pledgeRefundsGet?: Resolver<Maybe<ResolversTypes['PledgeRefundsGetResponse']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  postEmailSegmentSizeGet?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryPostEmailSegmentSizeGetArgs, 'input'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  projectCountriesGet?: Resolver<Array<ResolversTypes['ProjectCountriesGetResult']>, ParentType, ContextType, Partial<QueryProjectCountriesGetArgs>>;
  projectGet?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectGetArgs, 'where'>>;
  projectGoal?: Resolver<ResolversTypes['ProjectGoal'], ParentType, ContextType, RequireFields<QueryProjectGoalArgs, 'projectGoalId'>>;
  projectGoals?: Resolver<ResolversTypes['ProjectGoals'], ParentType, ContextType, RequireFields<QueryProjectGoalsArgs, 'input'>>;
  projectLeaderboardAmbassadorsGet?: Resolver<Array<ResolversTypes['ProjectLeaderboardAmbassadorsRow']>, ParentType, ContextType, RequireFields<QueryProjectLeaderboardAmbassadorsGetArgs, 'input'>>;
  projectLeaderboardContributorsGet?: Resolver<Array<ResolversTypes['ProjectLeaderboardContributorsRow']>, ParentType, ContextType, RequireFields<QueryProjectLeaderboardContributorsGetArgs, 'input'>>;
  projectNotificationSettingsGet?: Resolver<ResolversTypes['CreatorNotificationSettings'], ParentType, ContextType, RequireFields<QueryProjectNotificationSettingsGetArgs, 'projectId'>>;
  projectRegionsGet?: Resolver<Array<ResolversTypes['ProjectRegionsGetResult']>, ParentType, ContextType>;
  projectRewardCategoriesGet?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  projectRewardGet?: Resolver<ResolversTypes['ProjectReward'], ParentType, ContextType, RequireFields<QueryProjectRewardGetArgs, 'input'>>;
  projectRewardsGet?: Resolver<Array<ResolversTypes['ProjectReward']>, ParentType, ContextType, RequireFields<QueryProjectRewardsGetArgs, 'input'>>;
  projectRewardsTrendingMonthlyGet?: Resolver<Array<ResolversTypes['ProjectRewardTrendingMonthlyGetRow']>, ParentType, ContextType>;
  projectRewardsTrendingQuarterlyGet?: Resolver<Array<ResolversTypes['ProjectRewardTrendingQuarterlyGetRow']>, ParentType, ContextType>;
  projectRewardsTrendingWeeklyGet?: Resolver<Array<ResolversTypes['ProjectRewardTrendingWeeklyGetRow']>, ParentType, ContextType>;
  projectShippingConfigsGet?: Resolver<Array<ResolversTypes['ShippingConfig']>, ParentType, ContextType, RequireFields<QueryProjectShippingConfigsGetArgs, 'input'>>;
  projectStatsGet?: Resolver<ResolversTypes['ProjectStats'], ParentType, ContextType, RequireFields<QueryProjectStatsGetArgs, 'input'>>;
  projectSubscriptionPlan?: Resolver<Maybe<ResolversTypes['ProjectSubscriptionPlan']>, ParentType, ContextType, RequireFields<QueryProjectSubscriptionPlanArgs, 'id'>>;
  projectSubscriptionPlans?: Resolver<Array<ResolversTypes['ProjectSubscriptionPlan']>, ParentType, ContextType, RequireFields<QueryProjectSubscriptionPlansArgs, 'input'>>;
  projectsGet?: Resolver<ResolversTypes['ProjectsResponse'], ParentType, ContextType, Partial<QueryProjectsGetArgs>>;
  projectsMostFundedByCategory?: Resolver<Array<ResolversTypes['ProjectMostFundedByCategory']>, ParentType, ContextType, RequireFields<QueryProjectsMostFundedByCategoryArgs, 'input'>>;
  projectsMostFundedByTag?: Resolver<Array<ResolversTypes['ProjectMostFundedByTag']>, ParentType, ContextType, RequireFields<QueryProjectsMostFundedByTagArgs, 'input'>>;
  projectsSummary?: Resolver<ResolversTypes['ProjectsSummary'], ParentType, ContextType>;
  shippingAddressesGet?: Resolver<Array<ResolversTypes['ShippingAddress']>, ParentType, ContextType, RequireFields<QueryShippingAddressesGetArgs, 'input'>>;
  statusCheck?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tagsGet?: Resolver<Array<ResolversTypes['TagsGetResult']>, ParentType, ContextType>;
  tagsMostFundedGet?: Resolver<Array<ResolversTypes['TagsMostFundedGetResult']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  userBadge?: Resolver<Maybe<ResolversTypes['UserBadge']>, ParentType, ContextType, RequireFields<QueryUserBadgeArgs, 'userBadgeId'>>;
  userBadges?: Resolver<Array<ResolversTypes['UserBadge']>, ParentType, ContextType, RequireFields<QueryUserBadgesArgs, 'input'>>;
  userEmailIsAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryUserEmailIsAvailableArgs, 'email'>>;
  userEmailIsValid?: Resolver<ResolversTypes['UserEmailIsValidResponse'], ParentType, ContextType, RequireFields<QueryUserEmailIsValidArgs, 'email'>>;
  userIpCountry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userNotificationSettingsGet?: Resolver<ResolversTypes['ProfileNotificationSettings'], ParentType, ContextType, RequireFields<QueryUserNotificationSettingsGetArgs, 'userId'>>;
  userSubscription?: Resolver<Maybe<ResolversTypes['UserSubscription']>, ParentType, ContextType, RequireFields<QueryUserSubscriptionArgs, 'id'>>;
  userSubscriptions?: Resolver<Array<ResolversTypes['UserSubscription']>, ParentType, ContextType, RequireFields<QueryUserSubscriptionsArgs, 'input'>>;
};

export type RefundablePaymentsGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefundablePaymentsGetResponse'] = ResolversParentTypes['RefundablePaymentsGetResponse']> = {
  refundablePayments?: Resolver<Array<ResolversTypes['ProjectRefundablePayment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskKeyPairResolvers<ContextType = any, ParentType extends ResolversParentTypes['RskKeyPair'] = ResolversParentTypes['RskKeyPair']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  derivationPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskToLightningSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RskToLightningSwapPaymentDetails'] = ResolversParentTypes['RskToLightningSwapPaymentDetails']> = {
  lightningInvoiceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lightningInvoiceStatus?: Resolver<ResolversTypes['LightningInvoiceStatus'], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskToOnChainSwapPaymentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RskToOnChainSwapPaymentDetails'] = ResolversParentTypes['RskToOnChainSwapPaymentDetails']> = {
  onChainAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onChainTxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preimageHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingAddress'] = ResolversParentTypes['ShippingAddress']> = {
  addressLines?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingConfig'] = ResolversParentTypes['ShippingConfig']> = {
  globalShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippingRates?: Resolver<Maybe<Array<ResolversTypes['ProjectShippingRate']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProjectShippingConfigType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignedUploadUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignedUploadUrl'] = ResolversParentTypes['SignedUploadUrl']> = {
  distributionUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uploadUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourceResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SourceResource'] = ResolversParentTypes['SourceResource']> = {
  __resolveType: TypeResolveFn<'Activity' | 'Entry' | 'Project', ParentType, ContextType>;
};

export type SponsorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sponsor'] = ResolversParentTypes['Sponsor']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SponsorStatus'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatsInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatsInterface'] = ResolversParentTypes['StatsInterface']> = {
  __resolveType: TypeResolveFn<'ProjectContributionsGroupedByMethodStats' | 'ProjectContributionsStats', ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
  activityCreated?: SubscriptionResolver<ResolversTypes['Activity'], "activityCreated", ParentType, ContextType, Partial<SubscriptionActivityCreatedArgs>>;
  contributionStatusUpdated?: SubscriptionResolver<ResolversTypes['ContributionStatusUpdatedSubscriptionResponse'], "contributionStatusUpdated", ParentType, ContextType, Partial<SubscriptionContributionStatusUpdatedArgs>>;
  entryPublished?: SubscriptionResolver<ResolversTypes['EntryPublishedSubscriptionResponse'], "entryPublished", ParentType, ContextType>;
  paymentStatusUpdated?: SubscriptionResolver<ResolversTypes['Payment'], "paymentStatusUpdated", ParentType, ContextType, RequireFields<SubscriptionPaymentStatusUpdatedArgs, 'input'>>;
  postPublished?: SubscriptionResolver<ResolversTypes['PostPublishedSubscriptionResponse'], "postPublished", ParentType, ContextType>;
  projectActivated?: SubscriptionResolver<ResolversTypes['ProjectActivatedSubscriptionResponse'], "projectActivated", ParentType, ContextType>;
};

export type SwapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = {
  json?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsGetResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsGetResult'] = ResolversParentTypes['TagsGetResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsMostFundedGetResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsMostFundedGetResult'] = ResolversParentTypes['TagsMostFundedGetResult']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accountKeys?: Resolver<Maybe<ResolversTypes['UserAccountKeys']>, ParentType, ContextType>;
  badges?: Resolver<Array<ResolversTypes['UserBadge']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complianceDetails?: Resolver<ResolversTypes['UserComplianceDetails'], ParentType, ContextType>;
  contributions?: Resolver<Array<ResolversTypes['Contribution']>, ParentType, ContextType, Partial<UserContributionsArgs>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerifiedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entityType?: Resolver<Maybe<ResolversTypes['UserEntityType']>, ParentType, ContextType>;
  entries?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType, Partial<UserEntriesArgs>>;
  externalAccounts?: Resolver<Array<ResolversTypes['ExternalAccount']>, ParentType, ContextType>;
  guardianType?: Resolver<Maybe<ResolversTypes['GuardianType']>, ParentType, ContextType>;
  hasSocialAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heroStats?: Resolver<ResolversTypes['UserHeroStats'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  ownerOf?: Resolver<Array<ResolversTypes['OwnerOf']>, ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<UserPostsArgs>>;
  projectContributions?: Resolver<Array<ResolversTypes['UserProjectContribution']>, ParentType, ContextType>;
  projectFollows?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<UserProjectsArgs>>;
  ranking?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  taxProfile?: Resolver<Maybe<ResolversTypes['UserTaxProfile']>, ParentType, ContextType>;
  taxProfileId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccountKeysResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccountKeys'] = ResolversParentTypes['UserAccountKeys']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  encryptedSeed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rskKeyPair?: Resolver<ResolversTypes['RskKeyPair'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserBadgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserBadge'] = ResolversParentTypes['UserBadge']> = {
  badge?: Resolver<ResolversTypes['Badge'], ParentType, ContextType>;
  badgeAwardEventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributionId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserBadgeStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserComplianceDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserComplianceDetails'] = ResolversParentTypes['UserComplianceDetails']> = {
  contributionLimits?: Resolver<ResolversTypes['UserContributionLimits'], ParentType, ContextType>;
  currentVerificationLevel?: Resolver<ResolversTypes['UserVerificationLevelStatus'], ParentType, ContextType>;
  verificationLevels?: Resolver<Array<ResolversTypes['UserVerificationLevelStatus']>, ParentType, ContextType>;
  verifiedDetails?: Resolver<ResolversTypes['UserVerifiedDetails'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContributionLimitResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserContributionLimit'] = ResolversParentTypes['UserContributionLimit']> = {
  limit?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nextReset?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  reached?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  remaining?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContributionLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserContributionLimits'] = ResolversParentTypes['UserContributionLimits']> = {
  monthly?: Resolver<ResolversTypes['UserContributionLimit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEmailIsValidResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEmailIsValidResponse'] = ResolversParentTypes['UserEmailIsValidResponse']> = {
  isAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDeliverable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserHeroStats'] = ResolversParentTypes['UserHeroStats']> = {
  ambassadorStats?: Resolver<ResolversTypes['AmbassadorStats'], ParentType, ContextType>;
  contributorStats?: Resolver<ResolversTypes['ContributorStats'], ParentType, ContextType>;
  creatorStats?: Resolver<ResolversTypes['CreatorStats'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserNotificationSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserNotificationSettings'] = ResolversParentTypes['UserNotificationSettings']> = {
  notificationSettings?: Resolver<Array<ResolversTypes['NotificationSettings']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProjectContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProjectContribution'] = ResolversParentTypes['UserProjectContribution']> = {
  funder?: Resolver<Maybe<ResolversTypes['Funder']>, ParentType, ContextType>;
  isAmbassador?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFunder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSponsor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSubscription'] = ResolversParentTypes['UserSubscription']> = {
  canceledAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nextBillingDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  projectSubscriptionPlan?: Resolver<ResolversTypes['ProjectSubscriptionPlan'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserSubscriptionStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTaxProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserTaxProfile'] = ResolversParentTypes['UserTaxProfile']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  legalEntityType?: Resolver<ResolversTypes['LegalEntityType'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerificationLevelStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVerificationLevelStatus'] = ResolversParentTypes['UserVerificationLevelStatus']> = {
  level?: Resolver<ResolversTypes['UserVerificationLevel'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserVerificationStatus'], ParentType, ContextType>;
  verifiedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerificationTokenGenerateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVerificationTokenGenerateResponse'] = ResolversParentTypes['UserVerificationTokenGenerateResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verificationLevel?: Resolver<ResolversTypes['UserVerificationLevel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerifiedDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVerifiedDetails'] = ResolversParentTypes['UserVerifiedDetails']> = {
  email?: Resolver<Maybe<ResolversTypes['VerificationResult']>, ParentType, ContextType>;
  identity?: Resolver<Maybe<ResolversTypes['VerificationResult']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['VerificationResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationResult'] = ResolversParentTypes['VerificationResult']> = {
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  verifiedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  connectionDetails?: Resolver<ResolversTypes['ConnectionDetails'], ParentType, ContextType>;
  feePercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  limits?: Resolver<Maybe<ResolversTypes['WalletLimits']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['WalletState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletContributionLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletContributionLimits'] = ResolversParentTypes['WalletContributionLimits']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offChain?: Resolver<Maybe<ResolversTypes['WalletOffChainContributionLimits']>, ParentType, ContextType>;
  onChain?: Resolver<Maybe<ResolversTypes['WalletOnChainContributionLimits']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletLimits'] = ResolversParentTypes['WalletLimits']> = {
  contribution?: Resolver<Maybe<ResolversTypes['WalletContributionLimits']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletOffChainContributionLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletOffChainContributionLimits'] = ResolversParentTypes['WalletOffChainContributionLimits']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletOnChainContributionLimitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletOnChainContributionLimits'] = ResolversParentTypes['WalletOnChainContributionLimits']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletState'] = ResolversParentTypes['WalletState']> = {
  status?: Resolver<ResolversTypes['WalletStatus'], ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['WalletStatusCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ActivitiesGetResponse?: ActivitiesGetResponseResolvers<ContextType>;
  Activity?: ActivityResolvers<ContextType>;
  ActivityResource?: ActivityResourceResolvers<ContextType>;
  Ambassador?: AmbassadorResolvers<ContextType>;
  AmbassadorStats?: AmbassadorStatsResolvers<ContextType>;
  AmountSummary?: AmountSummaryResolvers<ContextType>;
  Badge?: BadgeResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  BitcoinPaymentMethods?: BitcoinPaymentMethodsResolvers<ContextType>;
  BitcoinQuote?: BitcoinQuoteResolvers<ContextType>;
  BoardVoteGrant?: BoardVoteGrantResolvers<ContextType>;
  CommunityVoteGrant?: CommunityVoteGrantResolvers<ContextType>;
  CompetitionVoteGrantVoteSummary?: CompetitionVoteGrantVoteSummaryResolvers<ContextType>;
  ConnectionDetails?: ConnectionDetailsResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  ContributionFiatPaymentDetails?: ContributionFiatPaymentDetailsResolvers<ContextType>;
  ContributionFiatSwapPaymentDetails?: ContributionFiatSwapPaymentDetailsResolvers<ContextType>;
  ContributionLightningPaymentDetails?: ContributionLightningPaymentDetailsResolvers<ContextType>;
  ContributionLightningToRskSwapPaymentDetails?: ContributionLightningToRskSwapPaymentDetailsResolvers<ContextType>;
  ContributionMutationResponse?: ContributionMutationResponseResolvers<ContextType>;
  ContributionOnChainSwapPaymentDetails?: ContributionOnChainSwapPaymentDetailsResolvers<ContextType>;
  ContributionOnChainToRskSwapPaymentDetails?: ContributionOnChainToRskSwapPaymentDetailsResolvers<ContextType>;
  ContributionPaymentsAddResponse?: ContributionPaymentsAddResponseResolvers<ContextType>;
  ContributionPaymentsDetails?: ContributionPaymentsDetailsResolvers<ContextType>;
  ContributionStatusUpdatedSubscriptionResponse?: ContributionStatusUpdatedSubscriptionResponseResolvers<ContextType>;
  ContributionsGetResponse?: ContributionsGetResponseResolvers<ContextType>;
  ContributionsSummary?: ContributionsSummaryResolvers<ContextType>;
  ContributorContributionsSummary?: ContributorContributionsSummaryResolvers<ContextType>;
  ContributorStats?: ContributorStatsResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreatorNotificationSettings?: CreatorNotificationSettingsResolvers<ContextType>;
  CreatorNotificationSettingsProject?: CreatorNotificationSettingsProjectResolvers<ContextType>;
  CreatorStats?: CreatorStatsResolvers<ContextType>;
  CurrencyQuoteGetResponse?: CurrencyQuoteGetResponseResolvers<ContextType>;
  CursorPaginationResponse?: CursorPaginationResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DatetimeRange?: DatetimeRangeResolvers<ContextType>;
  DeleteUserResponse?: DeleteUserResponseResolvers<ContextType>;
  Entry?: EntryResolvers<ContextType>;
  EntryPublishedSubscriptionResponse?: EntryPublishedSubscriptionResponseResolvers<ContextType>;
  ExternalAccount?: ExternalAccountResolvers<ContextType>;
  FiatPaymentMethods?: FiatPaymentMethodsResolvers<ContextType>;
  FiatToLightningSwapPaymentDetails?: FiatToLightningSwapPaymentDetailsResolvers<ContextType>;
  Funder?: FunderResolvers<ContextType>;
  FunderRewardGraphSum?: FunderRewardGraphSumResolvers<ContextType>;
  GeyserPromotionsContributionStats?: GeyserPromotionsContributionStatsResolvers<ContextType>;
  GlobalAmbassadorLeaderboardRow?: GlobalAmbassadorLeaderboardRowResolvers<ContextType>;
  GlobalContributorLeaderboardRow?: GlobalContributorLeaderboardRowResolvers<ContextType>;
  GlobalCreatorLeaderboardRow?: GlobalCreatorLeaderboardRowResolvers<ContextType>;
  GlobalProjectLeaderboardRow?: GlobalProjectLeaderboardRowResolvers<ContextType>;
  Grant?: GrantResolvers<ContextType>;
  GrantApplicant?: GrantApplicantResolvers<ContextType>;
  GrantApplicantContributor?: GrantApplicantContributorResolvers<ContextType>;
  GrantApplicantFunding?: GrantApplicantFundingResolvers<ContextType>;
  GrantBoardMember?: GrantBoardMemberResolvers<ContextType>;
  GrantGuardiansFunding?: GrantGuardiansFundingResolvers<ContextType>;
  GrantStatistics?: GrantStatisticsResolvers<ContextType>;
  GrantStatisticsApplicant?: GrantStatisticsApplicantResolvers<ContextType>;
  GrantStatisticsGrant?: GrantStatisticsGrantResolvers<ContextType>;
  GrantStatus?: GrantStatusResolvers<ContextType>;
  GraphData?: GraphDataResolvers<ContextType>;
  GraphSumData?: GraphSumDataResolvers<ContextType>;
  GuardianResult?: GuardianResultResolvers<ContextType>;
  GuardianUser?: GuardianUserResolvers<ContextType>;
  GuardianUsersGetResponse?: GuardianUsersGetResponseResolvers<ContextType>;
  HeroStats?: HeroStatsResolvers<ContextType>;
  LightningAddressConnectionDetails?: LightningAddressConnectionDetailsResolvers<ContextType>;
  LightningAddressContributionLimits?: LightningAddressContributionLimitsResolvers<ContextType>;
  LightningAddressVerifyResponse?: LightningAddressVerifyResponseResolvers<ContextType>;
  LightningPaymentDetails?: LightningPaymentDetailsResolvers<ContextType>;
  LightningPaymentMethods?: LightningPaymentMethodsResolvers<ContextType>;
  LightningToRskSwapPaymentDetails?: LightningToRskSwapPaymentDetailsResolvers<ContextType>;
  LndConnectionDetails?: LndConnectionDetailsResolvers<ContextType>;
  LndConnectionDetailsPrivate?: LndConnectionDetailsPrivateResolvers<ContextType>;
  LndConnectionDetailsPublic?: LndConnectionDetailsPublicResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Milestone?: MilestoneResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  NWCConnectionDetailsPrivate?: NwcConnectionDetailsPrivateResolvers<ContextType>;
  NWCConnectionDetailsPublic?: NwcConnectionDetailsPublicResolvers<ContextType>;
  NostrKeys?: NostrKeysResolvers<ContextType>;
  NostrPrivateKey?: NostrPrivateKeyResolvers<ContextType>;
  NostrPublicKey?: NostrPublicKeyResolvers<ContextType>;
  NotificationConfiguration?: NotificationConfigurationResolvers<ContextType>;
  NotificationSettings?: NotificationSettingsResolvers<ContextType>;
  OTPResponse?: OtpResponseResolvers<ContextType>;
  OnChainPaymentMethods?: OnChainPaymentMethodsResolvers<ContextType>;
  OnChainToLightningSwapPaymentDetails?: OnChainToLightningSwapPaymentDetailsResolvers<ContextType>;
  OnChainToRskSwapPaymentDetails?: OnChainToRskSwapPaymentDetailsResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrdersGetResponse?: OrdersGetResponseResolvers<ContextType>;
  OrdersStatsBase?: OrdersStatsBaseResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  OwnerOf?: OwnerOfResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PageViewCountGraph?: PageViewCountGraphResolvers<ContextType>;
  PaginationCursor?: PaginationCursorResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentCancelResponse?: PaymentCancelResponseResolvers<ContextType>;
  PaymentConfirmResponse?: PaymentConfirmResponseResolvers<ContextType>;
  PaymentDetails?: PaymentDetailsResolvers<ContextType>;
  PaymentFailResponse?: PaymentFailResponseResolvers<ContextType>;
  PaymentFee?: PaymentFeeResolvers<ContextType>;
  PaymentInvoiceCancelResponse?: PaymentInvoiceCancelResponseResolvers<ContextType>;
  PaymentInvoiceSanctionCheckStatusResponse?: PaymentInvoiceSanctionCheckStatusResponseResolvers<ContextType>;
  PaymentMethods?: PaymentMethodsResolvers<ContextType>;
  PaymentPendResponse?: PaymentPendResponseResolvers<ContextType>;
  PaymentRefund?: PaymentRefundResolvers<ContextType>;
  PaymentRefundCompleteResponse?: PaymentRefundCompleteResponseResolvers<ContextType>;
  PaymentRefundsGetResponse?: PaymentRefundsGetResponseResolvers<ContextType>;
  PaymentSwapClaimTxBroadcastResponse?: PaymentSwapClaimTxBroadcastResponseResolvers<ContextType>;
  PaymentSwapClaimTxSetResponse?: PaymentSwapClaimTxSetResponseResolvers<ContextType>;
  Payout?: PayoutResolvers<ContextType>;
  PayoutGetResponse?: PayoutGetResponseResolvers<ContextType>;
  PayoutInitiateResponse?: PayoutInitiateResponseResolvers<ContextType>;
  PayoutMetadata?: PayoutMetadataResolvers<ContextType>;
  PayoutRequestResponse?: PayoutRequestResponseResolvers<ContextType>;
  PayoutResponse?: PayoutResponseResolvers<ContextType>;
  PledgeRefund?: PledgeRefundResolvers<ContextType>;
  PledgeRefundGetResponse?: PledgeRefundGetResponseResolvers<ContextType>;
  PledgeRefundInitiateResponse?: PledgeRefundInitiateResponseResolvers<ContextType>;
  PledgeRefundMetadata?: PledgeRefundMetadataResolvers<ContextType>;
  PledgeRefundRequestResponse?: PledgeRefundRequestResponseResolvers<ContextType>;
  PledgeRefundResponse?: PledgeRefundResponseResolvers<ContextType>;
  PledgeRefundsGetResponse?: PledgeRefundsGetResponseResolvers<ContextType>;
  PodcastKeysendContributionCreateResponse?: PodcastKeysendContributionCreateResponseResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostPublishedSubscriptionResponse?: PostPublishedSubscriptionResponseResolvers<ContextType>;
  PostSendByEmailResponse?: PostSendByEmailResponseResolvers<ContextType>;
  ProfileNotificationSettings?: ProfileNotificationSettingsResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectActivatedSubscriptionResponse?: ProjectActivatedSubscriptionResponseResolvers<ContextType>;
  ProjectActivitiesCount?: ProjectActivitiesCountResolvers<ContextType>;
  ProjectAmbassadorEdge?: ProjectAmbassadorEdgeResolvers<ContextType>;
  ProjectAmbassadorsConnection?: ProjectAmbassadorsConnectionResolvers<ContextType>;
  ProjectAmbassadorsStats?: ProjectAmbassadorsStatsResolvers<ContextType>;
  ProjectAonGoalStatusUpdateResponse?: ProjectAonGoalStatusUpdateResponseResolvers<ContextType>;
  ProjectContributionsGroupedByMethodStats?: ProjectContributionsGroupedByMethodStatsResolvers<ContextType>;
  ProjectContributionsStats?: ProjectContributionsStatsResolvers<ContextType>;
  ProjectContributionsStatsBase?: ProjectContributionsStatsBaseResolvers<ContextType>;
  ProjectContributionsStatsGraphData?: ProjectContributionsStatsGraphDataResolvers<ContextType>;
  ProjectContributionsStatsGraphDataAmount?: ProjectContributionsStatsGraphDataAmountResolvers<ContextType>;
  ProjectCountriesGetResult?: ProjectCountriesGetResultResolvers<ContextType>;
  ProjectDeleteResponse?: ProjectDeleteResponseResolvers<ContextType>;
  ProjectFollowerStats?: ProjectFollowerStatsResolvers<ContextType>;
  ProjectFunderRewardStats?: ProjectFunderRewardStatsResolvers<ContextType>;
  ProjectFunderStats?: ProjectFunderStatsResolvers<ContextType>;
  ProjectGoal?: ProjectGoalResolvers<ContextType>;
  ProjectGoalDeleteResponse?: ProjectGoalDeleteResponseResolvers<ContextType>;
  ProjectGoals?: ProjectGoalsResolvers<ContextType>;
  ProjectKeys?: ProjectKeysResolvers<ContextType>;
  ProjectLeaderboardAmbassadorsRow?: ProjectLeaderboardAmbassadorsRowResolvers<ContextType>;
  ProjectLeaderboardContributorsRow?: ProjectLeaderboardContributorsRowResolvers<ContextType>;
  ProjectMostFunded?: ProjectMostFundedResolvers<ContextType>;
  ProjectMostFundedByCategory?: ProjectMostFundedByCategoryResolvers<ContextType>;
  ProjectMostFundedByTag?: ProjectMostFundedByTagResolvers<ContextType>;
  ProjectRefundablePayment?: ProjectRefundablePaymentResolvers<ContextType>;
  ProjectRegionsGetResult?: ProjectRegionsGetResultResolvers<ContextType>;
  ProjectReview?: ProjectReviewResolvers<ContextType>;
  ProjectReward?: ProjectRewardResolvers<ContextType>;
  ProjectRewardTrendingMonthlyGetRow?: ProjectRewardTrendingMonthlyGetRowResolvers<ContextType>;
  ProjectRewardTrendingQuarterlyGetRow?: ProjectRewardTrendingQuarterlyGetRowResolvers<ContextType>;
  ProjectRewardTrendingWeeklyGetRow?: ProjectRewardTrendingWeeklyGetRowResolvers<ContextType>;
  ProjectRewardsGroupedByRewardIdStats?: ProjectRewardsGroupedByRewardIdStatsResolvers<ContextType>;
  ProjectRewardsGroupedByRewardIdStatsProjectReward?: ProjectRewardsGroupedByRewardIdStatsProjectRewardResolvers<ContextType>;
  ProjectRewardsStats?: ProjectRewardsStatsResolvers<ContextType>;
  ProjectShippingRate?: ProjectShippingRateResolvers<ContextType>;
  ProjectStatistics?: ProjectStatisticsResolvers<ContextType>;
  ProjectStats?: ProjectStatsResolvers<ContextType>;
  ProjectStatsBase?: ProjectStatsBaseResolvers<ContextType>;
  ProjectSubscriptionPlan?: ProjectSubscriptionPlanResolvers<ContextType>;
  ProjectViewBaseStats?: ProjectViewBaseStatsResolvers<ContextType>;
  ProjectViewStats?: ProjectViewStatsResolvers<ContextType>;
  ProjectsResponse?: ProjectsResponseResolvers<ContextType>;
  ProjectsSummary?: ProjectsSummaryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefundablePaymentsGetResponse?: RefundablePaymentsGetResponseResolvers<ContextType>;
  RskKeyPair?: RskKeyPairResolvers<ContextType>;
  RskToLightningSwapPaymentDetails?: RskToLightningSwapPaymentDetailsResolvers<ContextType>;
  RskToOnChainSwapPaymentDetails?: RskToOnChainSwapPaymentDetailsResolvers<ContextType>;
  ShippingAddress?: ShippingAddressResolvers<ContextType>;
  ShippingConfig?: ShippingConfigResolvers<ContextType>;
  SignedUploadUrl?: SignedUploadUrlResolvers<ContextType>;
  SourceResource?: SourceResourceResolvers<ContextType>;
  Sponsor?: SponsorResolvers<ContextType>;
  StatsInterface?: StatsInterfaceResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagsGetResult?: TagsGetResultResolvers<ContextType>;
  TagsMostFundedGetResult?: TagsMostFundedGetResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAccountKeys?: UserAccountKeysResolvers<ContextType>;
  UserBadge?: UserBadgeResolvers<ContextType>;
  UserComplianceDetails?: UserComplianceDetailsResolvers<ContextType>;
  UserContributionLimit?: UserContributionLimitResolvers<ContextType>;
  UserContributionLimits?: UserContributionLimitsResolvers<ContextType>;
  UserEmailIsValidResponse?: UserEmailIsValidResponseResolvers<ContextType>;
  UserHeroStats?: UserHeroStatsResolvers<ContextType>;
  UserNotificationSettings?: UserNotificationSettingsResolvers<ContextType>;
  UserProjectContribution?: UserProjectContributionResolvers<ContextType>;
  UserSubscription?: UserSubscriptionResolvers<ContextType>;
  UserTaxProfile?: UserTaxProfileResolvers<ContextType>;
  UserVerificationLevelStatus?: UserVerificationLevelStatusResolvers<ContextType>;
  UserVerificationTokenGenerateResponse?: UserVerificationTokenGenerateResponseResolvers<ContextType>;
  UserVerifiedDetails?: UserVerifiedDetailsResolvers<ContextType>;
  VerificationResult?: VerificationResultResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
  WalletContributionLimits?: WalletContributionLimitsResolvers<ContextType>;
  WalletLimits?: WalletLimitsResolvers<ContextType>;
  WalletOffChainContributionLimits?: WalletOffChainContributionLimitsResolvers<ContextType>;
  WalletOnChainContributionLimits?: WalletOnChainContributionLimitsResolvers<ContextType>;
  WalletState?: WalletStateResolvers<ContextType>;
};


export type ComplianceDashboardDataQueryVariables = Exact<{
  input?: InputMaybe<ProjectsGetQueryInput>;
}>;


export type ComplianceDashboardDataQuery = { __typename?: 'Query', projectsGet: { __typename?: 'ProjectsResponse', projects: Array<{ __typename?: 'Project', status?: ProjectStatus | null, id: any }> } };

export type ProjectReviewSubmitMutationVariables = Exact<{
  input: ProjectReviewSubmitInput;
}>;


export type ProjectReviewSubmitMutation = { __typename?: 'Mutation', projectReviewSubmit: { __typename?: 'ProjectReview', id: any, projectId: any, status: ProjectReviewStatus, rejectionReasons: Array<string>, reviewNotes?: string | null, reviewedAt?: any | null, createdAt: any, updatedAt: any } };

export type ProjectStatusUpdateMutationVariables = Exact<{
  input: ProjectStatusUpdate;
}>;


export type ProjectStatusUpdateMutation = { __typename?: 'Mutation', projectStatusUpdate: { __typename?: 'Project', id: any, status?: ProjectStatus | null, launchedAt?: any | null, preLaunchedAt?: any | null } };

export type ProjectFieldsFragment = { __typename?: 'Project', id: any, title: string, name: string, status?: ProjectStatus | null, fundingStrategy?: ProjectFundingStrategy | null, rejectionReason?: string | null, createdAt: any, launchedAt?: any | null, preLaunchedAt?: any | null, owners: Array<{ __typename?: 'Owner', user: { __typename?: 'User', id: any, username: string, email?: string | null } }>, reviews: Array<{ __typename?: 'ProjectReview', id: any, projectId: any, status: ProjectReviewStatus, version: number, reviewNotes?: string | null, rejectionReasons: Array<string>, reviewedAt?: any | null, createdAt: any, updatedAt: any }> };

export type ProjectGetQueryVariables = Exact<{
  where: UniqueProjectQueryInput;
}>;


export type ProjectGetQuery = { __typename?: 'Query', projectGet?: (
    { __typename?: 'Project' }
    & ProjectFieldsFragment
  ) | null };

export type ProjectsGetQueryVariables = Exact<{
  input: ProjectsGetQueryInput;
}>;


export type ProjectsGetQuery = { __typename?: 'Query', projectsGet: { __typename?: 'ProjectsResponse', projects: Array<(
      { __typename?: 'Project' }
      & ProjectFieldsFragment
    )> } };

export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on Project {
  id
  title
  name
  status
  fundingStrategy
  rejectionReason
  owners {
    user {
      id
      username
      email
    }
  }
  reviews {
    id
    projectId
    status
    version
    reviewNotes
    rejectionReasons
    reviewedAt
    createdAt
    updatedAt
  }
  createdAt
  launchedAt
  preLaunchedAt
}
    `;
export const ComplianceDashboardDataDocument = gql`
    query ComplianceDashboardData($input: ProjectsGetQueryInput) {
  projectsGet(input: $input) {
    projects {
      status
      id
    }
  }
}
    `;

/**
 * __useComplianceDashboardDataQuery__
 *
 * To run a query within a React component, call `useComplianceDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useComplianceDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComplianceDashboardDataQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useComplianceDashboardDataQuery(baseOptions?: Apollo.QueryHookOptions<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>(ComplianceDashboardDataDocument, options);
      }
export function useComplianceDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>(ComplianceDashboardDataDocument, options);
        }
export function useComplianceDashboardDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>(ComplianceDashboardDataDocument, options);
        }
export type ComplianceDashboardDataQueryHookResult = ReturnType<typeof useComplianceDashboardDataQuery>;
export type ComplianceDashboardDataLazyQueryHookResult = ReturnType<typeof useComplianceDashboardDataLazyQuery>;
export type ComplianceDashboardDataSuspenseQueryHookResult = ReturnType<typeof useComplianceDashboardDataSuspenseQuery>;
export type ComplianceDashboardDataQueryResult = Apollo.QueryResult<ComplianceDashboardDataQuery, ComplianceDashboardDataQueryVariables>;
export const ProjectReviewSubmitDocument = gql`
    mutation ProjectReviewSubmit($input: ProjectReviewSubmitInput!) {
  projectReviewSubmit(input: $input) {
    id
    projectId
    status
    rejectionReasons
    reviewNotes
    reviewedAt
    createdAt
    updatedAt
  }
}
    `;
export type ProjectReviewSubmitMutationFn = Apollo.MutationFunction<ProjectReviewSubmitMutation, ProjectReviewSubmitMutationVariables>;

/**
 * __useProjectReviewSubmitMutation__
 *
 * To run a mutation, you first call `useProjectReviewSubmitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProjectReviewSubmitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [projectReviewSubmitMutation, { data, loading, error }] = useProjectReviewSubmitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProjectReviewSubmitMutation(baseOptions?: Apollo.MutationHookOptions<ProjectReviewSubmitMutation, ProjectReviewSubmitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProjectReviewSubmitMutation, ProjectReviewSubmitMutationVariables>(ProjectReviewSubmitDocument, options);
      }
export type ProjectReviewSubmitMutationHookResult = ReturnType<typeof useProjectReviewSubmitMutation>;
export type ProjectReviewSubmitMutationResult = Apollo.MutationResult<ProjectReviewSubmitMutation>;
export type ProjectReviewSubmitMutationOptions = Apollo.BaseMutationOptions<ProjectReviewSubmitMutation, ProjectReviewSubmitMutationVariables>;
export const ProjectStatusUpdateDocument = gql`
    mutation ProjectStatusUpdate($input: ProjectStatusUpdate!) {
  projectStatusUpdate(input: $input) {
    id
    status
    launchedAt
    preLaunchedAt
  }
}
    `;
export type ProjectStatusUpdateMutationFn = Apollo.MutationFunction<ProjectStatusUpdateMutation, ProjectStatusUpdateMutationVariables>;

/**
 * __useProjectStatusUpdateMutation__
 *
 * To run a mutation, you first call `useProjectStatusUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProjectStatusUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [projectStatusUpdateMutation, { data, loading, error }] = useProjectStatusUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProjectStatusUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ProjectStatusUpdateMutation, ProjectStatusUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProjectStatusUpdateMutation, ProjectStatusUpdateMutationVariables>(ProjectStatusUpdateDocument, options);
      }
export type ProjectStatusUpdateMutationHookResult = ReturnType<typeof useProjectStatusUpdateMutation>;
export type ProjectStatusUpdateMutationResult = Apollo.MutationResult<ProjectStatusUpdateMutation>;
export type ProjectStatusUpdateMutationOptions = Apollo.BaseMutationOptions<ProjectStatusUpdateMutation, ProjectStatusUpdateMutationVariables>;
export const ProjectGetDocument = gql`
    query ProjectGet($where: UniqueProjectQueryInput!) {
  projectGet(where: $where) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

/**
 * __useProjectGetQuery__
 *
 * To run a query within a React component, call `useProjectGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectGetQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProjectGetQuery(baseOptions: Apollo.QueryHookOptions<ProjectGetQuery, ProjectGetQueryVariables> & ({ variables: ProjectGetQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectGetQuery, ProjectGetQueryVariables>(ProjectGetDocument, options);
      }
export function useProjectGetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectGetQuery, ProjectGetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectGetQuery, ProjectGetQueryVariables>(ProjectGetDocument, options);
        }
export function useProjectGetSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProjectGetQuery, ProjectGetQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectGetQuery, ProjectGetQueryVariables>(ProjectGetDocument, options);
        }
export type ProjectGetQueryHookResult = ReturnType<typeof useProjectGetQuery>;
export type ProjectGetLazyQueryHookResult = ReturnType<typeof useProjectGetLazyQuery>;
export type ProjectGetSuspenseQueryHookResult = ReturnType<typeof useProjectGetSuspenseQuery>;
export type ProjectGetQueryResult = Apollo.QueryResult<ProjectGetQuery, ProjectGetQueryVariables>;
export const ProjectsGetDocument = gql`
    query ProjectsGet($input: ProjectsGetQueryInput!) {
  projectsGet(input: $input) {
    projects {
      ...ProjectFields
    }
  }
}
    ${ProjectFieldsFragmentDoc}`;

/**
 * __useProjectsGetQuery__
 *
 * To run a query within a React component, call `useProjectsGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsGetQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProjectsGetQuery(baseOptions: Apollo.QueryHookOptions<ProjectsGetQuery, ProjectsGetQueryVariables> & ({ variables: ProjectsGetQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(ProjectsGetDocument, options);
      }
export function useProjectsGetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsGetQuery, ProjectsGetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(ProjectsGetDocument, options);
        }
export function useProjectsGetSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProjectsGetQuery, ProjectsGetQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(ProjectsGetDocument, options);
        }
export type ProjectsGetQueryHookResult = ReturnType<typeof useProjectsGetQuery>;
export type ProjectsGetLazyQueryHookResult = ReturnType<typeof useProjectsGetLazyQuery>;
export type ProjectsGetSuspenseQueryHookResult = ReturnType<typeof useProjectsGetSuspenseQuery>;
export type ProjectsGetQueryResult = Apollo.QueryResult<ProjectsGetQuery, ProjectsGetQueryVariables>;