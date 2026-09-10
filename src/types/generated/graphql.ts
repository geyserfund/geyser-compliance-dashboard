import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  Date: { input: any; output: any };
};

export type AccountPasswordAffectedProject = {
  __typename?: "AccountPasswordAffectedProject";
  balanceSats: Scalars["BigInt"]["output"];
  derivationPath?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
  rskEoa: Scalars["String"]["output"];
  status: ProjectStatus;
  title: Scalars["String"]["output"];
};

export type AcelerandoVipLeaderboardEntry = {
  __typename?: "AcelerandoVipLeaderboardEntry";
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  displayName: Scalars["String"]["output"];
  eligibleContributionsCount: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
  scoreSats: Scalars["BigInt"]["output"];
  uniqueProjectsBacked: Scalars["Int"]["output"];
  userId: Scalars["BigInt"]["output"];
};

export type AcelerandoVipLeaderboardResponse = {
  __typename?: "AcelerandoVipLeaderboardResponse";
  endAt: Scalars["Date"]["output"];
  entries: Array<AcelerandoVipLeaderboardEntry>;
  giveawayId: Scalars["ID"]["output"];
  leaderboardSize: Scalars["Int"]["output"];
  startAt: Scalars["Date"]["output"];
  timezone: Scalars["String"]["output"];
  topCutoffScore: Scalars["BigInt"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type AcelerandoVipMyPositionResponse = {
  __typename?: "AcelerandoVipMyPositionResponse";
  distanceToNextRankSats?: Maybe<Scalars["BigInt"]["output"]>;
  distanceToTop3Sats: Scalars["BigInt"]["output"];
  eligibleContributionsCount: Scalars["Int"]["output"];
  excludedSelfContributionsCount: Scalars["Int"]["output"];
  inTop3: Scalars["Boolean"]["output"];
  progressToTop3: Scalars["Float"]["output"];
  rank?: Maybe<Scalars["Int"]["output"]>;
  scoreSats: Scalars["BigInt"]["output"];
  top3CutoffScore: Scalars["BigInt"]["output"];
  uniqueProjectsBacked: Scalars["Int"]["output"];
  userId: Scalars["BigInt"]["output"];
};

export type ActivitiesCountGroupedByProjectInput = {
  createdAt: DateRangeInput;
  feed: ActivityFeedName;
};

export type ActivitiesGetResponse = {
  __typename?: "ActivitiesGetResponse";
  activities: Array<Activity>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export type Activity = {
  __typename?: "Activity";
  activityType: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  id: Scalars["String"]["output"];
  project: Project;
  resource: ActivityResource;
};

export type ActivityCreatedSubscriptionInput = {
  where?: InputMaybe<ActivityCreatedSubscriptionWhereInput>;
};

export type ActivityCreatedSubscriptionWhereInput = {
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  feed?: InputMaybe<ActivityFeedName>;
  projectIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  region?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ActivityResourceType>;
  tagIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  userIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum ActivityFeedName {
  FollowedProjects = "FOLLOWED_PROJECTS",
  GlobalProjects = "GLOBAL_PROJECTS",
  MyProjects = "MY_PROJECTS",
}

export type ActivityResource =
  | Contribution
  | Post
  | Project
  | ProjectGoal
  | ProjectReward;

export enum ActivityResourceType {
  Contribution = "CONTRIBUTION",
  Post = "POST",
  Project = "PROJECT",
  ProjectGoal = "PROJECT_GOAL",
  ProjectReward = "PROJECT_REWARD",
}

export type Ambassador = {
  __typename?: "Ambassador";
  contributionsCount: Scalars["Int"]["output"];
  contributionsSum: Scalars["BigInt"]["output"];
  id: Scalars["BigInt"]["output"];
  user: User;
};

export type AmbassadorStats = HeroStats & {
  __typename?: "AmbassadorStats";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  /** Number of projects shared by the User. */
  projectsCount: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
};

export enum AmountCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type AmountSummary = {
  __typename?: "AmountSummary";
  donationAmount: Scalars["Int"]["output"];
  rewardsCost: Scalars["Int"]["output"];
  shippingCost: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum AnalyticsGroupByInterval {
  Day = "day",
  Month = "month",
  Week = "week",
  Year = "year",
}

export type AonClaimBroadcastResponse = {
  __typename?: "AonClaimBroadcastResponse";
  txHash: Scalars["String"]["output"];
};

export type AonClaimPrepareResponse = {
  __typename?: "AonClaimPrepareResponse";
  /** Encoded claim(processingFee) calldata for the client to include when signing. */
  claimCalldata: Scalars["String"]["output"];
  claimableAmountSats: Scalars["Int"]["output"];
  contractAddress: Scalars["String"]["output"];
  creatorAddress: Scalars["String"]["output"];
  processingFeeSats: Scalars["Int"]["output"];
  simulationOk: Scalars["Boolean"]["output"];
};

export enum AonClaimStatus {
  Confirmed = "CONFIRMED",
  Failed = "FAILED",
  NotStarted = "NOT_STARTED",
  Pending = "PENDING",
}

export type AonClaimStatusResponse = {
  __typename?: "AonClaimStatusResponse";
  /** Safe, user-facing failure reason when status is FAILED. Never includes signed tx bytes. */
  failureReason?: Maybe<Scalars["String"]["output"]>;
  status: AonClaimStatus;
  txHash?: Maybe<Scalars["String"]["output"]>;
};

export enum AuthFlowIntent {
  Login = "LOGIN",
  Signup = "SIGNUP",
}

export type Badge = {
  __typename?: "Badge";
  createdAt: Scalars["Date"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  thumb: Scalars["String"]["output"];
  uniqueName: Scalars["String"]["output"];
};

export type BadgeClaimInput = {
  userBadgeId: Scalars["BigInt"]["input"];
};

export type BadgesGetInput = {
  where?: InputMaybe<BadgesGetWhereInput>;
};

export type BadgesGetWhereInput = {
  contributionId?: InputMaybe<Scalars["BigInt"]["input"]>;
  userId?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export enum BaseCurrency {
  Btc = "BTC",
}

export type BeehiivNewsletterSubscribeInput = {
  email: Scalars["String"]["input"];
  newsletterMonthly?: InputMaybe<Scalars["Boolean"]["input"]>;
  productUpdates?: InputMaybe<Scalars["Boolean"]["input"]>;
  projectSpotlights?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BitcoinPaymentMethods = {
  __typename?: "BitcoinPaymentMethods";
  lightning: LightningPaymentMethods;
  onChain: OnChainPaymentMethods;
};

export type BitcoinQuote = {
  __typename?: "BitcoinQuote";
  quote: Scalars["Float"]["output"];
  quoteCurrency: QuoteCurrency;
};

export type BoardVoteGrant = {
  __typename?: "BoardVoteGrant";
  applicants: Array<GrantApplicant>;
  balance: Scalars["Int"]["output"];
  boardMembers: Array<GrantBoardMember>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  shortDescription: Scalars["String"]["output"];
  sponsors: Array<Sponsor>;
  status: GrantStatusEnum;
  statuses: Array<GrantStatus>;
  title: Scalars["String"]["output"];
  type: GrantType;
};

export type BoardVoteGrantApplicantsArgs = {
  input?: InputMaybe<GrantApplicantsGetInput>;
};

export type CommunityVoteGrant = {
  __typename?: "CommunityVoteGrant";
  applicants: Array<GrantApplicant>;
  balance: Scalars["Int"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  distributionSystem: DistributionSystem;
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  shortDescription: Scalars["String"]["output"];
  sponsors: Array<Sponsor>;
  status: GrantStatusEnum;
  statuses: Array<GrantStatus>;
  title: Scalars["String"]["output"];
  type: GrantType;
  votes: CompetitionVoteGrantVoteSummary;
  votingSystem: VotingSystem;
};

export type CommunityVoteGrantApplicantsArgs = {
  input?: InputMaybe<GrantApplicantsGetInput>;
};

export type CompetitionVoteGrantVoteSummary = {
  __typename?: "CompetitionVoteGrantVoteSummary";
  voteCount: Scalars["Int"]["output"];
  voterCount: Scalars["Int"]["output"];
};

export type ConnectionDetails = LightningAddressConnectionDetails;

export type Contribution = {
  __typename?: "Contribution";
  amount: Scalars["Int"]["output"];
  bitcoinQuote?: Maybe<BitcoinQuote>;
  comment?: Maybe<Scalars["String"]["output"]>;
  confirmedAt?: Maybe<Scalars["Date"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  /** Creator's email address. Only visible to the contributor. */
  creatorEmail?: Maybe<Scalars["String"]["output"]>;
  creatorTaxProfile?: Maybe<UserTaxProfile>;
  donationAmount: Scalars["Int"]["output"];
  /** Contributor's email address. Only visible to the project owner. */
  email?: Maybe<Scalars["String"]["output"]>;
  funder: Funder;
  id: Scalars["BigInt"]["output"];
  isAnonymous: Scalars["Boolean"]["output"];
  isSubscription: Scalars["Boolean"]["output"];
  matchedAmountSats: Scalars["Int"]["output"];
  matchedAmountUsdCent: Scalars["Int"]["output"];
  matching?: Maybe<ProjectMatching>;
  media?: Maybe<Scalars["String"]["output"]>;
  order?: Maybe<Order>;
  payments: Array<Payment>;
  privateComment?: Maybe<Scalars["String"]["output"]>;
  projectGoalId?: Maybe<Scalars["BigInt"]["output"]>;
  projectId: Scalars["BigInt"]["output"];
  recurringContribution?: Maybe<RecurringContribution>;
  sourceResource?: Maybe<SourceResource>;
  status: ContributionStatus;
  /** Private reference code viewable only by the Funder and the ProjectOwner related to this Contribution */
  uuid?: Maybe<Scalars["String"]["output"]>;
};

export type ContributionCreateInput = {
  ambassadorHeroId?: InputMaybe<Scalars["String"]["input"]>;
  /** Set to true if the funder wishes to remain anonymous. The user will still be associated to the contribution. */
  anonymous: Scalars["Boolean"]["input"];
  donationAmount: Scalars["Int"]["input"];
  /** The percentage of the donation that will be tipped to Geyser, between 0 and 100. */
  geyserTipPercentage?: InputMaybe<Scalars["Float"]["input"]>;
  metadataInput?: InputMaybe<ContributionMetadataInput>;
  /** Optional payment instructions. If omitted or if no payment methods are requested, no payments will be created. */
  paymentsInput?: InputMaybe<ContributionPaymentsInput>;
  projectGoalId?: InputMaybe<Scalars["BigInt"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
  referrerHeroId?: InputMaybe<Scalars["String"]["input"]>;
  refundable: Scalars["Boolean"]["input"];
  /** The resource from which the contribution is being created. */
  sourceResourceInput: ResourceInput;
};

export type ContributionEmailUpdateInput = {
  contributionId: Scalars["BigInt"]["input"];
  email: Scalars["String"]["input"];
};

export type ContributionFiatPaymentDetails = {
  __typename?: "ContributionFiatPaymentDetails";
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars["BigInt"]["output"];
  stripeAccountId: Scalars["String"]["output"];
  stripeClientSecret: Scalars["String"]["output"];
};

export type ContributionFiatPaymentDetailsInput = {
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
  stripe: ContributionFiatPaymentDetailsStripeInput;
};

export type ContributionFiatPaymentDetailsStripeInput = {
  returnUrl: Scalars["String"]["input"];
  theme?: InputMaybe<StripeEmbeddedTheme>;
};

export type ContributionFiatToLightningSwapPaymentDetails = {
  __typename?: "ContributionFiatToLightningSwapPaymentDetails";
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  checkoutUrl: Scalars["String"]["output"];
  fees: Array<PaymentFee>;
  paymentId: Scalars["BigInt"]["output"];
};

export type ContributionFiatToLightningSwapPaymentDetailsBanxaInput = {
  fiatCurrency: Scalars["String"]["input"];
  paymentMethodId?: InputMaybe<Scalars["String"]["input"]>;
  returnUrl: Scalars["String"]["input"];
};

export type ContributionFiatToLightningSwapPaymentDetailsInput = {
  banxa: ContributionFiatToLightningSwapPaymentDetailsBanxaInput;
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionLightningPaymentDetails = {
  __typename?: "ContributionLightningPaymentDetails";
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  lightningInvoiceId: Scalars["String"]["output"];
  paymentId: Scalars["BigInt"]["output"];
  paymentRequest: Scalars["String"]["output"];
};

export type ContributionLightningPaymentDetailsInput = {
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionLightningToRskSwapPaymentDetails = {
  __typename?: "ContributionLightningToRskSwapPaymentDetails";
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  amountToClaim: Scalars["Int"]["output"];
  fees: Array<PaymentFee>;
  lightningInvoiceId: Scalars["String"]["output"];
  paymentId: Scalars["BigInt"]["output"];
  paymentRequest: Scalars["String"]["output"];
  swapJson: Scalars["String"]["output"];
};

export type ContributionLightningToRskSwapPaymentDetailsBoltzInput = {
  claimAddress: Scalars["String"]["input"];
  claimPublicKey: Scalars["String"]["input"];
  preimageHash: Scalars["String"]["input"];
  recovery?: InputMaybe<ContributionSwapRecoveryInput>;
};

export type ContributionLightningToRskSwapPaymentDetailsInput = {
  boltz: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionMetadataInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  followProject?: InputMaybe<Scalars["Boolean"]["input"]>;
  guardianBadges?: InputMaybe<Array<GuardianType>>;
  media?: InputMaybe<Scalars["String"]["input"]>;
  privateComment?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Newsletter subscriptions are handled by the frontend Beehiiv integration. */
  subscribeToGeyserEmails?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionMutationResponse = {
  __typename?: "ContributionMutationResponse";
  contribution: Contribution;
  payments: ContributionPaymentsDetails;
};

export type ContributionOnChainSwapPaymentDetails = {
  __typename?: "ContributionOnChainSwapPaymentDetails";
  address: Scalars["String"]["output"];
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars["BigInt"]["output"];
  swapJson: Scalars["String"]["output"];
};

export type ContributionOnChainSwapPaymentDetailsBoltzInput = {
  swapPublicKey: Scalars["String"]["input"];
};

export type ContributionOnChainSwapPaymentDetailsInput = {
  boltz: ContributionOnChainSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionOnChainToRskSwapPaymentDetails = {
  __typename?: "ContributionOnChainToRskSwapPaymentDetails";
  address: Scalars["String"]["output"];
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  fees: Array<PaymentFee>;
  paymentId: Scalars["BigInt"]["output"];
  swapJson: Scalars["String"]["output"];
};

export type ContributionOnChainToRskSwapPaymentDetailsBoltzInput = {
  claimAddress: Scalars["String"]["input"];
  claimPublicKey: Scalars["String"]["input"];
  preimageHash: Scalars["String"]["input"];
  recovery?: InputMaybe<ContributionSwapRecoveryInput>;
};

export type ContributionOnChainToRskSwapPaymentDetailsInput = {
  boltz: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContributionPaymentsAddInput = {
  contributionId: Scalars["BigInt"]["input"];
  paymentsInput: ContributionPaymentsInput;
};

export type ContributionPaymentsAddResponse = {
  __typename?: "ContributionPaymentsAddResponse";
  payments: ContributionPaymentsDetails;
};

export type ContributionPaymentsDetails = {
  __typename?: "ContributionPaymentsDetails";
  fiat?: Maybe<ContributionFiatPaymentDetails>;
  fiatToLightningSwap?: Maybe<ContributionFiatToLightningSwapPaymentDetails>;
  lightning?: Maybe<ContributionLightningPaymentDetails>;
  lightningToRskSwap?: Maybe<ContributionLightningToRskSwapPaymentDetails>;
  onChainSwap?: Maybe<ContributionOnChainSwapPaymentDetails>;
  onChainToRskSwap?: Maybe<ContributionOnChainToRskSwapPaymentDetails>;
  strike?: Maybe<ContributionStrikePaymentDetails>;
  strikeLightning?: Maybe<ContributionStrikePaymentDetails>;
  strikeOnChain?: Maybe<ContributionStrikePaymentDetails>;
};

export type ContributionPaymentsInput = {
  fiat?: InputMaybe<ContributionFiatPaymentDetailsInput>;
  fiatToLightningSwap?: InputMaybe<ContributionFiatToLightningSwapPaymentDetailsInput>;
  lightning?: InputMaybe<ContributionLightningPaymentDetailsInput>;
  lightningToRskSwap?: InputMaybe<ContributionLightningToRskSwapPaymentDetailsInput>;
  onChainSwap?: InputMaybe<ContributionOnChainSwapPaymentDetailsInput>;
  onChainToRskSwap?: InputMaybe<ContributionOnChainToRskSwapPaymentDetailsInput>;
  strike?: InputMaybe<ContributionStrikePaymentDetailsInput>;
};

export enum ContributionStatus {
  Confirmed = "CONFIRMED",
  Pending = "PENDING",
  Pledged = "PLEDGED",
}

export type ContributionStatusUpdatedInput = {
  contributionId?: InputMaybe<Scalars["BigInt"]["input"]>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type ContributionStatusUpdatedSubscriptionResponse = {
  __typename?: "ContributionStatusUpdatedSubscriptionResponse";
  contribution: Contribution;
};

export type ContributionStrikePaymentDetails = {
  __typename?: "ContributionStrikePaymentDetails";
  address?: Maybe<Scalars["String"]["output"]>;
  amountDue: Scalars["Int"]["output"];
  amountDueCurrency: PaymentCurrency;
  paymentId: Scalars["BigInt"]["output"];
  paymentRequest?: Maybe<Scalars["String"]["output"]>;
};

export type ContributionStrikePaymentDetailsInput = {
  create?: InputMaybe<Scalars["Boolean"]["input"]>;
  rail: StrikePaymentRail;
};

export type ContributionSwapRecoveryInput = {
  contributorRskAddress: Scalars["String"]["input"];
  contributorRskPublicKey: Scalars["String"]["input"];
  encryptedPrivateKey: Scalars["String"]["input"];
  encryptionAlgorithm: Scalars["String"]["input"];
  encryptionVersion: Scalars["String"]["input"];
};

export type ContributionsGetResponse = {
  __typename?: "ContributionsGetResponse";
  contributions: Array<Contribution>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export type ContributionsSummary = {
  __typename?: "ContributionsSummary";
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  contributorsCount: Scalars["Int"]["output"];
};

export enum ContributionsSummaryPeriod {
  AllTime = "ALL_TIME",
  Month = "MONTH",
  Week = "WEEK",
}

export enum ContributionsWhereContributionStatus {
  Confirmed = "CONFIRMED",
  Pledged = "PLEDGED",
}

export type ContributorContributionsSummary = {
  __typename?: "ContributorContributionsSummary";
  commentsCount: Scalars["Int"]["output"];
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
};

export type ContributorStats = HeroStats & {
  __typename?: "ContributorStats";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  /** Number of projects contributed to by the User. */
  projectsCount: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
};

export type Country = {
  __typename?: "Country";
  code: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type CreateProjectInput = {
  /** Project category */
  category: ProjectCategory;
  /** Project ISO3166 country code */
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  /** A short description of the project. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  fundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  /** Project header images */
  images: Array<Scalars["String"]["input"]>;
  isCircularGrant?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Project links */
  links?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name: Scalars["String"]["input"];
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  referrerHeroId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project region */
  region?: InputMaybe<Scalars["String"]["input"]>;
  shortDescription: Scalars["String"]["input"];
  /** Project sub-category */
  subCategory: ProjectSubCategory;
  /** Project tags */
  tagIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  thumbnailImage?: InputMaybe<Scalars["String"]["input"]>;
  /** Public title of the project. */
  title: Scalars["String"]["input"];
  type?: InputMaybe<ProjectType>;
};

export type CreateProjectSubscriptionPlanInput = {
  amountBtcSat: Scalars["Int"]["input"];
  amountUsdCent: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  interval: RecurringInterval;
  isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  projectId: Scalars["BigInt"]["input"];
};

export type CreateWalletInput = {
  feePercentage: Scalars["Float"]["input"];
  lightningAddressConnectionDetailsInput?: InputMaybe<LightningAddressConnectionDetailsCreateInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  resourceInput: WalletResourceInput;
};

export type CreatorNotificationSettings = {
  __typename?: "CreatorNotificationSettings";
  notificationSettings: Array<NotificationSettings>;
  project: CreatorNotificationSettingsProject;
  userId: Scalars["BigInt"]["output"];
};

export type CreatorNotificationSettingsProject = {
  __typename?: "CreatorNotificationSettingsProject";
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type CreatorStats = HeroStats & {
  __typename?: "CreatorStats";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  /** Number of projects created by the User. */
  projectsCount: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
};

export type CreatorTrustStats = {
  __typename?: "CreatorTrustStats";
  backersCount: Scalars["Int"]["output"];
  joinedYear: Scalars["Int"]["output"];
  publishedPostsCount: Scalars["Int"]["output"];
  totalFunding: Scalars["Int"]["output"];
  totalFundingUsd: Scalars["Float"]["output"];
};

export enum Currency {
  Usdcent = "USDCENT",
}

export type CurrencyQuoteGetInput = {
  baseCurrency: BaseCurrency;
  quoteCurrency: QuoteCurrency;
};

export type CurrencyQuoteGetResponse = {
  __typename?: "CurrencyQuoteGetResponse";
  baseCurrency: BaseCurrency;
  quote: Scalars["Float"]["output"];
  quoteCurrency: QuoteCurrency;
  timestamp: Scalars["Date"]["output"];
};

export type CursorInput = {
  id: Scalars["BigInt"]["input"];
};

export type CursorInputString = {
  id: Scalars["String"]["input"];
};

export type CursorPaginationResponse = {
  __typename?: "CursorPaginationResponse";
  count?: Maybe<Scalars["Int"]["output"]>;
  cursor?: Maybe<PaginationCursor>;
  take?: Maybe<Scalars["Int"]["output"]>;
};

export type DateRangeInput = {
  endDateTime?: InputMaybe<Scalars["Date"]["input"]>;
  startDateTime?: InputMaybe<Scalars["Date"]["input"]>;
};

export type DatetimeRange = {
  __typename?: "DatetimeRange";
  /** The end datetime for filtering the data, default is now. */
  endDateTime?: Maybe<Scalars["Date"]["output"]>;
  /** The start datetime for filtering the data. */
  startDateTime: Scalars["Date"]["output"];
};

export type DeleteProjectInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type DeleteUserResponse = MutationResponse & {
  __typename?: "DeleteUserResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type DirectPaymentDetails = {
  __typename?: "DirectPaymentDetails";
  btcAddress?: Maybe<Scalars["String"]["output"]>;
  lightningAddress?: Maybe<Scalars["String"]["output"]>;
};

export type DirectPaymentDetailsInput = {
  btcAddress?: InputMaybe<Scalars["String"]["input"]>;
  lightningAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export enum DistributionSystem {
  None = "NONE",
  Proportional = "PROPORTIONAL",
  WinnerTakeAll = "WINNER_TAKE_ALL",
}

export type Eip712SignatureInput = {
  r: Scalars["String"]["input"];
  s: Scalars["String"]["input"];
  v: Scalars["Int"]["input"];
};

export type EmailSendOptionsInput = {
  projectRewardUUIDs?: InputMaybe<Array<Scalars["String"]["input"]>>;
  segment: EmailSubscriberSegment;
};

export enum EmailSubscriberSegment {
  Contributors = "CONTRIBUTORS",
  Followers = "FOLLOWERS",
  RewardBuyers = "REWARD_BUYERS",
}

export type EmailVerifyInput = {
  otp: Scalars["Int"]["input"];
  otpVerificationToken: Scalars["String"]["input"];
};

export type ExternalAccount = {
  __typename?: "ExternalAccount";
  accountType: Scalars["String"]["output"];
  externalId: Scalars["String"]["output"];
  externalLink?: Maybe<Scalars["String"]["output"]>;
  externalUsername: Scalars["String"]["output"];
  id: Scalars["BigInt"]["output"];
  public: Scalars["Boolean"]["output"];
};

export enum FeeCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type FiatPaymentDetails = {
  __typename?: "FiatPaymentDetails";
  method: Scalars["String"]["output"];
  stripeAccountId?: Maybe<Scalars["String"]["output"]>;
  stripeChargeId?: Maybe<Scalars["String"]["output"]>;
  stripeCheckoutSessionId?: Maybe<Scalars["String"]["output"]>;
  stripeInvoiceId?: Maybe<Scalars["String"]["output"]>;
  stripePaymentIntentId?: Maybe<Scalars["String"]["output"]>;
  stripeSubscriptionId?: Maybe<Scalars["String"]["output"]>;
};

export type FiatPaymentMethods = {
  __typename?: "FiatPaymentMethods";
  banxa: Scalars["Boolean"]["output"];
  enabled: Scalars["Boolean"]["output"];
  stripe: Scalars["Boolean"]["output"];
};

export type FiatToLightningSwapPaymentDetails = {
  __typename?: "FiatToLightningSwapPaymentDetails";
  lightningInvoiceId: Scalars["String"]["output"];
  lightningInvoiceStatus: LightningInvoiceStatus;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
};

export type FileUploadInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** MIME type of the file. Currently only supports image types. */
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** The Funder type contains a User's funding details over a particular project. */
export type Funder = {
  __typename?: "Funder";
  /** Aggregate amount funded by a Funder over all his (confirmed) funding transactions for a particular project, in satoshis. */
  amountFunded?: Maybe<Scalars["Int"]["output"]>;
  /** Boolean value indicating whether at least one of the funding transactions of the Funder were confirmed. */
  confirmed: Scalars["Boolean"]["output"];
  /** Time at which the first confirmed funding transactions of the Funder was confirmed. */
  confirmedAt?: Maybe<Scalars["Date"]["output"]>;
  /** Funder's contributions. */
  contributions: Array<Contribution>;
  /** Contribution's funding summary, possibly in different time ranges. */
  contributionsSummary?: Maybe<ContributorContributionsSummary>;
  id: Scalars["BigInt"]["output"];
  orders: Array<Order>;
  /** Contributor's rank in the project. */
  rank?: Maybe<Scalars["Int"]["output"]>;
  /** Number of (confirmed) times a Funder funded a particular project. */
  timesFunded?: Maybe<Scalars["Int"]["output"]>;
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
  __typename?: "FunderRewardGraphSum";
  dateTime: Scalars["Date"]["output"];
  rewardId: Scalars["BigInt"]["output"];
  rewardName: Scalars["String"]["output"];
  sum: Scalars["Int"]["output"];
};

export enum FundingResourceType {
  Activity = "activity",
  Entry = "entry",
  Project = "project",
  User = "user",
}

export type GetActivitiesInput = {
  pagination?: InputMaybe<GetActivityPaginationInput>;
  where?: InputMaybe<GetActivityWhereInput>;
};

export type GetActivityOrderByInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type GetActivityPaginationInput = {
  cursor?: InputMaybe<CursorInputString>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GetActivityWhereInput = {
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<DateRangeInput>;
  feed?: InputMaybe<ActivityFeedName>;
  projectIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  region?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ActivityResourceType>;
  tagIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  userIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
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
  amountGreaterOrEqual?: InputMaybe<Scalars["Int"]["input"]>;
  dateRange?: InputMaybe<DateRangeInput>;
  funderId?: InputMaybe<Scalars["BigInt"]["input"]>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  sourceResourceInput?: InputMaybe<ResourceInput>;
  status?: InputMaybe<ContributionsWhereContributionStatus>;
  userId?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type GetContributorContributionsInput = {
  where?: InputMaybe<GetContributorContributionsWhereInput>;
};

export type GetContributorContributionsWhereInput = {
  status?: InputMaybe<ContributionStatus>;
};

export type GetContributorInput = {
  projectId: Scalars["BigInt"]["input"];
  userId: Scalars["BigInt"]["input"];
};

export type GetDashboardFundersWhereInput = {
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  sourceResourceInput?: InputMaybe<ResourceInput>;
};

export type GetFunderWhereInput = {
  anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateRange?: InputMaybe<DateRangeInput>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
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

export type GetPostsInput = {
  orderBy?: InputMaybe<GetPostsOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GetPostsWhereInput>;
};

export type GetPostsOrderByInput = {
  publishedAt?: InputMaybe<OrderByOptions>;
};

export type GetPostsWhereInput = {
  categories?: InputMaybe<Array<ProjectCategory>>;
  category?: InputMaybe<ProjectCategory>;
  postType?: InputMaybe<Array<PostType>>;
  projectFundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  projectName?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetProjectGoalsInput = {
  projectId: Scalars["BigInt"]["input"];
  receivedContributionsInDatetimeRange?: InputMaybe<DateRangeInput>;
};

export type GetProjectOrdersStatsInput = {
  where: GetProjectOrdersStatsWhereInput;
};

export type GetProjectOrdersStatsWhereInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type GetProjectRewardInput = {
  where: GetProjectRewardWhereInput;
};

export type GetProjectRewardWhereInput = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetProjectRewardsCatalogInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
  sortBy: ProjectRewardsCatalogSortBy;
};

export type GetProjectRewardsInput = {
  where: GetProjectRewardsWhereInput;
};

export type GetProjectRewardsMostSoldInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  range: ProjectRewardsMostSoldRange;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GetProjectRewardsWhereInput = {
  dateRange?: InputMaybe<DateRangeInput>;
  deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
};

export type GetProjectStatsInput = {
  where: GetProjectStatsWhereInput;
};

export type GetProjectStatsWhereInput = {
  dateRange?: InputMaybe<DateRangeInput>;
  groupBy?: InputMaybe<AnalyticsGroupByInterval>;
  projectId: Scalars["BigInt"]["input"];
};

export type GlobalAmbassadorLeaderboardRow = {
  __typename?: "GlobalAmbassadorLeaderboardRow";
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  projectsCount: Scalars["Int"]["output"];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["BigInt"]["output"];
  userImageUrl?: Maybe<Scalars["String"]["output"]>;
  username: Scalars["String"]["output"];
};

export type GlobalContributorLeaderboardRow = {
  __typename?: "GlobalContributorLeaderboardRow";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  projectsContributedCount: Scalars["Int"]["output"];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["BigInt"]["output"];
  userImageUrl?: Maybe<Scalars["String"]["output"]>;
  username: Scalars["String"]["output"];
};

export type GlobalCreatorLeaderboardRow = {
  __typename?: "GlobalCreatorLeaderboardRow";
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  projectsCount: Scalars["Int"]["output"];
  userGuardianType?: Maybe<GuardianType>;
  userHeroId?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["BigInt"]["output"];
  userImageUrl?: Maybe<Scalars["String"]["output"]>;
  username: Scalars["String"]["output"];
};

export type GlobalProjectLeaderboardRow = {
  __typename?: "GlobalProjectLeaderboardRow";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  contributorsCount: Scalars["Int"]["output"];
  projectName: Scalars["String"]["output"];
  projectThumbnailUrl?: Maybe<Scalars["String"]["output"]>;
  projectTitle: Scalars["String"]["output"];
};

export type Grant = BoardVoteGrant | CommunityVoteGrant;

export type GrantApplicant = {
  __typename?: "GrantApplicant";
  contributors: Array<GrantApplicantContributor>;
  contributorsCount: Scalars["Int"]["output"];
  funding: GrantApplicantFunding;
  grant: Grant;
  id: Scalars["BigInt"]["output"];
  project: Project;
  status: GrantApplicantStatus;
  voteCount: Scalars["Int"]["output"];
};

export type GrantApplicantContributorsArgs = {
  input?: InputMaybe<GrantApplicantContributorInput>;
};

export type GrantApplicantContributor = {
  __typename?: "GrantApplicantContributor";
  amount: Scalars["Int"]["output"];
  timesContributed: Scalars["Int"]["output"];
  user?: Maybe<User>;
  voteCount: Scalars["Int"]["output"];
};

export type GrantApplicantContributorInput = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<GrantApplicantContributorWhereInput>;
};

export type GrantApplicantContributorWhereInput = {
  userId: Scalars["BigInt"]["input"];
};

export type GrantApplicantFunding = {
  __typename?: "GrantApplicantFunding";
  /** The amount of funding the grant applicant has received from the community. */
  communityFunding: Scalars["Int"]["output"];
  /** The amount of grant funding the applicant is elligible for. */
  grantAmount: Scalars["Int"]["output"];
  /**
   * The amount of funding that the Grant applicant has been confirmed to receive. Can only be confirmed after the
   * grant has been closed.
   */
  grantAmountDistributed: Scalars["Int"]["output"];
};

export enum GrantApplicantStatus {
  Accepted = "ACCEPTED",
  Canceled = "CANCELED",
  Funded = "FUNDED",
  Pending = "PENDING",
  Rejected = "REJECTED",
}

export enum GrantApplicantStatusFilter {
  Accepted = "ACCEPTED",
  Funded = "FUNDED",
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
  VoteCount = "voteCount",
}

export type GrantApplyInput = {
  grantId: Scalars["BigInt"]["input"];
  projectId: Scalars["BigInt"]["input"];
};

export type GrantBoardMember = {
  __typename?: "GrantBoardMember";
  user: User;
};

export type GrantGetInput = {
  where: GrantGetWhereInput;
};

export type GrantGetWhereInput = {
  id: Scalars["BigInt"]["input"];
};

export type GrantGuardiansFunding = {
  __typename?: "GrantGuardiansFunding";
  contributedTotal: Scalars["BigInt"]["output"];
  contributorsCount: Scalars["BigInt"]["output"];
};

export type GrantStatistics = {
  __typename?: "GrantStatistics";
  /** Statistic about the grant applicants */
  applicants?: Maybe<GrantStatisticsApplicant>;
  grantGuardiansFunding: GrantGuardiansFunding;
  /** Statistic about the grants */
  grants?: Maybe<GrantStatisticsGrant>;
};

export type GrantStatisticsApplicant = {
  __typename?: "GrantStatisticsApplicant";
  /** Count of applicants that have been funded */
  countFunded: Scalars["Int"]["output"];
};

export type GrantStatisticsGrant = {
  __typename?: "GrantStatisticsGrant";
  /** Total amount sent to grants (in sats) */
  amountFunded: Scalars["Int"]["output"];
  /** Total amount granted to projects (in sats) */
  amountGranted: Scalars["Int"]["output"];
  /** Total rounds of grants */
  count: Scalars["Int"]["output"];
};

export type GrantStatus = {
  __typename?: "GrantStatus";
  endAt?: Maybe<Scalars["Date"]["output"]>;
  startAt: Scalars["Date"]["output"];
  status: GrantStatusEnum;
};

export enum GrantStatusEnum {
  ApplicationsOpen = "APPLICATIONS_OPEN",
  Closed = "CLOSED",
  FundingOpen = "FUNDING_OPEN",
}

export enum GrantType {
  BoardVote = "BOARD_VOTE",
  CommunityVote = "COMMUNITY_VOTE",
}

export type GraphData = {
  dateTime: Scalars["Date"]["output"];
  value: Scalars["Int"]["output"];
};

export type GraphSumData = {
  dateTime: Scalars["Date"]["output"];
  sum: Scalars["Int"]["output"];
};

export type GuardianResult = {
  __typename?: "GuardianResult";
  guardianType: GuardianType;
  soldCount: Scalars["Int"]["output"];
  users: Array<GuardianUser>;
};

export enum GuardianType {
  King = "KING",
  Knight = "KNIGHT",
  Legend = "LEGEND",
  Warrior = "WARRIOR",
}

export type GuardianUser = {
  __typename?: "GuardianUser";
  guardianType: Scalars["String"]["output"];
  heroId: Scalars["String"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["BigInt"]["output"];
  username: Scalars["String"]["output"];
};

export type GuardianUsersGetInput = {
  where?: InputMaybe<GuardianUsersGetWhereInput>;
};

export type GuardianUsersGetResponse = {
  __typename?: "GuardianUsersGetResponse";
  guardianUsers: Array<GuardianResult>;
};

export type GuardianUsersGetWhereInput = {
  guardianType: GuardianType;
};

export enum HeroCommunityRole {
  FieldPartner = "FIELD_PARTNER",
}

export enum HeroProjectCategory {
  Backed = "BACKED",
  Built = "BUILT",
  Onboarded = "ONBOARDED",
}

export enum HeroProjectRelationship {
  Contributed = "CONTRIBUTED",
  Enabled = "ENABLED",
}

export type HeroStats = {
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  projectsCount: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
};

export type ImpactFund = {
  __typename?: "ImpactFund";
  amountCommitted?: Maybe<Scalars["Int"]["output"]>;
  amountCommittedCurrency: ImpactFundAmountCommittedCurrency;
  applications: Array<ImpactFundApplication>;
  archivedSponsors: Array<ImpactFundSponsor>;
  canAccessDashboard: Scalars["Boolean"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  donateProject?: Maybe<Project>;
  donateProjectId?: Maybe<Scalars["BigInt"]["output"]>;
  fundedApplications: Array<ImpactFundApplication>;
  heroImage?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  liveSponsors: Array<ImpactFundSponsor>;
  metrics: ImpactFundMetrics;
  name: Scalars["String"]["output"];
  sponsors: Array<ImpactFundSponsor>;
  status: ImpactFundStatus;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  viewerApplications: Array<ImpactFundApplication>;
};

export enum ImpactFundAmountCommittedCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type ImpactFundApplication = {
  __typename?: "ImpactFundApplication";
  amountAwardedInSats?: Maybe<Scalars["Int"]["output"]>;
  awardedAt?: Maybe<Scalars["Date"]["output"]>;
  contributionUuid?: Maybe<Scalars["String"]["output"]>;
  fundingModel: ImpactFundApplicationFundingModel;
  id: Scalars["BigInt"]["output"];
  impactFundId: Scalars["BigInt"]["output"];
  project: Project;
  status: ImpactFundApplicationStatus;
};

export enum ImpactFundApplicationFundingModel {
  AonCofunding = "AON_COFUNDING",
  DirectGrant = "DIRECT_GRANT",
  Matching = "MATCHING",
}

export type ImpactFundApplicationFundingSetInput = {
  applicationId: Scalars["BigInt"]["input"];
  contributionUuid: Scalars["String"]["input"];
};

export type ImpactFundApplicationNote = {
  __typename?: "ImpactFundApplicationNote";
  applicationId: Scalars["BigInt"]["output"];
  author: ImpactFundApplicationNoteAuthor;
  authorUserId: Scalars["BigInt"]["output"];
  body: Scalars["String"]["output"];
  canEdit: Scalars["Boolean"]["output"];
  createdAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type ImpactFundApplicationNoteAuthor = {
  __typename?: "ImpactFundApplicationNoteAuthor";
  id: Scalars["BigInt"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  username: Scalars["String"]["output"];
};

export type ImpactFundApplicationNoteCreateInput = {
  applicationId: Scalars["BigInt"]["input"];
  body: Scalars["String"]["input"];
};

export type ImpactFundApplicationNoteUpdateInput = {
  body: Scalars["String"]["input"];
  noteId: Scalars["BigInt"]["input"];
};

export enum ImpactFundApplicationStatus {
  Accepted = "ACCEPTED",
  Canceled = "CANCELED",
  Disbursement = "DISBURSEMENT",
  Funded = "FUNDED",
  InfoRequested = "INFO_REQUESTED",
  InReview = "IN_REVIEW",
  Ongoing = "ONGOING",
  Pending = "PENDING",
  Rejected = "REJECTED",
  UnderEvaluation = "UNDER_EVALUATION",
}

export type ImpactFundApplicationUpdateInput = {
  applicationId: Scalars["BigInt"]["input"];
  fundingModel?: InputMaybe<ImpactFundApplicationFundingModel>;
  status?: InputMaybe<ImpactFundApplicationStatus>;
};

export type ImpactFundApplicationsGetResponse = {
  __typename?: "ImpactFundApplicationsGetResponse";
  applications: Array<ImpactFundApplication>;
  pagination?: Maybe<CursorPaginationResponse>;
  totalCount: Scalars["Int"]["output"];
};

export type ImpactFundApplicationsInput = {
  impactFundId: Scalars["BigInt"]["input"];
  pagination?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  statusIn?: InputMaybe<Array<ImpactFundApplicationStatus>>;
};

export type ImpactFundApplyInput = {
  impactFundId: Scalars["BigInt"]["input"];
  projectId: Scalars["BigInt"]["input"];
};

export type ImpactFundDashboardApplicationRow = {
  __typename?: "ImpactFundDashboardApplicationRow";
  amountAwardedInSats?: Maybe<Scalars["Int"]["output"]>;
  applicationId: Scalars["BigInt"]["output"];
  awardedAt?: Maybe<Scalars["Date"]["output"]>;
  contributionUuid?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  creator?: Maybe<ImpactFundDashboardCreator>;
  fieldPartner?: Maybe<ImpactFundDashboardCreator>;
  fundingModel: ImpactFundApplicationFundingModel;
  notes: Array<ImpactFundApplicationNote>;
  project: ImpactFundDashboardProject;
  projectPath: Scalars["String"]["output"];
  status: ImpactFundApplicationStatus;
};

export type ImpactFundDashboardApplicationsInput = {
  fundingModelIn?: InputMaybe<Array<ImpactFundApplicationFundingModel>>;
  impactFundId: Scalars["BigInt"]["input"];
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<ImpactFundDashboardApplicationsSort>;
  statusIn?: InputMaybe<Array<ImpactFundApplicationStatus>>;
};

export type ImpactFundDashboardApplicationsResponse = {
  __typename?: "ImpactFundDashboardApplicationsResponse";
  applications: Array<ImpactFundDashboardApplicationRow>;
  fundingSummary: Array<ImpactFundFundingSummaryRow>;
  pagination?: Maybe<CursorPaginationResponse>;
  totalCount: Scalars["Int"]["output"];
};

export enum ImpactFundDashboardApplicationsSort {
  AmountAwardedAsc = "AMOUNT_AWARDED_ASC",
  AmountAwardedDesc = "AMOUNT_AWARDED_DESC",
  Latest = "LATEST",
  Oldest = "OLDEST",
  StatusAsc = "STATUS_ASC",
  StatusDesc = "STATUS_DESC",
}

export type ImpactFundDashboardCreator = {
  __typename?: "ImpactFundDashboardCreator";
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  isIdentityVerified: Scalars["Boolean"]["output"];
  username: Scalars["String"]["output"];
};

export type ImpactFundDashboardProject = {
  __typename?: "ImpactFundDashboardProject";
  aonGoalAmount?: Maybe<Scalars["Int"]["output"]>;
  category?: Maybe<ProjectCategory>;
  country?: Maybe<Scalars["String"]["output"]>;
  countryCode?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  fundingStrategy: ProjectFundingStrategy;
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
  shortDescription?: Maybe<Scalars["String"]["output"]>;
  thumbnailImage?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type ImpactFundFieldPartnerLeaderboardInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactFundFieldPartnerLeaderboardResponse = {
  __typename?: "ImpactFundFieldPartnerLeaderboardResponse";
  rows: Array<ImpactFundFieldPartnerLeaderboardRow>;
};

export type ImpactFundFieldPartnerLeaderboardRow = {
  __typename?: "ImpactFundFieldPartnerLeaderboardRow";
  country: Scalars["String"]["output"];
  enabledContributionSats: Scalars["Int"]["output"];
  fieldPartner: Scalars["String"]["output"];
  fieldPartnerId: Scalars["BigInt"]["output"];
  projectsLaunched: Scalars["Int"]["output"];
  rank: Scalars["Int"]["output"];
};

export type ImpactFundFundingSummaryRow = {
  __typename?: "ImpactFundFundingSummaryRow";
  applicationsCount: Scalars["Int"]["output"];
  awardedTotalSats: Scalars["Int"]["output"];
  category?: Maybe<ProjectCategory>;
  fundingModel: ImpactFundApplicationFundingModel;
};

export type ImpactFundGetInput = {
  where: ImpactFundGetWhereInput;
};

export type ImpactFundGetWhereInput = {
  name: Scalars["String"]["input"];
};

export type ImpactFundLabifCountryEligibility = {
  __typename?: "ImpactFundLabifCountryEligibility";
  isEligible: Scalars["Boolean"]["output"];
};

export type ImpactFundMetrics = {
  __typename?: "ImpactFundMetrics";
  awardedTotalSats: Scalars["Int"]["output"];
  projectsFundedCount: Scalars["Int"]["output"];
};

export type ImpactFundSponsor = {
  __typename?: "ImpactFundSponsor";
  amountContributedInSats: Scalars["Int"]["output"];
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  impactFundId: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
  status: ImpactFundSponsorStatus;
  tier: ImpactFundSponsorTier;
  url?: Maybe<Scalars["String"]["output"]>;
};

export enum ImpactFundSponsorStatus {
  Archived = "ARCHIVED",
  Live = "LIVE",
}

export enum ImpactFundSponsorTier {
  Tier_1 = "TIER_1",
  Tier_2 = "TIER_2",
}

export enum ImpactFundStatus {
  Archived = "ARCHIVED",
  Live = "LIVE",
}

export type LeaderboardGlobalAmbassadorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars["Int"]["input"];
};

export type LeaderboardGlobalContributorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars["Int"]["input"];
};

export type LeaderboardGlobalCreatorsGetInput = {
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  /** The number of top contributors to return. */
  top: Scalars["Int"]["input"];
};

export type LeaderboardGlobalProjectsGetInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  fundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  /** The period to return the leaderboard for. */
  period: LeaderboardPeriod;
  region?: InputMaybe<Scalars["String"]["input"]>;
  subCategory?: InputMaybe<Scalars["String"]["input"]>;
  /** The number of top projects to return. */
  top: Scalars["Int"]["input"];
};

export enum LeaderboardPeriod {
  AllTime = "ALL_TIME",
  Month = "MONTH",
}

export enum LegalEntityType {
  Company = "COMPANY",
  NonProfit = "NON_PROFIT",
  Person = "PERSON",
}

export type LightningAddressConnectionDetails = {
  __typename?: "LightningAddressConnectionDetails";
  lightningAddress: Scalars["String"]["output"];
};

export type LightningAddressConnectionDetailsCreateInput = {
  lightningAddress: Scalars["String"]["input"];
};

export type LightningAddressConnectionDetailsUpdateInput = {
  lightningAddress: Scalars["String"]["input"];
};

export type LightningAddressContributionLimits = {
  __typename?: "LightningAddressContributionLimits";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
};

export type LightningAddressVerifyResponse = {
  __typename?: "LightningAddressVerifyResponse";
  limits?: Maybe<LightningAddressContributionLimits>;
  reason?: Maybe<Scalars["String"]["output"]>;
  valid: Scalars["Boolean"]["output"];
};

export enum LightningInvoiceStatus {
  Canceled = "CANCELED",
  Paid = "PAID",
  Unpaid = "UNPAID",
}

export type LightningPaymentDetails = {
  __typename?: "LightningPaymentDetails";
  lightningInvoiceId: Scalars["String"]["output"];
  lightningInvoiceStatus: LightningInvoiceStatus;
};

export type LightningPaymentMethods = {
  __typename?: "LightningPaymentMethods";
  bolt11: Scalars["Boolean"]["output"];
};

export type LightningToRskSwapPaymentDetails = {
  __typename?: "LightningToRskSwapPaymentDetails";
  claimPublicKey: Scalars["String"]["output"];
  refundPublicKey: Scalars["String"]["output"];
  swapClaimTxId?: Maybe<Scalars["String"]["output"]>;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
  swapPreimageHash: Scalars["String"]["output"];
  swapRefundTxId?: Maybe<Scalars["String"]["output"]>;
  swapServerLockTxId?: Maybe<Scalars["String"]["output"]>;
  swapUserLockTxId?: Maybe<Scalars["String"]["output"]>;
};

export type Location = {
  __typename?: "Location";
  country?: Maybe<Country>;
  region?: Maybe<Scalars["String"]["output"]>;
};

export enum MfaAction {
  Login = "LOGIN",
  ProjectWalletUpdate = "PROJECT_WALLET_UPDATE",
  UserEmailUpdate = "USER_EMAIL_UPDATE",
  UserEmailVerification = "USER_EMAIL_VERIFICATION",
}

export type ManagedCircularGrantPaymentMethods = {
  __typename?: "ManagedCircularGrantPaymentMethods";
  strikeLightning: Scalars["Boolean"]["output"];
  strikeOnChain: Scalars["Boolean"]["output"];
  stripe: Scalars["Boolean"]["output"];
};

export type Milestone = {
  __typename?: "Milestone";
  amount: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
  reached?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * Broadcast a creator-signed AON claim() transaction. Validates the signed tx targets the
   * project AON contract and calls claim with processingFee 0, then persists a project Payout +
   * RSK_AON_CLAIM Payment before broadcast.
   */
  aonClaimBroadcast: AonClaimBroadcastResponse;
  /**
   * Prepare an AON claim-to-EOA: returns claimable amount, creator address, and claim(0) calldata.
   * The creator signs client-side; the server does not sign claim.
   */
  aonClaimPrepare: AonClaimPrepareResponse;
  claimBadge: UserBadge;
  contributionCreate: ContributionMutationResponse;
  contributionEmailUpdate: Contribution;
  contributionPaymentsAdd: ContributionPaymentsAddResponse;
  /** @deprecated Use projectCreate instead */
  createProject: Project;
  createStripeConnectAccount: StripeConnectOnboardingPayload;
  creatorNotificationConfigurationValueUpdate?: Maybe<
    Scalars["Boolean"]["output"]
  >;
  disconnectStripeConnect: StripeConnectStatus;
  grantApply: GrantApplicant;
  impactFundApplicationFundingSet: ImpactFundApplication;
  impactFundApplicationNoteCreate: ImpactFundApplicationNote;
  impactFundApplicationNoteUpdate: ImpactFundApplicationNote;
  impactFundApplicationUpdate: ImpactFundApplication;
  impactFundApply: ImpactFundApplication;
  newsletterPreferencesUpdate: NewsletterPreferences;
  newsletterStatusUpdate: NewsletterPreferences;
  newsletterSubscribe: NewsletterPreferences;
  paymentCancel: PaymentCancelResponse;
  paymentConfirm: PaymentConfirmResponse;
  paymentFail: PaymentFailResponse;
  paymentFeeUpsert: PaymentFeeUpsertResponse;
  paymentInvoiceCancel: PaymentInvoiceCancelResponse;
  paymentPend: PaymentPendResponse;
  paymentRefundComplete: PaymentRefundCompleteResponse;
  paymentSetClaimable: PaymentSetClaimableResponse;
  paymentSetClaiming: PaymentSetClaimingResponse;
  paymentSetRefundable: PaymentSetRefundableResponse;
  paymentSetRefunded: PaymentSetRefundedResponse;
  paymentSetRefunding: PaymentSetRefundingResponse;
  paymentSwapClaimTxBroadcast: PaymentSwapClaimTxBroadcastResponse;
  paymentSwapClaimTxSet: PaymentSwapClaimTxSetResponse;
  paymentSwapRefundTxBroadcast: PaymentSwapRefundTxBroadcastResponse;
  paymentSwapRefundTxSet: PaymentSwapRefundTxSetResponse;
  /**
   * Initiate the payout from user's RSK address to swap contract.
   * Only used for retry flows (funds coming from user's RSK address after previous swap was refunded).
   */
  payoutCancel: PayoutResponse;
  payoutInitiate: PayoutInitiateResponse;
  payoutPaymentCreate: PayoutPaymentCreateResponse;
  /**
   * Initiate the payout to swap contract.
   * For AON this calls the contract; for Prism this broadcasts the user lock tx.
   */
  payoutPaymentInitiate: PayoutInitiateResponse;
  /**
   * Create a payment for a payout.
   * Can be used for both initial and retry flows - the backend auto-detects based on existing payments.
   */
  payoutPaymentPrepare: PayoutPaymentCreateResponse;
  payoutPrepare: PayoutRequestResponse;
  payoutRequest: PayoutRequestResponse;
  /** Cancel a pledge refund. */
  pledgeRefundCancel: PledgeRefundResponse;
  /**
   * Initiate the refund from AON contract to swap contract.
   * Only used for the initial flow (funds coming from AON contract).
   */
  pledgeRefundInitiate: PledgeRefundInitiateResponse;
  /**
   * Create a payment for a pledge refund.
   * Can be used for both initial and retry flows - the backend auto-detects based on existing payments.
   */
  pledgeRefundPaymentCreate: PledgeRefundPaymentCreateResponse;
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
  projectFollow: Scalars["Boolean"]["output"];
  projectGoalCreate: Array<ProjectGoal>;
  projectGoalDelete: ProjectGoalDeleteResponse;
  /** Only returns ProjectGoals that are in progress */
  projectGoalOrderingUpdate: Array<ProjectGoal>;
  projectGoalUpdate: ProjectGoal;
  projectMatchingCreate: ProjectMatching;
  projectMatchingDelete: ProjectMatchingDeleteResponse;
  projectMatchingUpdate: ProjectMatching;
  projectPreLaunch: Project;
  projectPublish: Project;
  projectPutInReview: Project;
  projectReviewRequest: ProjectReview;
  projectReviewSubmit: ProjectReview;
  projectRskEoaSet: Project;
  projectStatusUpdate: Project;
  projectStripeInterestNotify: StripeInterestNotifyResponse;
  projectSubscriptionPlanCreate: ProjectSubscriptionPlan;
  projectSubscriptionPlanDelete: Scalars["Boolean"]["output"];
  projectSubscriptionPlanUpdate: ProjectSubscriptionPlan;
  projectSubscriptionStart: RecurringContributionCheckoutResponse;
  projectUnfollow: Scalars["Boolean"]["output"];
  projectUpdate: Project;
  projectWalletConfigurationContributionAttemptNotify: ProjectWalletConfigurationContributionAttemptNotifyResponse;
  recurringContributionCancel: RecurringContribution;
  recurringContributionPortalSessionCreate: RecurringContributionPortalSession;
  recurringContributionRenewalCreate: RecurringContributionCheckoutResponse;
  recurringDonationCreate: RecurringContributionCheckoutResponse;
  refreshStripeConnectOnboardingLink: StripeConnectOnboardingPayload;
  /**
   * Sends an OTP to the user's email address and responds with a token that can be used, together with the OTP, to two-factor authenticate
   * a request made by the client.
   */
  sendOTPByEmail: OtpResponse;
  shippingAddressCreate: ShippingAddress;
  tagCreate: Tag;
  unlinkExternalAccount: User;
  /** @deprecated Use projectUpdate instead */
  updateProject: Project;
  updateUser: User;
  updateWalletState: Wallet;
  userAccountKeysUpdate: UserAccountKeys;
  userDelete: DeleteUserResponse;
  userEmailUpdate: User;
  userEmailVerify: Scalars["Boolean"]["output"];
  userNotificationConfigurationValueUpdate?: Maybe<
    Scalars["Boolean"]["output"]
  >;
  userTaxProfileUpdate: UserTaxProfile;
  userVerificationTokenGenerate: UserVerificationTokenGenerateResponse;
  userWalletWithdrawPaymentInitiate: UserWalletWithdrawInitiateResponse;
  userWalletWithdrawPaymentPrepare: UserWalletWithdrawPaymentCreateResponse;
  userWalletWithdrawPrepare: UserWalletWithdrawRequestResponse;
  walletCreate: Wallet;
  walletDelete: Scalars["Boolean"]["output"];
  /** This operation is currently not supported. */
  walletUpdate: Wallet;
};

export type MutationAonClaimBroadcastArgs = {
  projectId: Scalars["BigInt"]["input"];
  signedTxHex: Scalars["String"]["input"];
};

export type MutationAonClaimPrepareArgs = {
  projectId: Scalars["BigInt"]["input"];
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

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateStripeConnectAccountArgs = {
  projectId: Scalars["BigInt"]["input"];
  returnUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreatorNotificationConfigurationValueUpdateArgs = {
  creatorNotificationConfigurationId: Scalars["BigInt"]["input"];
  value: Scalars["String"]["input"];
};

export type MutationDisconnectStripeConnectArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type MutationGrantApplyArgs = {
  input?: InputMaybe<GrantApplyInput>;
};

export type MutationImpactFundApplicationFundingSetArgs = {
  input: ImpactFundApplicationFundingSetInput;
};

export type MutationImpactFundApplicationNoteCreateArgs = {
  input: ImpactFundApplicationNoteCreateInput;
};

export type MutationImpactFundApplicationNoteUpdateArgs = {
  input: ImpactFundApplicationNoteUpdateInput;
};

export type MutationImpactFundApplicationUpdateArgs = {
  input: ImpactFundApplicationUpdateInput;
};

export type MutationImpactFundApplyArgs = {
  input: ImpactFundApplyInput;
};

export type MutationNewsletterPreferencesUpdateArgs = {
  input: NewsletterPreferencesUpdateInput;
};

export type MutationNewsletterStatusUpdateArgs = {
  input: NewsletterStatusUpdateInput;
};

export type MutationNewsletterSubscribeArgs = {
  beehiivNewsletterInput: BeehiivNewsletterSubscribeInput;
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

export type MutationPaymentFeeUpsertArgs = {
  input: PaymentFeeUpsertInput;
};

export type MutationPaymentInvoiceCancelArgs = {
  invoiceId: Scalars["String"]["input"];
};

export type MutationPaymentPendArgs = {
  input: PaymentPendInput;
};

export type MutationPaymentRefundCompleteArgs = {
  input: PaymentRefundCompleteInput;
};

export type MutationPaymentSetClaimableArgs = {
  input: PaymentSetClaimableInput;
};

export type MutationPaymentSetClaimingArgs = {
  input: PaymentSetClaimingInput;
};

export type MutationPaymentSetRefundableArgs = {
  input: PaymentSetRefundableInput;
};

export type MutationPaymentSetRefundedArgs = {
  input: PaymentSetRefundedInput;
};

export type MutationPaymentSetRefundingArgs = {
  input: PaymentSetRefundingInput;
};

export type MutationPaymentSwapClaimTxBroadcastArgs = {
  input: PaymentSwapClaimTxBroadcastInput;
};

export type MutationPaymentSwapClaimTxSetArgs = {
  input: PaymentSwapClaimTxSetInput;
};

export type MutationPaymentSwapRefundTxBroadcastArgs = {
  input: PaymentSwapRefundTxBroadcastInput;
};

export type MutationPaymentSwapRefundTxSetArgs = {
  input: PaymentSwapRefundTxSetInput;
};

export type MutationPayoutCancelArgs = {
  input: PayoutCancelInput;
};

export type MutationPayoutInitiateArgs = {
  input: PayoutInitiateInput;
};

export type MutationPayoutPaymentCreateArgs = {
  input: PayoutPaymentCreateInput;
};

export type MutationPayoutPaymentInitiateArgs = {
  input: PayoutInitiateInput;
};

export type MutationPayoutPaymentPrepareArgs = {
  input: PayoutPaymentCreateInput;
};

export type MutationPayoutPrepareArgs = {
  input: PayoutRequestInput;
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

export type MutationPledgeRefundPaymentCreateArgs = {
  input: PledgeRefundPaymentCreateInput;
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
  id: Scalars["BigInt"]["input"];
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
  projectGoalId: Scalars["BigInt"]["input"];
};

export type MutationProjectGoalOrderingUpdateArgs = {
  input: ProjectGoalOrderingUpdateInput;
};

export type MutationProjectGoalUpdateArgs = {
  input: ProjectGoalUpdateInput;
};

export type MutationProjectMatchingCreateArgs = {
  input: ProjectMatchingCreateInput;
};

export type MutationProjectMatchingDeleteArgs = {
  input: ProjectMatchingDeleteInput;
};

export type MutationProjectMatchingUpdateArgs = {
  input: ProjectMatchingUpdateInput;
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

export type MutationProjectRskEoaSetArgs = {
  input: ProjectRskEoaSetInput;
};

export type MutationProjectStatusUpdateArgs = {
  input: ProjectStatusUpdate;
};

export type MutationProjectStripeInterestNotifyArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type MutationProjectSubscriptionPlanCreateArgs = {
  input: CreateProjectSubscriptionPlanInput;
};

export type MutationProjectSubscriptionPlanDeleteArgs = {
  id: Scalars["BigInt"]["input"];
};

export type MutationProjectSubscriptionPlanUpdateArgs = {
  input: UpdateProjectSubscriptionPlanInput;
};

export type MutationProjectSubscriptionStartArgs = {
  input: ProjectSubscriptionStartInput;
};

export type MutationProjectUnfollowArgs = {
  input: ProjectFollowMutationInput;
};

export type MutationProjectUpdateArgs = {
  input: UpdateProjectInput;
};

export type MutationProjectWalletConfigurationContributionAttemptNotifyArgs = {
  input: ProjectWalletConfigurationContributionAttemptNotifyInput;
};

export type MutationRecurringContributionCancelArgs = {
  input: RecurringContributionCancelInput;
};

export type MutationRecurringContributionPortalSessionCreateArgs = {
  input: RecurringContributionPortalSessionCreateInput;
};

export type MutationRecurringContributionRenewalCreateArgs = {
  input: RecurringContributionRenewalCreateInput;
};

export type MutationRecurringDonationCreateArgs = {
  input: RecurringDonationCreateInput;
};

export type MutationRefreshStripeConnectOnboardingLinkArgs = {
  projectId: Scalars["BigInt"]["input"];
  returnUrl?: InputMaybe<Scalars["String"]["input"]>;
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
  id: Scalars["BigInt"]["input"];
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

export type MutationUserEmailUpdateArgs = {
  input: UserEmailUpdateInput;
};

export type MutationUserEmailVerifyArgs = {
  input: EmailVerifyInput;
};

export type MutationUserNotificationConfigurationValueUpdateArgs = {
  userNotificationConfigurationId: Scalars["BigInt"]["input"];
  value: Scalars["String"]["input"];
};

export type MutationUserTaxProfileUpdateArgs = {
  input: UserTaxProfileUpdateInput;
};

export type MutationUserVerificationTokenGenerateArgs = {
  input: UserVerificationTokenGenerateInput;
};

export type MutationUserWalletWithdrawPaymentInitiateArgs = {
  input: UserWalletWithdrawInitiateInput;
};

export type MutationUserWalletWithdrawPaymentPrepareArgs = {
  input: UserWalletWithdrawPaymentCreateInput;
};

export type MutationWalletCreateArgs = {
  input: CreateWalletInput;
};

export type MutationWalletDeleteArgs = {
  id: Scalars["BigInt"]["input"];
};

export type MutationWalletUpdateArgs = {
  input: UpdateWalletInput;
};

export type MutationResponse = {
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type NewsletterPreferences = {
  __typename?: "NewsletterPreferences";
  email: Scalars["String"]["output"];
  newsletterMonthly: Scalars["Boolean"]["output"];
  productUpdates: Scalars["Boolean"]["output"];
  projectSpotlights: Scalars["Boolean"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
};

export type NewsletterPreferencesUpdateInput = {
  newsletterMonthly?: InputMaybe<Scalars["Boolean"]["input"]>;
  productUpdates?: InputMaybe<Scalars["Boolean"]["input"]>;
  projectSpotlights?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId: Scalars["BigInt"]["input"];
};

export type NewsletterStatusUpdateInput = {
  isActive: Scalars["Boolean"]["input"];
  userId: Scalars["BigInt"]["input"];
};

export enum NotificationChannel {
  Email = "EMAIL",
}

export type NotificationConfiguration = {
  __typename?: "NotificationConfiguration";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  type?: Maybe<SettingValueType>;
  value: Scalars["String"]["output"];
};

export type NotificationSettings = {
  __typename?: "NotificationSettings";
  channel?: Maybe<NotificationChannel>;
  configurations: Array<NotificationConfiguration>;
  isEnabled: Scalars["Boolean"]["output"];
  notificationType: Scalars["String"]["output"];
};

export type OtpInput = {
  otp: Scalars["Int"]["input"];
  otpVerificationToken: Scalars["String"]["input"];
};

export type OtpLoginInput = {
  otp: Scalars["Int"]["input"];
  otpVerificationToken: Scalars["String"]["input"];
};

export type OtpResponse = {
  __typename?: "OTPResponse";
  /** Expiration time of the OTP. Can be used to display a countdown to the user. */
  expiresAt: Scalars["Date"]["output"];
  /** Encrypted token containing the OTP 2FA details, such as the action to be authorised and the factor used (eg: email). */
  otpVerificationToken: Scalars["String"]["output"];
};

export type OffsetBasedPaginationInput = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OnChainPaymentMethods = {
  __typename?: "OnChainPaymentMethods";
  boltzSwap: Scalars["Boolean"]["output"];
  native: Scalars["Boolean"]["output"];
};

export type OnChainToLightningSwapPaymentDetails = {
  __typename?: "OnChainToLightningSwapPaymentDetails";
  lightningInvoiceId: Scalars["String"]["output"];
  lightningInvoiceStatus: LightningInvoiceStatus;
  onChainAddress: Scalars["String"]["output"];
  onChainTxId?: Maybe<Scalars["String"]["output"]>;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
};

export type OnChainToRskSwapPaymentDetails = {
  __typename?: "OnChainToRskSwapPaymentDetails";
  onChainAddress: Scalars["String"]["output"];
  onChainTxId?: Maybe<Scalars["String"]["output"]>;
  swapClaimTxId?: Maybe<Scalars["String"]["output"]>;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
  swapPreimageHash: Scalars["String"]["output"];
  swapRefundTxId?: Maybe<Scalars["String"]["output"]>;
  swapServerLockTxId?: Maybe<Scalars["String"]["output"]>;
  swapUserLockTxId?: Maybe<Scalars["String"]["output"]>;
};

export type Order = {
  __typename?: "Order";
  confirmedAt?: Maybe<Scalars["Date"]["output"]>;
  contribution: Contribution;
  createdAt: Scalars["Date"]["output"];
  deliveredAt?: Maybe<Scalars["Date"]["output"]>;
  id: Scalars["BigInt"]["output"];
  items: Array<OrderItem>;
  itemsTotalInSats: Scalars["Int"]["output"];
  project: Project;
  referenceCode: Scalars["String"]["output"];
  shippedAt?: Maybe<Scalars["Date"]["output"]>;
  shippingAddress?: Maybe<ShippingAddress>;
  shippingFeeTotalInSats: Scalars["Int"]["output"];
  status: Scalars["String"]["output"];
  totalInSats: Scalars["Int"]["output"];
  updatedAt: Scalars["Date"]["output"];
  user?: Maybe<User>;
};

export enum OrderByDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum OrderByOptions {
  Asc = "asc",
  Desc = "desc",
}

export type OrderItem = {
  __typename?: "OrderItem";
  item: ProjectReward;
  quantity: Scalars["Int"]["output"];
  unitPriceInSats: Scalars["Int"]["output"];
};

export type OrdersGetInput = {
  orderBy?: InputMaybe<Array<OrdersGetOrderByInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: OrdersGetWhereInput;
};

export enum OrdersGetOrderByField {
  ConfirmedAt = "confirmedAt",
  DeliveredAt = "deliveredAt",
  ShippedAt = "shippedAt",
}

export type OrdersGetOrderByInput = {
  direction: OrderByDirection;
  field: OrdersGetOrderByField;
};

export type OrdersGetResponse = {
  __typename?: "OrdersGetResponse";
  orders: Array<Order>;
  pagination?: Maybe<CursorPaginationResponse>;
};

export enum OrdersGetStatus {
  AwaitingPayment = "AWAITING_PAYMENT",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Shipped = "SHIPPED",
}

export type OrdersGetWhereInput = {
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  status?: InputMaybe<OrdersGetStatus>;
  userId?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type OrdersStatsBase = {
  __typename?: "OrdersStatsBase";
  projectRewards: ProjectRewardsStats;
  projectRewardsGroupedByProjectRewardId: Array<ProjectRewardsGroupedByRewardIdStats>;
};

export type Owner = {
  __typename?: "Owner";
  id: Scalars["BigInt"]["output"];
  user: User;
};

export type OwnerOf = {
  __typename?: "OwnerOf";
  owner?: Maybe<Owner>;
  project?: Maybe<Project>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PageViewCountGraph = {
  __typename?: "PageViewCountGraph";
  dateTime: Scalars["Date"]["output"];
  viewCount: Scalars["Int"]["output"];
  visitorCount: Scalars["Int"]["output"];
};

export type PaginationCursor = {
  __typename?: "PaginationCursor";
  id?: Maybe<Scalars["BigInt"]["output"]>;
};

/** Cursor pagination input. */
export type PaginationInput = {
  cursor?: InputMaybe<CursorInput>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Payment = {
  __typename?: "Payment";
  accountingAmountDue: Scalars["Int"]["output"];
  accountingAmountPaid: Scalars["Int"]["output"];
  ambassadorUserId?: Maybe<Scalars["BigInt"]["output"]>;
  baseAccountingAmount: Scalars["Int"]["output"];
  canceledAt?: Maybe<Scalars["Date"]["output"]>;
  contributionPodcastKeysendId?: Maybe<Scalars["BigInt"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  failureReason?: Maybe<Scalars["String"]["output"]>;
  fees: Array<PaymentFee>;
  id: Scalars["BigInt"]["output"];
  linkedEntityType: PaymentLinkedEntityType;
  linkedEntityUUID: Scalars["String"]["output"];
  method?: Maybe<Scalars["String"]["output"]>;
  paidAt?: Maybe<Scalars["Date"]["output"]>;
  paymentAmount: Scalars["Int"]["output"];
  paymentCurrency: PaymentCurrency;
  paymentDetails: PaymentDetails;
  paymentType: PaymentType;
  payoutAmount: Scalars["Int"]["output"];
  payoutCurrency: PayoutCurrency;
  projectId?: Maybe<Scalars["BigInt"]["output"]>;
  status: PaymentStatus;
  updatedAt: Scalars["Date"]["output"];
  userSubscriptionId?: Maybe<Scalars["BigInt"]["output"]>;
  uuid: Scalars["String"]["output"];
  version: Scalars["Int"]["output"];
};

export type PaymentCancelInput = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
  swapStatus?: InputMaybe<Scalars["String"]["input"]>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentCancelResponse = {
  __typename?: "PaymentCancelResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentConfirmInput = {
  amount: Scalars["Int"]["input"];
  amountCurrency: AmountCurrency;
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
  subscription?: InputMaybe<SubscriptionPaymentConfirmationInput>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentConfirmResponse = {
  __typename?: "PaymentConfirmResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export enum PaymentCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type PaymentDetails =
  | FiatPaymentDetails
  | FiatToLightningSwapPaymentDetails
  | LightningPaymentDetails
  | LightningToRskSwapPaymentDetails
  | OnChainToLightningSwapPaymentDetails
  | OnChainToRskSwapPaymentDetails
  | RskAonClaimPaymentDetails
  | RskNativeTransferPaymentDetails
  | RskToLightningSwapPaymentDetails
  | RskToOnChainSwapPaymentDetails
  | StrikePaymentDetails;

export type PaymentFailInput = {
  failureReason?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
  swapStatus?: InputMaybe<Scalars["String"]["input"]>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentFailResponse = {
  __typename?: "PaymentFailResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentFee = {
  __typename?: "PaymentFee";
  description?: Maybe<Scalars["String"]["output"]>;
  external?: Maybe<Scalars["Boolean"]["output"]>;
  feeAmount: Scalars["Int"]["output"];
  feeCurrency: FeeCurrency;
  feePayer?: Maybe<PaymentFeePayer>;
  feeType?: Maybe<PaymentFeeType>;
};

export enum PaymentFeePayer {
  Contributor = "CONTRIBUTOR",
  Creator = "CREATOR",
  Geyser = "GEYSER",
}

export enum PaymentFeeType {
  AffiliatePartner = "AFFILIATE_PARTNER",
  Ambassador = "AMBASSADOR",
  Partner = "PARTNER",
  Payment = "PAYMENT",
  Platform = "PLATFORM",
  Promotion = "PROMOTION",
  Shipping = "SHIPPING",
  Tip = "TIP",
}

export type PaymentFeeUpsertInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  external?: InputMaybe<Scalars["Boolean"]["input"]>;
  feeAmount: Scalars["Int"]["input"];
  feeCurrency: FeeCurrency;
  feePayer: PaymentFeePayer;
  feeType: PaymentFeeType;
  paymentId: Scalars["BigInt"]["input"];
};

export type PaymentFeeUpsertResponse = {
  __typename?: "PaymentFeeUpsertResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentGetInput = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
  onChainSwapId?: InputMaybe<Scalars["String"]["input"]>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentInvoiceCancelResponse = {
  __typename?: "PaymentInvoiceCancelResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export enum PaymentInvoiceSanctionCheckStatus {
  Failed = "FAILED",
  Passed = "PASSED",
  Pending = "PENDING",
}

export type PaymentInvoiceSanctionCheckStatusGetInput = {
  invoiceId: Scalars["String"]["input"];
};

export type PaymentInvoiceSanctionCheckStatusResponse = {
  __typename?: "PaymentInvoiceSanctionCheckStatusResponse";
  status: PaymentInvoiceSanctionCheckStatus;
};

export enum PaymentLinkedEntityType {
  AffiliatePartnerPayout = "AFFILIATE_PARTNER_PAYOUT",
  AmbassadorPayout = "AMBASSADOR_PAYOUT",
  Contribution = "CONTRIBUTION",
  ContributionPodcastKeysend = "CONTRIBUTION_PODCAST_KEYSEND",
  Payout = "PAYOUT",
  PledgeRefund = "PLEDGE_REFUND",
  UserWalletWithdraw = "USER_WALLET_WITHDRAW",
}

export type PaymentMethods = {
  __typename?: "PaymentMethods";
  bitcoin: BitcoinPaymentMethods;
  fiat: FiatPaymentMethods;
  managedCircularGrant: ManagedCircularGrantPaymentMethods;
};

export type PaymentPendInput = {
  amount: Scalars["Int"]["input"];
  amountCurrency: AmountCurrency;
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
  swap?: InputMaybe<PaymentPendSwapInput>;
  uuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentPendResponse = {
  __typename?: "PaymentPendResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentPendSwapInput = {
  swapServerLockTxId?: InputMaybe<Scalars["String"]["input"]>;
  swapUserLockTxId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentRecoveryByContributionInput = {
  contributionUuid: Scalars["String"]["input"];
};

export type PaymentRecoveryByContributionResponse = {
  __typename?: "PaymentRecoveryByContributionResponse";
  contribution: Contribution;
  payments: Array<PaymentRecoveryPayment>;
  project: Project;
};

export type PaymentRecoveryPayment = {
  __typename?: "PaymentRecoveryPayment";
  amount: Scalars["Int"]["output"];
  id: Scalars["BigInt"]["output"];
  paymentType: PaymentType;
  status: PaymentStatus;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
  uuid: Scalars["String"]["output"];
};

export type PaymentRefund = {
  __typename?: "PaymentRefund";
  amount: Scalars["Int"]["output"];
  id: Scalars["BigInt"]["output"];
  status: PaymentRefundStatus;
};

export type PaymentRefundCompleteInput = {
  paymentRefundId: Scalars["BigInt"]["input"];
};

export type PaymentRefundCompleteResponse = {
  __typename?: "PaymentRefundCompleteResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export enum PaymentRefundStatus {
  Completed = "COMPLETED",
  Pending = "PENDING",
}

export type PaymentRefundsGetResponse = {
  __typename?: "PaymentRefundsGetResponse";
  refunds: Array<PaymentRefund>;
};

export type PaymentSetClaimableInput = {
  paymentId: Scalars["BigInt"]["input"];
};

export type PaymentSetClaimableResponse = {
  __typename?: "PaymentSetClaimableResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentSetClaimingInput = {
  paymentId: Scalars["BigInt"]["input"];
  /** Optional swap claim transaction ID. If provided, will be set on the payment's swap details. */
  swapClaimTxId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSetClaimingResponse = {
  __typename?: "PaymentSetClaimingResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentSetRefundableInput = {
  failureReason?: InputMaybe<Scalars["String"]["input"]>;
  paymentId: Scalars["BigInt"]["input"];
};

export type PaymentSetRefundableResponse = {
  __typename?: "PaymentSetRefundableResponse";
  id: Scalars["BigInt"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type PaymentSetRefundedInput = {
  paymentId: Scalars["BigInt"]["input"];
};

export type PaymentSetRefundedResponse = {
  __typename?: "PaymentSetRefundedResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentSetRefundingInput = {
  paymentId: Scalars["BigInt"]["input"];
  /** Optional swap refund transaction ID. If provided, will be set on the payment's swap details. */
  swapRefundTxId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSetRefundingResponse = {
  __typename?: "PaymentSetRefundingResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export enum PaymentStatus {
  Canceled = "CANCELED",
  Claimable = "CLAIMABLE",
  Claiming = "CLAIMING",
  Failed = "FAILED",
  Paid = "PAID",
  PartiallyPaid = "PARTIALLY_PAID",
  Pending = "PENDING",
  Refundable = "REFUNDABLE",
  Refunded = "REFUNDED",
  Refunding = "REFUNDING",
  Unpaid = "UNPAID",
}

export type PaymentStatusUpdatedInput = {
  contributionUUID?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSwapClaimTxBroadcastInput = {
  paymentId: Scalars["BigInt"]["input"];
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSwapClaimTxBroadcastResponse = {
  __typename?: "PaymentSwapClaimTxBroadcastResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
  txHash?: Maybe<Scalars["String"]["output"]>;
};

export type PaymentSwapClaimTxSetInput = {
  claimTxCallDataHex?: InputMaybe<Scalars["String"]["input"]>;
  paymentId: Scalars["BigInt"]["input"];
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSwapClaimTxSetResponse = {
  __typename?: "PaymentSwapClaimTxSetResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type PaymentSwapRefundTxBroadcastInput = {
  paymentId: Scalars["BigInt"]["input"];
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSwapRefundTxBroadcastResponse = {
  __typename?: "PaymentSwapRefundTxBroadcastResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
  txHash?: Maybe<Scalars["String"]["output"]>;
};

export type PaymentSwapRefundTxSetInput = {
  paymentId: Scalars["BigInt"]["input"];
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentSwapRefundTxSetResponse = {
  __typename?: "PaymentSwapRefundTxSetResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export enum PaymentType {
  Fiat = "FIAT",
  FiatToLightningSwap = "FIAT_TO_LIGHTNING_SWAP",
  Lightning = "LIGHTNING",
  LightningPodcastKeysend = "LIGHTNING_PODCAST_KEYSEND",
  LightningToRskSwap = "LIGHTNING_TO_RSK_SWAP",
  OnChain = "ON_CHAIN",
  OnChainToLightningSwap = "ON_CHAIN_TO_LIGHTNING_SWAP",
  OnChainToRskSwap = "ON_CHAIN_TO_RSK_SWAP",
  RskAonClaim = "RSK_AON_CLAIM",
  RskNativeTransfer = "RSK_NATIVE_TRANSFER",
  RskToLightningSwap = "RSK_TO_LIGHTNING_SWAP",
  RskToOnChainSwap = "RSK_TO_ON_CHAIN_SWAP",
}

export type PaymentsGetInput = {
  orderBy?: InputMaybe<PaymentsGetOrderByInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<PaymentsGetWhereInput>;
};

export type PaymentsGetOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type PaymentsGetResponse = {
  __typename?: "PaymentsGetResponse";
  pagination?: Maybe<CursorPaginationResponse>;
  payments: Array<Payment>;
};

export type PaymentsGetWhereInput = {
  linkedEntityUUID?: InputMaybe<Scalars["String"]["input"]>;
  paymentType?: InputMaybe<Array<PaymentType>>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  status?: InputMaybe<PaymentStatus>;
};

export type PaymentsInProgressGetResponse = {
  __typename?: "PaymentsInProgressGetResponse";
  payments: Array<Payment>;
};

export type Payout = {
  __typename?: "Payout";
  amount: Scalars["Int"]["output"];
  expiresAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  payments: Array<Payment>;
  status: PayoutStatus;
  uuid: Scalars["String"]["output"];
};

export type PayoutCancelInput = {
  payoutId: Scalars["BigInt"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PayoutContractType {
  Aon = "AON",
  Prism = "PRISM",
}

export enum PayoutCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type PayoutFeeSummary = {
  __typename?: "PayoutFeeSummary";
  currency: FeeCurrency;
  items: Array<PayoutFeeSummaryItem>;
  totalAmount: Scalars["Int"]["output"];
};

export type PayoutFeeSummaryItem = {
  __typename?: "PayoutFeeSummaryItem";
  amount: Scalars["Int"]["output"];
  currency: FeeCurrency;
  description?: Maybe<Scalars["String"]["output"]>;
  feeType: PaymentFeeType;
};

export type PayoutGetInput = {
  payoutId?: InputMaybe<Scalars["BigInt"]["input"]>;
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PayoutGetResponse = {
  __typename?: "PayoutGetResponse";
  payout: Payout;
  payoutMetadata: PayoutMetadata;
};

export type PayoutInitiateInput = {
  /** The call data to initiate the payout (AON only; optional for native transfers). */
  callDataHex?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional: The claim transaction hex (for RSK to on-chain swaps only) */
  claimTxHex?: InputMaybe<Scalars["String"]["input"]>;
  paymentId: Scalars["BigInt"]["input"];
  payoutId: Scalars["BigInt"]["input"];
  /** The RSK address of the creator (optional, for storing in payment for later refund if needed) */
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** The signature of the creator for RBTC payment (required for swap payouts; optional for native transfers) */
  signature?: InputMaybe<Scalars["String"]["input"]>;
  /** Signed native RBTC transfer transaction hex (required for RSK_NATIVE_TRANSFER payouts) */
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional: The user lock transaction hex (required for Prism swap payouts) */
  userLockTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PayoutInitiateResponse = {
  __typename?: "PayoutInitiateResponse";
  payout: Payout;
  txHash: Scalars["String"]["output"];
};

export type PayoutMetadata = {
  __typename?: "PayoutMetadata";
  aonContractAddress?: Maybe<Scalars["String"]["output"]>;
  contractType: PayoutContractType;
  feeSummary: PayoutFeeSummary;
  nonce: Scalars["Int"]["output"];
  projectKey?: Maybe<Scalars["String"]["output"]>;
  requiresUserLockTx: Scalars["Boolean"]["output"];
  swapContractAddress: Scalars["String"]["output"];
};

export type PayoutPaymentCreateInput = {
  payoutId: Scalars["BigInt"]["input"];
  /** The payment details to create the payment. */
  payoutPaymentInput: PayoutPaymentInput;
};

export type PayoutPaymentCreateResponse = {
  __typename?: "PayoutPaymentCreateResponse";
  payment: Payment;
  payout: Payout;
  swap?: Maybe<Scalars["String"]["output"]>;
};

/**
 * Reuses RskToLightningSwapPaymentDetailsInput and RskToOnChainSwapPaymentDetailsInput
 * defined in pledgeRefund.ts - they are the same for both payout and pledge refund flows.
 */
export type PayoutPaymentInput = {
  rskNativeTransfer?: InputMaybe<RskNativeTransferPaymentDetailsInput>;
  rskToLightningSwap?: InputMaybe<RskToLightningSwapPaymentDetailsInput>;
  rskToOnChainSwap?: InputMaybe<RskToOnChainSwapPaymentDetailsInput>;
};

export type PayoutRequestInput = {
  /** Use this field to request a batch payout for all contributions in a project (only available for logged in users) */
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export type PayoutRequestResponse = {
  __typename?: "PayoutRequestResponse";
  payout: Payout;
  payoutMetadata: PayoutMetadata;
};

export type PayoutResponse = {
  __typename?: "PayoutResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export enum PayoutStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Expired = "EXPIRED",
  Failed = "FAILED",
  Pending = "PENDING",
  Processing = "PROCESSING",
}

export type PledgeRefund = {
  __typename?: "PledgeRefund";
  amount: Scalars["Int"]["output"];
  expiresAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  payments: Array<Payment>;
  project: Project;
  status: PledgeRefundStatus;
};

export type PledgeRefundCancelInput = {
  pledgeRefundId: Scalars["BigInt"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type PledgeRefundGetInput = {
  pledgeRefundId?: InputMaybe<Scalars["BigInt"]["input"]>;
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
  swapId?: InputMaybe<Scalars["String"]["input"]>;
};

export type PledgeRefundGetResponse = {
  __typename?: "PledgeRefundGetResponse";
  refund: PledgeRefund;
  refundMetadata: PledgeRefundMetadata;
};

export type PledgeRefundInitiateInput = {
  /** The call data to initiate the refund. */
  callDataHex: Scalars["String"]["input"];
  /** Optional: The claim transaction hex (for RSK to on-chain swaps only) */
  claimTxHex?: InputMaybe<Scalars["String"]["input"]>;
  pledgeRefundId: Scalars["BigInt"]["input"];
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** The signature of the contributor for RBTC payment */
  signature: Scalars["String"]["input"];
  /** Optional: The user lock transaction hex (for setting in payment details) */
  userLockTxHex?: InputMaybe<Scalars["String"]["input"]>;
};

export type PledgeRefundInitiateResponse = {
  __typename?: "PledgeRefundInitiateResponse";
  refund: PledgeRefund;
  txHash: Scalars["String"]["output"];
};

export type PledgeRefundMetadata = {
  __typename?: "PledgeRefundMetadata";
  aonContractAddress: Scalars["String"]["output"];
  nonce: Scalars["Int"]["output"];
  swapContractAddress: Scalars["String"]["output"];
};

export type PledgeRefundPaymentCreateInput = {
  pledgeRefundId: Scalars["BigInt"]["input"];
  /** The payment details to create the payment. */
  pledgeRefundPaymentInput: PledgeRefundPaymentInput;
  /** The RSK address of the contributor (required for anonymous contributors on retry) */
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** The RSK public key of the contributor (required for anonymous contributors on retry) */
  rskPublicKey?: InputMaybe<Scalars["String"]["input"]>;
};

export type PledgeRefundPaymentCreateResponse = {
  __typename?: "PledgeRefundPaymentCreateResponse";
  payment: Payment;
  refund: PledgeRefund;
  swap?: Maybe<Scalars["String"]["output"]>;
};

export type PledgeRefundPaymentInput = {
  rskToLightningSwap?: InputMaybe<RskToLightningSwapPaymentDetailsInput>;
  rskToOnChainSwap?: InputMaybe<RskToOnChainSwapPaymentDetailsInput>;
};

export type PledgeRefundRequestInput = {
  /** Use this field to request a refund for a single contribution. */
  contributionUuid?: InputMaybe<Scalars["String"]["input"]>;
  /** Use this field to request a batch refund for all contributions in a project (only available for logged in users) */
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** The RSK address of the contributor (for anonymous contributions) */
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export type PledgeRefundRequestResponse = {
  __typename?: "PledgeRefundRequestResponse";
  refund: PledgeRefund;
  refundMetadata: PledgeRefundMetadata;
  refundProcessingFee: Scalars["Int"]["output"];
};

export type PledgeRefundResponse = {
  __typename?: "PledgeRefundResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export enum PledgeRefundStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Expired = "EXPIRED",
  Failed = "FAILED",
  Pending = "PENDING",
  Processing = "PROCESSING",
}

export type PledgeRefundsGetResponse = {
  __typename?: "PledgeRefundsGetResponse";
  refunds: Array<PledgeRefund>;
};

export type PodcastKeysendContributionCreateInput = {
  amount: Scalars["Int"]["input"];
  appName: Scalars["String"]["input"];
  comment?: InputMaybe<Scalars["String"]["input"]>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  externalUsername?: InputMaybe<Scalars["String"]["input"]>;
  paidAt: Scalars["Date"]["input"];
  privateComment?: InputMaybe<Scalars["String"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
};

export type PodcastKeysendContributionCreateResponse = {
  __typename?: "PodcastKeysendContributionCreateResponse";
  id: Scalars["BigInt"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Post = {
  __typename?: "Post";
  /** Total amount of satoshis funded from the Post's page. */
  amountFunded: Scalars["Int"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  /** Contributions that were created from the Post's page. */
  contributions: Array<Contribution>;
  createdAt: Scalars["String"]["output"];
  /** User that created the Post. */
  creator: User;
  /** Short description of the Post. */
  description: Scalars["String"]["output"];
  /** Number of funders that were created from the Post's page. */
  fundersCount: Scalars["Int"]["output"];
  id: Scalars["BigInt"]["output"];
  /** Header image of the Post. */
  image?: Maybe<Scalars["String"]["output"]>;
  markdown?: Maybe<Scalars["String"]["output"]>;
  postType?: Maybe<PostType>;
  /** Project within which the Post was created. */
  project?: Maybe<Project>;
  /** Goals linked to this Post. */
  projectGoals: ProjectGoals;
  /** Rewards linked to this Post. */
  projectRewards: Array<ProjectReward>;
  publishedAt?: Maybe<Scalars["String"]["output"]>;
  /** Date when the Post was sent by email. */
  sentByEmailAt?: Maybe<Scalars["Date"]["output"]>;
  status: PostStatus;
  /** Title of the Post. */
  title: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type PostCreateInput = {
  /** Short description of the Post. */
  description: Scalars["String"]["input"];
  /** Header image of the Post. */
  image?: InputMaybe<Scalars["String"]["input"]>;
  markdown?: InputMaybe<Scalars["String"]["input"]>;
  postType?: InputMaybe<PostType>;
  projectGoalIds: Array<Scalars["BigInt"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
  projectRewardUUIDs: Array<Scalars["String"]["input"]>;
  /** Title of the Post. */
  title: Scalars["String"]["input"];
};

export type PostEmailSegmentSizeGetInput = {
  emailSendOptions: EmailSendOptionsInput;
  projectId: Scalars["BigInt"]["input"];
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
  projectId?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type PostPublishInput = {
  emailSendOptions?: InputMaybe<EmailSendOptionsInput>;
  postId: Scalars["BigInt"]["input"];
};

export type PostPublishedSubscriptionResponse = {
  __typename?: "PostPublishedSubscriptionResponse";
  post: Post;
};

export type PostSendByEmailInput = {
  emailSendOptions: EmailSendOptionsInput;
  postId: Scalars["BigInt"]["input"];
};

export type PostSendByEmailResponse = {
  __typename?: "PostSendByEmailResponse";
  recipientCount?: Maybe<Scalars["Int"]["output"]>;
};

export enum PostStatus {
  Deleted = "deleted",
  Published = "published",
  Unpublished = "unpublished",
}

export enum PostType {
  Announcement = "ANNOUNCEMENT",
  BehindTheScenes = "BEHIND_THE_SCENES",
  FeedbackRequest = "FEEDBACK_REQUEST",
  GoalReached = "GOAL_REACHED",
  GoalUpdate = "GOAL_UPDATE",
  Impact = "IMPACT",
  NewGoal = "NEW_GOAL",
  NewReward = "NEW_REWARD",
  RewardUpdate = "REWARD_UPDATE",
}

export type PostUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Header image of the Post. */
  image?: InputMaybe<Scalars["String"]["input"]>;
  markdown?: InputMaybe<Scalars["String"]["input"]>;
  postId: Scalars["BigInt"]["input"];
  postType?: InputMaybe<PostType>;
  projectGoalIds: Array<Scalars["BigInt"]["input"]>;
  projectRewardUUIDs: Array<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PrivateCommentPrompt {
  LightningAddress = "LIGHTNING_ADDRESS",
  NostrNpub = "NOSTR_NPUB",
  ProjectRewardSpecs = "PROJECT_REWARD_SPECS",
}

export type ProfileNotificationSettings = {
  __typename?: "ProfileNotificationSettings";
  creatorSettings: Array<CreatorNotificationSettings>;
  userSettings: UserNotificationSettings;
};

export type Project = {
  __typename?: "Project";
  activeMatching?: Maybe<ProjectMatching>;
  ambassadors: ProjectAmbassadorsConnection;
  aonGoal?: Maybe<ProjectAonGoal>;
  /** Total amount raised by the project, in satoshis. */
  balance: Scalars["Int"]["output"];
  balanceUsdCent: Scalars["Int"]["output"];
  /** Boolean flag to indicate if the project can be deleted. */
  canDelete: Scalars["Boolean"]["output"];
  category?: Maybe<ProjectCategory>;
  contributions: Array<Contribution>;
  contributionsCount?: Maybe<Scalars["Int"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  defaultGoalId?: Maybe<Scalars["BigInt"]["output"]>;
  /** Description of the project. */
  description?: Maybe<Scalars["String"]["output"]>;
  directPaymentDetails?: Maybe<DirectPaymentDetails>;
  entriesCount?: Maybe<Scalars["Int"]["output"]>;
  fieldPartner?: Maybe<User>;
  followers: Array<User>;
  followersCount?: Maybe<Scalars["Int"]["output"]>;
  funders: Array<Funder>;
  fundersCount?: Maybe<Scalars["Int"]["output"]>;
  /** Funding strategy */
  fundingStrategy?: Maybe<ProjectFundingStrategy>;
  fundingSummary: ProjectFundingSummary;
  goalsCount?: Maybe<Scalars["Int"]["output"]>;
  /** Returns the project's grant applications. */
  grantApplications: Array<GrantApplicant>;
  id: Scalars["BigInt"]["output"];
  /** Project header images. */
  images: Array<Scalars["String"]["output"]>;
  impactFundRecipient?: Maybe<ProjectImpactFundRecipient>;
  isCircularGrant: Scalars["Boolean"]["output"];
  lastCreationStep: ProjectCreationStep;
  launchScheduledAt?: Maybe<Scalars["Date"]["output"]>;
  launchedAt?: Maybe<Scalars["Date"]["output"]>;
  links: Array<Scalars["String"]["output"]>;
  location?: Maybe<Location>;
  matchings: Array<ProjectMatching>;
  /** @deprecated milestones are deprecated, use the goals instead */
  milestones: Array<Milestone>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name: Scalars["String"]["output"];
  owners: Array<Owner>;
  paymentMethods: PaymentMethods;
  /**
   * By default, returns all the posts of a project, both published and unpublished but not deleted.
   * To filter the result set, an explicit input can be passed that specifies a value of true or false for the published field.
   * An unpublished post is only returned if the requesting user is the creator of the post.
   */
  posts: Array<Post>;
  preLaunchExpiresAt?: Maybe<Scalars["Date"]["output"]>;
  preLaunchedAt?: Maybe<Scalars["Date"]["output"]>;
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  recurringContributionSupport: RecurringContributionSupport;
  rejectionReason?: Maybe<Scalars["String"]["output"]>;
  reviews: Array<ProjectReview>;
  rewardBuyersCount?: Maybe<Scalars["Int"]["output"]>;
  rewardCurrency?: Maybe<RewardCurrency>;
  rewards: Array<ProjectReward>;
  rewardsCount?: Maybe<Scalars["Int"]["output"]>;
  rskEoa?: Maybe<Scalars["String"]["output"]>;
  rskEoas: Array<ProjectRskEoa>;
  /** Short description of the project. */
  shortDescription?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Field no longer supported */
  sponsors: Array<Sponsor>;
  /** Returns summary statistics on the Project views and visitors. */
  statistics?: Maybe<ProjectStatistics>;
  status?: Maybe<ProjectStatus>;
  subCategory?: Maybe<ProjectSubCategory>;
  subscribersCount?: Maybe<Scalars["Int"]["output"]>;
  subscriptionPlans: Array<ProjectSubscriptionPlan>;
  tags: Array<Tag>;
  thumbnailImage?: Maybe<Scalars["String"]["output"]>;
  /** Public title of the project. */
  title: Scalars["String"]["output"];
  type: ProjectType;
  updatedAt: Scalars["Date"]["output"];
  /** Wallets linked to a Project. */
  wallets: Array<Wallet>;
};

export type ProjectGrantApplicationsArgs = {
  input?: InputMaybe<ProjectGrantApplicationsInput>;
};

export type ProjectPostsArgs = {
  input?: InputMaybe<ProjectPostsGetInput>;
};

export type ProjectActivatedSubscriptionResponse = {
  __typename?: "ProjectActivatedSubscriptionResponse";
  project: Project;
};

export type ProjectActivitiesCount = {
  __typename?: "ProjectActivitiesCount";
  count: Scalars["Int"]["output"];
  project: Project;
};

/** Edge type for Project ambassadors */
export type ProjectAmbassadorEdge = {
  __typename?: "ProjectAmbassadorEdge";
  /** Cursor for pagination */
  cursor: Scalars["String"]["output"];
  /** The ambassador node */
  node: Ambassador;
};

export type ProjectAmbassadorsConnection = {
  __typename?: "ProjectAmbassadorsConnection";
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
  __typename?: "ProjectAmbassadorsStats";
  /** Total number of contributions enabled by ambassadors */
  contributionsCount: Scalars["Int"]["output"];
  /** Total amount in satoshis enabled by ambassadors */
  contributionsSum: Scalars["BigInt"]["output"];
  /** Total number of ambassadors */
  count: Scalars["Int"]["output"];
};

export type ProjectAonGoal = {
  __typename?: "ProjectAonGoal";
  balance?: Maybe<Scalars["Int"]["output"]>;
  contractAddress?: Maybe<Scalars["String"]["output"]>;
  contractCreationTxId?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  deployedAt?: Maybe<Scalars["Date"]["output"]>;
  endsAt?: Maybe<Scalars["Date"]["output"]>;
  goalAmount: Scalars["Int"]["output"];
  goalDurationInDays: Scalars["Int"]["output"];
  hasCompletedPayout: Scalars["Boolean"]["output"];
  status?: Maybe<ProjectAonGoalStatus>;
  updatedAt: Scalars["Date"]["output"];
};

export type ProjectAonGoalAmountUpdateInput = {
  aonGoalInSats: Scalars["Int"]["input"];
  aonGoalUsdQuote: Scalars["Int"]["input"];
};

export enum ProjectAonGoalStatus {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Claimed = "CLAIMED",
  Deployed = "DEPLOYED",
  Deploying = "DEPLOYING",
  Failed = "FAILED",
  Finalized = "FINALIZED",
  NotDeployed = "NOT_DEPLOYED",
  Successful = "SUCCESSFUL",
  Unclaimed = "UNCLAIMED",
}

export type ProjectAonGoalStatusUpdateInput = {
  /** Block hash containing the Claimed log (reorg safety). */
  blockHash?: InputMaybe<Scalars["String"]["input"]>;
  /** Block number containing the Claimed log. */
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** Rootstock chain ID for confirmed Claimed event identity (required for mark-claimed). */
  chainId?: InputMaybe<Scalars["Int"]["input"]>;
  contractAddress: Scalars["String"]["input"];
  /** Decoded creatorAmount from Claimed, in wei. */
  creatorAmountWei?: InputMaybe<Scalars["String"]["input"]>;
  /** Log index of the confirmed Claimed event (required for mark-claimed). */
  logIndex?: InputMaybe<Scalars["Int"]["input"]>;
  /** Transaction hash of the confirmed Claimed log (required for mark-claimed). */
  transactionHash?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectAonGoalStatusUpdateResponse = MutationResponse & {
  __typename?: "ProjectAonGoalStatusUpdateResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  status: ProjectAonGoalStatus;
  success: Scalars["Boolean"]["output"];
};

export type ProjectAonGoalUpdateInput = {
  aonGoalAmount?: InputMaybe<ProjectAonGoalAmountUpdateInput>;
  aonGoalDurationInDays?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectCategory {
  Advocacy = "ADVOCACY",
  Cause = "CAUSE",
  Community = "COMMUNITY",
  Culture = "CULTURE",
  Education = "EDUCATION",
  Other = "OTHER",
  Tool = "TOOL",
}

export type ProjectCloseMutationInput = {
  projectId: Scalars["BigInt"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectContributionsGroupedByMethodStats = StatsInterface & {
  __typename?: "ProjectContributionsGroupedByMethodStats";
  count: Scalars["Int"]["output"];
  method: Scalars["String"]["output"];
  total: Scalars["Int"]["output"];
  totalUsd: Scalars["Float"]["output"];
};

export type ProjectContributionsStats = StatsInterface & {
  __typename?: "ProjectContributionsStats";
  count: Scalars["Int"]["output"];
  /** Project contribution over the given datetime range grouped by day, or month. */
  graph: Array<ProjectContributionsStatsGraphData>;
  total: Scalars["Int"]["output"];
  totalUsd: Scalars["Float"]["output"];
};

export type ProjectContributionsStatsBase = {
  __typename?: "ProjectContributionsStatsBase";
  contributions: ProjectContributionsStats;
  contributionsGroupedByMethod: Array<ProjectContributionsGroupedByMethodStats>;
};

export type ProjectContributionsStatsGraphData = {
  __typename?: "ProjectContributionsStatsGraphData";
  graphData?: Maybe<Array<ProjectContributionsStatsGraphDataAmount>>;
  statType: ProjectContributionsStatsGraphDataStatType;
};

export type ProjectContributionsStatsGraphDataAmount = GraphData & {
  __typename?: "ProjectContributionsStatsGraphDataAmount";
  dateTime: Scalars["Date"]["output"];
  value: Scalars["Int"]["output"];
};

export enum ProjectContributionsStatsGraphDataStatType {
  Sum = "SUM",
}

export type ProjectCountriesGetInput = {
  category?: InputMaybe<ProjectCategory>;
  subCategory?: InputMaybe<ProjectSubCategory>;
};

export type ProjectCountriesGetResult = {
  __typename?: "ProjectCountriesGetResult";
  count: Scalars["Int"]["output"];
  country: Country;
};

export enum ProjectCreationStep {
  AboutYou = "ABOUT_YOU",
  FundingGoal = "FUNDING_GOAL",
  FundingType = "FUNDING_TYPE",
  IdentityVerification = "IDENTITY_VERIFICATION",
  Launch = "LAUNCH",
  PerksAndProducts = "PERKS_AND_PRODUCTS",
  ProjectDetails = "PROJECT_DETAILS",
  Story = "STORY",
  TaxId = "TAX_ID",
  Wallet = "WALLET",
}

export type ProjectDeleteResponse = MutationResponse & {
  __typename?: "ProjectDeleteResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type ProjectFollowMutationInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectFollowerStats = {
  __typename?: "ProjectFollowerStats";
  count: Scalars["Int"]["output"];
};

export type ProjectFunderRewardStats = {
  __typename?: "ProjectFunderRewardStats";
  /** Project rewards sold count over the given datetime range grouped by day, or month. */
  quantityGraph?: Maybe<Array<Maybe<FunderRewardGraphSum>>>;
  /** Project rewards sold count in the given datetime range. */
  quantitySum: Scalars["Int"]["output"];
};

export type ProjectFunderStats = {
  __typename?: "ProjectFunderStats";
  /** Project contributors count in the given datetime range. */
  count: Scalars["Int"]["output"];
};

export enum ProjectFundingStrategy {
  AllOrNothing = "ALL_OR_NOTHING",
  TakeItAll = "TAKE_IT_ALL",
}

export type ProjectFundingSummary = {
  __typename?: "ProjectFundingSummary";
  endsAt?: Maybe<Scalars["Date"]["output"]>;
  fundingStrategy: ProjectFundingStrategy;
  goalSats?: Maybe<Scalars["BigInt"]["output"]>;
  goals: ProjectGoalFundingSummary;
  isCircularGrant: Scalars["Boolean"]["output"];
  isFundingFailed: Scalars["Boolean"]["output"];
  isFundingOpen: Scalars["Boolean"]["output"];
  matching: ProjectMatchingFundingSummary;
  percentageFunded?: Maybe<Scalars["Int"]["output"]>;
  raisedSats: Scalars["BigInt"]["output"];
  raisedUsdCent: Scalars["Int"]["output"];
  status: Scalars["String"]["output"];
};

export type ProjectGoal = {
  __typename?: "ProjectGoal";
  amountContributed: Scalars["Int"]["output"];
  completedAt?: Maybe<Scalars["Date"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  currency: ProjectGoalCurrency;
  description?: Maybe<Scalars["String"]["output"]>;
  emojiUnifiedCode?: Maybe<Scalars["String"]["output"]>;
  hasReceivedContribution: Scalars["Boolean"]["output"];
  id: Scalars["BigInt"]["output"];
  posts: Array<Post>;
  progress: Scalars["Float"]["output"];
  projectId: Scalars["BigInt"]["output"];
  status: ProjectGoalStatus;
  targetAmount: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type ProjectGoalCreateInput = {
  currency: ProjectGoalCurrency;
  description?: InputMaybe<Scalars["String"]["input"]>;
  emojiUnifiedCode?: InputMaybe<Scalars["String"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
  targetAmount: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export enum ProjectGoalCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type ProjectGoalDeleteResponse = MutationResponse & {
  __typename?: "ProjectGoalDeleteResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type ProjectGoalFundingSummary = {
  __typename?: "ProjectGoalFundingSummary";
  completed: Array<ProjectGoal>;
  inProgress: Array<ProjectGoal>;
};

export type ProjectGoalOrderingUpdateInput = {
  projectGoalIdsOrder: Array<Scalars["BigInt"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
};

export enum ProjectGoalStatus {
  Completed = "COMPLETED",
  InProgress = "IN_PROGRESS",
}

export enum ProjectGoalStatusInCreate {
  Inactive = "INACTIVE",
  InProgress = "IN_PROGRESS",
}

export type ProjectGoalUpdateInput = {
  currency?: InputMaybe<ProjectGoalCurrency>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  emojiUnifiedCode?: InputMaybe<Scalars["String"]["input"]>;
  projectGoalId: Scalars["BigInt"]["input"];
  targetAmount?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectGoals = {
  __typename?: "ProjectGoals";
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
  FundingOpen = "FUNDING_OPEN",
}

export type ProjectImpactFundRecipient = {
  __typename?: "ProjectImpactFundRecipient";
  amountAwardedInSats?: Maybe<Scalars["Int"]["output"]>;
  applicationId: Scalars["BigInt"]["output"];
  awardedAt?: Maybe<Scalars["Date"]["output"]>;
  fundingModel: ImpactFundApplicationFundingModel;
  impactFundId: Scalars["BigInt"]["output"];
  impactFundName: Scalars["String"]["output"];
  impactFundTitle: Scalars["String"]["output"];
};

export type ProjectLeaderboardAmbassadorsGetInput = {
  period: ProjectLeaderboardPeriod;
  projectId: Scalars["BigInt"]["input"];
  top: Scalars["Int"]["input"];
};

export type ProjectLeaderboardAmbassadorsRow = {
  __typename?: "ProjectLeaderboardAmbassadorsRow";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  projectsCount: Scalars["Int"]["output"];
  user?: Maybe<User>;
};

export type ProjectLeaderboardContributorsGetInput = {
  period: ProjectLeaderboardPeriod;
  projectId: Scalars["BigInt"]["input"];
  top: Scalars["Int"]["input"];
};

export type ProjectLeaderboardContributorsRow = {
  __typename?: "ProjectLeaderboardContributorsRow";
  commentsCount: Scalars["Int"]["output"];
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Float"]["output"];
  funderId: Scalars["BigInt"]["output"];
  user?: Maybe<User>;
};

export enum ProjectLeaderboardPeriod {
  AllTime = "ALL_TIME",
  Month = "MONTH",
  Week = "WEEK",
}

export type ProjectLinkMutationInput = {
  link: Scalars["String"]["input"];
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectMatching = {
  __typename?: "ProjectMatching";
  id: Scalars["BigInt"]["output"];
  matchingType: ProjectMatchingType;
  maxCapAmount: Scalars["Int"]["output"];
  ownerUserId: Scalars["BigInt"]["output"];
  projectId: Scalars["BigInt"]["output"];
  referenceCurrency: ProjectMatchingCurrency;
  remainingCapAmount: Scalars["Int"]["output"];
  sponsorName: Scalars["String"]["output"];
  sponsorUrl?: Maybe<Scalars["String"]["output"]>;
  startDate: Scalars["Date"]["output"];
  status: ProjectMatchingStatus;
  totalMatchedAmount: Scalars["Int"]["output"];
  totalMatchedAmountSats: Scalars["Int"]["output"];
  totalMatchedAmountUsdCent: Scalars["Int"]["output"];
};

export type ProjectMatchingCreateInput = {
  maxCapAmount: Scalars["Int"]["input"];
  projectId: Scalars["BigInt"]["input"];
  referenceCurrency: ProjectMatchingCurrency;
  sponsorName: Scalars["String"]["input"];
  sponsorUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ProjectMatchingCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type ProjectMatchingDeleteInput = {
  matchingId: Scalars["BigInt"]["input"];
};

export type ProjectMatchingDeleteResponse = MutationResponse & {
  __typename?: "ProjectMatchingDeleteResponse";
  matchingId: Scalars["BigInt"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type ProjectMatchingFundingSummary = {
  __typename?: "ProjectMatchingFundingSummary";
  activeMatching?: Maybe<ProjectMatching>;
};

export enum ProjectMatchingStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  Deleted = "DELETED",
}

export enum ProjectMatchingType {
  OneToOne = "ONE_TO_ONE",
}

export type ProjectMatchingUpdateInput = {
  matchingId: Scalars["BigInt"]["input"];
  maxCapAmount: Scalars["Int"]["input"];
};

export type ProjectMostFunded = {
  __typename?: "ProjectMostFunded";
  contributionsSummary?: Maybe<ContributionsSummary>;
  /** The project details */
  project: Project;
};

export type ProjectMostFundedByCategory = {
  __typename?: "ProjectMostFundedByCategory";
  category?: Maybe<Scalars["String"]["output"]>;
  projects: Array<ProjectMostFunded>;
  subCategory?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectMostFundedByTag = {
  __typename?: "ProjectMostFundedByTag";
  projects: Array<ProjectMostFunded>;
  tagId: Scalars["Int"]["output"];
};

export type ProjectPostsGetInput = {
  where?: InputMaybe<ProjectPostsGetWhereInput>;
};

export type ProjectPostsGetWhereInput = {
  published?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectPreLaunchMutationInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectPublishMutationInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectPutInReviewMutationInput = {
  projectId: Scalars["BigInt"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectRecommendedGetInput = {
  n: Scalars["Int"]["input"];
};

export type ProjectRecommendedGetResult = {
  __typename?: "ProjectRecommendedGetResult";
  contributionsCount: Scalars["Int"]["output"];
  contributionsTotal: Scalars["Int"]["output"];
  contributionsTotalUsd: Scalars["Int"]["output"];
  project: Project;
};

export type ProjectReferrersSearchInput = {
  heroId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectReferrersSearchResult = {
  __typename?: "ProjectReferrersSearchResult";
  fieldPartners: Array<User>;
  others: Array<User>;
};

export type ProjectRefundablePayment = {
  __typename?: "ProjectRefundablePayment";
  payments: Array<Payment>;
  project: Project;
};

export type ProjectRegionsGetResult = {
  __typename?: "ProjectRegionsGetResult";
  count: Scalars["Int"]["output"];
  region: Scalars["String"]["output"];
};

export type ProjectReview = {
  __typename?: "ProjectReview";
  complianceSuggestion?: Maybe<ProjectReviewComplianceSuggestion>;
  createdAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  projectId: Scalars["BigInt"]["output"];
  rejectionReasons: Array<Scalars["String"]["output"]>;
  reviewNotes?: Maybe<Scalars["String"]["output"]>;
  reviewedAt?: Maybe<Scalars["Date"]["output"]>;
  status: ProjectReviewStatus;
  updatedAt: Scalars["Date"]["output"];
  version: Scalars["Int"]["output"];
};

export type ProjectReviewComplianceSuggestion = {
  __typename?: "ProjectReviewComplianceSuggestion";
  failureReason?: Maybe<Scalars["String"]["output"]>;
  feedback: Array<Scalars["String"]["output"]>;
  generatedAt?: Maybe<Scalars["Date"]["output"]>;
  model?: Maybe<Scalars["String"]["output"]>;
  noteToCreator?: Maybe<Scalars["String"]["output"]>;
  reasons: Array<Scalars["String"]["output"]>;
  recommendedStatus?: Maybe<ProjectReviewStatus>;
  status: ProjectReviewComplianceSuggestionStatus;
  termsUrl: Scalars["String"]["output"];
};

export enum ProjectReviewComplianceSuggestionStatus {
  Failed = "FAILED",
  Pending = "PENDING",
  Ready = "READY",
}

export type ProjectReviewRequestInput = {
  projectId: Scalars["BigInt"]["input"];
};

export enum ProjectReviewStatus {
  Accepted = "ACCEPTED",
  Pending = "PENDING",
  Rejected = "REJECTED",
  RevisionsRequested = "REVISIONS_REQUESTED",
}

export enum ProjectReviewStatusInput {
  Accepted = "ACCEPTED",
  Rejected = "REJECTED",
  RevisionsRequested = "REVISIONS_REQUESTED",
}

export type ProjectReviewSubmitInput = {
  projectId: Scalars["BigInt"]["input"];
  rejectionReasons?: InputMaybe<Array<RejectionReason>>;
  reviewNotes?: InputMaybe<Scalars["String"]["input"]>;
  status: ProjectReviewStatusInput;
};

export type ProjectReward = {
  __typename?: "ProjectReward";
  /** Category of ProjectReward */
  category?: Maybe<Scalars["String"]["output"]>;
  /** Confirmation message for the reward */
  confirmationMessage?: Maybe<Scalars["String"]["output"]>;
  /** Cost of the reward, priced in USD cents. */
  cost: Scalars["Int"]["output"];
  /** The date the creator created the reward */
  createdAt: Scalars["Date"]["output"];
  /**
   * Whether the reward is deleted or not. Deleted rewards should not appear in the funding flow. Moreover, deleted
   * rewards should only be visible by the project owner and the users that purchased it.
   */
  deleted: Scalars["Boolean"]["output"];
  /** Internally used to track whether a reward was soft deleted */
  deletedAt?: Maybe<Scalars["Date"]["output"]>;
  /** Short description of the reward. */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Estimated availability date of a reward that is in development */
  estimatedAvailabilityDate?: Maybe<Scalars["Date"]["output"]>;
  /** Estimated delivery time from the time of purchase */
  estimatedDeliveryInWeeks?: Maybe<Scalars["Int"]["output"]>;
  /** Boolean value to indicate whether this reward requires shipping */
  hasShipping: Scalars["Boolean"]["output"];
  id: Scalars["BigInt"]["output"];
  /**
   * Project reward images.
   * @deprecated Use images instead.
   */
  image?: Maybe<Scalars["String"]["output"]>;
  images: Array<Scalars["String"]["output"]>;
  /** Boolean value to indicate whether this reward is an addon */
  isAddon: Scalars["Boolean"]["output"];
  /** Boolean value to indicate whether this reward is hidden */
  isHidden: Scalars["Boolean"]["output"];
  /** Maximum times the item can be purchased */
  maxClaimable?: Maybe<Scalars["Int"]["output"]>;
  /** Name of the reward. */
  name: Scalars["String"]["output"];
  /** Posts for the reward */
  posts: Array<Post>;
  /** Boolean value to indicate whether this reward is in development or ready to ship */
  preOrder: Scalars["Boolean"]["output"];
  /** Private comment prompts for the reward */
  privateCommentPrompts: Array<PrivateCommentPrompt>;
  /** Boolean value to indicate whether this reward requires shipping */
  project: Project;
  /** Currency in which the reward cost is stored. */
  rewardCurrency: RewardCurrency;
  sentByEmailAt?: Maybe<Scalars["Date"]["output"]>;
  /** Shipping rates for the reward. */
  shippingConfig?: Maybe<ShippingConfig>;
  /** Short description of the reward. */
  shortDescription?: Maybe<Scalars["String"]["output"]>;
  /** Number of times this Project Reward was sold. */
  sold: Scalars["Int"]["output"];
  soldOut: Scalars["Boolean"]["output"];
  /** Tracks the stock of the reward */
  stock?: Maybe<Scalars["Int"]["output"]>;
  /** The last date when the creator has updated the reward */
  updatedAt: Scalars["Date"]["output"];
  /** UUID for the reward, it stays consistent throughout the project reward updates (the ID does not) */
  uuid: Scalars["String"]["output"];
};

export type ProjectRewardCatalogRow = {
  __typename?: "ProjectRewardCatalogRow";
  count: Scalars["Int"]["output"];
  id: Scalars["BigInt"]["output"];
  projectReward: ProjectReward;
};

export type ProjectRewardMostSoldGetRow = {
  __typename?: "ProjectRewardMostSoldGetRow";
  count: Scalars["Int"]["output"];
  projectReward: ProjectReward;
};

export type ProjectRewardTrendingMonthlyGetRow = {
  __typename?: "ProjectRewardTrendingMonthlyGetRow";
  count: Scalars["Int"]["output"];
  projectReward: ProjectReward;
};

export type ProjectRewardTrendingQuarterlyGetRow = {
  __typename?: "ProjectRewardTrendingQuarterlyGetRow";
  count: Scalars["Int"]["output"];
  projectReward: ProjectReward;
};

export type ProjectRewardTrendingWeeklyGetRow = {
  __typename?: "ProjectRewardTrendingWeeklyGetRow";
  count: Scalars["Int"]["output"];
  projectReward: ProjectReward;
};

export type ProjectRewardsCatalogGetResponse = {
  __typename?: "ProjectRewardsCatalogGetResponse";
  pagination?: Maybe<CursorPaginationResponse>;
  rewards: Array<ProjectRewardCatalogRow>;
};

export enum ProjectRewardsCatalogSortBy {
  MostRecent = "MOST_RECENT",
  MostSold = "MOST_SOLD",
}

export type ProjectRewardsGroupedByRewardIdStats = {
  __typename?: "ProjectRewardsGroupedByRewardIdStats";
  count: Scalars["Int"]["output"];
  projectReward: ProjectRewardsGroupedByRewardIdStatsProjectReward;
};

export type ProjectRewardsGroupedByRewardIdStatsProjectReward = {
  __typename?: "ProjectRewardsGroupedByRewardIdStatsProjectReward";
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Scalars["String"]["output"]>;
  maxClaimable?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  sold: Scalars["Int"]["output"];
  uuid: Scalars["String"]["output"];
};

export enum ProjectRewardsMostSoldRange {
  Month = "MONTH",
  Quarter = "QUARTER",
  Week = "WEEK",
}

export type ProjectRewardsStats = {
  __typename?: "ProjectRewardsStats";
  count: Scalars["Int"]["output"];
};

export type ProjectRskEoa = {
  __typename?: "ProjectRskEoa";
  accountKeys?: Maybe<UserAccountKeys>;
  createdAt: Scalars["Date"]["output"];
  derivationPath?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  isCurrent: Scalars["Boolean"]["output"];
  replacedAt?: Maybe<Scalars["Date"]["output"]>;
  rskAddress: Scalars["String"]["output"];
  rskPublicKey?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectRskEoaRotationInput = {
  derivationPath: Scalars["String"]["input"];
  projectId: Scalars["BigInt"]["input"];
  rskEoa: Scalars["String"]["input"];
  rskPublicKey: Scalars["String"]["input"];
};

export type ProjectRskEoaSetInput = {
  derivationPath?: InputMaybe<Scalars["String"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
  rskEoa: Scalars["String"]["input"];
  rskPublicKey?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ProjectShippingConfigType {
  Flat = "FLAT",
  Incremental = "INCREMENTAL",
  PerUnit = "PER_UNIT",
}

export type ProjectShippingConfigsGetInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectShippingRate = {
  __typename?: "ProjectShippingRate";
  baseRate: Scalars["Int"]["output"];
  country: Scalars["String"]["output"];
  incrementRate: Scalars["Int"]["output"];
  sameAsDefault?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProjectStatistics = {
  __typename?: "ProjectStatistics";
  totalPageviews: Scalars["Int"]["output"];
  totalVisitors: Scalars["Int"]["output"];
};

export type ProjectStats = {
  __typename?: "ProjectStats";
  current?: Maybe<ProjectStatsBase>;
  datetimeRange: DatetimeRange;
  prevTimeRange?: Maybe<ProjectStatsBase>;
};

export type ProjectStatsBase = {
  __typename?: "ProjectStatsBase";
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
  Accepted = "accepted",
  Active = "active",
  Closed = "closed",
  Deleted = "deleted",
  Draft = "draft",
  InReview = "in_review",
  Inactive = "inactive",
  PreLaunch = "pre_launch",
}

export type ProjectStatusUpdate = {
  projectId: Scalars["BigInt"]["input"];
  status: ProjectStatus;
};

export enum ProjectSubCategory {
  App = "APP",
  Art = "ART",
  Book = "BOOK",
  CircularEconomy = "CIRCULAR_ECONOMY",
  Collectible = "COLLECTIBLE",
  ContentCreator = "CONTENT_CREATOR",
  Course = "COURSE",
  Event = "EVENT",
  Film = "FILM",
  Fundraiser = "FUNDRAISER",
  Game = "GAME",
  HackerSpace = "HACKER_SPACE",
  Hardware = "HARDWARE",
  Humanitarian = "HUMANITARIAN",
  Journalism = "JOURNALISM",
  LegalFund = "LEGAL_FUND",
  Lobby = "LOBBY",
  Medical = "MEDICAL",
  Meetup = "MEETUP",
  Music = "MUSIC",
  OsSoftware = "OS_SOFTWARE",
  Other = "OTHER",
  Podcast = "PODCAST",
  Promotion = "PROMOTION",
  Travel = "TRAVEL",
}

export type ProjectSubscriptionPlan = {
  __typename?: "ProjectSubscriptionPlan";
  amountBtcSat: Scalars["Int"]["output"];
  amountUsdCent: Scalars["Int"]["output"];
  createdAt: Scalars["Date"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  interval: RecurringInterval;
  isHidden: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  projectId: Scalars["BigInt"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type ProjectSubscriptionStartInput = {
  anonymous: Scalars["Boolean"]["input"];
  metadataInput?: InputMaybe<ContributionMetadataInput>;
  paymentMethod: RecurringPaymentMethod;
  paymentsInput: ContributionPaymentsInput;
  projectSubscriptionPlanId: Scalars["BigInt"]["input"];
};

export enum ProjectType {
  Donation = "donation",
  Grant = "grant",
  Reward = "reward",
}

export type ProjectViewBaseStats = {
  __typename?: "ProjectViewBaseStats";
  value: Scalars["String"]["output"];
  viewCount: Scalars["Int"]["output"];
  visitorCount: Scalars["Int"]["output"];
};

export type ProjectViewStats = {
  __typename?: "ProjectViewStats";
  /** Project view/visitor count of each viewing country in the given datetime range. */
  countries: Array<ProjectViewBaseStats>;
  /** Project view/visitor count of each refferal platform in the given datetime range. */
  referrers: Array<ProjectViewBaseStats>;
  /** Project view/visitor count of each viewing region in the given datetime range. */
  regions: Array<ProjectViewBaseStats>;
  /** Project view count in the given datetime range. */
  viewCount: Scalars["Int"]["output"];
  /** Project visitor count in the given datetime range. */
  visitorCount: Scalars["Int"]["output"];
  /** Project views/visitors count over the given datetime range grouped by day, or month. */
  visitorGraph: Array<Maybe<PageViewCountGraph>>;
};

export type ProjectWalletConfigurationContributionAttemptNotifyInput = {
  projectId: Scalars["BigInt"]["input"];
};

export type ProjectWalletConfigurationContributionAttemptNotifyResponse =
  MutationResponse & {
    __typename?: "ProjectWalletConfigurationContributionAttemptNotifyResponse";
    message?: Maybe<Scalars["String"]["output"]>;
    success: Scalars["Boolean"]["output"];
  };

export type ProjectsAonAlmostFundedInput = {
  pagination?: InputMaybe<PaginationInput>;
};

export type ProjectsAonAlmostFundedResponse = {
  __typename?: "ProjectsAonAlmostFundedResponse";
  projects: Array<Project>;
};

export type ProjectsAonAlmostOverInput = {
  pagination?: InputMaybe<PaginationInput>;
};

export type ProjectsAonAlmostOverResponse = {
  __typename?: "ProjectsAonAlmostOverResponse";
  projects: Array<Project>;
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
  aonGoalReached?: InputMaybe<Scalars["Boolean"]["input"]>;
  categories?: InputMaybe<Array<ProjectCategory>>;
  category?: InputMaybe<ProjectCategory>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  countryCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
  fieldPartnerUserId?: InputMaybe<Scalars["BigInt"]["input"]>;
  fundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  goalReached?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  ids?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  isCircularGrant?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Unique names for projects. Used to batch project lookups by project URL names. */
  names?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ownerId?: InputMaybe<Scalars["BigInt"]["input"]>;
  region?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ProjectsGetWhereInputStatus>;
  statuses?: InputMaybe<Array<ProjectsGetWhereInputStatus>>;
  subCategory?: InputMaybe<ProjectSubCategory>;
  tagIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  type?: InputMaybe<ProjectType>;
};

export enum ProjectsGetWhereInputStatus {
  Accepted = "accepted",
  Active = "active",
  Closed = "closed",
  Draft = "draft",
  InReview = "in_review",
  Inactive = "inactive",
  PreLaunch = "pre_launch",
}

export type ProjectsMostFundedAllOrNothingInput = {
  range: ProjectsMostFundedAllOrNothingRange;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectsMostFundedAllOrNothingRange {
  Week = "WEEK",
}

export type ProjectsMostFundedByCategoryInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  range: ProjectsMostFundedByCategoryRange;
  subCategory?: InputMaybe<Scalars["String"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectsMostFundedByCategoryRange {
  Week = "WEEK",
}

export type ProjectsMostFundedByTagInput = {
  range: ProjectsMostFundedByTagRange;
  tagIds: Array<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectsMostFundedByTagRange {
  Week = "WEEK",
}

export type ProjectsMostFundedTakeItAllInput = {
  range: ProjectsMostFundedTakeItAllRange;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectsMostFundedTakeItAllRange {
  Week = "WEEK",
}

export enum ProjectsOrderByField {
  Balance = "balance",
  CreatedAt = "createdAt",
  LaunchedAt = "launchedAt",
}

export type ProjectsOrderByInput = {
  direction: OrderByDirection;
  field: ProjectsOrderByField;
};

export type ProjectsResponse = {
  __typename?: "ProjectsResponse";
  projects: Array<Project>;
  summary?: Maybe<ProjectsSummary>;
};

export type ProjectsSummary = {
  __typename?: "ProjectsSummary";
  /** Total of satoshis raised by projects on the platform. */
  fundedTotal?: Maybe<Scalars["BigInt"]["output"]>;
  /** Total number of funders on the platform. */
  fundersCount?: Maybe<Scalars["Int"]["output"]>;
  /** Total number of projects ever created on the platform. */
  projectsCount?: Maybe<Scalars["Int"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Boolean"]["output"]>;
  acelerandoVipLeaderboard: AcelerandoVipLeaderboardResponse;
  acelerandoVipMyPosition?: Maybe<AcelerandoVipMyPositionResponse>;
  activitiesCountGroupedByProject: Array<ProjectActivitiesCount>;
  /** Returns all activities. */
  activitiesGet: ActivitiesGetResponse;
  /**
   * Status of the durable direct AON claim payout/payment for a project, if any.
   * NOT_STARTED: no claim payout/payment. PENDING: claim payout/payment in flight.
   * CONFIRMED: claim payout completed / payment paid. FAILED: latest claim payment failed;
   * the creator may retry with a new signed transaction.
   */
  aonClaimStatus: AonClaimStatusResponse;
  badges: Array<Badge>;
  contribution: Contribution;
  contributionsGet?: Maybe<ContributionsGetResponse>;
  contributor: Funder;
  currencyQuoteGet: CurrencyQuoteGetResponse;
  fundersGet: Array<Funder>;
  getDashboardFunders: Array<Funder>;
  /** @deprecated Field no longer supported */
  getProjectPubkey?: Maybe<Scalars["String"]["output"]>;
  getProjectReward: ProjectReward;
  getSignedUploadUrl: SignedUploadUrl;
  getWallet: Wallet;
  grant: Grant;
  grantStatistics: GrantStatistics;
  grants: Array<Grant>;
  guardianUsersGet?: Maybe<GuardianUsersGetResponse>;
  impactFund: ImpactFund;
  impactFundApplications: ImpactFundApplicationsGetResponse;
  impactFundDashboardApplications: ImpactFundDashboardApplicationsResponse;
  impactFundFieldPartnerLeaderboard: ImpactFundFieldPartnerLeaderboardResponse;
  impactFundLabifCountryEligibility: ImpactFundLabifCountryEligibility;
  impactFunds: Array<ImpactFund>;
  leaderboardGlobalAmbassadorsGet: Array<GlobalAmbassadorLeaderboardRow>;
  leaderboardGlobalContributorsGet: Array<GlobalContributorLeaderboardRow>;
  leaderboardGlobalCreatorsGet: Array<GlobalCreatorLeaderboardRow>;
  leaderboardGlobalProjectsGet: Array<GlobalProjectLeaderboardRow>;
  lightningAddressVerify: LightningAddressVerifyResponse;
  me?: Maybe<User>;
  newsletterPreferencesGet: NewsletterPreferences;
  orderGet?: Maybe<Order>;
  ordersGet?: Maybe<OrdersGetResponse>;
  ordersStatsGet: OrdersStatsBase;
  payment: Payment;
  paymentInvoiceSanctionCheckStatusGet: PaymentInvoiceSanctionCheckStatusResponse;
  paymentRecoveryByContribution: PaymentRecoveryByContributionResponse;
  paymentRefundsGet?: Maybe<PaymentRefundsGetResponse>;
  paymentsGet: PaymentsGetResponse;
  /**
   * Get all in-progress payments (PENDING, CLAIMING, REFUNDING, CLAIMABLE, REFUNDABLE).
   * Only accessible by the accountant service.
   */
  paymentsInProgressGet: PaymentsInProgressGetResponse;
  /** Get all refundable payments for the logged in user. */
  paymentsRefundableGet: RefundablePaymentsGetResponse;
  payoutActive?: Maybe<PayoutGetResponse>;
  payoutGet?: Maybe<PayoutGetResponse>;
  payoutLatest?: Maybe<PayoutGetResponse>;
  payoutProcessing?: Maybe<PayoutGetResponse>;
  pledgeRefundGet?: Maybe<PledgeRefundGetResponse>;
  pledgeRefundsGet?: Maybe<PledgeRefundsGetResponse>;
  post?: Maybe<Post>;
  postEmailSegmentSizeGet: Scalars["Int"]["output"];
  /** Returns all published posts */
  posts: Array<Post>;
  projectCountriesGet: Array<ProjectCountriesGetResult>;
  projectGet?: Maybe<Project>;
  projectGoal: ProjectGoal;
  projectGoals: ProjectGoals;
  projectLeaderboardAmbassadorsGet: Array<ProjectLeaderboardAmbassadorsRow>;
  projectLeaderboardContributorsGet: Array<ProjectLeaderboardContributorsRow>;
  projectNotificationSettingsGet: CreatorNotificationSettings;
  projectRecommendedGet: Array<ProjectRecommendedGetResult>;
  projectReferrersSearch: ProjectReferrersSearchResult;
  projectRegionsGet: Array<ProjectRegionsGetResult>;
  projectRewardCategoriesGet: Array<Scalars["String"]["output"]>;
  projectRewardGet: ProjectReward;
  projectRewardsCatalogGet: ProjectRewardsCatalogGetResponse;
  projectRewardsGet: Array<ProjectReward>;
  projectRewardsMostSoldGet: Array<ProjectRewardMostSoldGetRow>;
  projectRewardsTrendingMonthlyGet: Array<ProjectRewardTrendingMonthlyGetRow>;
  projectRewardsTrendingQuarterlyGet: Array<ProjectRewardTrendingQuarterlyGetRow>;
  projectRewardsTrendingWeeklyGet: Array<ProjectRewardTrendingWeeklyGetRow>;
  projectShippingConfigsGet: Array<ShippingConfig>;
  projectStatsGet: ProjectStats;
  projectStripeConnectStatus: StripeConnectStatus;
  projectsAonAlmostFunded: ProjectsAonAlmostFundedResponse;
  projectsAonAlmostOver: ProjectsAonAlmostOverResponse;
  /** By default, returns a list of all active projects. */
  projectsGet: ProjectsResponse;
  projectsMostFundedAllOrNothing: Array<ProjectMostFunded>;
  projectsMostFundedByCategory: Array<ProjectMostFundedByCategory>;
  projectsMostFundedByTag: Array<ProjectMostFundedByTag>;
  projectsMostFundedTakeItAll: Array<ProjectMostFunded>;
  projectsSummary: ProjectsSummary;
  recurringContributionRenewalContext: RecurringContribution;
  shippingAddressesGet: Array<ShippingAddress>;
  statusCheck: Scalars["Boolean"]["output"];
  tagsGet: Array<TagsGetResult>;
  tagsMostFundedGet: Array<TagsMostFundedGetResult>;
  user: User;
  userAccountPasswordFundsSummary: UserAccountPasswordFundsSummary;
  userBadge?: Maybe<UserBadge>;
  userBadges: Array<UserBadge>;
  userEmailIsAvailable: Scalars["Boolean"]["output"];
  userEmailIsValid: UserEmailIsValidResponse;
  userIpCountry?: Maybe<Scalars["String"]["output"]>;
  userNotificationSettingsGet: ProfileNotificationSettings;
  userWalletWithdrawActive?: Maybe<UserWalletWithdrawGetResponse>;
  userWalletWithdrawLatest?: Maybe<UserWalletWithdrawGetResponse>;
};

export type QueryActivitiesCountGroupedByProjectArgs = {
  input: ActivitiesCountGroupedByProjectInput;
};

export type QueryActivitiesGetArgs = {
  input?: InputMaybe<GetActivitiesInput>;
};

export type QueryAonClaimStatusArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryContributionArgs = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
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

export type QueryFundersGetArgs = {
  input: GetFundersInput;
};

export type QueryGetDashboardFundersArgs = {
  input?: InputMaybe<GetFundersInput>;
};

export type QueryGetProjectPubkeyArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryGetProjectRewardArgs = {
  id: Scalars["BigInt"]["input"];
};

export type QueryGetSignedUploadUrlArgs = {
  input: FileUploadInput;
};

export type QueryGetWalletArgs = {
  id: Scalars["BigInt"]["input"];
};

export type QueryGrantArgs = {
  input: GrantGetInput;
};

export type QueryGuardianUsersGetArgs = {
  input: GuardianUsersGetInput;
};

export type QueryImpactFundArgs = {
  input: ImpactFundGetInput;
};

export type QueryImpactFundApplicationsArgs = {
  input: ImpactFundApplicationsInput;
};

export type QueryImpactFundDashboardApplicationsArgs = {
  input: ImpactFundDashboardApplicationsInput;
};

export type QueryImpactFundFieldPartnerLeaderboardArgs = {
  input?: InputMaybe<ImpactFundFieldPartnerLeaderboardInput>;
};

export type QueryImpactFundLabifCountryEligibilityArgs = {
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryImpactFundsArgs = {
  status?: InputMaybe<ImpactFundStatus>;
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
  lightningAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryNewsletterPreferencesGetArgs = {
  userId: Scalars["BigInt"]["input"];
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

export type QueryPaymentRecoveryByContributionArgs = {
  input: PaymentRecoveryByContributionInput;
};

export type QueryPaymentsGetArgs = {
  input?: InputMaybe<PaymentsGetInput>;
};

export type QueryPayoutActiveArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryPayoutGetArgs = {
  input: PayoutGetInput;
};

export type QueryPayoutLatestArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryPayoutProcessingArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryPledgeRefundGetArgs = {
  input: PledgeRefundGetInput;
};

export type QueryPostArgs = {
  id: Scalars["BigInt"]["input"];
};

export type QueryPostEmailSegmentSizeGetArgs = {
  input: PostEmailSegmentSizeGetInput;
};

export type QueryPostsArgs = {
  input?: InputMaybe<GetPostsInput>;
};

export type QueryProjectCountriesGetArgs = {
  input?: InputMaybe<ProjectCountriesGetInput>;
};

export type QueryProjectGetArgs = {
  where: UniqueProjectQueryInput;
};

export type QueryProjectGoalArgs = {
  projectGoalId: Scalars["BigInt"]["input"];
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
  projectId: Scalars["BigInt"]["input"];
};

export type QueryProjectRecommendedGetArgs = {
  input: ProjectRecommendedGetInput;
};

export type QueryProjectReferrersSearchArgs = {
  input?: InputMaybe<ProjectReferrersSearchInput>;
};

export type QueryProjectRewardGetArgs = {
  input: GetProjectRewardInput;
};

export type QueryProjectRewardsCatalogGetArgs = {
  input: GetProjectRewardsCatalogInput;
};

export type QueryProjectRewardsGetArgs = {
  input: GetProjectRewardsInput;
};

export type QueryProjectRewardsMostSoldGetArgs = {
  input: GetProjectRewardsMostSoldInput;
};

export type QueryProjectShippingConfigsGetArgs = {
  input: ProjectShippingConfigsGetInput;
};

export type QueryProjectStatsGetArgs = {
  input: GetProjectStatsInput;
};

export type QueryProjectStripeConnectStatusArgs = {
  projectId: Scalars["BigInt"]["input"];
};

export type QueryProjectsAonAlmostFundedArgs = {
  input?: InputMaybe<ProjectsAonAlmostFundedInput>;
};

export type QueryProjectsAonAlmostOverArgs = {
  input?: InputMaybe<ProjectsAonAlmostOverInput>;
};

export type QueryProjectsGetArgs = {
  input?: InputMaybe<ProjectsGetQueryInput>;
};

export type QueryProjectsMostFundedAllOrNothingArgs = {
  input: ProjectsMostFundedAllOrNothingInput;
};

export type QueryProjectsMostFundedByCategoryArgs = {
  input: ProjectsMostFundedByCategoryInput;
};

export type QueryProjectsMostFundedByTagArgs = {
  input: ProjectsMostFundedByTagInput;
};

export type QueryProjectsMostFundedTakeItAllArgs = {
  input: ProjectsMostFundedTakeItAllInput;
};

export type QueryRecurringContributionRenewalContextArgs = {
  managementNonce: Scalars["String"]["input"];
};

export type QueryShippingAddressesGetArgs = {
  input: ShippingAddressesGetInput;
};

export type QueryUserArgs = {
  where: UserGetInput;
};

export type QueryUserBadgeArgs = {
  userBadgeId: Scalars["BigInt"]["input"];
};

export type QueryUserBadgesArgs = {
  input: BadgesGetInput;
};

export type QueryUserEmailIsAvailableArgs = {
  email: Scalars["String"]["input"];
};

export type QueryUserEmailIsValidArgs = {
  email: Scalars["String"]["input"];
};

export type QueryUserNotificationSettingsGetArgs = {
  userId: Scalars["BigInt"]["input"];
};

export enum QuoteCurrency {
  Usd = "USD",
}

export type RecurringContribution = {
  __typename?: "RecurringContribution";
  amount: Scalars["Int"]["output"];
  billingCycleCount: Scalars["Int"]["output"];
  canceledAt?: Maybe<Scalars["Date"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  currency: RecurringContributionCurrency;
  currentPeriodEndAt?: Maybe<Scalars["Date"]["output"]>;
  currentPeriodStartAt?: Maybe<Scalars["Date"]["output"]>;
  id: Scalars["BigInt"]["output"];
  interval: RecurringInterval;
  kind: RecurringContributionKind;
  lastChargeFailedAt?: Maybe<Scalars["Date"]["output"]>;
  lastChargeFailureMessage?: Maybe<Scalars["String"]["output"]>;
  managementNonce?: Maybe<Scalars["String"]["output"]>;
  nextBillingAt?: Maybe<Scalars["Date"]["output"]>;
  pauseReason?: Maybe<RecurringPauseReason>;
  pausedAt?: Maybe<Scalars["Date"]["output"]>;
  paymentMethod: RecurringPaymentMethod;
  project?: Maybe<Project>;
  projectId: Scalars["BigInt"]["output"];
  projectSubscriptionPlan?: Maybe<ProjectSubscriptionPlan>;
  projectSubscriptionPlanId?: Maybe<Scalars["BigInt"]["output"]>;
  status: RecurringContributionStatus;
  stripeAccountId?: Maybe<Scalars["String"]["output"]>;
  stripeCustomerId?: Maybe<Scalars["String"]["output"]>;
  stripeSubscriptionId?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
  userId?: Maybe<Scalars["BigInt"]["output"]>;
  uuid: Scalars["String"]["output"];
};

export type RecurringContributionCancelInput = {
  id: Scalars["BigInt"]["input"];
};

export type RecurringContributionCheckoutResponse = {
  __typename?: "RecurringContributionCheckoutResponse";
  contribution: Contribution;
  payments: ContributionPaymentsDetails;
  recurringContribution: RecurringContribution;
};

export enum RecurringContributionCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export enum RecurringContributionKind {
  Donation = "DONATION",
  Subscription = "SUBSCRIPTION",
}

export type RecurringContributionPortalSession = {
  __typename?: "RecurringContributionPortalSession";
  url: Scalars["String"]["output"];
};

export type RecurringContributionPortalSessionCreateInput = {
  id: Scalars["BigInt"]["input"];
  returnUrl: Scalars["String"]["input"];
};

export type RecurringContributionRenewalCreateInput = {
  anonymous: Scalars["Boolean"]["input"];
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  managementNonce?: InputMaybe<Scalars["String"]["input"]>;
  paymentsInput: ContributionPaymentsInput;
};

export enum RecurringContributionStatus {
  Active = "ACTIVE",
  Canceled = "CANCELED",
  Paused = "PAUSED",
  Pending = "PENDING",
}

export type RecurringContributionSupport = {
  __typename?: "RecurringContributionSupport";
  bitcoin: Scalars["Boolean"]["output"];
  enabled: Scalars["Boolean"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  stripe: Scalars["Boolean"]["output"];
};

export type RecurringDonationCreateInput = {
  amount: Scalars["Int"]["input"];
  anonymous: Scalars["Boolean"]["input"];
  geyserTipPercentage?: InputMaybe<Scalars["Float"]["input"]>;
  interval: RecurringInterval;
  metadataInput?: InputMaybe<ContributionMetadataInput>;
  paymentMethod: RecurringPaymentMethod;
  paymentsInput: ContributionPaymentsInput;
  projectId: Scalars["BigInt"]["input"];
};

export enum RecurringInterval {
  Monthly = "MONTHLY",
  Yearly = "YEARLY",
}

export enum RecurringPauseReason {
  PaymentOverdue = "PAYMENT_OVERDUE",
  UserCanceled = "USER_CANCELED",
}

export enum RecurringPaymentMethod {
  Banxa = "BANXA",
  Bitcoin = "BITCOIN",
  Stripe = "STRIPE",
}

export type RefundablePaymentsGetResponse = {
  __typename?: "RefundablePaymentsGetResponse";
  refundablePayments: Array<ProjectRefundablePayment>;
};

export enum RejectionReason {
  IllegalContentOrActivity = "ILLEGAL_CONTENT_OR_ACTIVITY",
  IncompleteProject = "INCOMPLETE_PROJECT",
  RestrictedProjectType = "RESTRICTED_PROJECT_TYPE",
  Scam = "SCAM",
  SellingSecurity = "SELLING_SECURITY",
  Spam = "SPAM",
  UnsupportedRegion = "UNSUPPORTED_REGION",
  WalletSanctionCheckFailed = "WALLET_SANCTION_CHECK_FAILED",
}

export type ResourceInput = {
  resourceId: Scalars["String"]["input"];
  resourceType: FundingResourceType;
};

export enum RewardCurrency {
  Btcsat = "BTCSAT",
  Usdcent = "USDCENT",
}

export type RskAonClaimPaymentDetails = {
  __typename?: "RskAonClaimPaymentDetails";
  destinationAddress: Scalars["String"]["output"];
  fromAddress: Scalars["String"]["output"];
  /**
   * Raw signed transaction bytes. Only returned to the accountant recovery API
   * (paymentsInProgressGet); null for all other callers.
   */
  signedTxHex?: Maybe<Scalars["String"]["output"]>;
  txId?: Maybe<Scalars["String"]["output"]>;
};

export type RskKeyPair = {
  __typename?: "RskKeyPair";
  address: Scalars["String"]["output"];
  derivationPath: Scalars["String"]["output"];
  publicKey: Scalars["String"]["output"];
};

export type RskKeyPairInput = {
  address: Scalars["String"]["input"];
  derivationPath: Scalars["String"]["input"];
  publicKey: Scalars["String"]["input"];
};

export type RskNativeTransferPaymentDetails = {
  __typename?: "RskNativeTransferPaymentDetails";
  destinationAddress: Scalars["String"]["output"];
  fromAddress: Scalars["String"]["output"];
  /**
   * Raw signed transaction bytes. Only returned to the accountant recovery API
   * (paymentsInProgressGet); null for all other callers.
   */
  signedTxHex?: Maybe<Scalars["String"]["output"]>;
  txId?: Maybe<Scalars["String"]["output"]>;
};

export type RskNativeTransferPaymentDetailsInput = {
  destinationAddress: Scalars["String"]["input"];
};

export type RskToLightningSwapPaymentDetails = {
  __typename?: "RskToLightningSwapPaymentDetails";
  lightningInvoiceId: Scalars["String"]["output"];
  lightningInvoiceStatus: LightningInvoiceStatus;
  swapClaimTxId?: Maybe<Scalars["String"]["output"]>;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
  swapPreimageHash: Scalars["String"]["output"];
  swapRefundTxId?: Maybe<Scalars["String"]["output"]>;
  swapServerLockTxId?: Maybe<Scalars["String"]["output"]>;
  swapUserLockTxId?: Maybe<Scalars["String"]["output"]>;
};

export type RskToLightningSwapPaymentDetailsBoltzInput = {
  refundPublicKey: Scalars["String"]["input"];
};

export type RskToLightningSwapPaymentDetailsInput = {
  /** Boltz swap parameters. Required for initial flow (from AON), optional for retry flow. */
  boltz?: InputMaybe<RskToLightningSwapPaymentDetailsBoltzInput>;
  /**
   * The Lightning address to send the swapped funds to.
   * If not provided, the funds will be sent to the user's default lightning address.
   */
  lightningAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export type RskToOnChainSwapPaymentDetails = {
  __typename?: "RskToOnChainSwapPaymentDetails";
  onChainAddress?: Maybe<Scalars["String"]["output"]>;
  onChainTxId?: Maybe<Scalars["String"]["output"]>;
  swapClaimTxId?: Maybe<Scalars["String"]["output"]>;
  swapId: Scalars["String"]["output"];
  swapMetadata: Scalars["String"]["output"];
  swapPreimageHash: Scalars["String"]["output"];
  swapRefundTxId?: Maybe<Scalars["String"]["output"]>;
  swapServerLockTxId?: Maybe<Scalars["String"]["output"]>;
  swapUserLockTxId?: Maybe<Scalars["String"]["output"]>;
};

export type RskToOnChainSwapPaymentDetailsBoltzInput = {
  claimPublicKey: Scalars["String"]["input"];
  preimageHash: Scalars["String"]["input"];
  preimageHexEncrypted: Scalars["String"]["input"];
};

export type RskToOnChainSwapPaymentDetailsInput = {
  /** Boltz swap parameters. Required for initial flow (from AON), optional for retry flow. */
  boltz?: InputMaybe<RskToOnChainSwapPaymentDetailsBoltzInput>;
  /** The Bitcoin address where the claimed funds should be sent. */
  onChainAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** Preimage hash for the swap. Required for retry flow when boltz is not provided. */
  preimageHash?: InputMaybe<Scalars["String"]["input"]>;
  /** Encrypted preimage hex. Required for retry flow when boltz is not provided. */
  preimageHexEncrypted?: InputMaybe<Scalars["String"]["input"]>;
};

export type SendOtpByEmailInput = {
  action: MfaAction;
  authFlowIntent?: InputMaybe<AuthFlowIntent>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export enum SettingValueType {
  Boolean = "BOOLEAN",
  Enum = "ENUM",
  Integer = "INTEGER",
  String = "STRING",
}

export type ShippingAddress = {
  __typename?: "ShippingAddress";
  addressLines: Array<Scalars["String"]["output"]>;
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  postalCode: Scalars["String"]["output"];
  state?: Maybe<Scalars["String"]["output"]>;
};

export type ShippingAddressCreateInput = {
  addressLines: Array<Scalars["String"]["input"]>;
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  postalCode: Scalars["String"]["input"];
  state?: InputMaybe<Scalars["String"]["input"]>;
};

export type ShippingAddressesGetInput = {
  userId: Scalars["BigInt"]["input"];
};

export type ShippingConfig = {
  __typename?: "ShippingConfig";
  globalShipping: Scalars["Boolean"]["output"];
  id?: Maybe<Scalars["BigInt"]["output"]>;
  name: Scalars["String"]["output"];
  shippingRates?: Maybe<Array<ProjectShippingRate>>;
  type: ProjectShippingConfigType;
};

export enum ShippingDestination {
  International = "international",
  National = "national",
}

export type SignedUploadUrl = {
  __typename?: "SignedUploadUrl";
  /** Distribution URL from which the image will be served */
  distributionUrl: Scalars["String"]["output"];
  /** Signed URL used by the client to upload an image */
  uploadUrl: Scalars["String"]["output"];
};

export type SourceResource = Activity | Post | Project;

export type Sponsor = {
  __typename?: "Sponsor";
  createdAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  status: SponsorStatus;
  url?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export enum SponsorStatus {
  Accepted = "ACCEPTED",
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Pending = "PENDING",
  Rejected = "REJECTED",
}

export type StatsInterface = {
  count: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
  totalUsd: Scalars["Float"]["output"];
};

export type StrikePaymentDetails = {
  __typename?: "StrikePaymentDetails";
  lightningInvoiceId?: Maybe<Scalars["String"]["output"]>;
  lightningPaymentRequest?: Maybe<Scalars["String"]["output"]>;
  lightningPaymentRequestExpiresAt?: Maybe<Scalars["Date"]["output"]>;
  method: Scalars["String"]["output"];
  onChainAddress?: Maybe<Scalars["String"]["output"]>;
  onChainTransactionId?: Maybe<Scalars["String"]["output"]>;
  strikeReceiveId?: Maybe<Scalars["String"]["output"]>;
  strikeReceiveRequestId: Scalars["String"]["output"];
};

export enum StrikePaymentRail {
  Lightning = "LIGHTNING",
  OnChain = "ON_CHAIN",
}

export type StripeCheckoutSessionInput = {
  returnUrl: Scalars["String"]["input"];
};

export type StripeConnectOnboardingPayload = {
  __typename?: "StripeConnectOnboardingPayload";
  accountId: Scalars["String"]["output"];
  onboardingUrl: Scalars["String"]["output"];
  status: StripeConnectStatus;
};

export type StripeConnectStatus = {
  __typename?: "StripeConnectStatus";
  accountId?: Maybe<Scalars["String"]["output"]>;
  chargesEnabled: Scalars["Boolean"]["output"];
  detailsSubmitted: Scalars["Boolean"]["output"];
  disabledReason?: Maybe<Scalars["String"]["output"]>;
  isReady: Scalars["Boolean"]["output"];
  payoutsEnabled: Scalars["Boolean"]["output"];
};

export enum StripeEmbeddedTheme {
  Dark = "DARK",
  Light = "LIGHT",
}

export type StripeInterestNotifyResponse = {
  __typename?: "StripeInterestNotifyResponse";
  success: Scalars["Boolean"]["output"];
};

export type Subscription = {
  __typename?: "Subscription";
  _?: Maybe<Scalars["Boolean"]["output"]>;
  activityCreated: Activity;
  contributionStatusUpdated: ContributionStatusUpdatedSubscriptionResponse;
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

export type SubscriptionPaymentConfirmationInput = {
  currentPeriodEndAt?: InputMaybe<Scalars["Date"]["input"]>;
  currentPeriodStartAt?: InputMaybe<Scalars["Date"]["input"]>;
  recurringContributionUuid?: InputMaybe<Scalars["String"]["input"]>;
  stripeAccountId?: InputMaybe<Scalars["String"]["input"]>;
  stripeCustomerId?: InputMaybe<Scalars["String"]["input"]>;
  stripeSubscriptionId?: InputMaybe<Scalars["String"]["input"]>;
  userSubscriptionUuid?: InputMaybe<Scalars["String"]["input"]>;
};

export type Swap = {
  __typename?: "Swap";
  json: Scalars["String"]["output"];
};

export type TotpInput = {
  totp: Scalars["Int"]["input"];
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["Int"]["output"];
  label: Scalars["String"]["output"];
};

export type TagCreateInput = {
  label: Scalars["String"]["input"];
};

export type TagsGetResult = {
  __typename?: "TagsGetResult";
  count: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  label: Scalars["String"]["output"];
};

export type TagsMostFundedGetResult = {
  __typename?: "TagsMostFundedGetResult";
  id: Scalars["Int"]["output"];
  label: Scalars["String"]["output"];
};

export type TwoFaInput = {
  OTP?: InputMaybe<OtpInput>;
  /** TOTP is not supported yet. */
  TOTP?: InputMaybe<TotpInput>;
};

export type UniqueOrderInput = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type UniqueProjectQueryInput = {
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** Unique name for the project. Used for the project URL and lightning address. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateProjectInput = {
  /** AON goal update inputs */
  aonGoal?: InputMaybe<ProjectAonGoalUpdateInput>;
  /** Project category */
  category?: InputMaybe<ProjectCategory>;
  /** Project ISO3166 country code */
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the project. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  directPaymentDetails?: InputMaybe<DirectPaymentDetailsInput>;
  /** Funding strategy */
  fundingStrategy?: InputMaybe<ProjectFundingStrategy>;
  /** Project header images. */
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Project creation step */
  lastCreationStep?: InputMaybe<ProjectCreationStep>;
  /** Scheduled launch date */
  launchScheduledAt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Project links */
  links?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Project name, used both for the project URL, project lightning address and NIP05. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  projectId: Scalars["BigInt"]["input"];
  /** Boolean flag to indicate if the project can be promoted. */
  promotionsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Project region */
  region?: InputMaybe<Scalars["String"]["input"]>;
  /** A short description of the project. */
  shortDescription?: InputMaybe<Scalars["String"]["input"]>;
  /** Project sub-category */
  subCategory?: InputMaybe<ProjectSubCategory>;
  /** Project tags */
  tagIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Project thumbnail image. */
  thumbnailImage?: InputMaybe<Scalars["String"]["input"]>;
  /** Public title of the project. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ProjectType>;
};

export type UpdateProjectSubscriptionPlanInput = {
  amountBtcSat?: InputMaybe<Scalars["Int"]["input"]>;
  amountUsdCent?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["BigInt"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  interval?: InputMaybe<RecurringInterval>;
  isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["BigInt"]["input"];
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateWalletInput = {
  feePercentage?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["BigInt"]["input"];
  lightningAddressConnectionDetailsInput?: InputMaybe<LightningAddressConnectionDetailsUpdateInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  twoFAInput?: InputMaybe<TwoFaInput>;
};

export type UpdateWalletStateInput = {
  status: WalletStatus;
  statusCode: WalletStatusCode;
  walletId: Scalars["BigInt"]["input"];
};

export type User = {
  __typename?: "User";
  accountKeys?: Maybe<UserAccountKeys>;
  badges: Array<UserBadge>;
  bio?: Maybe<Scalars["String"]["output"]>;
  complianceDetails: UserComplianceDetails;
  /** Returns a user's contributions across all projects. */
  contributions: Array<Contribution>;
  createdAt: Scalars["Date"]["output"];
  creatorTrustStats: CreatorTrustStats;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["Date"]["output"]>;
  /** The type of entity that the User is in real life. For example, a person, a company, or a non-profit. */
  entityType?: Maybe<UserEntityType>;
  /**
   * External accounts linked to the User. It can be a twitter account if the User linked their account. For anonymous
   * users, this field can contain the wallet or app from which they funded, eg: Fountain, Breeze, etc.
   */
  externalAccounts: Array<ExternalAccount>;
  guardianType?: Maybe<GuardianType>;
  hasSocialAccount: Scalars["Boolean"]["output"];
  heroId: Scalars["String"]["output"];
  heroProfile: UserHeroProfile;
  heroStats: UserHeroStats;
  id: Scalars["BigInt"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isEmailVerified: Scalars["Boolean"]["output"];
  isFieldPartner: Scalars["Boolean"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
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
  ranking?: Maybe<Scalars["BigInt"]["output"]>;
  recurringContributions: Array<RecurringContribution>;
  taxProfile?: Maybe<UserTaxProfile>;
  taxProfileId?: Maybe<Scalars["BigInt"]["output"]>;
  username: Scalars["String"]["output"];
  wallet?: Maybe<Wallet>;
};

export type UserContributionsArgs = {
  input?: InputMaybe<UserContributionsInput>;
};

export type UserPostsArgs = {
  input?: InputMaybe<UserPostsGetInput>;
};

export type UserProjectsArgs = {
  input?: InputMaybe<UserProjectsGetInput>;
};

export type UserAccountKeys = {
  __typename?: "UserAccountKeys";
  createdAt: Scalars["Date"]["output"];
  encryptedMnemonic?: Maybe<Scalars["String"]["output"]>;
  encryptedSeed: Scalars["String"]["output"];
  id: Scalars["BigInt"]["output"];
  rskKeyPair: RskKeyPair;
  updatedAt: Scalars["Date"]["output"];
  userId: Scalars["BigInt"]["output"];
};

export type UserAccountKeysUpdateInput = {
  encryptedMnemonic: Scalars["String"]["input"];
  encryptedSeed: Scalars["String"]["input"];
  projectRskEoas?: InputMaybe<Array<ProjectRskEoaRotationInput>>;
  rskKeyPair: RskKeyPairInput;
};

export type UserAccountPasswordFundsSummary = {
  __typename?: "UserAccountPasswordFundsSummary";
  affectedTiaProjects: Array<AccountPasswordAffectedProject>;
  aonUnclaimedFundsSats: Scalars["BigInt"]["output"];
  legacyTiaProjects: Array<AccountPasswordAffectedProject>;
  pledgedSats: Scalars["BigInt"]["output"];
  tiaUnclaimedFundsSats: Scalars["BigInt"]["output"];
  unclaimedFundsSats: Scalars["BigInt"]["output"];
  userWalletBalanceSats: Scalars["BigInt"]["output"];
};

export type UserBadge = {
  __typename?: "UserBadge";
  badge: Badge;
  badgeAwardEventId?: Maybe<Scalars["String"]["output"]>;
  contributionId?: Maybe<Scalars["BigInt"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  status?: Maybe<UserBadgeStatus>;
  updatedAt: Scalars["Date"]["output"];
  userId: Scalars["BigInt"]["output"];
};

export enum UserBadgeStatus {
  Accepted = "ACCEPTED",
  Pending = "PENDING",
}

export type UserComplianceDetails = {
  __typename?: "UserComplianceDetails";
  contributionLimits: UserContributionLimits;
  currentVerificationLevel: UserVerificationLevelStatus;
  verificationLevels: Array<UserVerificationLevelStatus>;
  verifiedDetails: UserVerifiedDetails;
};

export type UserContributionLimit = {
  __typename?: "UserContributionLimit";
  limit: Scalars["Float"]["output"];
  nextReset: Scalars["Date"]["output"];
  reached: Scalars["Boolean"]["output"];
  remaining: Scalars["Float"]["output"];
};

export type UserContributionLimits = {
  __typename?: "UserContributionLimits";
  monthly: UserContributionLimit;
};

export type UserContributionsInput = {
  pagination?: InputMaybe<PaginationInput>;
};

export type UserEmailIsValidResponse = {
  __typename?: "UserEmailIsValidResponse";
  isAvailable: Scalars["Boolean"]["output"];
  isDeliverable: Scalars["Boolean"]["output"];
  isValid: Scalars["Boolean"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
};

export type UserEmailUpdateInput = {
  email: Scalars["String"]["input"];
  /** The two-factor authentication input is required if the user already has an email set. */
  twoFAInput?: InputMaybe<TwoFaInput>;
};

export enum UserEntityType {
  Company = "COMPANY",
  NonProfit = "NON_PROFIT",
  Person = "PERSON",
}

export type UserGetInput = {
  heroId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type UserHeroImpact = {
  __typename?: "UserHeroImpact";
  backed: UserHeroImpactStat;
  built: UserHeroImpactStat;
  enabled: UserHeroImpactStat;
  onboarded: UserHeroImpactStat;
};

export type UserHeroImpactStat = {
  __typename?: "UserHeroImpactStat";
  amountSats: Scalars["BigInt"]["output"];
  projectsCount: Scalars["Int"]["output"];
};

export type UserHeroProfile = {
  __typename?: "UserHeroProfile";
  impact: UserHeroImpact;
  projects: UserHeroProjectsResponse;
  trust: UserHeroTrust;
};

export type UserHeroProfileProjectsArgs = {
  input: UserHeroProjectsInput;
};

export type UserHeroProject = {
  __typename?: "UserHeroProject";
  contributedSats: Scalars["BigInt"]["output"];
  enabledSats: Scalars["BigInt"]["output"];
  lastActivityAt: Scalars["Date"]["output"];
  project: Project;
  relationships: Array<HeroProjectRelationship>;
};

export type UserHeroProjectsInput = {
  category: HeroProjectCategory;
  pagination?: InputMaybe<PaginationInput>;
};

export type UserHeroProjectsResponse = {
  __typename?: "UserHeroProjectsResponse";
  pagination: CursorPaginationResponse;
  projects: Array<UserHeroProject>;
};

export type UserHeroStats = {
  __typename?: "UserHeroStats";
  ambassadorStats: AmbassadorStats;
  contributorStats: ContributorStats;
  creatorStats: CreatorStats;
};

export type UserHeroTrust = {
  __typename?: "UserHeroTrust";
  communityRole?: Maybe<HeroCommunityRole>;
  identityVerified: Scalars["Boolean"]["output"];
};

export type UserNotificationSettings = {
  __typename?: "UserNotificationSettings";
  notificationSettings: Array<NotificationSettings>;
  userId: Scalars["BigInt"]["output"];
};

export type UserPostsGetInput = {
  where?: InputMaybe<UserPostsGetWhereInput>;
};

export type UserPostsGetWhereInput = {
  published?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserProjectContribution = {
  __typename?: "UserProjectContribution";
  /** Funder linked to the funding contribution. Only present if the contribution was a funding contribution. */
  funder?: Maybe<Funder>;
  /**
   * Boolean value indicating if the User was an ambassador of the project.
   * @deprecated Field no longer supported
   */
  isAmbassador: Scalars["Boolean"]["output"];
  /** Boolean value indicating if the User funded the project. */
  isFunder: Scalars["Boolean"]["output"];
  /**
   * Boolean value indicating if the User was a sponsor for the project.
   * @deprecated Field no longer supported
   */
  isSponsor: Scalars["Boolean"]["output"];
  /** Project linked to the contributions. */
  project: Project;
};

export type UserProjectsGetInput = {
  where?: InputMaybe<UserProjectsGetWhereInput>;
};

export type UserProjectsGetWhereInput = {
  status?: InputMaybe<ProjectStatus>;
};

export type UserTaxProfile = {
  __typename?: "UserTaxProfile";
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  deleted: Scalars["Boolean"]["output"];
  deletedAt?: Maybe<Scalars["Date"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  legalEntityType: LegalEntityType;
  state?: Maybe<Scalars["String"]["output"]>;
  taxId?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["BigInt"]["output"];
  verified?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UserTaxProfileUpdateInput = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  legalEntityType: LegalEntityType;
  state?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
};

export enum UserVerificationLevel {
  Level_0 = "LEVEL_0",
  Level_1 = "LEVEL_1",
  Level_2 = "LEVEL_2",
  Level_3 = "LEVEL_3",
}

export enum UserVerificationLevelInput {
  Level_2 = "LEVEL_2",
  Level_3 = "LEVEL_3",
}

export type UserVerificationLevelStatus = {
  __typename?: "UserVerificationLevelStatus";
  level: UserVerificationLevel;
  status: UserVerificationStatus;
  verifiedAt?: Maybe<Scalars["Date"]["output"]>;
};

export enum UserVerificationStatus {
  Pending = "PENDING",
  Rejected = "REJECTED",
  Unverified = "UNVERIFIED",
  Verified = "VERIFIED",
}

export type UserVerificationTokenGenerateInput = {
  verificationLevel: UserVerificationLevelInput;
};

export type UserVerificationTokenGenerateResponse = {
  __typename?: "UserVerificationTokenGenerateResponse";
  token: Scalars["String"]["output"];
  verificationLevel: UserVerificationLevel;
};

export type UserVerifiedDetails = {
  __typename?: "UserVerifiedDetails";
  email?: Maybe<VerificationResult>;
  identity?: Maybe<VerificationResult>;
  phoneNumber?: Maybe<VerificationResult>;
};

export type UserWalletWithdraw = {
  __typename?: "UserWalletWithdraw";
  amount: Scalars["Int"]["output"];
  expiresAt: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  payments: Array<Payment>;
  status: UserWalletWithdrawStatus;
  uuid: Scalars["String"]["output"];
};

export type UserWalletWithdrawGetResponse = {
  __typename?: "UserWalletWithdrawGetResponse";
  userWalletWithdraw: UserWalletWithdraw;
  userWalletWithdrawMetadata: UserWalletWithdrawMetadata;
};

export type UserWalletWithdrawInitiateInput = {
  /** Required for swap withdrawals; optional for native transfers. */
  callDataHex?: InputMaybe<Scalars["String"]["input"]>;
  claimTxHex?: InputMaybe<Scalars["String"]["input"]>;
  paymentId: Scalars["BigInt"]["input"];
  rskAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** Required for swap withdrawals; optional for native transfers. */
  signature?: InputMaybe<Scalars["String"]["input"]>;
  /** Signed native RBTC transfer transaction hex (required for RSK_NATIVE_TRANSFER withdrawals) */
  signedTxHex?: InputMaybe<Scalars["String"]["input"]>;
  userLockTxHex?: InputMaybe<Scalars["String"]["input"]>;
  userWalletWithdrawId: Scalars["BigInt"]["input"];
};

export type UserWalletWithdrawInitiateResponse = {
  __typename?: "UserWalletWithdrawInitiateResponse";
  txHash: Scalars["String"]["output"];
  userWalletWithdraw: UserWalletWithdraw;
};

export type UserWalletWithdrawMetadata = {
  __typename?: "UserWalletWithdrawMetadata";
  contractType: PayoutContractType;
  nonce: Scalars["Int"]["output"];
  requiresUserLockTx: Scalars["Boolean"]["output"];
  swapContractAddress: Scalars["String"]["output"];
};

export type UserWalletWithdrawPaymentCreateInput = {
  userWalletWithdrawId: Scalars["BigInt"]["input"];
  userWalletWithdrawPaymentInput: UserWalletWithdrawPaymentInput;
};

export type UserWalletWithdrawPaymentCreateResponse = {
  __typename?: "UserWalletWithdrawPaymentCreateResponse";
  payment: Payment;
  swap?: Maybe<Scalars["String"]["output"]>;
  userWalletWithdraw: UserWalletWithdraw;
};

export type UserWalletWithdrawPaymentInput = {
  rskNativeTransfer?: InputMaybe<RskNativeTransferPaymentDetailsInput>;
  rskToLightningSwap?: InputMaybe<RskToLightningSwapPaymentDetailsInput>;
  rskToOnChainSwap?: InputMaybe<RskToOnChainSwapPaymentDetailsInput>;
};

export type UserWalletWithdrawRequestResponse = {
  __typename?: "UserWalletWithdrawRequestResponse";
  userWalletWithdraw: UserWalletWithdraw;
  userWalletWithdrawMetadata: UserWalletWithdrawMetadata;
};

export enum UserWalletWithdrawStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Expired = "EXPIRED",
  Failed = "FAILED",
  Pending = "PENDING",
  Processing = "PROCESSING",
}

export type VerificationResult = {
  __typename?: "VerificationResult";
  verified?: Maybe<Scalars["Boolean"]["output"]>;
  verifiedAt?: Maybe<Scalars["Date"]["output"]>;
};

export enum VotingSystem {
  OneToOne = "ONE_TO_ONE",
  StepLog_10 = "STEP_LOG_10",
}

export type Wallet = {
  __typename?: "Wallet";
  connectionDetails?: Maybe<ConnectionDetails>;
  /** The fee percentage applied to contributions going to this wallet. */
  feePercentage?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Funding limits on this wallet */
  limits?: Maybe<WalletLimits>;
  /** Wallet name */
  name?: Maybe<Scalars["String"]["output"]>;
  state: WalletState;
};

export type WalletContributionLimits = {
  __typename?: "WalletContributionLimits";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  offChain?: Maybe<WalletOffChainContributionLimits>;
  onChain?: Maybe<WalletOnChainContributionLimits>;
};

export type WalletLimits = {
  __typename?: "WalletLimits";
  contribution?: Maybe<WalletContributionLimits>;
};

export type WalletOffChainContributionLimits = {
  __typename?: "WalletOffChainContributionLimits";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
};

export type WalletOnChainContributionLimits = {
  __typename?: "WalletOnChainContributionLimits";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
};

export type WalletResourceInput = {
  resourceId: Scalars["BigInt"]["input"];
  resourceType: WalletResourceType;
};

export enum WalletResourceType {
  Project = "project",
  User = "user",
}

export type WalletState = {
  __typename?: "WalletState";
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
  Inactive = "INACTIVE",
  Ok = "OK",
  Unstable = "UNSTABLE",
}

export enum WalletStatusCode {
  NotFound = "NOT_FOUND",
  NoRoute = "NO_ROUTE",
  Ok = "OK",
  Unknown = "UNKNOWN",
  Unreachable = "UNREACHABLE",
  WalletLocked = "WALLET_LOCKED",
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
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  ActivityResource:
    | (Omit<
        Contribution,
        "bitcoinQuote" | "matching" | "payments" | "sourceResource"
      > & {
        bitcoinQuote?: Maybe<_RefType["BitcoinQuote"]>;
        matching?: Maybe<_RefType["ProjectMatching"]>;
        payments: Array<_RefType["Payment"]>;
        sourceResource?: Maybe<_RefType["SourceResource"]>;
      })
    | (Omit<Post, "contributions" | "creator" | "project"> & {
        contributions: Array<_RefType["Contribution"]>;
        creator: _RefType["User"];
        project?: Maybe<_RefType["Project"]>;
      })
    | (Omit<
        Project,
        | "activeMatching"
        | "ambassadors"
        | "contributions"
        | "fieldPartner"
        | "followers"
        | "fundingSummary"
        | "grantApplications"
        | "matchings"
        | "owners"
        | "sponsors"
        | "wallets"
      > & {
        activeMatching?: Maybe<_RefType["ProjectMatching"]>;
        ambassadors: _RefType["ProjectAmbassadorsConnection"];
        contributions: Array<_RefType["Contribution"]>;
        fieldPartner?: Maybe<_RefType["User"]>;
        followers: Array<_RefType["User"]>;
        fundingSummary: _RefType["ProjectFundingSummary"];
        grantApplications: Array<_RefType["GrantApplicant"]>;
        matchings: Array<_RefType["ProjectMatching"]>;
        owners: Array<_RefType["Owner"]>;
        sponsors: Array<_RefType["Sponsor"]>;
        wallets: Array<_RefType["Wallet"]>;
      })
    | ProjectGoal
    | (Omit<ProjectReward, "project"> & { project: _RefType["Project"] });
  ConnectionDetails: LightningAddressConnectionDetails;
  Grant:
    | (Omit<BoardVoteGrant, "applicants" | "boardMembers" | "sponsors"> & {
        applicants: Array<_RefType["GrantApplicant"]>;
        boardMembers: Array<_RefType["GrantBoardMember"]>;
        sponsors: Array<_RefType["Sponsor"]>;
      })
    | (Omit<CommunityVoteGrant, "applicants" | "sponsors"> & {
        applicants: Array<_RefType["GrantApplicant"]>;
        sponsors: Array<_RefType["Sponsor"]>;
      });
  PaymentDetails:
    | FiatPaymentDetails
    | FiatToLightningSwapPaymentDetails
    | LightningPaymentDetails
    | LightningToRskSwapPaymentDetails
    | OnChainToLightningSwapPaymentDetails
    | OnChainToRskSwapPaymentDetails
    | RskAonClaimPaymentDetails
    | RskNativeTransferPaymentDetails
    | RskToLightningSwapPaymentDetails
    | RskToOnChainSwapPaymentDetails
    | StrikePaymentDetails;
  SourceResource:
    | (Omit<Activity, "project" | "resource"> & {
        project: _RefType["Project"];
        resource: _RefType["ActivityResource"];
      })
    | (Omit<Post, "contributions" | "creator" | "project"> & {
        contributions: Array<_RefType["Contribution"]>;
        creator: _RefType["User"];
        project?: Maybe<_RefType["Project"]>;
      })
    | (Omit<
        Project,
        | "activeMatching"
        | "ambassadors"
        | "contributions"
        | "fieldPartner"
        | "followers"
        | "fundingSummary"
        | "grantApplications"
        | "matchings"
        | "owners"
        | "sponsors"
        | "wallets"
      > & {
        activeMatching?: Maybe<_RefType["ProjectMatching"]>;
        ambassadors: _RefType["ProjectAmbassadorsConnection"];
        contributions: Array<_RefType["Contribution"]>;
        fieldPartner?: Maybe<_RefType["User"]>;
        followers: Array<_RefType["User"]>;
        fundingSummary: _RefType["ProjectFundingSummary"];
        grantApplications: Array<_RefType["GrantApplicant"]>;
        matchings: Array<_RefType["ProjectMatching"]>;
        owners: Array<_RefType["Owner"]>;
        sponsors: Array<_RefType["Sponsor"]>;
        wallets: Array<_RefType["Wallet"]>;
      });
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    GraphData: ProjectContributionsStatsGraphDataAmount;
    GraphSumData: FunderRewardGraphSum;
    HeroStats: AmbassadorStats | ContributorStats | CreatorStats;
    MutationResponse:
      | DeleteUserResponse
      | ProjectAonGoalStatusUpdateResponse
      | ProjectDeleteResponse
      | ProjectGoalDeleteResponse
      | ProjectMatchingDeleteResponse
      | ProjectWalletConfigurationContributionAttemptNotifyResponse;
    StatsInterface:
      | ProjectContributionsGroupedByMethodStats
      | ProjectContributionsStats;
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountPasswordAffectedProject: ResolverTypeWrapper<AccountPasswordAffectedProject>;
  AcelerandoVipLeaderboardEntry: ResolverTypeWrapper<AcelerandoVipLeaderboardEntry>;
  AcelerandoVipLeaderboardResponse: ResolverTypeWrapper<AcelerandoVipLeaderboardResponse>;
  AcelerandoVipMyPositionResponse: ResolverTypeWrapper<AcelerandoVipMyPositionResponse>;
  ActivitiesCountGroupedByProjectInput: ActivitiesCountGroupedByProjectInput;
  ActivitiesGetResponse: ResolverTypeWrapper<
    Omit<ActivitiesGetResponse, "activities"> & {
      activities: Array<ResolversTypes["Activity"]>;
    }
  >;
  Activity: ResolverTypeWrapper<
    Omit<Activity, "project" | "resource"> & {
      project: ResolversTypes["Project"];
      resource: ResolversTypes["ActivityResource"];
    }
  >;
  ActivityCreatedSubscriptionInput: ActivityCreatedSubscriptionInput;
  ActivityCreatedSubscriptionWhereInput: ActivityCreatedSubscriptionWhereInput;
  ActivityFeedName: ActivityFeedName;
  ActivityResource: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["ActivityResource"]
  >;
  ActivityResourceType: ActivityResourceType;
  Ambassador: ResolverTypeWrapper<
    Omit<Ambassador, "user"> & { user: ResolversTypes["User"] }
  >;
  AmbassadorStats: ResolverTypeWrapper<AmbassadorStats>;
  AmountCurrency: AmountCurrency;
  AmountSummary: ResolverTypeWrapper<AmountSummary>;
  AnalyticsGroupByInterval: AnalyticsGroupByInterval;
  AonClaimBroadcastResponse: ResolverTypeWrapper<AonClaimBroadcastResponse>;
  AonClaimPrepareResponse: ResolverTypeWrapper<AonClaimPrepareResponse>;
  AonClaimStatus: AonClaimStatus;
  AonClaimStatusResponse: ResolverTypeWrapper<AonClaimStatusResponse>;
  AuthFlowIntent: AuthFlowIntent;
  Badge: ResolverTypeWrapper<Badge>;
  BadgeClaimInput: BadgeClaimInput;
  BadgesGetInput: BadgesGetInput;
  BadgesGetWhereInput: BadgesGetWhereInput;
  BaseCurrency: BaseCurrency;
  BeehiivNewsletterSubscribeInput: BeehiivNewsletterSubscribeInput;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]["output"]>;
  BitcoinPaymentMethods: ResolverTypeWrapper<BitcoinPaymentMethods>;
  BitcoinQuote: ResolverTypeWrapper<BitcoinQuote>;
  BoardVoteGrant: ResolverTypeWrapper<
    Omit<BoardVoteGrant, "applicants" | "boardMembers" | "sponsors"> & {
      applicants: Array<ResolversTypes["GrantApplicant"]>;
      boardMembers: Array<ResolversTypes["GrantBoardMember"]>;
      sponsors: Array<ResolversTypes["Sponsor"]>;
    }
  >;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CommunityVoteGrant: ResolverTypeWrapper<
    Omit<CommunityVoteGrant, "applicants" | "sponsors"> & {
      applicants: Array<ResolversTypes["GrantApplicant"]>;
      sponsors: Array<ResolversTypes["Sponsor"]>;
    }
  >;
  CompetitionVoteGrantVoteSummary: ResolverTypeWrapper<CompetitionVoteGrantVoteSummary>;
  ConnectionDetails: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["ConnectionDetails"]
  >;
  Contribution: ResolverTypeWrapper<
    Omit<
      Contribution,
      "bitcoinQuote" | "matching" | "payments" | "sourceResource"
    > & {
      bitcoinQuote?: Maybe<ResolversTypes["BitcoinQuote"]>;
      matching?: Maybe<ResolversTypes["ProjectMatching"]>;
      payments: Array<ResolversTypes["Payment"]>;
      sourceResource?: Maybe<ResolversTypes["SourceResource"]>;
    }
  >;
  ContributionCreateInput: ContributionCreateInput;
  ContributionEmailUpdateInput: ContributionEmailUpdateInput;
  ContributionFiatPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionFiatPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionFiatPaymentDetailsInput: ContributionFiatPaymentDetailsInput;
  ContributionFiatPaymentDetailsStripeInput: ContributionFiatPaymentDetailsStripeInput;
  ContributionFiatToLightningSwapPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionFiatToLightningSwapPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionFiatToLightningSwapPaymentDetailsBanxaInput: ContributionFiatToLightningSwapPaymentDetailsBanxaInput;
  ContributionFiatToLightningSwapPaymentDetailsInput: ContributionFiatToLightningSwapPaymentDetailsInput;
  ContributionLightningPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionLightningPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionLightningPaymentDetailsInput: ContributionLightningPaymentDetailsInput;
  ContributionLightningToRskSwapPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionLightningToRskSwapPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionLightningToRskSwapPaymentDetailsBoltzInput: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  ContributionLightningToRskSwapPaymentDetailsInput: ContributionLightningToRskSwapPaymentDetailsInput;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionMutationResponse: ResolverTypeWrapper<
    Omit<ContributionMutationResponse, "contribution" | "payments"> & {
      contribution: ResolversTypes["Contribution"];
      payments: ResolversTypes["ContributionPaymentsDetails"];
    }
  >;
  ContributionOnChainSwapPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionOnChainSwapPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionOnChainSwapPaymentDetailsBoltzInput: ContributionOnChainSwapPaymentDetailsBoltzInput;
  ContributionOnChainSwapPaymentDetailsInput: ContributionOnChainSwapPaymentDetailsInput;
  ContributionOnChainToRskSwapPaymentDetails: ResolverTypeWrapper<
    Omit<ContributionOnChainToRskSwapPaymentDetails, "fees"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
    }
  >;
  ContributionOnChainToRskSwapPaymentDetailsBoltzInput: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  ContributionOnChainToRskSwapPaymentDetailsInput: ContributionOnChainToRskSwapPaymentDetailsInput;
  ContributionPaymentsAddInput: ContributionPaymentsAddInput;
  ContributionPaymentsAddResponse: ResolverTypeWrapper<
    Omit<ContributionPaymentsAddResponse, "payments"> & {
      payments: ResolversTypes["ContributionPaymentsDetails"];
    }
  >;
  ContributionPaymentsDetails: ResolverTypeWrapper<
    Omit<
      ContributionPaymentsDetails,
      | "fiat"
      | "fiatToLightningSwap"
      | "lightning"
      | "lightningToRskSwap"
      | "onChainSwap"
      | "onChainToRskSwap"
    > & {
      fiat?: Maybe<ResolversTypes["ContributionFiatPaymentDetails"]>;
      fiatToLightningSwap?: Maybe<
        ResolversTypes["ContributionFiatToLightningSwapPaymentDetails"]
      >;
      lightning?: Maybe<ResolversTypes["ContributionLightningPaymentDetails"]>;
      lightningToRskSwap?: Maybe<
        ResolversTypes["ContributionLightningToRskSwapPaymentDetails"]
      >;
      onChainSwap?: Maybe<
        ResolversTypes["ContributionOnChainSwapPaymentDetails"]
      >;
      onChainToRskSwap?: Maybe<
        ResolversTypes["ContributionOnChainToRskSwapPaymentDetails"]
      >;
    }
  >;
  ContributionPaymentsInput: ContributionPaymentsInput;
  ContributionStatus: ContributionStatus;
  ContributionStatusUpdatedInput: ContributionStatusUpdatedInput;
  ContributionStatusUpdatedSubscriptionResponse: ResolverTypeWrapper<
    Omit<ContributionStatusUpdatedSubscriptionResponse, "contribution"> & {
      contribution: ResolversTypes["Contribution"];
    }
  >;
  ContributionStrikePaymentDetails: ResolverTypeWrapper<ContributionStrikePaymentDetails>;
  ContributionStrikePaymentDetailsInput: ContributionStrikePaymentDetailsInput;
  ContributionSwapRecoveryInput: ContributionSwapRecoveryInput;
  ContributionsGetResponse: ResolverTypeWrapper<
    Omit<ContributionsGetResponse, "contributions"> & {
      contributions: Array<ResolversTypes["Contribution"]>;
    }
  >;
  ContributionsSummary: ResolverTypeWrapper<ContributionsSummary>;
  ContributionsSummaryPeriod: ContributionsSummaryPeriod;
  ContributionsWhereContributionStatus: ContributionsWhereContributionStatus;
  ContributorContributionsSummary: ResolverTypeWrapper<ContributorContributionsSummary>;
  ContributorStats: ResolverTypeWrapper<ContributorStats>;
  Country: ResolverTypeWrapper<Country>;
  CreateProjectInput: CreateProjectInput;
  CreateProjectSubscriptionPlanInput: CreateProjectSubscriptionPlanInput;
  CreateWalletInput: CreateWalletInput;
  CreatorNotificationSettings: ResolverTypeWrapper<CreatorNotificationSettings>;
  CreatorNotificationSettingsProject: ResolverTypeWrapper<CreatorNotificationSettingsProject>;
  CreatorStats: ResolverTypeWrapper<CreatorStats>;
  CreatorTrustStats: ResolverTypeWrapper<CreatorTrustStats>;
  Currency: Currency;
  CurrencyQuoteGetInput: CurrencyQuoteGetInput;
  CurrencyQuoteGetResponse: ResolverTypeWrapper<CurrencyQuoteGetResponse>;
  CursorInput: CursorInput;
  CursorInputString: CursorInputString;
  CursorPaginationResponse: ResolverTypeWrapper<CursorPaginationResponse>;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  DateRangeInput: DateRangeInput;
  DatetimeRange: ResolverTypeWrapper<DatetimeRange>;
  DeleteProjectInput: DeleteProjectInput;
  DeleteUserResponse: ResolverTypeWrapper<DeleteUserResponse>;
  DirectPaymentDetails: ResolverTypeWrapper<DirectPaymentDetails>;
  DirectPaymentDetailsInput: DirectPaymentDetailsInput;
  DistributionSystem: DistributionSystem;
  EIP712SignatureInput: Eip712SignatureInput;
  EmailSendOptionsInput: EmailSendOptionsInput;
  EmailSubscriberSegment: EmailSubscriberSegment;
  EmailVerifyInput: EmailVerifyInput;
  ExternalAccount: ResolverTypeWrapper<ExternalAccount>;
  FeeCurrency: FeeCurrency;
  FiatPaymentDetails: ResolverTypeWrapper<FiatPaymentDetails>;
  FiatPaymentMethods: ResolverTypeWrapper<FiatPaymentMethods>;
  FiatToLightningSwapPaymentDetails: ResolverTypeWrapper<FiatToLightningSwapPaymentDetails>;
  FileUploadInput: FileUploadInput;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Funder: ResolverTypeWrapper<
    Omit<Funder, "contributions" | "user"> & {
      contributions: Array<ResolversTypes["Contribution"]>;
      user?: Maybe<ResolversTypes["User"]>;
    }
  >;
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
  GetFunderWhereInput: GetFunderWhereInput;
  GetFundersInput: GetFundersInput;
  GetFundersOrderByInput: GetFundersOrderByInput;
  GetPostsInput: GetPostsInput;
  GetPostsOrderByInput: GetPostsOrderByInput;
  GetPostsWhereInput: GetPostsWhereInput;
  GetProjectGoalsInput: GetProjectGoalsInput;
  GetProjectOrdersStatsInput: GetProjectOrdersStatsInput;
  GetProjectOrdersStatsWhereInput: GetProjectOrdersStatsWhereInput;
  GetProjectRewardInput: GetProjectRewardInput;
  GetProjectRewardWhereInput: GetProjectRewardWhereInput;
  GetProjectRewardsCatalogInput: GetProjectRewardsCatalogInput;
  GetProjectRewardsInput: GetProjectRewardsInput;
  GetProjectRewardsMostSoldInput: GetProjectRewardsMostSoldInput;
  GetProjectRewardsWhereInput: GetProjectRewardsWhereInput;
  GetProjectStatsInput: GetProjectStatsInput;
  GetProjectStatsWhereInput: GetProjectStatsWhereInput;
  GlobalAmbassadorLeaderboardRow: ResolverTypeWrapper<GlobalAmbassadorLeaderboardRow>;
  GlobalContributorLeaderboardRow: ResolverTypeWrapper<GlobalContributorLeaderboardRow>;
  GlobalCreatorLeaderboardRow: ResolverTypeWrapper<GlobalCreatorLeaderboardRow>;
  GlobalProjectLeaderboardRow: ResolverTypeWrapper<GlobalProjectLeaderboardRow>;
  Grant: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["Grant"]>;
  GrantApplicant: ResolverTypeWrapper<
    Omit<GrantApplicant, "contributors" | "grant" | "project"> & {
      contributors: Array<ResolversTypes["GrantApplicantContributor"]>;
      grant: ResolversTypes["Grant"];
      project: ResolversTypes["Project"];
    }
  >;
  GrantApplicantContributor: ResolverTypeWrapper<
    Omit<GrantApplicantContributor, "user"> & {
      user?: Maybe<ResolversTypes["User"]>;
    }
  >;
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
  GrantBoardMember: ResolverTypeWrapper<
    Omit<GrantBoardMember, "user"> & { user: ResolversTypes["User"] }
  >;
  GrantGetInput: GrantGetInput;
  GrantGetWhereInput: GrantGetWhereInput;
  GrantGuardiansFunding: ResolverTypeWrapper<GrantGuardiansFunding>;
  GrantStatistics: ResolverTypeWrapper<GrantStatistics>;
  GrantStatisticsApplicant: ResolverTypeWrapper<GrantStatisticsApplicant>;
  GrantStatisticsGrant: ResolverTypeWrapper<GrantStatisticsGrant>;
  GrantStatus: ResolverTypeWrapper<GrantStatus>;
  GrantStatusEnum: GrantStatusEnum;
  GrantType: GrantType;
  GraphData: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["GraphData"]
  >;
  GraphSumData: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["GraphSumData"]
  >;
  GuardianResult: ResolverTypeWrapper<GuardianResult>;
  GuardianType: GuardianType;
  GuardianUser: ResolverTypeWrapper<GuardianUser>;
  GuardianUsersGetInput: GuardianUsersGetInput;
  GuardianUsersGetResponse: ResolverTypeWrapper<GuardianUsersGetResponse>;
  GuardianUsersGetWhereInput: GuardianUsersGetWhereInput;
  HeroCommunityRole: HeroCommunityRole;
  HeroProjectCategory: HeroProjectCategory;
  HeroProjectRelationship: HeroProjectRelationship;
  HeroStats: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["HeroStats"]
  >;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  ImpactFund: ResolverTypeWrapper<
    Omit<
      ImpactFund,
      | "applications"
      | "donateProject"
      | "fundedApplications"
      | "viewerApplications"
    > & {
      applications: Array<ResolversTypes["ImpactFundApplication"]>;
      donateProject?: Maybe<ResolversTypes["Project"]>;
      fundedApplications: Array<ResolversTypes["ImpactFundApplication"]>;
      viewerApplications: Array<ResolversTypes["ImpactFundApplication"]>;
    }
  >;
  ImpactFundAmountCommittedCurrency: ImpactFundAmountCommittedCurrency;
  ImpactFundApplication: ResolverTypeWrapper<
    Omit<ImpactFundApplication, "project"> & {
      project: ResolversTypes["Project"];
    }
  >;
  ImpactFundApplicationFundingModel: ImpactFundApplicationFundingModel;
  ImpactFundApplicationFundingSetInput: ImpactFundApplicationFundingSetInput;
  ImpactFundApplicationNote: ResolverTypeWrapper<ImpactFundApplicationNote>;
  ImpactFundApplicationNoteAuthor: ResolverTypeWrapper<ImpactFundApplicationNoteAuthor>;
  ImpactFundApplicationNoteCreateInput: ImpactFundApplicationNoteCreateInput;
  ImpactFundApplicationNoteUpdateInput: ImpactFundApplicationNoteUpdateInput;
  ImpactFundApplicationStatus: ImpactFundApplicationStatus;
  ImpactFundApplicationUpdateInput: ImpactFundApplicationUpdateInput;
  ImpactFundApplicationsGetResponse: ResolverTypeWrapper<
    Omit<ImpactFundApplicationsGetResponse, "applications"> & {
      applications: Array<ResolversTypes["ImpactFundApplication"]>;
    }
  >;
  ImpactFundApplicationsInput: ImpactFundApplicationsInput;
  ImpactFundApplyInput: ImpactFundApplyInput;
  ImpactFundDashboardApplicationRow: ResolverTypeWrapper<ImpactFundDashboardApplicationRow>;
  ImpactFundDashboardApplicationsInput: ImpactFundDashboardApplicationsInput;
  ImpactFundDashboardApplicationsResponse: ResolverTypeWrapper<ImpactFundDashboardApplicationsResponse>;
  ImpactFundDashboardApplicationsSort: ImpactFundDashboardApplicationsSort;
  ImpactFundDashboardCreator: ResolverTypeWrapper<ImpactFundDashboardCreator>;
  ImpactFundDashboardProject: ResolverTypeWrapper<ImpactFundDashboardProject>;
  ImpactFundFieldPartnerLeaderboardInput: ImpactFundFieldPartnerLeaderboardInput;
  ImpactFundFieldPartnerLeaderboardResponse: ResolverTypeWrapper<ImpactFundFieldPartnerLeaderboardResponse>;
  ImpactFundFieldPartnerLeaderboardRow: ResolverTypeWrapper<ImpactFundFieldPartnerLeaderboardRow>;
  ImpactFundFundingSummaryRow: ResolverTypeWrapper<ImpactFundFundingSummaryRow>;
  ImpactFundGetInput: ImpactFundGetInput;
  ImpactFundGetWhereInput: ImpactFundGetWhereInput;
  ImpactFundLabifCountryEligibility: ResolverTypeWrapper<ImpactFundLabifCountryEligibility>;
  ImpactFundMetrics: ResolverTypeWrapper<ImpactFundMetrics>;
  ImpactFundSponsor: ResolverTypeWrapper<ImpactFundSponsor>;
  ImpactFundSponsorStatus: ImpactFundSponsorStatus;
  ImpactFundSponsorTier: ImpactFundSponsorTier;
  ImpactFundStatus: ImpactFundStatus;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
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
  Location: ResolverTypeWrapper<Location>;
  MFAAction: MfaAction;
  ManagedCircularGrantPaymentMethods: ResolverTypeWrapper<ManagedCircularGrantPaymentMethods>;
  Milestone: ResolverTypeWrapper<Milestone>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["MutationResponse"]
  >;
  NewsletterPreferences: ResolverTypeWrapper<NewsletterPreferences>;
  NewsletterPreferencesUpdateInput: NewsletterPreferencesUpdateInput;
  NewsletterStatusUpdateInput: NewsletterStatusUpdateInput;
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
  Order: ResolverTypeWrapper<
    Omit<Order, "contribution" | "project" | "user"> & {
      contribution: ResolversTypes["Contribution"];
      project: ResolversTypes["Project"];
      user?: Maybe<ResolversTypes["User"]>;
    }
  >;
  OrderByDirection: OrderByDirection;
  OrderByOptions: OrderByOptions;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrdersGetInput: OrdersGetInput;
  OrdersGetOrderByField: OrdersGetOrderByField;
  OrdersGetOrderByInput: OrdersGetOrderByInput;
  OrdersGetResponse: ResolverTypeWrapper<OrdersGetResponse>;
  OrdersGetStatus: OrdersGetStatus;
  OrdersGetWhereInput: OrdersGetWhereInput;
  OrdersStatsBase: ResolverTypeWrapper<OrdersStatsBase>;
  Owner: ResolverTypeWrapper<
    Omit<Owner, "user"> & { user: ResolversTypes["User"] }
  >;
  OwnerOf: ResolverTypeWrapper<
    Omit<OwnerOf, "owner" | "project"> & {
      owner?: Maybe<ResolversTypes["Owner"]>;
      project?: Maybe<ResolversTypes["Project"]>;
    }
  >;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageViewCountGraph: ResolverTypeWrapper<PageViewCountGraph>;
  PaginationCursor: ResolverTypeWrapper<PaginationCursor>;
  PaginationInput: PaginationInput;
  Payment: ResolverTypeWrapper<
    Omit<Payment, "fees" | "paymentDetails"> & {
      fees: Array<ResolversTypes["PaymentFee"]>;
      paymentDetails: ResolversTypes["PaymentDetails"];
    }
  >;
  PaymentCancelInput: PaymentCancelInput;
  PaymentCancelResponse: ResolverTypeWrapper<PaymentCancelResponse>;
  PaymentConfirmInput: PaymentConfirmInput;
  PaymentConfirmResponse: ResolverTypeWrapper<PaymentConfirmResponse>;
  PaymentCurrency: PaymentCurrency;
  PaymentDetails: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["PaymentDetails"]
  >;
  PaymentFailInput: PaymentFailInput;
  PaymentFailResponse: ResolverTypeWrapper<PaymentFailResponse>;
  PaymentFee: ResolverTypeWrapper<PaymentFee>;
  PaymentFeePayer: PaymentFeePayer;
  PaymentFeeType: PaymentFeeType;
  PaymentFeeUpsertInput: PaymentFeeUpsertInput;
  PaymentFeeUpsertResponse: ResolverTypeWrapper<PaymentFeeUpsertResponse>;
  PaymentGetInput: PaymentGetInput;
  PaymentInvoiceCancelResponse: ResolverTypeWrapper<PaymentInvoiceCancelResponse>;
  PaymentInvoiceSanctionCheckStatus: PaymentInvoiceSanctionCheckStatus;
  PaymentInvoiceSanctionCheckStatusGetInput: PaymentInvoiceSanctionCheckStatusGetInput;
  PaymentInvoiceSanctionCheckStatusResponse: ResolverTypeWrapper<PaymentInvoiceSanctionCheckStatusResponse>;
  PaymentLinkedEntityType: PaymentLinkedEntityType;
  PaymentMethods: ResolverTypeWrapper<PaymentMethods>;
  PaymentPendInput: PaymentPendInput;
  PaymentPendResponse: ResolverTypeWrapper<PaymentPendResponse>;
  PaymentPendSwapInput: PaymentPendSwapInput;
  PaymentRecoveryByContributionInput: PaymentRecoveryByContributionInput;
  PaymentRecoveryByContributionResponse: ResolverTypeWrapper<
    Omit<PaymentRecoveryByContributionResponse, "contribution" | "project"> & {
      contribution: ResolversTypes["Contribution"];
      project: ResolversTypes["Project"];
    }
  >;
  PaymentRecoveryPayment: ResolverTypeWrapper<PaymentRecoveryPayment>;
  PaymentRefund: ResolverTypeWrapper<PaymentRefund>;
  PaymentRefundCompleteInput: PaymentRefundCompleteInput;
  PaymentRefundCompleteResponse: ResolverTypeWrapper<PaymentRefundCompleteResponse>;
  PaymentRefundStatus: PaymentRefundStatus;
  PaymentRefundsGetResponse: ResolverTypeWrapper<PaymentRefundsGetResponse>;
  PaymentSetClaimableInput: PaymentSetClaimableInput;
  PaymentSetClaimableResponse: ResolverTypeWrapper<PaymentSetClaimableResponse>;
  PaymentSetClaimingInput: PaymentSetClaimingInput;
  PaymentSetClaimingResponse: ResolverTypeWrapper<PaymentSetClaimingResponse>;
  PaymentSetRefundableInput: PaymentSetRefundableInput;
  PaymentSetRefundableResponse: ResolverTypeWrapper<PaymentSetRefundableResponse>;
  PaymentSetRefundedInput: PaymentSetRefundedInput;
  PaymentSetRefundedResponse: ResolverTypeWrapper<PaymentSetRefundedResponse>;
  PaymentSetRefundingInput: PaymentSetRefundingInput;
  PaymentSetRefundingResponse: ResolverTypeWrapper<PaymentSetRefundingResponse>;
  PaymentStatus: PaymentStatus;
  PaymentStatusUpdatedInput: PaymentStatusUpdatedInput;
  PaymentSwapClaimTxBroadcastInput: PaymentSwapClaimTxBroadcastInput;
  PaymentSwapClaimTxBroadcastResponse: ResolverTypeWrapper<PaymentSwapClaimTxBroadcastResponse>;
  PaymentSwapClaimTxSetInput: PaymentSwapClaimTxSetInput;
  PaymentSwapClaimTxSetResponse: ResolverTypeWrapper<PaymentSwapClaimTxSetResponse>;
  PaymentSwapRefundTxBroadcastInput: PaymentSwapRefundTxBroadcastInput;
  PaymentSwapRefundTxBroadcastResponse: ResolverTypeWrapper<PaymentSwapRefundTxBroadcastResponse>;
  PaymentSwapRefundTxSetInput: PaymentSwapRefundTxSetInput;
  PaymentSwapRefundTxSetResponse: ResolverTypeWrapper<PaymentSwapRefundTxSetResponse>;
  PaymentType: PaymentType;
  PaymentsGetInput: PaymentsGetInput;
  PaymentsGetOrderByInput: PaymentsGetOrderByInput;
  PaymentsGetResponse: ResolverTypeWrapper<
    Omit<PaymentsGetResponse, "payments"> & {
      payments: Array<ResolversTypes["Payment"]>;
    }
  >;
  PaymentsGetWhereInput: PaymentsGetWhereInput;
  PaymentsInProgressGetResponse: ResolverTypeWrapper<
    Omit<PaymentsInProgressGetResponse, "payments"> & {
      payments: Array<ResolversTypes["Payment"]>;
    }
  >;
  Payout: ResolverTypeWrapper<
    Omit<Payout, "payments"> & { payments: Array<ResolversTypes["Payment"]> }
  >;
  PayoutCancelInput: PayoutCancelInput;
  PayoutContractType: PayoutContractType;
  PayoutCurrency: PayoutCurrency;
  PayoutFeeSummary: ResolverTypeWrapper<PayoutFeeSummary>;
  PayoutFeeSummaryItem: ResolverTypeWrapper<PayoutFeeSummaryItem>;
  PayoutGetInput: PayoutGetInput;
  PayoutGetResponse: ResolverTypeWrapper<
    Omit<PayoutGetResponse, "payout"> & { payout: ResolversTypes["Payout"] }
  >;
  PayoutInitiateInput: PayoutInitiateInput;
  PayoutInitiateResponse: ResolverTypeWrapper<
    Omit<PayoutInitiateResponse, "payout"> & {
      payout: ResolversTypes["Payout"];
    }
  >;
  PayoutMetadata: ResolverTypeWrapper<PayoutMetadata>;
  PayoutPaymentCreateInput: PayoutPaymentCreateInput;
  PayoutPaymentCreateResponse: ResolverTypeWrapper<
    Omit<PayoutPaymentCreateResponse, "payment" | "payout"> & {
      payment: ResolversTypes["Payment"];
      payout: ResolversTypes["Payout"];
    }
  >;
  PayoutPaymentInput: PayoutPaymentInput;
  PayoutRequestInput: PayoutRequestInput;
  PayoutRequestResponse: ResolverTypeWrapper<
    Omit<PayoutRequestResponse, "payout"> & { payout: ResolversTypes["Payout"] }
  >;
  PayoutResponse: ResolverTypeWrapper<PayoutResponse>;
  PayoutStatus: PayoutStatus;
  PledgeRefund: ResolverTypeWrapper<
    Omit<PledgeRefund, "payments" | "project"> & {
      payments: Array<ResolversTypes["Payment"]>;
      project: ResolversTypes["Project"];
    }
  >;
  PledgeRefundCancelInput: PledgeRefundCancelInput;
  PledgeRefundGetInput: PledgeRefundGetInput;
  PledgeRefundGetResponse: ResolverTypeWrapper<
    Omit<PledgeRefundGetResponse, "refund"> & {
      refund: ResolversTypes["PledgeRefund"];
    }
  >;
  PledgeRefundInitiateInput: PledgeRefundInitiateInput;
  PledgeRefundInitiateResponse: ResolverTypeWrapper<
    Omit<PledgeRefundInitiateResponse, "refund"> & {
      refund: ResolversTypes["PledgeRefund"];
    }
  >;
  PledgeRefundMetadata: ResolverTypeWrapper<PledgeRefundMetadata>;
  PledgeRefundPaymentCreateInput: PledgeRefundPaymentCreateInput;
  PledgeRefundPaymentCreateResponse: ResolverTypeWrapper<
    Omit<PledgeRefundPaymentCreateResponse, "payment" | "refund"> & {
      payment: ResolversTypes["Payment"];
      refund: ResolversTypes["PledgeRefund"];
    }
  >;
  PledgeRefundPaymentInput: PledgeRefundPaymentInput;
  PledgeRefundRequestInput: PledgeRefundRequestInput;
  PledgeRefundRequestResponse: ResolverTypeWrapper<
    Omit<PledgeRefundRequestResponse, "refund"> & {
      refund: ResolversTypes["PledgeRefund"];
    }
  >;
  PledgeRefundResponse: ResolverTypeWrapper<PledgeRefundResponse>;
  PledgeRefundStatus: PledgeRefundStatus;
  PledgeRefundsGetResponse: ResolverTypeWrapper<
    Omit<PledgeRefundsGetResponse, "refunds"> & {
      refunds: Array<ResolversTypes["PledgeRefund"]>;
    }
  >;
  PodcastKeysendContributionCreateInput: PodcastKeysendContributionCreateInput;
  PodcastKeysendContributionCreateResponse: ResolverTypeWrapper<PodcastKeysendContributionCreateResponse>;
  Post: ResolverTypeWrapper<
    Omit<Post, "contributions" | "creator" | "project"> & {
      contributions: Array<ResolversTypes["Contribution"]>;
      creator: ResolversTypes["User"];
      project?: Maybe<ResolversTypes["Project"]>;
    }
  >;
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
  Project: ResolverTypeWrapper<
    Omit<
      Project,
      | "activeMatching"
      | "ambassadors"
      | "contributions"
      | "fieldPartner"
      | "followers"
      | "fundingSummary"
      | "grantApplications"
      | "matchings"
      | "owners"
      | "sponsors"
      | "wallets"
    > & {
      activeMatching?: Maybe<ResolversTypes["ProjectMatching"]>;
      ambassadors: ResolversTypes["ProjectAmbassadorsConnection"];
      contributions: Array<ResolversTypes["Contribution"]>;
      fieldPartner?: Maybe<ResolversTypes["User"]>;
      followers: Array<ResolversTypes["User"]>;
      fundingSummary: ResolversTypes["ProjectFundingSummary"];
      grantApplications: Array<ResolversTypes["GrantApplicant"]>;
      matchings: Array<ResolversTypes["ProjectMatching"]>;
      owners: Array<ResolversTypes["Owner"]>;
      sponsors: Array<ResolversTypes["Sponsor"]>;
      wallets: Array<ResolversTypes["Wallet"]>;
    }
  >;
  ProjectActivatedSubscriptionResponse: ResolverTypeWrapper<
    Omit<ProjectActivatedSubscriptionResponse, "project"> & {
      project: ResolversTypes["Project"];
    }
  >;
  ProjectActivitiesCount: ResolverTypeWrapper<
    Omit<ProjectActivitiesCount, "project"> & {
      project: ResolversTypes["Project"];
    }
  >;
  ProjectAmbassadorEdge: ResolverTypeWrapper<
    Omit<ProjectAmbassadorEdge, "node"> & { node: ResolversTypes["Ambassador"] }
  >;
  ProjectAmbassadorsConnection: ResolverTypeWrapper<
    Omit<ProjectAmbassadorsConnection, "edges"> & {
      edges: Array<ResolversTypes["ProjectAmbassadorEdge"]>;
    }
  >;
  ProjectAmbassadorsStats: ResolverTypeWrapper<ProjectAmbassadorsStats>;
  ProjectAonGoal: ResolverTypeWrapper<ProjectAonGoal>;
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
  ProjectFollowMutationInput: ProjectFollowMutationInput;
  ProjectFollowerStats: ResolverTypeWrapper<ProjectFollowerStats>;
  ProjectFunderRewardStats: ResolverTypeWrapper<ProjectFunderRewardStats>;
  ProjectFunderStats: ResolverTypeWrapper<ProjectFunderStats>;
  ProjectFundingStrategy: ProjectFundingStrategy;
  ProjectFundingSummary: ResolverTypeWrapper<
    Omit<ProjectFundingSummary, "goals" | "matching"> & {
      goals: ResolversTypes["ProjectGoalFundingSummary"];
      matching: ResolversTypes["ProjectMatchingFundingSummary"];
    }
  >;
  ProjectGoal: ResolverTypeWrapper<ProjectGoal>;
  ProjectGoalCreateInput: ProjectGoalCreateInput;
  ProjectGoalCurrency: ProjectGoalCurrency;
  ProjectGoalDeleteResponse: ResolverTypeWrapper<ProjectGoalDeleteResponse>;
  ProjectGoalFundingSummary: ResolverTypeWrapper<ProjectGoalFundingSummary>;
  ProjectGoalOrderingUpdateInput: ProjectGoalOrderingUpdateInput;
  ProjectGoalStatus: ProjectGoalStatus;
  ProjectGoalStatusInCreate: ProjectGoalStatusInCreate;
  ProjectGoalUpdateInput: ProjectGoalUpdateInput;
  ProjectGoals: ResolverTypeWrapper<ProjectGoals>;
  ProjectGrantApplicationsInput: ProjectGrantApplicationsInput;
  ProjectGrantApplicationsWhereInput: ProjectGrantApplicationsWhereInput;
  ProjectGrantApplicationsWhereInputEnum: ProjectGrantApplicationsWhereInputEnum;
  ProjectImpactFundRecipient: ResolverTypeWrapper<ProjectImpactFundRecipient>;
  ProjectLeaderboardAmbassadorsGetInput: ProjectLeaderboardAmbassadorsGetInput;
  ProjectLeaderboardAmbassadorsRow: ResolverTypeWrapper<
    Omit<ProjectLeaderboardAmbassadorsRow, "user"> & {
      user?: Maybe<ResolversTypes["User"]>;
    }
  >;
  ProjectLeaderboardContributorsGetInput: ProjectLeaderboardContributorsGetInput;
  ProjectLeaderboardContributorsRow: ResolverTypeWrapper<
    Omit<ProjectLeaderboardContributorsRow, "user"> & {
      user?: Maybe<ResolversTypes["User"]>;
    }
  >;
  ProjectLeaderboardPeriod: ProjectLeaderboardPeriod;
  ProjectLinkMutationInput: ProjectLinkMutationInput;
  ProjectMatching: ResolverTypeWrapper<ProjectMatching>;
  ProjectMatchingCreateInput: ProjectMatchingCreateInput;
  ProjectMatchingCurrency: ProjectMatchingCurrency;
  ProjectMatchingDeleteInput: ProjectMatchingDeleteInput;
  ProjectMatchingDeleteResponse: ResolverTypeWrapper<ProjectMatchingDeleteResponse>;
  ProjectMatchingFundingSummary: ResolverTypeWrapper<
    Omit<ProjectMatchingFundingSummary, "activeMatching"> & {
      activeMatching?: Maybe<ResolversTypes["ProjectMatching"]>;
    }
  >;
  ProjectMatchingStatus: ProjectMatchingStatus;
  ProjectMatchingType: ProjectMatchingType;
  ProjectMatchingUpdateInput: ProjectMatchingUpdateInput;
  ProjectMostFunded: ResolverTypeWrapper<
    Omit<ProjectMostFunded, "project"> & { project: ResolversTypes["Project"] }
  >;
  ProjectMostFundedByCategory: ResolverTypeWrapper<
    Omit<ProjectMostFundedByCategory, "projects"> & {
      projects: Array<ResolversTypes["ProjectMostFunded"]>;
    }
  >;
  ProjectMostFundedByTag: ResolverTypeWrapper<
    Omit<ProjectMostFundedByTag, "projects"> & {
      projects: Array<ResolversTypes["ProjectMostFunded"]>;
    }
  >;
  ProjectPostsGetInput: ProjectPostsGetInput;
  ProjectPostsGetWhereInput: ProjectPostsGetWhereInput;
  ProjectPreLaunchMutationInput: ProjectPreLaunchMutationInput;
  ProjectPublishMutationInput: ProjectPublishMutationInput;
  ProjectPutInReviewMutationInput: ProjectPutInReviewMutationInput;
  ProjectRecommendedGetInput: ProjectRecommendedGetInput;
  ProjectRecommendedGetResult: ResolverTypeWrapper<
    Omit<ProjectRecommendedGetResult, "project"> & {
      project: ResolversTypes["Project"];
    }
  >;
  ProjectReferrersSearchInput: ProjectReferrersSearchInput;
  ProjectReferrersSearchResult: ResolverTypeWrapper<
    Omit<ProjectReferrersSearchResult, "fieldPartners" | "others"> & {
      fieldPartners: Array<ResolversTypes["User"]>;
      others: Array<ResolversTypes["User"]>;
    }
  >;
  ProjectRefundablePayment: ResolverTypeWrapper<
    Omit<ProjectRefundablePayment, "payments" | "project"> & {
      payments: Array<ResolversTypes["Payment"]>;
      project: ResolversTypes["Project"];
    }
  >;
  ProjectRegionsGetResult: ResolverTypeWrapper<ProjectRegionsGetResult>;
  ProjectReview: ResolverTypeWrapper<ProjectReview>;
  ProjectReviewComplianceSuggestion: ResolverTypeWrapper<ProjectReviewComplianceSuggestion>;
  ProjectReviewComplianceSuggestionStatus: ProjectReviewComplianceSuggestionStatus;
  ProjectReviewRequestInput: ProjectReviewRequestInput;
  ProjectReviewStatus: ProjectReviewStatus;
  ProjectReviewStatusInput: ProjectReviewStatusInput;
  ProjectReviewSubmitInput: ProjectReviewSubmitInput;
  ProjectReward: ResolverTypeWrapper<
    Omit<ProjectReward, "project"> & { project: ResolversTypes["Project"] }
  >;
  ProjectRewardCatalogRow: ResolverTypeWrapper<ProjectRewardCatalogRow>;
  ProjectRewardMostSoldGetRow: ResolverTypeWrapper<ProjectRewardMostSoldGetRow>;
  ProjectRewardTrendingMonthlyGetRow: ResolverTypeWrapper<ProjectRewardTrendingMonthlyGetRow>;
  ProjectRewardTrendingQuarterlyGetRow: ResolverTypeWrapper<ProjectRewardTrendingQuarterlyGetRow>;
  ProjectRewardTrendingWeeklyGetRow: ResolverTypeWrapper<ProjectRewardTrendingWeeklyGetRow>;
  ProjectRewardsCatalogGetResponse: ResolverTypeWrapper<ProjectRewardsCatalogGetResponse>;
  ProjectRewardsCatalogSortBy: ProjectRewardsCatalogSortBy;
  ProjectRewardsGroupedByRewardIdStats: ResolverTypeWrapper<ProjectRewardsGroupedByRewardIdStats>;
  ProjectRewardsGroupedByRewardIdStatsProjectReward: ResolverTypeWrapper<ProjectRewardsGroupedByRewardIdStatsProjectReward>;
  ProjectRewardsMostSoldRange: ProjectRewardsMostSoldRange;
  ProjectRewardsStats: ResolverTypeWrapper<ProjectRewardsStats>;
  ProjectRskEoa: ResolverTypeWrapper<ProjectRskEoa>;
  ProjectRskEoaRotationInput: ProjectRskEoaRotationInput;
  ProjectRskEoaSetInput: ProjectRskEoaSetInput;
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
  ProjectSubscriptionStartInput: ProjectSubscriptionStartInput;
  ProjectType: ProjectType;
  ProjectViewBaseStats: ResolverTypeWrapper<ProjectViewBaseStats>;
  ProjectViewStats: ResolverTypeWrapper<ProjectViewStats>;
  ProjectWalletConfigurationContributionAttemptNotifyInput: ProjectWalletConfigurationContributionAttemptNotifyInput;
  ProjectWalletConfigurationContributionAttemptNotifyResponse: ResolverTypeWrapper<ProjectWalletConfigurationContributionAttemptNotifyResponse>;
  ProjectsAonAlmostFundedInput: ProjectsAonAlmostFundedInput;
  ProjectsAonAlmostFundedResponse: ResolverTypeWrapper<
    Omit<ProjectsAonAlmostFundedResponse, "projects"> & {
      projects: Array<ResolversTypes["Project"]>;
    }
  >;
  ProjectsAonAlmostOverInput: ProjectsAonAlmostOverInput;
  ProjectsAonAlmostOverResponse: ResolverTypeWrapper<
    Omit<ProjectsAonAlmostOverResponse, "projects"> & {
      projects: Array<ResolversTypes["Project"]>;
    }
  >;
  ProjectsGetQueryInput: ProjectsGetQueryInput;
  ProjectsGetWhereInput: ProjectsGetWhereInput;
  ProjectsGetWhereInputStatus: ProjectsGetWhereInputStatus;
  ProjectsMostFundedAllOrNothingInput: ProjectsMostFundedAllOrNothingInput;
  ProjectsMostFundedAllOrNothingRange: ProjectsMostFundedAllOrNothingRange;
  ProjectsMostFundedByCategoryInput: ProjectsMostFundedByCategoryInput;
  ProjectsMostFundedByCategoryRange: ProjectsMostFundedByCategoryRange;
  ProjectsMostFundedByTagInput: ProjectsMostFundedByTagInput;
  ProjectsMostFundedByTagRange: ProjectsMostFundedByTagRange;
  ProjectsMostFundedTakeItAllInput: ProjectsMostFundedTakeItAllInput;
  ProjectsMostFundedTakeItAllRange: ProjectsMostFundedTakeItAllRange;
  ProjectsOrderByField: ProjectsOrderByField;
  ProjectsOrderByInput: ProjectsOrderByInput;
  ProjectsResponse: ResolverTypeWrapper<
    Omit<ProjectsResponse, "projects"> & {
      projects: Array<ResolversTypes["Project"]>;
    }
  >;
  ProjectsSummary: ResolverTypeWrapper<ProjectsSummary>;
  Query: ResolverTypeWrapper<{}>;
  QuoteCurrency: QuoteCurrency;
  RecurringContribution: ResolverTypeWrapper<
    Omit<RecurringContribution, "project"> & {
      project?: Maybe<ResolversTypes["Project"]>;
    }
  >;
  RecurringContributionCancelInput: RecurringContributionCancelInput;
  RecurringContributionCheckoutResponse: ResolverTypeWrapper<
    Omit<RecurringContributionCheckoutResponse, "contribution" | "payments"> & {
      contribution: ResolversTypes["Contribution"];
      payments: ResolversTypes["ContributionPaymentsDetails"];
    }
  >;
  RecurringContributionCurrency: RecurringContributionCurrency;
  RecurringContributionKind: RecurringContributionKind;
  RecurringContributionPortalSession: ResolverTypeWrapper<RecurringContributionPortalSession>;
  RecurringContributionPortalSessionCreateInput: RecurringContributionPortalSessionCreateInput;
  RecurringContributionRenewalCreateInput: RecurringContributionRenewalCreateInput;
  RecurringContributionStatus: RecurringContributionStatus;
  RecurringContributionSupport: ResolverTypeWrapper<RecurringContributionSupport>;
  RecurringDonationCreateInput: RecurringDonationCreateInput;
  RecurringInterval: RecurringInterval;
  RecurringPauseReason: RecurringPauseReason;
  RecurringPaymentMethod: RecurringPaymentMethod;
  RefundablePaymentsGetResponse: ResolverTypeWrapper<
    Omit<RefundablePaymentsGetResponse, "refundablePayments"> & {
      refundablePayments: Array<ResolversTypes["ProjectRefundablePayment"]>;
    }
  >;
  RejectionReason: RejectionReason;
  ResourceInput: ResourceInput;
  RewardCurrency: RewardCurrency;
  RskAonClaimPaymentDetails: ResolverTypeWrapper<RskAonClaimPaymentDetails>;
  RskKeyPair: ResolverTypeWrapper<RskKeyPair>;
  RskKeyPairInput: RskKeyPairInput;
  RskNativeTransferPaymentDetails: ResolverTypeWrapper<RskNativeTransferPaymentDetails>;
  RskNativeTransferPaymentDetailsInput: RskNativeTransferPaymentDetailsInput;
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
  SourceResource: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["SourceResource"]
  >;
  Sponsor: ResolverTypeWrapper<
    Omit<Sponsor, "user"> & { user?: Maybe<ResolversTypes["User"]> }
  >;
  SponsorStatus: SponsorStatus;
  StatsInterface: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["StatsInterface"]
  >;
  StrikePaymentDetails: ResolverTypeWrapper<StrikePaymentDetails>;
  StrikePaymentRail: StrikePaymentRail;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  StripeCheckoutSessionInput: StripeCheckoutSessionInput;
  StripeConnectOnboardingPayload: ResolverTypeWrapper<StripeConnectOnboardingPayload>;
  StripeConnectStatus: ResolverTypeWrapper<StripeConnectStatus>;
  StripeEmbeddedTheme: StripeEmbeddedTheme;
  StripeInterestNotifyResponse: ResolverTypeWrapper<StripeInterestNotifyResponse>;
  Subscription: ResolverTypeWrapper<{}>;
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
  UpdateProjectInput: UpdateProjectInput;
  UpdateProjectSubscriptionPlanInput: UpdateProjectSubscriptionPlanInput;
  UpdateUserInput: UpdateUserInput;
  UpdateWalletInput: UpdateWalletInput;
  UpdateWalletStateInput: UpdateWalletStateInput;
  User: ResolverTypeWrapper<
    Omit<
      User,
      "contributions" | "ownerOf" | "projectFollows" | "projects" | "wallet"
    > & {
      contributions: Array<ResolversTypes["Contribution"]>;
      ownerOf: Array<ResolversTypes["OwnerOf"]>;
      projectFollows: Array<ResolversTypes["Project"]>;
      projects: Array<ResolversTypes["Project"]>;
      wallet?: Maybe<ResolversTypes["Wallet"]>;
    }
  >;
  UserAccountKeys: ResolverTypeWrapper<UserAccountKeys>;
  UserAccountKeysUpdateInput: UserAccountKeysUpdateInput;
  UserAccountPasswordFundsSummary: ResolverTypeWrapper<UserAccountPasswordFundsSummary>;
  UserBadge: ResolverTypeWrapper<UserBadge>;
  UserBadgeStatus: UserBadgeStatus;
  UserComplianceDetails: ResolverTypeWrapper<UserComplianceDetails>;
  UserContributionLimit: ResolverTypeWrapper<UserContributionLimit>;
  UserContributionLimits: ResolverTypeWrapper<UserContributionLimits>;
  UserContributionsInput: UserContributionsInput;
  UserEmailIsValidResponse: ResolverTypeWrapper<UserEmailIsValidResponse>;
  UserEmailUpdateInput: UserEmailUpdateInput;
  UserEntityType: UserEntityType;
  UserGetInput: UserGetInput;
  UserHeroImpact: ResolverTypeWrapper<UserHeroImpact>;
  UserHeroImpactStat: ResolverTypeWrapper<UserHeroImpactStat>;
  UserHeroProfile: ResolverTypeWrapper<UserHeroProfile>;
  UserHeroProject: ResolverTypeWrapper<
    Omit<UserHeroProject, "project"> & { project: ResolversTypes["Project"] }
  >;
  UserHeroProjectsInput: UserHeroProjectsInput;
  UserHeroProjectsResponse: ResolverTypeWrapper<UserHeroProjectsResponse>;
  UserHeroStats: ResolverTypeWrapper<UserHeroStats>;
  UserHeroTrust: ResolverTypeWrapper<UserHeroTrust>;
  UserNotificationSettings: ResolverTypeWrapper<UserNotificationSettings>;
  UserPostsGetInput: UserPostsGetInput;
  UserPostsGetWhereInput: UserPostsGetWhereInput;
  UserProjectContribution: ResolverTypeWrapper<
    Omit<UserProjectContribution, "project"> & {
      project: ResolversTypes["Project"];
    }
  >;
  UserProjectsGetInput: UserProjectsGetInput;
  UserProjectsGetWhereInput: UserProjectsGetWhereInput;
  UserTaxProfile: ResolverTypeWrapper<UserTaxProfile>;
  UserTaxProfileUpdateInput: UserTaxProfileUpdateInput;
  UserVerificationLevel: UserVerificationLevel;
  UserVerificationLevelInput: UserVerificationLevelInput;
  UserVerificationLevelStatus: ResolverTypeWrapper<UserVerificationLevelStatus>;
  UserVerificationStatus: UserVerificationStatus;
  UserVerificationTokenGenerateInput: UserVerificationTokenGenerateInput;
  UserVerificationTokenGenerateResponse: ResolverTypeWrapper<UserVerificationTokenGenerateResponse>;
  UserVerifiedDetails: ResolverTypeWrapper<UserVerifiedDetails>;
  UserWalletWithdraw: ResolverTypeWrapper<
    Omit<UserWalletWithdraw, "payments"> & {
      payments: Array<ResolversTypes["Payment"]>;
    }
  >;
  UserWalletWithdrawGetResponse: ResolverTypeWrapper<
    Omit<UserWalletWithdrawGetResponse, "userWalletWithdraw"> & {
      userWalletWithdraw: ResolversTypes["UserWalletWithdraw"];
    }
  >;
  UserWalletWithdrawInitiateInput: UserWalletWithdrawInitiateInput;
  UserWalletWithdrawInitiateResponse: ResolverTypeWrapper<
    Omit<UserWalletWithdrawInitiateResponse, "userWalletWithdraw"> & {
      userWalletWithdraw: ResolversTypes["UserWalletWithdraw"];
    }
  >;
  UserWalletWithdrawMetadata: ResolverTypeWrapper<UserWalletWithdrawMetadata>;
  UserWalletWithdrawPaymentCreateInput: UserWalletWithdrawPaymentCreateInput;
  UserWalletWithdrawPaymentCreateResponse: ResolverTypeWrapper<
    Omit<
      UserWalletWithdrawPaymentCreateResponse,
      "payment" | "userWalletWithdraw"
    > & {
      payment: ResolversTypes["Payment"];
      userWalletWithdraw: ResolversTypes["UserWalletWithdraw"];
    }
  >;
  UserWalletWithdrawPaymentInput: UserWalletWithdrawPaymentInput;
  UserWalletWithdrawRequestResponse: ResolverTypeWrapper<
    Omit<UserWalletWithdrawRequestResponse, "userWalletWithdraw"> & {
      userWalletWithdraw: ResolversTypes["UserWalletWithdraw"];
    }
  >;
  UserWalletWithdrawStatus: UserWalletWithdrawStatus;
  VerificationResult: ResolverTypeWrapper<VerificationResult>;
  VotingSystem: VotingSystem;
  Wallet: ResolverTypeWrapper<
    Omit<Wallet, "connectionDetails"> & {
      connectionDetails?: Maybe<ResolversTypes["ConnectionDetails"]>;
    }
  >;
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
  AccountPasswordAffectedProject: AccountPasswordAffectedProject;
  AcelerandoVipLeaderboardEntry: AcelerandoVipLeaderboardEntry;
  AcelerandoVipLeaderboardResponse: AcelerandoVipLeaderboardResponse;
  AcelerandoVipMyPositionResponse: AcelerandoVipMyPositionResponse;
  ActivitiesCountGroupedByProjectInput: ActivitiesCountGroupedByProjectInput;
  ActivitiesGetResponse: Omit<ActivitiesGetResponse, "activities"> & {
    activities: Array<ResolversParentTypes["Activity"]>;
  };
  Activity: Omit<Activity, "project" | "resource"> & {
    project: ResolversParentTypes["Project"];
    resource: ResolversParentTypes["ActivityResource"];
  };
  ActivityCreatedSubscriptionInput: ActivityCreatedSubscriptionInput;
  ActivityCreatedSubscriptionWhereInput: ActivityCreatedSubscriptionWhereInput;
  ActivityResource: ResolversUnionTypes<ResolversParentTypes>["ActivityResource"];
  Ambassador: Omit<Ambassador, "user"> & { user: ResolversParentTypes["User"] };
  AmbassadorStats: AmbassadorStats;
  AmountSummary: AmountSummary;
  AonClaimBroadcastResponse: AonClaimBroadcastResponse;
  AonClaimPrepareResponse: AonClaimPrepareResponse;
  AonClaimStatusResponse: AonClaimStatusResponse;
  Badge: Badge;
  BadgeClaimInput: BadgeClaimInput;
  BadgesGetInput: BadgesGetInput;
  BadgesGetWhereInput: BadgesGetWhereInput;
  BeehiivNewsletterSubscribeInput: BeehiivNewsletterSubscribeInput;
  BigInt: Scalars["BigInt"]["output"];
  BitcoinPaymentMethods: BitcoinPaymentMethods;
  BitcoinQuote: BitcoinQuote;
  BoardVoteGrant: Omit<
    BoardVoteGrant,
    "applicants" | "boardMembers" | "sponsors"
  > & {
    applicants: Array<ResolversParentTypes["GrantApplicant"]>;
    boardMembers: Array<ResolversParentTypes["GrantBoardMember"]>;
    sponsors: Array<ResolversParentTypes["Sponsor"]>;
  };
  Boolean: Scalars["Boolean"]["output"];
  CommunityVoteGrant: Omit<CommunityVoteGrant, "applicants" | "sponsors"> & {
    applicants: Array<ResolversParentTypes["GrantApplicant"]>;
    sponsors: Array<ResolversParentTypes["Sponsor"]>;
  };
  CompetitionVoteGrantVoteSummary: CompetitionVoteGrantVoteSummary;
  ConnectionDetails: ResolversUnionTypes<ResolversParentTypes>["ConnectionDetails"];
  Contribution: Omit<
    Contribution,
    "bitcoinQuote" | "matching" | "payments" | "sourceResource"
  > & {
    bitcoinQuote?: Maybe<ResolversParentTypes["BitcoinQuote"]>;
    matching?: Maybe<ResolversParentTypes["ProjectMatching"]>;
    payments: Array<ResolversParentTypes["Payment"]>;
    sourceResource?: Maybe<ResolversParentTypes["SourceResource"]>;
  };
  ContributionCreateInput: ContributionCreateInput;
  ContributionEmailUpdateInput: ContributionEmailUpdateInput;
  ContributionFiatPaymentDetails: Omit<
    ContributionFiatPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionFiatPaymentDetailsInput: ContributionFiatPaymentDetailsInput;
  ContributionFiatPaymentDetailsStripeInput: ContributionFiatPaymentDetailsStripeInput;
  ContributionFiatToLightningSwapPaymentDetails: Omit<
    ContributionFiatToLightningSwapPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionFiatToLightningSwapPaymentDetailsBanxaInput: ContributionFiatToLightningSwapPaymentDetailsBanxaInput;
  ContributionFiatToLightningSwapPaymentDetailsInput: ContributionFiatToLightningSwapPaymentDetailsInput;
  ContributionLightningPaymentDetails: Omit<
    ContributionLightningPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionLightningPaymentDetailsInput: ContributionLightningPaymentDetailsInput;
  ContributionLightningToRskSwapPaymentDetails: Omit<
    ContributionLightningToRskSwapPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionLightningToRskSwapPaymentDetailsBoltzInput: ContributionLightningToRskSwapPaymentDetailsBoltzInput;
  ContributionLightningToRskSwapPaymentDetailsInput: ContributionLightningToRskSwapPaymentDetailsInput;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionMutationResponse: Omit<
    ContributionMutationResponse,
    "contribution" | "payments"
  > & {
    contribution: ResolversParentTypes["Contribution"];
    payments: ResolversParentTypes["ContributionPaymentsDetails"];
  };
  ContributionOnChainSwapPaymentDetails: Omit<
    ContributionOnChainSwapPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionOnChainSwapPaymentDetailsBoltzInput: ContributionOnChainSwapPaymentDetailsBoltzInput;
  ContributionOnChainSwapPaymentDetailsInput: ContributionOnChainSwapPaymentDetailsInput;
  ContributionOnChainToRskSwapPaymentDetails: Omit<
    ContributionOnChainToRskSwapPaymentDetails,
    "fees"
  > & { fees: Array<ResolversParentTypes["PaymentFee"]> };
  ContributionOnChainToRskSwapPaymentDetailsBoltzInput: ContributionOnChainToRskSwapPaymentDetailsBoltzInput;
  ContributionOnChainToRskSwapPaymentDetailsInput: ContributionOnChainToRskSwapPaymentDetailsInput;
  ContributionPaymentsAddInput: ContributionPaymentsAddInput;
  ContributionPaymentsAddResponse: Omit<
    ContributionPaymentsAddResponse,
    "payments"
  > & { payments: ResolversParentTypes["ContributionPaymentsDetails"] };
  ContributionPaymentsDetails: Omit<
    ContributionPaymentsDetails,
    | "fiat"
    | "fiatToLightningSwap"
    | "lightning"
    | "lightningToRskSwap"
    | "onChainSwap"
    | "onChainToRskSwap"
  > & {
    fiat?: Maybe<ResolversParentTypes["ContributionFiatPaymentDetails"]>;
    fiatToLightningSwap?: Maybe<
      ResolversParentTypes["ContributionFiatToLightningSwapPaymentDetails"]
    >;
    lightning?: Maybe<
      ResolversParentTypes["ContributionLightningPaymentDetails"]
    >;
    lightningToRskSwap?: Maybe<
      ResolversParentTypes["ContributionLightningToRskSwapPaymentDetails"]
    >;
    onChainSwap?: Maybe<
      ResolversParentTypes["ContributionOnChainSwapPaymentDetails"]
    >;
    onChainToRskSwap?: Maybe<
      ResolversParentTypes["ContributionOnChainToRskSwapPaymentDetails"]
    >;
  };
  ContributionPaymentsInput: ContributionPaymentsInput;
  ContributionStatusUpdatedInput: ContributionStatusUpdatedInput;
  ContributionStatusUpdatedSubscriptionResponse: Omit<
    ContributionStatusUpdatedSubscriptionResponse,
    "contribution"
  > & { contribution: ResolversParentTypes["Contribution"] };
  ContributionStrikePaymentDetails: ContributionStrikePaymentDetails;
  ContributionStrikePaymentDetailsInput: ContributionStrikePaymentDetailsInput;
  ContributionSwapRecoveryInput: ContributionSwapRecoveryInput;
  ContributionsGetResponse: Omit<ContributionsGetResponse, "contributions"> & {
    contributions: Array<ResolversParentTypes["Contribution"]>;
  };
  ContributionsSummary: ContributionsSummary;
  ContributorContributionsSummary: ContributorContributionsSummary;
  ContributorStats: ContributorStats;
  Country: Country;
  CreateProjectInput: CreateProjectInput;
  CreateProjectSubscriptionPlanInput: CreateProjectSubscriptionPlanInput;
  CreateWalletInput: CreateWalletInput;
  CreatorNotificationSettings: CreatorNotificationSettings;
  CreatorNotificationSettingsProject: CreatorNotificationSettingsProject;
  CreatorStats: CreatorStats;
  CreatorTrustStats: CreatorTrustStats;
  CurrencyQuoteGetInput: CurrencyQuoteGetInput;
  CurrencyQuoteGetResponse: CurrencyQuoteGetResponse;
  CursorInput: CursorInput;
  CursorInputString: CursorInputString;
  CursorPaginationResponse: CursorPaginationResponse;
  Date: Scalars["Date"]["output"];
  DateRangeInput: DateRangeInput;
  DatetimeRange: DatetimeRange;
  DeleteProjectInput: DeleteProjectInput;
  DeleteUserResponse: DeleteUserResponse;
  DirectPaymentDetails: DirectPaymentDetails;
  DirectPaymentDetailsInput: DirectPaymentDetailsInput;
  EIP712SignatureInput: Eip712SignatureInput;
  EmailSendOptionsInput: EmailSendOptionsInput;
  EmailVerifyInput: EmailVerifyInput;
  ExternalAccount: ExternalAccount;
  FiatPaymentDetails: FiatPaymentDetails;
  FiatPaymentMethods: FiatPaymentMethods;
  FiatToLightningSwapPaymentDetails: FiatToLightningSwapPaymentDetails;
  FileUploadInput: FileUploadInput;
  Float: Scalars["Float"]["output"];
  Funder: Omit<Funder, "contributions" | "user"> & {
    contributions: Array<ResolversParentTypes["Contribution"]>;
    user?: Maybe<ResolversParentTypes["User"]>;
  };
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
  GetFunderWhereInput: GetFunderWhereInput;
  GetFundersInput: GetFundersInput;
  GetFundersOrderByInput: GetFundersOrderByInput;
  GetPostsInput: GetPostsInput;
  GetPostsOrderByInput: GetPostsOrderByInput;
  GetPostsWhereInput: GetPostsWhereInput;
  GetProjectGoalsInput: GetProjectGoalsInput;
  GetProjectOrdersStatsInput: GetProjectOrdersStatsInput;
  GetProjectOrdersStatsWhereInput: GetProjectOrdersStatsWhereInput;
  GetProjectRewardInput: GetProjectRewardInput;
  GetProjectRewardWhereInput: GetProjectRewardWhereInput;
  GetProjectRewardsCatalogInput: GetProjectRewardsCatalogInput;
  GetProjectRewardsInput: GetProjectRewardsInput;
  GetProjectRewardsMostSoldInput: GetProjectRewardsMostSoldInput;
  GetProjectRewardsWhereInput: GetProjectRewardsWhereInput;
  GetProjectStatsInput: GetProjectStatsInput;
  GetProjectStatsWhereInput: GetProjectStatsWhereInput;
  GlobalAmbassadorLeaderboardRow: GlobalAmbassadorLeaderboardRow;
  GlobalContributorLeaderboardRow: GlobalContributorLeaderboardRow;
  GlobalCreatorLeaderboardRow: GlobalCreatorLeaderboardRow;
  GlobalProjectLeaderboardRow: GlobalProjectLeaderboardRow;
  Grant: ResolversUnionTypes<ResolversParentTypes>["Grant"];
  GrantApplicant: Omit<GrantApplicant, "contributors" | "grant" | "project"> & {
    contributors: Array<ResolversParentTypes["GrantApplicantContributor"]>;
    grant: ResolversParentTypes["Grant"];
    project: ResolversParentTypes["Project"];
  };
  GrantApplicantContributor: Omit<GrantApplicantContributor, "user"> & {
    user?: Maybe<ResolversParentTypes["User"]>;
  };
  GrantApplicantContributorInput: GrantApplicantContributorInput;
  GrantApplicantContributorWhereInput: GrantApplicantContributorWhereInput;
  GrantApplicantFunding: GrantApplicantFunding;
  GrantApplicantsGetInput: GrantApplicantsGetInput;
  GrantApplicantsGetOrderByInput: GrantApplicantsGetOrderByInput;
  GrantApplicantsGetWhereInput: GrantApplicantsGetWhereInput;
  GrantApplyInput: GrantApplyInput;
  GrantBoardMember: Omit<GrantBoardMember, "user"> & {
    user: ResolversParentTypes["User"];
  };
  GrantGetInput: GrantGetInput;
  GrantGetWhereInput: GrantGetWhereInput;
  GrantGuardiansFunding: GrantGuardiansFunding;
  GrantStatistics: GrantStatistics;
  GrantStatisticsApplicant: GrantStatisticsApplicant;
  GrantStatisticsGrant: GrantStatisticsGrant;
  GrantStatus: GrantStatus;
  GraphData: ResolversInterfaceTypes<ResolversParentTypes>["GraphData"];
  GraphSumData: ResolversInterfaceTypes<ResolversParentTypes>["GraphSumData"];
  GuardianResult: GuardianResult;
  GuardianUser: GuardianUser;
  GuardianUsersGetInput: GuardianUsersGetInput;
  GuardianUsersGetResponse: GuardianUsersGetResponse;
  GuardianUsersGetWhereInput: GuardianUsersGetWhereInput;
  HeroStats: ResolversInterfaceTypes<ResolversParentTypes>["HeroStats"];
  ID: Scalars["ID"]["output"];
  ImpactFund: Omit<
    ImpactFund,
    | "applications"
    | "donateProject"
    | "fundedApplications"
    | "viewerApplications"
  > & {
    applications: Array<ResolversParentTypes["ImpactFundApplication"]>;
    donateProject?: Maybe<ResolversParentTypes["Project"]>;
    fundedApplications: Array<ResolversParentTypes["ImpactFundApplication"]>;
    viewerApplications: Array<ResolversParentTypes["ImpactFundApplication"]>;
  };
  ImpactFundApplication: Omit<ImpactFundApplication, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  ImpactFundApplicationFundingSetInput: ImpactFundApplicationFundingSetInput;
  ImpactFundApplicationNote: ImpactFundApplicationNote;
  ImpactFundApplicationNoteAuthor: ImpactFundApplicationNoteAuthor;
  ImpactFundApplicationNoteCreateInput: ImpactFundApplicationNoteCreateInput;
  ImpactFundApplicationNoteUpdateInput: ImpactFundApplicationNoteUpdateInput;
  ImpactFundApplicationUpdateInput: ImpactFundApplicationUpdateInput;
  ImpactFundApplicationsGetResponse: Omit<
    ImpactFundApplicationsGetResponse,
    "applications"
  > & { applications: Array<ResolversParentTypes["ImpactFundApplication"]> };
  ImpactFundApplicationsInput: ImpactFundApplicationsInput;
  ImpactFundApplyInput: ImpactFundApplyInput;
  ImpactFundDashboardApplicationRow: ImpactFundDashboardApplicationRow;
  ImpactFundDashboardApplicationsInput: ImpactFundDashboardApplicationsInput;
  ImpactFundDashboardApplicationsResponse: ImpactFundDashboardApplicationsResponse;
  ImpactFundDashboardCreator: ImpactFundDashboardCreator;
  ImpactFundDashboardProject: ImpactFundDashboardProject;
  ImpactFundFieldPartnerLeaderboardInput: ImpactFundFieldPartnerLeaderboardInput;
  ImpactFundFieldPartnerLeaderboardResponse: ImpactFundFieldPartnerLeaderboardResponse;
  ImpactFundFieldPartnerLeaderboardRow: ImpactFundFieldPartnerLeaderboardRow;
  ImpactFundFundingSummaryRow: ImpactFundFundingSummaryRow;
  ImpactFundGetInput: ImpactFundGetInput;
  ImpactFundGetWhereInput: ImpactFundGetWhereInput;
  ImpactFundLabifCountryEligibility: ImpactFundLabifCountryEligibility;
  ImpactFundMetrics: ImpactFundMetrics;
  ImpactFundSponsor: ImpactFundSponsor;
  Int: Scalars["Int"]["output"];
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
  Location: Location;
  ManagedCircularGrantPaymentMethods: ManagedCircularGrantPaymentMethods;
  Milestone: Milestone;
  Mutation: {};
  MutationResponse: ResolversInterfaceTypes<ResolversParentTypes>["MutationResponse"];
  NewsletterPreferences: NewsletterPreferences;
  NewsletterPreferencesUpdateInput: NewsletterPreferencesUpdateInput;
  NewsletterStatusUpdateInput: NewsletterStatusUpdateInput;
  NotificationConfiguration: NotificationConfiguration;
  NotificationSettings: NotificationSettings;
  OTPInput: OtpInput;
  OTPLoginInput: OtpLoginInput;
  OTPResponse: OtpResponse;
  OffsetBasedPaginationInput: OffsetBasedPaginationInput;
  OnChainPaymentMethods: OnChainPaymentMethods;
  OnChainToLightningSwapPaymentDetails: OnChainToLightningSwapPaymentDetails;
  OnChainToRskSwapPaymentDetails: OnChainToRskSwapPaymentDetails;
  Order: Omit<Order, "contribution" | "project" | "user"> & {
    contribution: ResolversParentTypes["Contribution"];
    project: ResolversParentTypes["Project"];
    user?: Maybe<ResolversParentTypes["User"]>;
  };
  OrderItem: OrderItem;
  OrdersGetInput: OrdersGetInput;
  OrdersGetOrderByInput: OrdersGetOrderByInput;
  OrdersGetResponse: OrdersGetResponse;
  OrdersGetWhereInput: OrdersGetWhereInput;
  OrdersStatsBase: OrdersStatsBase;
  Owner: Omit<Owner, "user"> & { user: ResolversParentTypes["User"] };
  OwnerOf: Omit<OwnerOf, "owner" | "project"> & {
    owner?: Maybe<ResolversParentTypes["Owner"]>;
    project?: Maybe<ResolversParentTypes["Project"]>;
  };
  PageInfo: PageInfo;
  PageViewCountGraph: PageViewCountGraph;
  PaginationCursor: PaginationCursor;
  PaginationInput: PaginationInput;
  Payment: Omit<Payment, "fees" | "paymentDetails"> & {
    fees: Array<ResolversParentTypes["PaymentFee"]>;
    paymentDetails: ResolversParentTypes["PaymentDetails"];
  };
  PaymentCancelInput: PaymentCancelInput;
  PaymentCancelResponse: PaymentCancelResponse;
  PaymentConfirmInput: PaymentConfirmInput;
  PaymentConfirmResponse: PaymentConfirmResponse;
  PaymentDetails: ResolversUnionTypes<ResolversParentTypes>["PaymentDetails"];
  PaymentFailInput: PaymentFailInput;
  PaymentFailResponse: PaymentFailResponse;
  PaymentFee: PaymentFee;
  PaymentFeeUpsertInput: PaymentFeeUpsertInput;
  PaymentFeeUpsertResponse: PaymentFeeUpsertResponse;
  PaymentGetInput: PaymentGetInput;
  PaymentInvoiceCancelResponse: PaymentInvoiceCancelResponse;
  PaymentInvoiceSanctionCheckStatusGetInput: PaymentInvoiceSanctionCheckStatusGetInput;
  PaymentInvoiceSanctionCheckStatusResponse: PaymentInvoiceSanctionCheckStatusResponse;
  PaymentMethods: PaymentMethods;
  PaymentPendInput: PaymentPendInput;
  PaymentPendResponse: PaymentPendResponse;
  PaymentPendSwapInput: PaymentPendSwapInput;
  PaymentRecoveryByContributionInput: PaymentRecoveryByContributionInput;
  PaymentRecoveryByContributionResponse: Omit<
    PaymentRecoveryByContributionResponse,
    "contribution" | "project"
  > & {
    contribution: ResolversParentTypes["Contribution"];
    project: ResolversParentTypes["Project"];
  };
  PaymentRecoveryPayment: PaymentRecoveryPayment;
  PaymentRefund: PaymentRefund;
  PaymentRefundCompleteInput: PaymentRefundCompleteInput;
  PaymentRefundCompleteResponse: PaymentRefundCompleteResponse;
  PaymentRefundsGetResponse: PaymentRefundsGetResponse;
  PaymentSetClaimableInput: PaymentSetClaimableInput;
  PaymentSetClaimableResponse: PaymentSetClaimableResponse;
  PaymentSetClaimingInput: PaymentSetClaimingInput;
  PaymentSetClaimingResponse: PaymentSetClaimingResponse;
  PaymentSetRefundableInput: PaymentSetRefundableInput;
  PaymentSetRefundableResponse: PaymentSetRefundableResponse;
  PaymentSetRefundedInput: PaymentSetRefundedInput;
  PaymentSetRefundedResponse: PaymentSetRefundedResponse;
  PaymentSetRefundingInput: PaymentSetRefundingInput;
  PaymentSetRefundingResponse: PaymentSetRefundingResponse;
  PaymentStatusUpdatedInput: PaymentStatusUpdatedInput;
  PaymentSwapClaimTxBroadcastInput: PaymentSwapClaimTxBroadcastInput;
  PaymentSwapClaimTxBroadcastResponse: PaymentSwapClaimTxBroadcastResponse;
  PaymentSwapClaimTxSetInput: PaymentSwapClaimTxSetInput;
  PaymentSwapClaimTxSetResponse: PaymentSwapClaimTxSetResponse;
  PaymentSwapRefundTxBroadcastInput: PaymentSwapRefundTxBroadcastInput;
  PaymentSwapRefundTxBroadcastResponse: PaymentSwapRefundTxBroadcastResponse;
  PaymentSwapRefundTxSetInput: PaymentSwapRefundTxSetInput;
  PaymentSwapRefundTxSetResponse: PaymentSwapRefundTxSetResponse;
  PaymentsGetInput: PaymentsGetInput;
  PaymentsGetOrderByInput: PaymentsGetOrderByInput;
  PaymentsGetResponse: Omit<PaymentsGetResponse, "payments"> & {
    payments: Array<ResolversParentTypes["Payment"]>;
  };
  PaymentsGetWhereInput: PaymentsGetWhereInput;
  PaymentsInProgressGetResponse: Omit<
    PaymentsInProgressGetResponse,
    "payments"
  > & { payments: Array<ResolversParentTypes["Payment"]> };
  Payout: Omit<Payout, "payments"> & {
    payments: Array<ResolversParentTypes["Payment"]>;
  };
  PayoutCancelInput: PayoutCancelInput;
  PayoutFeeSummary: PayoutFeeSummary;
  PayoutFeeSummaryItem: PayoutFeeSummaryItem;
  PayoutGetInput: PayoutGetInput;
  PayoutGetResponse: Omit<PayoutGetResponse, "payout"> & {
    payout: ResolversParentTypes["Payout"];
  };
  PayoutInitiateInput: PayoutInitiateInput;
  PayoutInitiateResponse: Omit<PayoutInitiateResponse, "payout"> & {
    payout: ResolversParentTypes["Payout"];
  };
  PayoutMetadata: PayoutMetadata;
  PayoutPaymentCreateInput: PayoutPaymentCreateInput;
  PayoutPaymentCreateResponse: Omit<
    PayoutPaymentCreateResponse,
    "payment" | "payout"
  > & {
    payment: ResolversParentTypes["Payment"];
    payout: ResolversParentTypes["Payout"];
  };
  PayoutPaymentInput: PayoutPaymentInput;
  PayoutRequestInput: PayoutRequestInput;
  PayoutRequestResponse: Omit<PayoutRequestResponse, "payout"> & {
    payout: ResolversParentTypes["Payout"];
  };
  PayoutResponse: PayoutResponse;
  PledgeRefund: Omit<PledgeRefund, "payments" | "project"> & {
    payments: Array<ResolversParentTypes["Payment"]>;
    project: ResolversParentTypes["Project"];
  };
  PledgeRefundCancelInput: PledgeRefundCancelInput;
  PledgeRefundGetInput: PledgeRefundGetInput;
  PledgeRefundGetResponse: Omit<PledgeRefundGetResponse, "refund"> & {
    refund: ResolversParentTypes["PledgeRefund"];
  };
  PledgeRefundInitiateInput: PledgeRefundInitiateInput;
  PledgeRefundInitiateResponse: Omit<PledgeRefundInitiateResponse, "refund"> & {
    refund: ResolversParentTypes["PledgeRefund"];
  };
  PledgeRefundMetadata: PledgeRefundMetadata;
  PledgeRefundPaymentCreateInput: PledgeRefundPaymentCreateInput;
  PledgeRefundPaymentCreateResponse: Omit<
    PledgeRefundPaymentCreateResponse,
    "payment" | "refund"
  > & {
    payment: ResolversParentTypes["Payment"];
    refund: ResolversParentTypes["PledgeRefund"];
  };
  PledgeRefundPaymentInput: PledgeRefundPaymentInput;
  PledgeRefundRequestInput: PledgeRefundRequestInput;
  PledgeRefundRequestResponse: Omit<PledgeRefundRequestResponse, "refund"> & {
    refund: ResolversParentTypes["PledgeRefund"];
  };
  PledgeRefundResponse: PledgeRefundResponse;
  PledgeRefundsGetResponse: Omit<PledgeRefundsGetResponse, "refunds"> & {
    refunds: Array<ResolversParentTypes["PledgeRefund"]>;
  };
  PodcastKeysendContributionCreateInput: PodcastKeysendContributionCreateInput;
  PodcastKeysendContributionCreateResponse: PodcastKeysendContributionCreateResponse;
  Post: Omit<Post, "contributions" | "creator" | "project"> & {
    contributions: Array<ResolversParentTypes["Contribution"]>;
    creator: ResolversParentTypes["User"];
    project?: Maybe<ResolversParentTypes["Project"]>;
  };
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
  Project: Omit<
    Project,
    | "activeMatching"
    | "ambassadors"
    | "contributions"
    | "fieldPartner"
    | "followers"
    | "fundingSummary"
    | "grantApplications"
    | "matchings"
    | "owners"
    | "sponsors"
    | "wallets"
  > & {
    activeMatching?: Maybe<ResolversParentTypes["ProjectMatching"]>;
    ambassadors: ResolversParentTypes["ProjectAmbassadorsConnection"];
    contributions: Array<ResolversParentTypes["Contribution"]>;
    fieldPartner?: Maybe<ResolversParentTypes["User"]>;
    followers: Array<ResolversParentTypes["User"]>;
    fundingSummary: ResolversParentTypes["ProjectFundingSummary"];
    grantApplications: Array<ResolversParentTypes["GrantApplicant"]>;
    matchings: Array<ResolversParentTypes["ProjectMatching"]>;
    owners: Array<ResolversParentTypes["Owner"]>;
    sponsors: Array<ResolversParentTypes["Sponsor"]>;
    wallets: Array<ResolversParentTypes["Wallet"]>;
  };
  ProjectActivatedSubscriptionResponse: Omit<
    ProjectActivatedSubscriptionResponse,
    "project"
  > & { project: ResolversParentTypes["Project"] };
  ProjectActivitiesCount: Omit<ProjectActivitiesCount, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  ProjectAmbassadorEdge: Omit<ProjectAmbassadorEdge, "node"> & {
    node: ResolversParentTypes["Ambassador"];
  };
  ProjectAmbassadorsConnection: Omit<ProjectAmbassadorsConnection, "edges"> & {
    edges: Array<ResolversParentTypes["ProjectAmbassadorEdge"]>;
  };
  ProjectAmbassadorsStats: ProjectAmbassadorsStats;
  ProjectAonGoal: ProjectAonGoal;
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
  ProjectFollowMutationInput: ProjectFollowMutationInput;
  ProjectFollowerStats: ProjectFollowerStats;
  ProjectFunderRewardStats: ProjectFunderRewardStats;
  ProjectFunderStats: ProjectFunderStats;
  ProjectFundingSummary: Omit<ProjectFundingSummary, "goals" | "matching"> & {
    goals: ResolversParentTypes["ProjectGoalFundingSummary"];
    matching: ResolversParentTypes["ProjectMatchingFundingSummary"];
  };
  ProjectGoal: ProjectGoal;
  ProjectGoalCreateInput: ProjectGoalCreateInput;
  ProjectGoalDeleteResponse: ProjectGoalDeleteResponse;
  ProjectGoalFundingSummary: ProjectGoalFundingSummary;
  ProjectGoalOrderingUpdateInput: ProjectGoalOrderingUpdateInput;
  ProjectGoalUpdateInput: ProjectGoalUpdateInput;
  ProjectGoals: ProjectGoals;
  ProjectGrantApplicationsInput: ProjectGrantApplicationsInput;
  ProjectGrantApplicationsWhereInput: ProjectGrantApplicationsWhereInput;
  ProjectImpactFundRecipient: ProjectImpactFundRecipient;
  ProjectLeaderboardAmbassadorsGetInput: ProjectLeaderboardAmbassadorsGetInput;
  ProjectLeaderboardAmbassadorsRow: Omit<
    ProjectLeaderboardAmbassadorsRow,
    "user"
  > & { user?: Maybe<ResolversParentTypes["User"]> };
  ProjectLeaderboardContributorsGetInput: ProjectLeaderboardContributorsGetInput;
  ProjectLeaderboardContributorsRow: Omit<
    ProjectLeaderboardContributorsRow,
    "user"
  > & { user?: Maybe<ResolversParentTypes["User"]> };
  ProjectLinkMutationInput: ProjectLinkMutationInput;
  ProjectMatching: ProjectMatching;
  ProjectMatchingCreateInput: ProjectMatchingCreateInput;
  ProjectMatchingDeleteInput: ProjectMatchingDeleteInput;
  ProjectMatchingDeleteResponse: ProjectMatchingDeleteResponse;
  ProjectMatchingFundingSummary: Omit<
    ProjectMatchingFundingSummary,
    "activeMatching"
  > & { activeMatching?: Maybe<ResolversParentTypes["ProjectMatching"]> };
  ProjectMatchingUpdateInput: ProjectMatchingUpdateInput;
  ProjectMostFunded: Omit<ProjectMostFunded, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  ProjectMostFundedByCategory: Omit<ProjectMostFundedByCategory, "projects"> & {
    projects: Array<ResolversParentTypes["ProjectMostFunded"]>;
  };
  ProjectMostFundedByTag: Omit<ProjectMostFundedByTag, "projects"> & {
    projects: Array<ResolversParentTypes["ProjectMostFunded"]>;
  };
  ProjectPostsGetInput: ProjectPostsGetInput;
  ProjectPostsGetWhereInput: ProjectPostsGetWhereInput;
  ProjectPreLaunchMutationInput: ProjectPreLaunchMutationInput;
  ProjectPublishMutationInput: ProjectPublishMutationInput;
  ProjectPutInReviewMutationInput: ProjectPutInReviewMutationInput;
  ProjectRecommendedGetInput: ProjectRecommendedGetInput;
  ProjectRecommendedGetResult: Omit<ProjectRecommendedGetResult, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  ProjectReferrersSearchInput: ProjectReferrersSearchInput;
  ProjectReferrersSearchResult: Omit<
    ProjectReferrersSearchResult,
    "fieldPartners" | "others"
  > & {
    fieldPartners: Array<ResolversParentTypes["User"]>;
    others: Array<ResolversParentTypes["User"]>;
  };
  ProjectRefundablePayment: Omit<
    ProjectRefundablePayment,
    "payments" | "project"
  > & {
    payments: Array<ResolversParentTypes["Payment"]>;
    project: ResolversParentTypes["Project"];
  };
  ProjectRegionsGetResult: ProjectRegionsGetResult;
  ProjectReview: ProjectReview;
  ProjectReviewComplianceSuggestion: ProjectReviewComplianceSuggestion;
  ProjectReviewRequestInput: ProjectReviewRequestInput;
  ProjectReviewSubmitInput: ProjectReviewSubmitInput;
  ProjectReward: Omit<ProjectReward, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  ProjectRewardCatalogRow: ProjectRewardCatalogRow;
  ProjectRewardMostSoldGetRow: ProjectRewardMostSoldGetRow;
  ProjectRewardTrendingMonthlyGetRow: ProjectRewardTrendingMonthlyGetRow;
  ProjectRewardTrendingQuarterlyGetRow: ProjectRewardTrendingQuarterlyGetRow;
  ProjectRewardTrendingWeeklyGetRow: ProjectRewardTrendingWeeklyGetRow;
  ProjectRewardsCatalogGetResponse: ProjectRewardsCatalogGetResponse;
  ProjectRewardsGroupedByRewardIdStats: ProjectRewardsGroupedByRewardIdStats;
  ProjectRewardsGroupedByRewardIdStatsProjectReward: ProjectRewardsGroupedByRewardIdStatsProjectReward;
  ProjectRewardsStats: ProjectRewardsStats;
  ProjectRskEoa: ProjectRskEoa;
  ProjectRskEoaRotationInput: ProjectRskEoaRotationInput;
  ProjectRskEoaSetInput: ProjectRskEoaSetInput;
  ProjectShippingConfigsGetInput: ProjectShippingConfigsGetInput;
  ProjectShippingRate: ProjectShippingRate;
  ProjectStatistics: ProjectStatistics;
  ProjectStats: ProjectStats;
  ProjectStatsBase: ProjectStatsBase;
  ProjectStatusUpdate: ProjectStatusUpdate;
  ProjectSubscriptionPlan: ProjectSubscriptionPlan;
  ProjectSubscriptionStartInput: ProjectSubscriptionStartInput;
  ProjectViewBaseStats: ProjectViewBaseStats;
  ProjectViewStats: ProjectViewStats;
  ProjectWalletConfigurationContributionAttemptNotifyInput: ProjectWalletConfigurationContributionAttemptNotifyInput;
  ProjectWalletConfigurationContributionAttemptNotifyResponse: ProjectWalletConfigurationContributionAttemptNotifyResponse;
  ProjectsAonAlmostFundedInput: ProjectsAonAlmostFundedInput;
  ProjectsAonAlmostFundedResponse: Omit<
    ProjectsAonAlmostFundedResponse,
    "projects"
  > & { projects: Array<ResolversParentTypes["Project"]> };
  ProjectsAonAlmostOverInput: ProjectsAonAlmostOverInput;
  ProjectsAonAlmostOverResponse: Omit<
    ProjectsAonAlmostOverResponse,
    "projects"
  > & { projects: Array<ResolversParentTypes["Project"]> };
  ProjectsGetQueryInput: ProjectsGetQueryInput;
  ProjectsGetWhereInput: ProjectsGetWhereInput;
  ProjectsMostFundedAllOrNothingInput: ProjectsMostFundedAllOrNothingInput;
  ProjectsMostFundedByCategoryInput: ProjectsMostFundedByCategoryInput;
  ProjectsMostFundedByTagInput: ProjectsMostFundedByTagInput;
  ProjectsMostFundedTakeItAllInput: ProjectsMostFundedTakeItAllInput;
  ProjectsOrderByInput: ProjectsOrderByInput;
  ProjectsResponse: Omit<ProjectsResponse, "projects"> & {
    projects: Array<ResolversParentTypes["Project"]>;
  };
  ProjectsSummary: ProjectsSummary;
  Query: {};
  RecurringContribution: Omit<RecurringContribution, "project"> & {
    project?: Maybe<ResolversParentTypes["Project"]>;
  };
  RecurringContributionCancelInput: RecurringContributionCancelInput;
  RecurringContributionCheckoutResponse: Omit<
    RecurringContributionCheckoutResponse,
    "contribution" | "payments"
  > & {
    contribution: ResolversParentTypes["Contribution"];
    payments: ResolversParentTypes["ContributionPaymentsDetails"];
  };
  RecurringContributionPortalSession: RecurringContributionPortalSession;
  RecurringContributionPortalSessionCreateInput: RecurringContributionPortalSessionCreateInput;
  RecurringContributionRenewalCreateInput: RecurringContributionRenewalCreateInput;
  RecurringContributionSupport: RecurringContributionSupport;
  RecurringDonationCreateInput: RecurringDonationCreateInput;
  RefundablePaymentsGetResponse: Omit<
    RefundablePaymentsGetResponse,
    "refundablePayments"
  > & {
    refundablePayments: Array<ResolversParentTypes["ProjectRefundablePayment"]>;
  };
  ResourceInput: ResourceInput;
  RskAonClaimPaymentDetails: RskAonClaimPaymentDetails;
  RskKeyPair: RskKeyPair;
  RskKeyPairInput: RskKeyPairInput;
  RskNativeTransferPaymentDetails: RskNativeTransferPaymentDetails;
  RskNativeTransferPaymentDetailsInput: RskNativeTransferPaymentDetailsInput;
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
  SourceResource: ResolversUnionTypes<ResolversParentTypes>["SourceResource"];
  Sponsor: Omit<Sponsor, "user"> & {
    user?: Maybe<ResolversParentTypes["User"]>;
  };
  StatsInterface: ResolversInterfaceTypes<ResolversParentTypes>["StatsInterface"];
  StrikePaymentDetails: StrikePaymentDetails;
  String: Scalars["String"]["output"];
  StripeCheckoutSessionInput: StripeCheckoutSessionInput;
  StripeConnectOnboardingPayload: StripeConnectOnboardingPayload;
  StripeConnectStatus: StripeConnectStatus;
  StripeInterestNotifyResponse: StripeInterestNotifyResponse;
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
  UpdateProjectInput: UpdateProjectInput;
  UpdateProjectSubscriptionPlanInput: UpdateProjectSubscriptionPlanInput;
  UpdateUserInput: UpdateUserInput;
  UpdateWalletInput: UpdateWalletInput;
  UpdateWalletStateInput: UpdateWalletStateInput;
  User: Omit<
    User,
    "contributions" | "ownerOf" | "projectFollows" | "projects" | "wallet"
  > & {
    contributions: Array<ResolversParentTypes["Contribution"]>;
    ownerOf: Array<ResolversParentTypes["OwnerOf"]>;
    projectFollows: Array<ResolversParentTypes["Project"]>;
    projects: Array<ResolversParentTypes["Project"]>;
    wallet?: Maybe<ResolversParentTypes["Wallet"]>;
  };
  UserAccountKeys: UserAccountKeys;
  UserAccountKeysUpdateInput: UserAccountKeysUpdateInput;
  UserAccountPasswordFundsSummary: UserAccountPasswordFundsSummary;
  UserBadge: UserBadge;
  UserComplianceDetails: UserComplianceDetails;
  UserContributionLimit: UserContributionLimit;
  UserContributionLimits: UserContributionLimits;
  UserContributionsInput: UserContributionsInput;
  UserEmailIsValidResponse: UserEmailIsValidResponse;
  UserEmailUpdateInput: UserEmailUpdateInput;
  UserGetInput: UserGetInput;
  UserHeroImpact: UserHeroImpact;
  UserHeroImpactStat: UserHeroImpactStat;
  UserHeroProfile: UserHeroProfile;
  UserHeroProject: Omit<UserHeroProject, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  UserHeroProjectsInput: UserHeroProjectsInput;
  UserHeroProjectsResponse: UserHeroProjectsResponse;
  UserHeroStats: UserHeroStats;
  UserHeroTrust: UserHeroTrust;
  UserNotificationSettings: UserNotificationSettings;
  UserPostsGetInput: UserPostsGetInput;
  UserPostsGetWhereInput: UserPostsGetWhereInput;
  UserProjectContribution: Omit<UserProjectContribution, "project"> & {
    project: ResolversParentTypes["Project"];
  };
  UserProjectsGetInput: UserProjectsGetInput;
  UserProjectsGetWhereInput: UserProjectsGetWhereInput;
  UserTaxProfile: UserTaxProfile;
  UserTaxProfileUpdateInput: UserTaxProfileUpdateInput;
  UserVerificationLevelStatus: UserVerificationLevelStatus;
  UserVerificationTokenGenerateInput: UserVerificationTokenGenerateInput;
  UserVerificationTokenGenerateResponse: UserVerificationTokenGenerateResponse;
  UserVerifiedDetails: UserVerifiedDetails;
  UserWalletWithdraw: Omit<UserWalletWithdraw, "payments"> & {
    payments: Array<ResolversParentTypes["Payment"]>;
  };
  UserWalletWithdrawGetResponse: Omit<
    UserWalletWithdrawGetResponse,
    "userWalletWithdraw"
  > & { userWalletWithdraw: ResolversParentTypes["UserWalletWithdraw"] };
  UserWalletWithdrawInitiateInput: UserWalletWithdrawInitiateInput;
  UserWalletWithdrawInitiateResponse: Omit<
    UserWalletWithdrawInitiateResponse,
    "userWalletWithdraw"
  > & { userWalletWithdraw: ResolversParentTypes["UserWalletWithdraw"] };
  UserWalletWithdrawMetadata: UserWalletWithdrawMetadata;
  UserWalletWithdrawPaymentCreateInput: UserWalletWithdrawPaymentCreateInput;
  UserWalletWithdrawPaymentCreateResponse: Omit<
    UserWalletWithdrawPaymentCreateResponse,
    "payment" | "userWalletWithdraw"
  > & {
    payment: ResolversParentTypes["Payment"];
    userWalletWithdraw: ResolversParentTypes["UserWalletWithdraw"];
  };
  UserWalletWithdrawPaymentInput: UserWalletWithdrawPaymentInput;
  UserWalletWithdrawRequestResponse: Omit<
    UserWalletWithdrawRequestResponse,
    "userWalletWithdraw"
  > & { userWalletWithdraw: ResolversParentTypes["UserWalletWithdraw"] };
  VerificationResult: VerificationResult;
  Wallet: Omit<Wallet, "connectionDetails"> & {
    connectionDetails?: Maybe<ResolversParentTypes["ConnectionDetails"]>;
  };
  WalletContributionLimits: WalletContributionLimits;
  WalletLimits: WalletLimits;
  WalletOffChainContributionLimits: WalletOffChainContributionLimits;
  WalletOnChainContributionLimits: WalletOnChainContributionLimits;
  WalletResourceInput: WalletResourceInput;
  WalletState: WalletState;
  dashboardFundersGetInput: DashboardFundersGetInput;
};

export type AccountPasswordAffectedProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccountPasswordAffectedProject"] =
    ResolversParentTypes["AccountPasswordAffectedProject"],
> = {
  balanceSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  derivationPath?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rskEoa?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["ProjectStatus"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcelerandoVipLeaderboardEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AcelerandoVipLeaderboardEntry"] =
    ResolversParentTypes["AcelerandoVipLeaderboardEntry"],
> = {
  avatarUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  eligibleContributionsCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  scoreSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  uniqueProjectsBacked?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcelerandoVipLeaderboardResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AcelerandoVipLeaderboardResponse"] =
    ResolversParentTypes["AcelerandoVipLeaderboardResponse"],
> = {
  endAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  entries?: Resolver<
    Array<ResolversTypes["AcelerandoVipLeaderboardEntry"]>,
    ParentType,
    ContextType
  >;
  giveawayId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  leaderboardSize?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topCutoffScore?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcelerandoVipMyPositionResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AcelerandoVipMyPositionResponse"] =
    ResolversParentTypes["AcelerandoVipMyPositionResponse"],
> = {
  distanceToNextRankSats?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  distanceToTop3Sats?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  eligibleContributionsCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  excludedSelfContributionsCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  inTop3?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  progressToTop3?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  scoreSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  top3CutoffScore?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  uniqueProjectsBacked?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivitiesGetResponse"] =
    ResolversParentTypes["ActivitiesGetResponse"],
> = {
  activities?: Resolver<
    Array<ResolversTypes["Activity"]>,
    ParentType,
    ContextType
  >;
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Activity"] =
    ResolversParentTypes["Activity"],
> = {
  activityType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  resource?: Resolver<
    ResolversTypes["ActivityResource"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityResource"] =
    ResolversParentTypes["ActivityResource"],
> = {
  __resolveType: TypeResolveFn<
    "Contribution" | "Post" | "Project" | "ProjectGoal" | "ProjectReward",
    ParentType,
    ContextType
  >;
};

export type AmbassadorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Ambassador"] =
    ResolversParentTypes["Ambassador"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsSum?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmbassadorStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AmbassadorStats"] =
    ResolversParentTypes["AmbassadorStats"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmountSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AmountSummary"] =
    ResolversParentTypes["AmountSummary"],
> = {
  donationAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rewardsCost?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  shippingCost?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AonClaimBroadcastResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AonClaimBroadcastResponse"] =
    ResolversParentTypes["AonClaimBroadcastResponse"],
> = {
  txHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AonClaimPrepareResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AonClaimPrepareResponse"] =
    ResolversParentTypes["AonClaimPrepareResponse"],
> = {
  claimCalldata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  claimableAmountSats?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  contractAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  creatorAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  processingFeeSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  simulationOk?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AonClaimStatusResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AonClaimStatusResponse"] =
    ResolversParentTypes["AonClaimStatusResponse"],
> = {
  failureReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["AonClaimStatus"], ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BadgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Badge"] =
    ResolversParentTypes["Badge"],
> = {
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  thumb?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uniqueName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<
  ResolversTypes["BigInt"],
  any
> {
  name: "BigInt";
}

export type BitcoinPaymentMethodsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BitcoinPaymentMethods"] =
    ResolversParentTypes["BitcoinPaymentMethods"],
> = {
  lightning?: Resolver<
    ResolversTypes["LightningPaymentMethods"],
    ParentType,
    ContextType
  >;
  onChain?: Resolver<
    ResolversTypes["OnChainPaymentMethods"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitcoinQuoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BitcoinQuote"] =
    ResolversParentTypes["BitcoinQuote"],
> = {
  quote?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quoteCurrency?: Resolver<
    ResolversTypes["QuoteCurrency"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoardVoteGrantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BoardVoteGrant"] =
    ResolversParentTypes["BoardVoteGrant"],
> = {
  applicants?: Resolver<
    Array<ResolversTypes["GrantApplicant"]>,
    ParentType,
    ContextType,
    Partial<BoardVoteGrantApplicantsArgs>
  >;
  balance?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  boardMembers?: Resolver<
    Array<ResolversTypes["GrantBoardMember"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  sponsors?: Resolver<
    Array<ResolversTypes["Sponsor"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["GrantStatusEnum"], ParentType, ContextType>;
  statuses?: Resolver<
    Array<ResolversTypes["GrantStatus"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["GrantType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityVoteGrantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommunityVoteGrant"] =
    ResolversParentTypes["CommunityVoteGrant"],
> = {
  applicants?: Resolver<
    Array<ResolversTypes["GrantApplicant"]>,
    ParentType,
    ContextType,
    Partial<CommunityVoteGrantApplicantsArgs>
  >;
  balance?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  distributionSystem?: Resolver<
    ResolversTypes["DistributionSystem"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  sponsors?: Resolver<
    Array<ResolversTypes["Sponsor"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["GrantStatusEnum"], ParentType, ContextType>;
  statuses?: Resolver<
    Array<ResolversTypes["GrantStatus"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["GrantType"], ParentType, ContextType>;
  votes?: Resolver<
    ResolversTypes["CompetitionVoteGrantVoteSummary"],
    ParentType,
    ContextType
  >;
  votingSystem?: Resolver<
    ResolversTypes["VotingSystem"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompetitionVoteGrantVoteSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CompetitionVoteGrantVoteSummary"] =
    ResolversParentTypes["CompetitionVoteGrantVoteSummary"],
> = {
  voteCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voterCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ConnectionDetails"] =
    ResolversParentTypes["ConnectionDetails"],
> = {
  __resolveType: TypeResolveFn<
    "LightningAddressConnectionDetails",
    ParentType,
    ContextType
  >;
};

export type ContributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Contribution"] =
    ResolversParentTypes["Contribution"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bitcoinQuote?: Resolver<
    Maybe<ResolversTypes["BitcoinQuote"]>,
    ParentType,
    ContextType
  >;
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  confirmedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  creatorEmail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  creatorTaxProfile?: Resolver<
    Maybe<ResolversTypes["UserTaxProfile"]>,
    ParentType,
    ContextType
  >;
  donationAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  funder?: Resolver<ResolversTypes["Funder"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  isAnonymous?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isSubscription?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  matchedAmountSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  matchedAmountUsdCent?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  matching?: Resolver<
    Maybe<ResolversTypes["ProjectMatching"]>,
    ParentType,
    ContextType
  >;
  media?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  privateComment?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  projectGoalId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  recurringContribution?: Resolver<
    Maybe<ResolversTypes["RecurringContribution"]>,
    ParentType,
    ContextType
  >;
  sourceResource?: Resolver<
    Maybe<ResolversTypes["SourceResource"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["ContributionStatus"],
    ParentType,
    ContextType
  >;
  uuid?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionFiatPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionFiatPaymentDetails"] =
    ResolversParentTypes["ContributionFiatPaymentDetails"],
> = {
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  stripeAccountId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  stripeClientSecret?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionFiatToLightningSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionFiatToLightningSwapPaymentDetails"] =
    ResolversParentTypes["ContributionFiatToLightningSwapPaymentDetails"],
> = {
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  checkoutUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionLightningPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionLightningPaymentDetails"] =
    ResolversParentTypes["ContributionLightningPaymentDetails"],
> = {
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  paymentRequest?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionLightningToRskSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionLightningToRskSwapPaymentDetails"] =
    ResolversParentTypes["ContributionLightningToRskSwapPaymentDetails"],
> = {
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  amountToClaim?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  paymentRequest?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionMutationResponse"] =
    ResolversParentTypes["ContributionMutationResponse"],
> = {
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType
  >;
  payments?: Resolver<
    ResolversTypes["ContributionPaymentsDetails"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionOnChainSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionOnChainSwapPaymentDetails"] =
    ResolversParentTypes["ContributionOnChainSwapPaymentDetails"],
> = {
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionOnChainToRskSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionOnChainToRskSwapPaymentDetails"] =
    ResolversParentTypes["ContributionOnChainToRskSwapPaymentDetails"],
> = {
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  swapJson?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionPaymentsAddResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionPaymentsAddResponse"] =
    ResolversParentTypes["ContributionPaymentsAddResponse"],
> = {
  payments?: Resolver<
    ResolversTypes["ContributionPaymentsDetails"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionPaymentsDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionPaymentsDetails"] =
    ResolversParentTypes["ContributionPaymentsDetails"],
> = {
  fiat?: Resolver<
    Maybe<ResolversTypes["ContributionFiatPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  fiatToLightningSwap?: Resolver<
    Maybe<ResolversTypes["ContributionFiatToLightningSwapPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  lightning?: Resolver<
    Maybe<ResolversTypes["ContributionLightningPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  lightningToRskSwap?: Resolver<
    Maybe<ResolversTypes["ContributionLightningToRskSwapPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  onChainSwap?: Resolver<
    Maybe<ResolversTypes["ContributionOnChainSwapPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  onChainToRskSwap?: Resolver<
    Maybe<ResolversTypes["ContributionOnChainToRskSwapPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  strike?: Resolver<
    Maybe<ResolversTypes["ContributionStrikePaymentDetails"]>,
    ParentType,
    ContextType
  >;
  strikeLightning?: Resolver<
    Maybe<ResolversTypes["ContributionStrikePaymentDetails"]>,
    ParentType,
    ContextType
  >;
  strikeOnChain?: Resolver<
    Maybe<ResolversTypes["ContributionStrikePaymentDetails"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionStatusUpdatedSubscriptionResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ContributionStatusUpdatedSubscriptionResponse"] =
    ResolversParentTypes["ContributionStatusUpdatedSubscriptionResponse"],
> = {
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionStrikePaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionStrikePaymentDetails"] =
    ResolversParentTypes["ContributionStrikePaymentDetails"],
> = {
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  amountDue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountDueCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  paymentId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  paymentRequest?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionsGetResponse"] =
    ResolversParentTypes["ContributionsGetResponse"],
> = {
  contributions?: Resolver<
    Array<ResolversTypes["Contribution"]>,
    ParentType,
    ContextType
  >;
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributionsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributionsSummary"] =
    ResolversParentTypes["ContributionsSummary"],
> = {
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  contributorsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorContributionsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributorContributionsSummary"] =
    ResolversParentTypes["ContributorContributionsSummary"],
> = {
  commentsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContributorStats"] =
    ResolversParentTypes["ContributorStats"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Country"] =
    ResolversParentTypes["Country"],
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorNotificationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatorNotificationSettings"] =
    ResolversParentTypes["CreatorNotificationSettings"],
> = {
  notificationSettings?: Resolver<
    Array<ResolversTypes["NotificationSettings"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<
    ResolversTypes["CreatorNotificationSettingsProject"],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorNotificationSettingsProjectResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreatorNotificationSettingsProject"] =
    ResolversParentTypes["CreatorNotificationSettingsProject"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatorStats"] =
    ResolversParentTypes["CreatorStats"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorTrustStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatorTrustStats"] =
    ResolversParentTypes["CreatorTrustStats"],
> = {
  backersCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  joinedYear?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  publishedPostsCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  totalFunding?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalFundingUsd?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyQuoteGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CurrencyQuoteGetResponse"] =
    ResolversParentTypes["CurrencyQuoteGetResponse"],
> = {
  baseCurrency?: Resolver<
    ResolversTypes["BaseCurrency"],
    ParentType,
    ContextType
  >;
  quote?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  quoteCurrency?: Resolver<
    ResolversTypes["QuoteCurrency"],
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CursorPaginationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CursorPaginationResponse"] =
    ResolversParentTypes["CursorPaginationResponse"],
> = {
  count?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  cursor?: Resolver<
    Maybe<ResolversTypes["PaginationCursor"]>,
    ParentType,
    ContextType
  >;
  take?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<
  ResolversTypes["Date"],
  any
> {
  name: "Date";
}

export type DatetimeRangeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DatetimeRange"] =
    ResolversParentTypes["DatetimeRange"],
> = {
  endDateTime?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  startDateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteUserResponse"] =
    ResolversParentTypes["DeleteUserResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DirectPaymentDetails"] =
    ResolversParentTypes["DirectPaymentDetails"],
> = {
  btcAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lightningAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ExternalAccount"] =
    ResolversParentTypes["ExternalAccount"],
> = {
  accountType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  externalLink?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  externalUsername?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  public?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FiatPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FiatPaymentDetails"] =
    ResolversParentTypes["FiatPaymentDetails"],
> = {
  method?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  stripeAccountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeChargeId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeCheckoutSessionId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeInvoiceId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripePaymentIntentId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeSubscriptionId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FiatPaymentMethodsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FiatPaymentMethods"] =
    ResolversParentTypes["FiatPaymentMethods"],
> = {
  banxa?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  stripe?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FiatToLightningSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FiatToLightningSwapPaymentDetails"] =
    ResolversParentTypes["FiatToLightningSwapPaymentDetails"],
> = {
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  lightningInvoiceStatus?: Resolver<
    ResolversTypes["LightningInvoiceStatus"],
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Funder"] =
    ResolversParentTypes["Funder"],
> = {
  amountFunded?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  confirmed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  confirmedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  contributions?: Resolver<
    Array<ResolversTypes["Contribution"]>,
    ParentType,
    ContextType,
    Partial<FunderContributionsArgs>
  >;
  contributionsSummary?: Resolver<
    Maybe<ResolversTypes["ContributorContributionsSummary"]>,
    ParentType,
    ContextType,
    Partial<FunderContributionsSummaryArgs>
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  timesFunded?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunderRewardGraphSumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FunderRewardGraphSum"] =
    ResolversParentTypes["FunderRewardGraphSum"],
> = {
  dateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  rewardId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  rewardName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalAmbassadorLeaderboardRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GlobalAmbassadorLeaderboardRow"] =
    ResolversParentTypes["GlobalAmbassadorLeaderboardRow"],
> = {
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  userGuardianType?: Resolver<
    Maybe<ResolversTypes["GuardianType"]>,
    ParentType,
    ContextType
  >;
  userHeroId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  userImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalContributorLeaderboardRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GlobalContributorLeaderboardRow"] =
    ResolversParentTypes["GlobalContributorLeaderboardRow"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsContributedCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  userGuardianType?: Resolver<
    Maybe<ResolversTypes["GuardianType"]>,
    ParentType,
    ContextType
  >;
  userHeroId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  userImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalCreatorLeaderboardRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GlobalCreatorLeaderboardRow"] =
    ResolversParentTypes["GlobalCreatorLeaderboardRow"],
> = {
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  userGuardianType?: Resolver<
    Maybe<ResolversTypes["GuardianType"]>,
    ParentType,
    ContextType
  >;
  userHeroId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  userImageUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalProjectLeaderboardRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GlobalProjectLeaderboardRow"] =
    ResolversParentTypes["GlobalProjectLeaderboardRow"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  contributorsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  projectThumbnailUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  projectTitle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Grant"] =
    ResolversParentTypes["Grant"],
> = {
  __resolveType: TypeResolveFn<
    "BoardVoteGrant" | "CommunityVoteGrant",
    ParentType,
    ContextType
  >;
};

export type GrantApplicantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantApplicant"] =
    ResolversParentTypes["GrantApplicant"],
> = {
  contributors?: Resolver<
    Array<ResolversTypes["GrantApplicantContributor"]>,
    ParentType,
    ContextType,
    Partial<GrantApplicantContributorsArgs>
  >;
  contributorsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  funding?: Resolver<
    ResolversTypes["GrantApplicantFunding"],
    ParentType,
    ContextType
  >;
  grant?: Resolver<ResolversTypes["Grant"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["GrantApplicantStatus"],
    ParentType,
    ContextType
  >;
  voteCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantApplicantContributorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantApplicantContributor"] =
    ResolversParentTypes["GrantApplicantContributor"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timesContributed?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  voteCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantApplicantFundingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantApplicantFunding"] =
    ResolversParentTypes["GrantApplicantFunding"],
> = {
  communityFunding?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  grantAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  grantAmountDistributed?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantBoardMemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantBoardMember"] =
    ResolversParentTypes["GrantBoardMember"],
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantGuardiansFundingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantGuardiansFunding"] =
    ResolversParentTypes["GrantGuardiansFunding"],
> = {
  contributedTotal?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  contributorsCount?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantStatistics"] =
    ResolversParentTypes["GrantStatistics"],
> = {
  applicants?: Resolver<
    Maybe<ResolversTypes["GrantStatisticsApplicant"]>,
    ParentType,
    ContextType
  >;
  grantGuardiansFunding?: Resolver<
    ResolversTypes["GrantGuardiansFunding"],
    ParentType,
    ContextType
  >;
  grants?: Resolver<
    Maybe<ResolversTypes["GrantStatisticsGrant"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsApplicantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantStatisticsApplicant"] =
    ResolversParentTypes["GrantStatisticsApplicant"],
> = {
  countFunded?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatisticsGrantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantStatisticsGrant"] =
    ResolversParentTypes["GrantStatisticsGrant"],
> = {
  amountFunded?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountGranted?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GrantStatus"] =
    ResolversParentTypes["GrantStatus"],
> = {
  endAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["GrantStatusEnum"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GraphData"] =
    ResolversParentTypes["GraphData"],
> = {
  __resolveType: TypeResolveFn<
    "ProjectContributionsStatsGraphDataAmount",
    ParentType,
    ContextType
  >;
  dateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type GraphSumDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GraphSumData"] =
    ResolversParentTypes["GraphSumData"],
> = {
  __resolveType: TypeResolveFn<"FunderRewardGraphSum", ParentType, ContextType>;
  dateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type GuardianResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GuardianResult"] =
    ResolversParentTypes["GuardianResult"],
> = {
  guardianType?: Resolver<
    ResolversTypes["GuardianType"],
    ParentType,
    ContextType
  >;
  soldCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  users?: Resolver<
    Array<ResolversTypes["GuardianUser"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuardianUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GuardianUser"] =
    ResolversParentTypes["GuardianUser"],
> = {
  guardianType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuardianUsersGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GuardianUsersGetResponse"] =
    ResolversParentTypes["GuardianUsersGetResponse"],
> = {
  guardianUsers?: Resolver<
    Array<ResolversTypes["GuardianResult"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["HeroStats"] =
    ResolversParentTypes["HeroStats"],
> = {
  __resolveType: TypeResolveFn<
    "AmbassadorStats" | "ContributorStats" | "CreatorStats",
    ParentType,
    ContextType
  >;
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type ImpactFundResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFund"] =
    ResolversParentTypes["ImpactFund"],
> = {
  amountCommitted?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  amountCommittedCurrency?: Resolver<
    ResolversTypes["ImpactFundAmountCommittedCurrency"],
    ParentType,
    ContextType
  >;
  applications?: Resolver<
    Array<ResolversTypes["ImpactFundApplication"]>,
    ParentType,
    ContextType
  >;
  archivedSponsors?: Resolver<
    Array<ResolversTypes["ImpactFundSponsor"]>,
    ParentType,
    ContextType
  >;
  canAccessDashboard?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  donateProject?: Resolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  donateProjectId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  fundedApplications?: Resolver<
    Array<ResolversTypes["ImpactFundApplication"]>,
    ParentType,
    ContextType
  >;
  heroImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  liveSponsors?: Resolver<
    Array<ResolversTypes["ImpactFundSponsor"]>,
    ParentType,
    ContextType
  >;
  metrics?: Resolver<
    ResolversTypes["ImpactFundMetrics"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsors?: Resolver<
    Array<ResolversTypes["ImpactFundSponsor"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["ImpactFundStatus"],
    ParentType,
    ContextType
  >;
  subtitle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  viewerApplications?: Resolver<
    Array<ResolversTypes["ImpactFundApplication"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundApplicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundApplication"] =
    ResolversParentTypes["ImpactFundApplication"],
> = {
  amountAwardedInSats?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  awardedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  contributionUuid?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fundingModel?: Resolver<
    ResolversTypes["ImpactFundApplicationFundingModel"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  impactFundId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ImpactFundApplicationStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundApplicationNoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundApplicationNote"] =
    ResolversParentTypes["ImpactFundApplicationNote"],
> = {
  applicationId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  author?: Resolver<
    ResolversTypes["ImpactFundApplicationNoteAuthor"],
    ParentType,
    ContextType
  >;
  authorUserId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  canEdit?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundApplicationNoteAuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundApplicationNoteAuthor"] =
    ResolversParentTypes["ImpactFundApplicationNoteAuthor"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundApplicationsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundApplicationsGetResponse"] =
    ResolversParentTypes["ImpactFundApplicationsGetResponse"],
> = {
  applications?: Resolver<
    Array<ResolversTypes["ImpactFundApplication"]>,
    ParentType,
    ContextType
  >;
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundDashboardApplicationRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundDashboardApplicationRow"] =
    ResolversParentTypes["ImpactFundDashboardApplicationRow"],
> = {
  amountAwardedInSats?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  applicationId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  awardedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  contributionUuid?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  creator?: Resolver<
    Maybe<ResolversTypes["ImpactFundDashboardCreator"]>,
    ParentType,
    ContextType
  >;
  fieldPartner?: Resolver<
    Maybe<ResolversTypes["ImpactFundDashboardCreator"]>,
    ParentType,
    ContextType
  >;
  fundingModel?: Resolver<
    ResolversTypes["ImpactFundApplicationFundingModel"],
    ParentType,
    ContextType
  >;
  notes?: Resolver<
    Array<ResolversTypes["ImpactFundApplicationNote"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<
    ResolversTypes["ImpactFundDashboardProject"],
    ParentType,
    ContextType
  >;
  projectPath?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ImpactFundApplicationStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundDashboardApplicationsResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ImpactFundDashboardApplicationsResponse"] =
    ResolversParentTypes["ImpactFundDashboardApplicationsResponse"],
> = {
  applications?: Resolver<
    Array<ResolversTypes["ImpactFundDashboardApplicationRow"]>,
    ParentType,
    ContextType
  >;
  fundingSummary?: Resolver<
    Array<ResolversTypes["ImpactFundFundingSummaryRow"]>,
    ParentType,
    ContextType
  >;
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundDashboardCreatorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundDashboardCreator"] =
    ResolversParentTypes["ImpactFundDashboardCreator"],
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  isIdentityVerified?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundDashboardProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundDashboardProject"] =
    ResolversParentTypes["ImpactFundDashboardProject"],
> = {
  aonGoalAmount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes["ProjectCategory"]>,
    ParentType,
    ContextType
  >;
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  countryCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fundingStrategy?: Resolver<
    ResolversTypes["ProjectFundingStrategy"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  thumbnailImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundFieldPartnerLeaderboardResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ImpactFundFieldPartnerLeaderboardResponse"] =
    ResolversParentTypes["ImpactFundFieldPartnerLeaderboardResponse"],
> = {
  rows?: Resolver<
    Array<ResolversTypes["ImpactFundFieldPartnerLeaderboardRow"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundFieldPartnerLeaderboardRowResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ImpactFundFieldPartnerLeaderboardRow"] =
    ResolversParentTypes["ImpactFundFieldPartnerLeaderboardRow"],
> = {
  country?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  enabledContributionSats?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  fieldPartner?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fieldPartnerId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectsLaunched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundFundingSummaryRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundFundingSummaryRow"] =
    ResolversParentTypes["ImpactFundFundingSummaryRow"],
> = {
  applicationsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  awardedTotalSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes["ProjectCategory"]>,
    ParentType,
    ContextType
  >;
  fundingModel?: Resolver<
    ResolversTypes["ImpactFundApplicationFundingModel"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundLabifCountryEligibilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundLabifCountryEligibility"] =
    ResolversParentTypes["ImpactFundLabifCountryEligibility"],
> = {
  isEligible?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundMetricsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundMetrics"] =
    ResolversParentTypes["ImpactFundMetrics"],
> = {
  awardedTotalSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectsFundedCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpactFundSponsorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImpactFundSponsor"] =
    ResolversParentTypes["ImpactFundSponsor"],
> = {
  amountContributedInSats?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  impactFundId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ImpactFundSponsorStatus"],
    ParentType,
    ContextType
  >;
  tier?: Resolver<
    ResolversTypes["ImpactFundSponsorTier"],
    ParentType,
    ContextType
  >;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningAddressConnectionDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LightningAddressConnectionDetails"] =
    ResolversParentTypes["LightningAddressConnectionDetails"],
> = {
  lightningAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningAddressContributionLimitsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LightningAddressContributionLimits"] =
    ResolversParentTypes["LightningAddressContributionLimits"],
> = {
  max?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningAddressVerifyResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LightningAddressVerifyResponse"] =
    ResolversParentTypes["LightningAddressVerifyResponse"],
> = {
  limits?: Resolver<
    Maybe<ResolversTypes["LightningAddressContributionLimits"]>,
    ParentType,
    ContextType
  >;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  valid?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LightningPaymentDetails"] =
    ResolversParentTypes["LightningPaymentDetails"],
> = {
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  lightningInvoiceStatus?: Resolver<
    ResolversTypes["LightningInvoiceStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningPaymentMethodsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LightningPaymentMethods"] =
    ResolversParentTypes["LightningPaymentMethods"],
> = {
  bolt11?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningToRskSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LightningToRskSwapPaymentDetails"] =
    ResolversParentTypes["LightningToRskSwapPaymentDetails"],
> = {
  claimPublicKey?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  refundPublicKey?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapClaimTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapPreimageHash?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  swapRefundTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapServerLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapUserLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Location"] =
    ResolversParentTypes["Location"],
> = {
  country?: Resolver<Maybe<ResolversTypes["Country"]>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagedCircularGrantPaymentMethodsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ManagedCircularGrantPaymentMethods"] =
    ResolversParentTypes["ManagedCircularGrantPaymentMethods"],
> = {
  strikeLightning?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  strikeOnChain?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  stripe?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MilestoneResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Milestone"] =
    ResolversParentTypes["Milestone"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  reached?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] =
    ResolversParentTypes["Mutation"],
> = {
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  aonClaimBroadcast?: Resolver<
    ResolversTypes["AonClaimBroadcastResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationAonClaimBroadcastArgs, "projectId" | "signedTxHex">
  >;
  aonClaimPrepare?: Resolver<
    ResolversTypes["AonClaimPrepareResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationAonClaimPrepareArgs, "projectId">
  >;
  claimBadge?: Resolver<
    ResolversTypes["UserBadge"],
    ParentType,
    ContextType,
    RequireFields<MutationClaimBadgeArgs, "input">
  >;
  contributionCreate?: Resolver<
    ResolversTypes["ContributionMutationResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationContributionCreateArgs, "input">
  >;
  contributionEmailUpdate?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType,
    Partial<MutationContributionEmailUpdateArgs>
  >;
  contributionPaymentsAdd?: Resolver<
    ResolversTypes["ContributionPaymentsAddResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationContributionPaymentsAddArgs, "input">
  >;
  createProject?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProjectArgs, "input">
  >;
  createStripeConnectAccount?: Resolver<
    ResolversTypes["StripeConnectOnboardingPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateStripeConnectAccountArgs, "projectId">
  >;
  creatorNotificationConfigurationValueUpdate?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreatorNotificationConfigurationValueUpdateArgs,
      "creatorNotificationConfigurationId" | "value"
    >
  >;
  disconnectStripeConnect?: Resolver<
    ResolversTypes["StripeConnectStatus"],
    ParentType,
    ContextType,
    RequireFields<MutationDisconnectStripeConnectArgs, "projectId">
  >;
  grantApply?: Resolver<
    ResolversTypes["GrantApplicant"],
    ParentType,
    ContextType,
    Partial<MutationGrantApplyArgs>
  >;
  impactFundApplicationFundingSet?: Resolver<
    ResolversTypes["ImpactFundApplication"],
    ParentType,
    ContextType,
    RequireFields<MutationImpactFundApplicationFundingSetArgs, "input">
  >;
  impactFundApplicationNoteCreate?: Resolver<
    ResolversTypes["ImpactFundApplicationNote"],
    ParentType,
    ContextType,
    RequireFields<MutationImpactFundApplicationNoteCreateArgs, "input">
  >;
  impactFundApplicationNoteUpdate?: Resolver<
    ResolversTypes["ImpactFundApplicationNote"],
    ParentType,
    ContextType,
    RequireFields<MutationImpactFundApplicationNoteUpdateArgs, "input">
  >;
  impactFundApplicationUpdate?: Resolver<
    ResolversTypes["ImpactFundApplication"],
    ParentType,
    ContextType,
    RequireFields<MutationImpactFundApplicationUpdateArgs, "input">
  >;
  impactFundApply?: Resolver<
    ResolversTypes["ImpactFundApplication"],
    ParentType,
    ContextType,
    RequireFields<MutationImpactFundApplyArgs, "input">
  >;
  newsletterPreferencesUpdate?: Resolver<
    ResolversTypes["NewsletterPreferences"],
    ParentType,
    ContextType,
    RequireFields<MutationNewsletterPreferencesUpdateArgs, "input">
  >;
  newsletterStatusUpdate?: Resolver<
    ResolversTypes["NewsletterPreferences"],
    ParentType,
    ContextType,
    RequireFields<MutationNewsletterStatusUpdateArgs, "input">
  >;
  newsletterSubscribe?: Resolver<
    ResolversTypes["NewsletterPreferences"],
    ParentType,
    ContextType,
    RequireFields<MutationNewsletterSubscribeArgs, "beehiivNewsletterInput">
  >;
  paymentCancel?: Resolver<
    ResolversTypes["PaymentCancelResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentCancelArgs, "input">
  >;
  paymentConfirm?: Resolver<
    ResolversTypes["PaymentConfirmResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentConfirmArgs, "input">
  >;
  paymentFail?: Resolver<
    ResolversTypes["PaymentFailResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentFailArgs, "input">
  >;
  paymentFeeUpsert?: Resolver<
    ResolversTypes["PaymentFeeUpsertResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentFeeUpsertArgs, "input">
  >;
  paymentInvoiceCancel?: Resolver<
    ResolversTypes["PaymentInvoiceCancelResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentInvoiceCancelArgs, "invoiceId">
  >;
  paymentPend?: Resolver<
    ResolversTypes["PaymentPendResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentPendArgs, "input">
  >;
  paymentRefundComplete?: Resolver<
    ResolversTypes["PaymentRefundCompleteResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentRefundCompleteArgs, "input">
  >;
  paymentSetClaimable?: Resolver<
    ResolversTypes["PaymentSetClaimableResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSetClaimableArgs, "input">
  >;
  paymentSetClaiming?: Resolver<
    ResolversTypes["PaymentSetClaimingResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSetClaimingArgs, "input">
  >;
  paymentSetRefundable?: Resolver<
    ResolversTypes["PaymentSetRefundableResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSetRefundableArgs, "input">
  >;
  paymentSetRefunded?: Resolver<
    ResolversTypes["PaymentSetRefundedResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSetRefundedArgs, "input">
  >;
  paymentSetRefunding?: Resolver<
    ResolversTypes["PaymentSetRefundingResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSetRefundingArgs, "input">
  >;
  paymentSwapClaimTxBroadcast?: Resolver<
    ResolversTypes["PaymentSwapClaimTxBroadcastResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSwapClaimTxBroadcastArgs, "input">
  >;
  paymentSwapClaimTxSet?: Resolver<
    ResolversTypes["PaymentSwapClaimTxSetResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSwapClaimTxSetArgs, "input">
  >;
  paymentSwapRefundTxBroadcast?: Resolver<
    ResolversTypes["PaymentSwapRefundTxBroadcastResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSwapRefundTxBroadcastArgs, "input">
  >;
  paymentSwapRefundTxSet?: Resolver<
    ResolversTypes["PaymentSwapRefundTxSetResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPaymentSwapRefundTxSetArgs, "input">
  >;
  payoutCancel?: Resolver<
    ResolversTypes["PayoutResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutCancelArgs, "input">
  >;
  payoutInitiate?: Resolver<
    ResolversTypes["PayoutInitiateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutInitiateArgs, "input">
  >;
  payoutPaymentCreate?: Resolver<
    ResolversTypes["PayoutPaymentCreateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutPaymentCreateArgs, "input">
  >;
  payoutPaymentInitiate?: Resolver<
    ResolversTypes["PayoutInitiateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutPaymentInitiateArgs, "input">
  >;
  payoutPaymentPrepare?: Resolver<
    ResolversTypes["PayoutPaymentCreateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutPaymentPrepareArgs, "input">
  >;
  payoutPrepare?: Resolver<
    ResolversTypes["PayoutRequestResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutPrepareArgs, "input">
  >;
  payoutRequest?: Resolver<
    ResolversTypes["PayoutRequestResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPayoutRequestArgs, "input">
  >;
  pledgeRefundCancel?: Resolver<
    ResolversTypes["PledgeRefundResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPledgeRefundCancelArgs, "input">
  >;
  pledgeRefundInitiate?: Resolver<
    ResolversTypes["PledgeRefundInitiateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPledgeRefundInitiateArgs, "input">
  >;
  pledgeRefundPaymentCreate?: Resolver<
    ResolversTypes["PledgeRefundPaymentCreateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPledgeRefundPaymentCreateArgs, "input">
  >;
  pledgeRefundRequest?: Resolver<
    ResolversTypes["PledgeRefundRequestResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPledgeRefundRequestArgs, "input">
  >;
  podcastKeysendContributionCreate?: Resolver<
    ResolversTypes["PodcastKeysendContributionCreateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPodcastKeysendContributionCreateArgs, "input">
  >;
  postCreate?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationPostCreateArgs, "input">
  >;
  postDelete?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationPostDeleteArgs, "id">
  >;
  postPublish?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationPostPublishArgs, "input">
  >;
  postSendByEmail?: Resolver<
    ResolversTypes["PostSendByEmailResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPostSendByEmailArgs, "input">
  >;
  postUpdate?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationPostUpdateArgs, "input">
  >;
  projectAonGoalMarkCancelled?: Resolver<
    ResolversTypes["ProjectAonGoalStatusUpdateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectAonGoalMarkCancelledArgs, "input">
  >;
  projectAonGoalMarkClaimed?: Resolver<
    ResolversTypes["ProjectAonGoalStatusUpdateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectAonGoalMarkClaimedArgs, "input">
  >;
  projectAonGoalMarkRefunded?: Resolver<
    ResolversTypes["ProjectAonGoalStatusUpdateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectAonGoalMarkRefundedArgs, "input">
  >;
  projectClose?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectCloseArgs, "input">
  >;
  projectCreate?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectCreateArgs, "input">
  >;
  projectDelete?: Resolver<
    ResolversTypes["ProjectDeleteResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectDeleteArgs, "input">
  >;
  projectFollow?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectFollowArgs, "input">
  >;
  projectGoalCreate?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType,
    RequireFields<MutationProjectGoalCreateArgs, "input">
  >;
  projectGoalDelete?: Resolver<
    ResolversTypes["ProjectGoalDeleteResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectGoalDeleteArgs, "projectGoalId">
  >;
  projectGoalOrderingUpdate?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType,
    RequireFields<MutationProjectGoalOrderingUpdateArgs, "input">
  >;
  projectGoalUpdate?: Resolver<
    ResolversTypes["ProjectGoal"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectGoalUpdateArgs, "input">
  >;
  projectMatchingCreate?: Resolver<
    ResolversTypes["ProjectMatching"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectMatchingCreateArgs, "input">
  >;
  projectMatchingDelete?: Resolver<
    ResolversTypes["ProjectMatchingDeleteResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectMatchingDeleteArgs, "input">
  >;
  projectMatchingUpdate?: Resolver<
    ResolversTypes["ProjectMatching"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectMatchingUpdateArgs, "input">
  >;
  projectPreLaunch?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectPreLaunchArgs, "input">
  >;
  projectPublish?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectPublishArgs, "input">
  >;
  projectPutInReview?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectPutInReviewArgs, "input">
  >;
  projectReviewRequest?: Resolver<
    ResolversTypes["ProjectReview"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectReviewRequestArgs, "input">
  >;
  projectReviewSubmit?: Resolver<
    ResolversTypes["ProjectReview"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectReviewSubmitArgs, "input">
  >;
  projectRskEoaSet?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectRskEoaSetArgs, "input">
  >;
  projectStatusUpdate?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectStatusUpdateArgs, "input">
  >;
  projectStripeInterestNotify?: Resolver<
    ResolversTypes["StripeInterestNotifyResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectStripeInterestNotifyArgs, "projectId">
  >;
  projectSubscriptionPlanCreate?: Resolver<
    ResolversTypes["ProjectSubscriptionPlan"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectSubscriptionPlanCreateArgs, "input">
  >;
  projectSubscriptionPlanDelete?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectSubscriptionPlanDeleteArgs, "id">
  >;
  projectSubscriptionPlanUpdate?: Resolver<
    ResolversTypes["ProjectSubscriptionPlan"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectSubscriptionPlanUpdateArgs, "input">
  >;
  projectSubscriptionStart?: Resolver<
    ResolversTypes["RecurringContributionCheckoutResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectSubscriptionStartArgs, "input">
  >;
  projectUnfollow?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectUnfollowArgs, "input">
  >;
  projectUpdate?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationProjectUpdateArgs, "input">
  >;
  projectWalletConfigurationContributionAttemptNotify?: Resolver<
    ResolversTypes["ProjectWalletConfigurationContributionAttemptNotifyResponse"],
    ParentType,
    ContextType,
    RequireFields<
      MutationProjectWalletConfigurationContributionAttemptNotifyArgs,
      "input"
    >
  >;
  recurringContributionCancel?: Resolver<
    ResolversTypes["RecurringContribution"],
    ParentType,
    ContextType,
    RequireFields<MutationRecurringContributionCancelArgs, "input">
  >;
  recurringContributionPortalSessionCreate?: Resolver<
    ResolversTypes["RecurringContributionPortalSession"],
    ParentType,
    ContextType,
    RequireFields<MutationRecurringContributionPortalSessionCreateArgs, "input">
  >;
  recurringContributionRenewalCreate?: Resolver<
    ResolversTypes["RecurringContributionCheckoutResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationRecurringContributionRenewalCreateArgs, "input">
  >;
  recurringDonationCreate?: Resolver<
    ResolversTypes["RecurringContributionCheckoutResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationRecurringDonationCreateArgs, "input">
  >;
  refreshStripeConnectOnboardingLink?: Resolver<
    ResolversTypes["StripeConnectOnboardingPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationRefreshStripeConnectOnboardingLinkArgs, "projectId">
  >;
  sendOTPByEmail?: Resolver<
    ResolversTypes["OTPResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationSendOtpByEmailArgs, "input">
  >;
  shippingAddressCreate?: Resolver<
    ResolversTypes["ShippingAddress"],
    ParentType,
    ContextType,
    RequireFields<MutationShippingAddressCreateArgs, "input">
  >;
  tagCreate?: Resolver<
    ResolversTypes["Tag"],
    ParentType,
    ContextType,
    RequireFields<MutationTagCreateArgs, "input">
  >;
  unlinkExternalAccount?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUnlinkExternalAccountArgs, "id">
  >;
  updateProject?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectArgs, "input">
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "input">
  >;
  updateWalletState?: Resolver<
    ResolversTypes["Wallet"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWalletStateArgs, "input">
  >;
  userAccountKeysUpdate?: Resolver<
    ResolversTypes["UserAccountKeys"],
    ParentType,
    ContextType,
    RequireFields<MutationUserAccountKeysUpdateArgs, "input">
  >;
  userDelete?: Resolver<
    ResolversTypes["DeleteUserResponse"],
    ParentType,
    ContextType
  >;
  userEmailUpdate?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUserEmailUpdateArgs, "input">
  >;
  userEmailVerify?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationUserEmailVerifyArgs, "input">
  >;
  userNotificationConfigurationValueUpdate?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUserNotificationConfigurationValueUpdateArgs,
      "userNotificationConfigurationId" | "value"
    >
  >;
  userTaxProfileUpdate?: Resolver<
    ResolversTypes["UserTaxProfile"],
    ParentType,
    ContextType,
    RequireFields<MutationUserTaxProfileUpdateArgs, "input">
  >;
  userVerificationTokenGenerate?: Resolver<
    ResolversTypes["UserVerificationTokenGenerateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUserVerificationTokenGenerateArgs, "input">
  >;
  userWalletWithdrawPaymentInitiate?: Resolver<
    ResolversTypes["UserWalletWithdrawInitiateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUserWalletWithdrawPaymentInitiateArgs, "input">
  >;
  userWalletWithdrawPaymentPrepare?: Resolver<
    ResolversTypes["UserWalletWithdrawPaymentCreateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUserWalletWithdrawPaymentPrepareArgs, "input">
  >;
  userWalletWithdrawPrepare?: Resolver<
    ResolversTypes["UserWalletWithdrawRequestResponse"],
    ParentType,
    ContextType
  >;
  walletCreate?: Resolver<
    ResolversTypes["Wallet"],
    ParentType,
    ContextType,
    RequireFields<MutationWalletCreateArgs, "input">
  >;
  walletDelete?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationWalletDeleteArgs, "id">
  >;
  walletUpdate?: Resolver<
    ResolversTypes["Wallet"],
    ParentType,
    ContextType,
    RequireFields<MutationWalletUpdateArgs, "input">
  >;
};

export type MutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MutationResponse"] =
    ResolversParentTypes["MutationResponse"],
> = {
  __resolveType: TypeResolveFn<
    | "DeleteUserResponse"
    | "ProjectAonGoalStatusUpdateResponse"
    | "ProjectDeleteResponse"
    | "ProjectGoalDeleteResponse"
    | "ProjectMatchingDeleteResponse"
    | "ProjectWalletConfigurationContributionAttemptNotifyResponse",
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
};

export type NewsletterPreferencesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewsletterPreferences"] =
    ResolversParentTypes["NewsletterPreferences"],
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  newsletterMonthly?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  productUpdates?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  projectSpotlights?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationConfigurationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NotificationConfiguration"] =
    ResolversParentTypes["NotificationConfiguration"],
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["SettingValueType"]>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NotificationSettings"] =
    ResolversParentTypes["NotificationSettings"],
> = {
  channel?: Resolver<
    Maybe<ResolversTypes["NotificationChannel"]>,
    ParentType,
    ContextType
  >;
  configurations?: Resolver<
    Array<ResolversTypes["NotificationConfiguration"]>,
    ParentType,
    ContextType
  >;
  isEnabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  notificationType?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OtpResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OTPResponse"] =
    ResolversParentTypes["OTPResponse"],
> = {
  expiresAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  otpVerificationToken?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainPaymentMethodsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OnChainPaymentMethods"] =
    ResolversParentTypes["OnChainPaymentMethods"],
> = {
  boltzSwap?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  native?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainToLightningSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["OnChainToLightningSwapPaymentDetails"] =
    ResolversParentTypes["OnChainToLightningSwapPaymentDetails"],
> = {
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  lightningInvoiceStatus?: Resolver<
    ResolversTypes["LightningInvoiceStatus"],
    ParentType,
    ContextType
  >;
  onChainAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  onChainTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnChainToRskSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OnChainToRskSwapPaymentDetails"] =
    ResolversParentTypes["OnChainToRskSwapPaymentDetails"],
> = {
  onChainAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  onChainTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapClaimTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapPreimageHash?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  swapRefundTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapServerLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapUserLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Order"] =
    ResolversParentTypes["Order"],
> = {
  confirmedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  deliveredAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["OrderItem"]>, ParentType, ContextType>;
  itemsTotalInSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  referenceCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shippedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  shippingAddress?: Resolver<
    Maybe<ResolversTypes["ShippingAddress"]>,
    ParentType,
    ContextType
  >;
  shippingFeeTotalInSats?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  totalInSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OrderItem"] =
    ResolversParentTypes["OrderItem"],
> = {
  item?: Resolver<ResolversTypes["ProjectReward"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  unitPriceInSats?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OrdersGetResponse"] =
    ResolversParentTypes["OrdersGetResponse"],
> = {
  orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersStatsBaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OrdersStatsBase"] =
    ResolversParentTypes["OrdersStatsBase"],
> = {
  projectRewards?: Resolver<
    ResolversTypes["ProjectRewardsStats"],
    ParentType,
    ContextType
  >;
  projectRewardsGroupedByProjectRewardId?: Resolver<
    Array<ResolversTypes["ProjectRewardsGroupedByRewardIdStats"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Owner"] =
    ResolversParentTypes["Owner"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerOfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OwnerOf"] =
    ResolversParentTypes["OwnerOf"],
> = {
  owner?: Resolver<Maybe<ResolversTypes["Owner"]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageInfo"] =
    ResolversParentTypes["PageInfo"],
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageViewCountGraphResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageViewCountGraph"] =
    ResolversParentTypes["PageViewCountGraph"],
> = {
  dateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationCursorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginationCursor"] =
    ResolversParentTypes["PaginationCursor"],
> = {
  id?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Payment"] =
    ResolversParentTypes["Payment"],
> = {
  accountingAmountDue?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  accountingAmountPaid?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  ambassadorUserId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  baseAccountingAmount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  canceledAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  contributionPodcastKeysendId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  failureReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes["PaymentFee"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  linkedEntityType?: Resolver<
    ResolversTypes["PaymentLinkedEntityType"],
    ParentType,
    ContextType
  >;
  linkedEntityUUID?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  method?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  paidAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  paymentAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  paymentCurrency?: Resolver<
    ResolversTypes["PaymentCurrency"],
    ParentType,
    ContextType
  >;
  paymentDetails?: Resolver<
    ResolversTypes["PaymentDetails"],
    ParentType,
    ContextType
  >;
  paymentType?: Resolver<
    ResolversTypes["PaymentType"],
    ParentType,
    ContextType
  >;
  payoutAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  payoutCurrency?: Resolver<
    ResolversTypes["PayoutCurrency"],
    ParentType,
    ContextType
  >;
  projectId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["PaymentStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userSubscriptionId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  version?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentCancelResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentCancelResponse"] =
    ResolversParentTypes["PaymentCancelResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentConfirmResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentConfirmResponse"] =
    ResolversParentTypes["PaymentConfirmResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentDetails"] =
    ResolversParentTypes["PaymentDetails"],
> = {
  __resolveType: TypeResolveFn<
    | "FiatPaymentDetails"
    | "FiatToLightningSwapPaymentDetails"
    | "LightningPaymentDetails"
    | "LightningToRskSwapPaymentDetails"
    | "OnChainToLightningSwapPaymentDetails"
    | "OnChainToRskSwapPaymentDetails"
    | "RskAonClaimPaymentDetails"
    | "RskNativeTransferPaymentDetails"
    | "RskToLightningSwapPaymentDetails"
    | "RskToOnChainSwapPaymentDetails"
    | "StrikePaymentDetails",
    ParentType,
    ContextType
  >;
};

export type PaymentFailResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentFailResponse"] =
    ResolversParentTypes["PaymentFailResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentFeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentFee"] =
    ResolversParentTypes["PaymentFee"],
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  external?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  feeAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  feeCurrency?: Resolver<
    ResolversTypes["FeeCurrency"],
    ParentType,
    ContextType
  >;
  feePayer?: Resolver<
    Maybe<ResolversTypes["PaymentFeePayer"]>,
    ParentType,
    ContextType
  >;
  feeType?: Resolver<
    Maybe<ResolversTypes["PaymentFeeType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentFeeUpsertResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentFeeUpsertResponse"] =
    ResolversParentTypes["PaymentFeeUpsertResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentInvoiceCancelResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentInvoiceCancelResponse"] =
    ResolversParentTypes["PaymentInvoiceCancelResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentInvoiceSanctionCheckStatusResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PaymentInvoiceSanctionCheckStatusResponse"] =
    ResolversParentTypes["PaymentInvoiceSanctionCheckStatusResponse"],
> = {
  status?: Resolver<
    ResolversTypes["PaymentInvoiceSanctionCheckStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentMethods"] =
    ResolversParentTypes["PaymentMethods"],
> = {
  bitcoin?: Resolver<
    ResolversTypes["BitcoinPaymentMethods"],
    ParentType,
    ContextType
  >;
  fiat?: Resolver<
    ResolversTypes["FiatPaymentMethods"],
    ParentType,
    ContextType
  >;
  managedCircularGrant?: Resolver<
    ResolversTypes["ManagedCircularGrantPaymentMethods"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentPendResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentPendResponse"] =
    ResolversParentTypes["PaymentPendResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRecoveryByContributionResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PaymentRecoveryByContributionResponse"] =
    ResolversParentTypes["PaymentRecoveryByContributionResponse"],
> = {
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType
  >;
  payments?: Resolver<
    Array<ResolversTypes["PaymentRecoveryPayment"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRecoveryPaymentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentRecoveryPayment"] =
    ResolversParentTypes["PaymentRecoveryPayment"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  paymentType?: Resolver<
    ResolversTypes["PaymentType"],
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["PaymentStatus"], ParentType, ContextType>;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentRefund"] =
    ResolversParentTypes["PaymentRefund"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["PaymentRefundStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundCompleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentRefundCompleteResponse"] =
    ResolversParentTypes["PaymentRefundCompleteResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentRefundsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentRefundsGetResponse"] =
    ResolversParentTypes["PaymentRefundsGetResponse"],
> = {
  refunds?: Resolver<
    Array<ResolversTypes["PaymentRefund"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSetClaimableResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSetClaimableResponse"] =
    ResolversParentTypes["PaymentSetClaimableResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSetClaimingResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSetClaimingResponse"] =
    ResolversParentTypes["PaymentSetClaimingResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSetRefundableResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSetRefundableResponse"] =
    ResolversParentTypes["PaymentSetRefundableResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSetRefundedResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSetRefundedResponse"] =
    ResolversParentTypes["PaymentSetRefundedResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSetRefundingResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSetRefundingResponse"] =
    ResolversParentTypes["PaymentSetRefundingResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapClaimTxBroadcastResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PaymentSwapClaimTxBroadcastResponse"] =
    ResolversParentTypes["PaymentSwapClaimTxBroadcastResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapClaimTxSetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSwapClaimTxSetResponse"] =
    ResolversParentTypes["PaymentSwapClaimTxSetResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapRefundTxBroadcastResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PaymentSwapRefundTxBroadcastResponse"] =
    ResolversParentTypes["PaymentSwapRefundTxBroadcastResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSwapRefundTxSetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentSwapRefundTxSetResponse"] =
    ResolversParentTypes["PaymentSwapRefundTxSetResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentsGetResponse"] =
    ResolversParentTypes["PaymentsGetResponse"],
> = {
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsInProgressGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaymentsInProgressGetResponse"] =
    ResolversParentTypes["PaymentsInProgressGetResponse"],
> = {
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Payout"] =
    ResolversParentTypes["Payout"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["PayoutStatus"], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutFeeSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutFeeSummary"] =
    ResolversParentTypes["PayoutFeeSummary"],
> = {
  currency?: Resolver<ResolversTypes["FeeCurrency"], ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes["PayoutFeeSummaryItem"]>,
    ParentType,
    ContextType
  >;
  totalAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutFeeSummaryItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutFeeSummaryItem"] =
    ResolversParentTypes["PayoutFeeSummaryItem"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes["FeeCurrency"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  feeType?: Resolver<ResolversTypes["PaymentFeeType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutGetResponse"] =
    ResolversParentTypes["PayoutGetResponse"],
> = {
  payout?: Resolver<ResolversTypes["Payout"], ParentType, ContextType>;
  payoutMetadata?: Resolver<
    ResolversTypes["PayoutMetadata"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutInitiateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutInitiateResponse"] =
    ResolversParentTypes["PayoutInitiateResponse"],
> = {
  payout?: Resolver<ResolversTypes["Payout"], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutMetadata"] =
    ResolversParentTypes["PayoutMetadata"],
> = {
  aonContractAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  contractType?: Resolver<
    ResolversTypes["PayoutContractType"],
    ParentType,
    ContextType
  >;
  feeSummary?: Resolver<
    ResolversTypes["PayoutFeeSummary"],
    ParentType,
    ContextType
  >;
  nonce?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectKey?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  requiresUserLockTx?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  swapContractAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutPaymentCreateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutPaymentCreateResponse"] =
    ResolversParentTypes["PayoutPaymentCreateResponse"],
> = {
  payment?: Resolver<ResolversTypes["Payment"], ParentType, ContextType>;
  payout?: Resolver<ResolversTypes["Payout"], ParentType, ContextType>;
  swap?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutRequestResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutRequestResponse"] =
    ResolversParentTypes["PayoutRequestResponse"],
> = {
  payout?: Resolver<ResolversTypes["Payout"], ParentType, ContextType>;
  payoutMetadata?: Resolver<
    ResolversTypes["PayoutMetadata"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayoutResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PayoutResponse"] =
    ResolversParentTypes["PayoutResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefund"] =
    ResolversParentTypes["PledgeRefund"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["PledgeRefundStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundGetResponse"] =
    ResolversParentTypes["PledgeRefundGetResponse"],
> = {
  refund?: Resolver<ResolversTypes["PledgeRefund"], ParentType, ContextType>;
  refundMetadata?: Resolver<
    ResolversTypes["PledgeRefundMetadata"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundInitiateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundInitiateResponse"] =
    ResolversParentTypes["PledgeRefundInitiateResponse"],
> = {
  refund?: Resolver<ResolversTypes["PledgeRefund"], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundMetadata"] =
    ResolversParentTypes["PledgeRefundMetadata"],
> = {
  aonContractAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  nonce?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  swapContractAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundPaymentCreateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundPaymentCreateResponse"] =
    ResolversParentTypes["PledgeRefundPaymentCreateResponse"],
> = {
  payment?: Resolver<ResolversTypes["Payment"], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes["PledgeRefund"], ParentType, ContextType>;
  swap?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundRequestResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundRequestResponse"] =
    ResolversParentTypes["PledgeRefundRequestResponse"],
> = {
  refund?: Resolver<ResolversTypes["PledgeRefund"], ParentType, ContextType>;
  refundMetadata?: Resolver<
    ResolversTypes["PledgeRefundMetadata"],
    ParentType,
    ContextType
  >;
  refundProcessingFee?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundResponse"] =
    ResolversParentTypes["PledgeRefundResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeRefundsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PledgeRefundsGetResponse"] =
    ResolversParentTypes["PledgeRefundsGetResponse"],
> = {
  refunds?: Resolver<
    Array<ResolversTypes["PledgeRefund"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PodcastKeysendContributionCreateResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PodcastKeysendContributionCreateResponse"] =
    ResolversParentTypes["PodcastKeysendContributionCreateResponse"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Post"] =
    ResolversParentTypes["Post"],
> = {
  amountFunded?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  contributions?: Resolver<
    Array<ResolversTypes["Contribution"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fundersCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  markdown?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postType?: Resolver<
    Maybe<ResolversTypes["PostType"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectGoals?: Resolver<
    ResolversTypes["ProjectGoals"],
    ParentType,
    ContextType
  >;
  projectRewards?: Resolver<
    Array<ResolversTypes["ProjectReward"]>,
    ParentType,
    ContextType
  >;
  publishedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sentByEmailAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["PostStatus"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPublishedSubscriptionResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostPublishedSubscriptionResponse"] =
    ResolversParentTypes["PostPublishedSubscriptionResponse"],
> = {
  post?: Resolver<ResolversTypes["Post"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostSendByEmailResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostSendByEmailResponse"] =
    ResolversParentTypes["PostSendByEmailResponse"],
> = {
  recipientCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileNotificationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileNotificationSettings"] =
    ResolversParentTypes["ProfileNotificationSettings"],
> = {
  creatorSettings?: Resolver<
    Array<ResolversTypes["CreatorNotificationSettings"]>,
    ParentType,
    ContextType
  >;
  userSettings?: Resolver<
    ResolversTypes["UserNotificationSettings"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Project"] =
    ResolversParentTypes["Project"],
> = {
  activeMatching?: Resolver<
    Maybe<ResolversTypes["ProjectMatching"]>,
    ParentType,
    ContextType
  >;
  ambassadors?: Resolver<
    ResolversTypes["ProjectAmbassadorsConnection"],
    ParentType,
    ContextType
  >;
  aonGoal?: Resolver<
    Maybe<ResolversTypes["ProjectAonGoal"]>,
    ParentType,
    ContextType
  >;
  balance?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  balanceUsdCent?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  canDelete?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes["ProjectCategory"]>,
    ParentType,
    ContextType
  >;
  contributions?: Resolver<
    Array<ResolversTypes["Contribution"]>,
    ParentType,
    ContextType
  >;
  contributionsCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  defaultGoalId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  directPaymentDetails?: Resolver<
    Maybe<ResolversTypes["DirectPaymentDetails"]>,
    ParentType,
    ContextType
  >;
  entriesCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  fieldPartner?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  followersCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  funders?: Resolver<Array<ResolversTypes["Funder"]>, ParentType, ContextType>;
  fundersCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  fundingStrategy?: Resolver<
    Maybe<ResolversTypes["ProjectFundingStrategy"]>,
    ParentType,
    ContextType
  >;
  fundingSummary?: Resolver<
    ResolversTypes["ProjectFundingSummary"],
    ParentType,
    ContextType
  >;
  goalsCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  grantApplications?: Resolver<
    Array<ResolversTypes["GrantApplicant"]>,
    ParentType,
    ContextType,
    Partial<ProjectGrantApplicationsArgs>
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  impactFundRecipient?: Resolver<
    Maybe<ResolversTypes["ProjectImpactFundRecipient"]>,
    ParentType,
    ContextType
  >;
  isCircularGrant?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  lastCreationStep?: Resolver<
    ResolversTypes["ProjectCreationStep"],
    ParentType,
    ContextType
  >;
  launchScheduledAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  launchedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  matchings?: Resolver<
    Array<ResolversTypes["ProjectMatching"]>,
    ParentType,
    ContextType
  >;
  milestones?: Resolver<
    Array<ResolversTypes["Milestone"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes["Owner"]>, ParentType, ContextType>;
  paymentMethods?: Resolver<
    ResolversTypes["PaymentMethods"],
    ParentType,
    ContextType
  >;
  posts?: Resolver<
    Array<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    Partial<ProjectPostsArgs>
  >;
  preLaunchExpiresAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  preLaunchedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  promotionsEnabled?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  recurringContributionSupport?: Resolver<
    ResolversTypes["RecurringContributionSupport"],
    ParentType,
    ContextType
  >;
  rejectionReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Array<ResolversTypes["ProjectReview"]>,
    ParentType,
    ContextType
  >;
  rewardBuyersCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  rewardCurrency?: Resolver<
    Maybe<ResolversTypes["RewardCurrency"]>,
    ParentType,
    ContextType
  >;
  rewards?: Resolver<
    Array<ResolversTypes["ProjectReward"]>,
    ParentType,
    ContextType
  >;
  rewardsCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  rskEoa?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  rskEoas?: Resolver<
    Array<ResolversTypes["ProjectRskEoa"]>,
    ParentType,
    ContextType
  >;
  shortDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sponsors?: Resolver<
    Array<ResolversTypes["Sponsor"]>,
    ParentType,
    ContextType
  >;
  statistics?: Resolver<
    Maybe<ResolversTypes["ProjectStatistics"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes["ProjectStatus"]>,
    ParentType,
    ContextType
  >;
  subCategory?: Resolver<
    Maybe<ResolversTypes["ProjectSubCategory"]>,
    ParentType,
    ContextType
  >;
  subscribersCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  subscriptionPlans?: Resolver<
    Array<ResolversTypes["ProjectSubscriptionPlan"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["Tag"]>, ParentType, ContextType>;
  thumbnailImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ProjectType"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  wallets?: Resolver<Array<ResolversTypes["Wallet"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectActivatedSubscriptionResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectActivatedSubscriptionResponse"] =
    ResolversParentTypes["ProjectActivatedSubscriptionResponse"],
> = {
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectActivitiesCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectActivitiesCount"] =
    ResolversParentTypes["ProjectActivitiesCount"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectAmbassadorEdge"] =
    ResolversParentTypes["ProjectAmbassadorEdge"],
> = {
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Ambassador"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectAmbassadorsConnection"] =
    ResolversParentTypes["ProjectAmbassadorsConnection"],
> = {
  edges?: Resolver<
    Array<ResolversTypes["ProjectAmbassadorEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  stats?: Resolver<
    ResolversTypes["ProjectAmbassadorsStats"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAmbassadorsStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectAmbassadorsStats"] =
    ResolversParentTypes["ProjectAmbassadorsStats"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsSum?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAonGoalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectAonGoal"] =
    ResolversParentTypes["ProjectAonGoal"],
> = {
  balance?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  contractAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  contractCreationTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  deployedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  endsAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  goalAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  goalDurationInDays?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hasCompletedPayout?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes["ProjectAonGoalStatus"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAonGoalStatusUpdateResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectAonGoalStatusUpdateResponse"] =
    ResolversParentTypes["ProjectAonGoalStatusUpdateResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ProjectAonGoalStatus"],
    ParentType,
    ContextType
  >;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsGroupedByMethodStatsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectContributionsGroupedByMethodStats"] =
    ResolversParentTypes["ProjectContributionsGroupedByMethodStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  method?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectContributionsStats"] =
    ResolversParentTypes["ProjectContributionsStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  graph?: Resolver<
    Array<ResolversTypes["ProjectContributionsStatsGraphData"]>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsBaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectContributionsStatsBase"] =
    ResolversParentTypes["ProjectContributionsStatsBase"],
> = {
  contributions?: Resolver<
    ResolversTypes["ProjectContributionsStats"],
    ParentType,
    ContextType
  >;
  contributionsGroupedByMethod?: Resolver<
    Array<ResolversTypes["ProjectContributionsGroupedByMethodStats"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsGraphDataResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectContributionsStatsGraphData"] =
    ResolversParentTypes["ProjectContributionsStatsGraphData"],
> = {
  graphData?: Resolver<
    Maybe<Array<ResolversTypes["ProjectContributionsStatsGraphDataAmount"]>>,
    ParentType,
    ContextType
  >;
  statType?: Resolver<
    ResolversTypes["ProjectContributionsStatsGraphDataStatType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectContributionsStatsGraphDataAmountResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectContributionsStatsGraphDataAmount"] =
    ResolversParentTypes["ProjectContributionsStatsGraphDataAmount"],
> = {
  dateTime?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCountriesGetResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectCountriesGetResult"] =
    ResolversParentTypes["ProjectCountriesGetResult"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  country?: Resolver<ResolversTypes["Country"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectDeleteResponse"] =
    ResolversParentTypes["ProjectDeleteResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFollowerStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectFollowerStats"] =
    ResolversParentTypes["ProjectFollowerStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFunderRewardStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectFunderRewardStats"] =
    ResolversParentTypes["ProjectFunderRewardStats"],
> = {
  quantityGraph?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["FunderRewardGraphSum"]>>>,
    ParentType,
    ContextType
  >;
  quantitySum?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFunderStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectFunderStats"] =
    ResolversParentTypes["ProjectFunderStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFundingSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectFundingSummary"] =
    ResolversParentTypes["ProjectFundingSummary"],
> = {
  endsAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  fundingStrategy?: Resolver<
    ResolversTypes["ProjectFundingStrategy"],
    ParentType,
    ContextType
  >;
  goalSats?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  goals?: Resolver<
    ResolversTypes["ProjectGoalFundingSummary"],
    ParentType,
    ContextType
  >;
  isCircularGrant?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isFundingFailed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isFundingOpen?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  matching?: Resolver<
    ResolversTypes["ProjectMatchingFundingSummary"],
    ParentType,
    ContextType
  >;
  percentageFunded?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  raisedSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  raisedUsdCent?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectGoal"] =
    ResolversParentTypes["ProjectGoal"],
> = {
  amountContributed?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  completedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  currency?: Resolver<
    ResolversTypes["ProjectGoalCurrency"],
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  emojiUnifiedCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasReceivedContribution?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes["Post"]>, ParentType, ContextType>;
  progress?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ProjectGoalStatus"],
    ParentType,
    ContextType
  >;
  targetAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectGoalDeleteResponse"] =
    ResolversParentTypes["ProjectGoalDeleteResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalFundingSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectGoalFundingSummary"] =
    ResolversParentTypes["ProjectGoalFundingSummary"],
> = {
  completed?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType
  >;
  inProgress?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectGoalsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectGoals"] =
    ResolversParentTypes["ProjectGoals"],
> = {
  completed?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType
  >;
  inProgress?: Resolver<
    Array<ResolversTypes["ProjectGoal"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectImpactFundRecipientResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectImpactFundRecipient"] =
    ResolversParentTypes["ProjectImpactFundRecipient"],
> = {
  amountAwardedInSats?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  applicationId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  awardedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  fundingModel?: Resolver<
    ResolversTypes["ImpactFundApplicationFundingModel"],
    ParentType,
    ContextType
  >;
  impactFundId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  impactFundName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  impactFundTitle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLeaderboardAmbassadorsRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectLeaderboardAmbassadorsRow"] =
    ResolversParentTypes["ProjectLeaderboardAmbassadorsRow"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLeaderboardContributorsRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectLeaderboardContributorsRow"] =
    ResolversParentTypes["ProjectLeaderboardContributorsRow"],
> = {
  commentsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  funderId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMatchingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMatching"] =
    ResolversParentTypes["ProjectMatching"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  matchingType?: Resolver<
    ResolversTypes["ProjectMatchingType"],
    ParentType,
    ContextType
  >;
  maxCapAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  ownerUserId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  referenceCurrency?: Resolver<
    ResolversTypes["ProjectMatchingCurrency"],
    ParentType,
    ContextType
  >;
  remainingCapAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sponsorName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsorUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  startDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ProjectMatchingStatus"],
    ParentType,
    ContextType
  >;
  totalMatchedAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalMatchedAmountSats?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  totalMatchedAmountUsdCent?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMatchingDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMatchingDeleteResponse"] =
    ResolversParentTypes["ProjectMatchingDeleteResponse"],
> = {
  matchingId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMatchingFundingSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMatchingFundingSummary"] =
    ResolversParentTypes["ProjectMatchingFundingSummary"],
> = {
  activeMatching?: Resolver<
    Maybe<ResolversTypes["ProjectMatching"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMostFunded"] =
    ResolversParentTypes["ProjectMostFunded"],
> = {
  contributionsSummary?: Resolver<
    Maybe<ResolversTypes["ContributionsSummary"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedByCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMostFundedByCategory"] =
    ResolversParentTypes["ProjectMostFundedByCategory"],
> = {
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  projects?: Resolver<
    Array<ResolversTypes["ProjectMostFunded"]>,
    ParentType,
    ContextType
  >;
  subCategory?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMostFundedByTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectMostFundedByTag"] =
    ResolversParentTypes["ProjectMostFundedByTag"],
> = {
  projects?: Resolver<
    Array<ResolversTypes["ProjectMostFunded"]>,
    ParentType,
    ContextType
  >;
  tagId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRecommendedGetResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRecommendedGetResult"] =
    ResolversParentTypes["ProjectRecommendedGetResult"],
> = {
  contributionsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotal?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contributionsTotalUsd?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectReferrersSearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectReferrersSearchResult"] =
    ResolversParentTypes["ProjectReferrersSearchResult"],
> = {
  fieldPartners?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  others?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRefundablePaymentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRefundablePayment"] =
    ResolversParentTypes["ProjectRefundablePayment"],
> = {
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRegionsGetResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRegionsGetResult"] =
    ResolversParentTypes["ProjectRegionsGetResult"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  region?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectReview"] =
    ResolversParentTypes["ProjectReview"],
> = {
  complianceSuggestion?: Resolver<
    Maybe<ResolversTypes["ProjectReviewComplianceSuggestion"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  rejectionReasons?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reviewNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reviewedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["ProjectReviewStatus"],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  version?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectReviewComplianceSuggestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectReviewComplianceSuggestion"] =
    ResolversParentTypes["ProjectReviewComplianceSuggestion"],
> = {
  failureReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  feedback?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  generatedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  model?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  noteToCreator?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reasons?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  recommendedStatus?: Resolver<
    Maybe<ResolversTypes["ProjectReviewStatus"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["ProjectReviewComplianceSuggestionStatus"],
    ParentType,
    ContextType
  >;
  termsUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectReward"] =
    ResolversParentTypes["ProjectReward"],
> = {
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  confirmationMessage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cost?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  estimatedAvailabilityDate?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  estimatedDeliveryInWeeks?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  hasShipping?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  isAddon?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  maxClaimable?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes["Post"]>, ParentType, ContextType>;
  preOrder?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  privateCommentPrompts?: Resolver<
    Array<ResolversTypes["PrivateCommentPrompt"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  rewardCurrency?: Resolver<
    ResolversTypes["RewardCurrency"],
    ParentType,
    ContextType
  >;
  sentByEmailAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  shippingConfig?: Resolver<
    Maybe<ResolversTypes["ShippingConfig"]>,
    ParentType,
    ContextType
  >;
  shortDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sold?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  soldOut?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardCatalogRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRewardCatalogRow"] =
    ResolversParentTypes["ProjectRewardCatalogRow"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardMostSoldGetRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRewardMostSoldGetRow"] =
    ResolversParentTypes["ProjectRewardMostSoldGetRow"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingMonthlyGetRowResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectRewardTrendingMonthlyGetRow"] =
    ResolversParentTypes["ProjectRewardTrendingMonthlyGetRow"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingQuarterlyGetRowResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectRewardTrendingQuarterlyGetRow"] =
    ResolversParentTypes["ProjectRewardTrendingQuarterlyGetRow"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardTrendingWeeklyGetRowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRewardTrendingWeeklyGetRow"] =
    ResolversParentTypes["ProjectRewardTrendingWeeklyGetRow"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsCatalogGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRewardsCatalogGetResponse"] =
    ResolversParentTypes["ProjectRewardsCatalogGetResponse"],
> = {
  pagination?: Resolver<
    Maybe<ResolversTypes["CursorPaginationResponse"]>,
    ParentType,
    ContextType
  >;
  rewards?: Resolver<
    Array<ResolversTypes["ProjectRewardCatalogRow"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsGroupedByRewardIdStatsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectRewardsGroupedByRewardIdStats"] =
    ResolversParentTypes["ProjectRewardsGroupedByRewardIdStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  projectReward?: Resolver<
    ResolversTypes["ProjectRewardsGroupedByRewardIdStatsProjectReward"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsGroupedByRewardIdStatsProjectRewardResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectRewardsGroupedByRewardIdStatsProjectReward"] =
    ResolversParentTypes["ProjectRewardsGroupedByRewardIdStatsProjectReward"],
> = {
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  maxClaimable?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sold?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRewardsStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRewardsStats"] =
    ResolversParentTypes["ProjectRewardsStats"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRskEoaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectRskEoa"] =
    ResolversParentTypes["ProjectRskEoa"],
> = {
  accountKeys?: Resolver<
    Maybe<ResolversTypes["UserAccountKeys"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  derivationPath?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  isCurrent?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  replacedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  rskAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rskPublicKey?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectShippingRateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectShippingRate"] =
    ResolversParentTypes["ProjectShippingRate"],
> = {
  baseRate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  country?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  incrementRate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sameAsDefault?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectStatistics"] =
    ResolversParentTypes["ProjectStatistics"],
> = {
  totalPageviews?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalVisitors?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectStats"] =
    ResolversParentTypes["ProjectStats"],
> = {
  current?: Resolver<
    Maybe<ResolversTypes["ProjectStatsBase"]>,
    ParentType,
    ContextType
  >;
  datetimeRange?: Resolver<
    ResolversTypes["DatetimeRange"],
    ParentType,
    ContextType
  >;
  prevTimeRange?: Resolver<
    Maybe<ResolversTypes["ProjectStatsBase"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectStatsBaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectStatsBase"] =
    ResolversParentTypes["ProjectStatsBase"],
> = {
  projectContributionsStats?: Resolver<
    Maybe<ResolversTypes["ProjectContributionsStatsBase"]>,
    ParentType,
    ContextType
  >;
  projectFollowers?: Resolver<
    Maybe<ResolversTypes["ProjectFollowerStats"]>,
    ParentType,
    ContextType
  >;
  projectFunderRewards?: Resolver<
    Maybe<ResolversTypes["ProjectFunderRewardStats"]>,
    ParentType,
    ContextType
  >;
  projectFunders?: Resolver<
    Maybe<ResolversTypes["ProjectFunderStats"]>,
    ParentType,
    ContextType
  >;
  projectViews?: Resolver<
    Maybe<ResolversTypes["ProjectViewStats"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectSubscriptionPlanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectSubscriptionPlan"] =
    ResolversParentTypes["ProjectSubscriptionPlan"],
> = {
  amountBtcSat?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  amountUsdCent?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  interval?: Resolver<
    ResolversTypes["RecurringInterval"],
    ParentType,
    ContextType
  >;
  isHidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectViewBaseStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectViewBaseStats"] =
    ResolversParentTypes["ProjectViewBaseStats"],
> = {
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  viewCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectViewStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectViewStats"] =
    ResolversParentTypes["ProjectViewStats"],
> = {
  countries?: Resolver<
    Array<ResolversTypes["ProjectViewBaseStats"]>,
    ParentType,
    ContextType
  >;
  referrers?: Resolver<
    Array<ResolversTypes["ProjectViewBaseStats"]>,
    ParentType,
    ContextType
  >;
  regions?: Resolver<
    Array<ResolversTypes["ProjectViewBaseStats"]>,
    ParentType,
    ContextType
  >;
  viewCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  visitorCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  visitorGraph?: Resolver<
    Array<Maybe<ResolversTypes["PageViewCountGraph"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectWalletConfigurationContributionAttemptNotifyResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ProjectWalletConfigurationContributionAttemptNotifyResponse"] =
    ResolversParentTypes["ProjectWalletConfigurationContributionAttemptNotifyResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsAonAlmostFundedResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectsAonAlmostFundedResponse"] =
    ResolversParentTypes["ProjectsAonAlmostFundedResponse"],
> = {
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsAonAlmostOverResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectsAonAlmostOverResponse"] =
    ResolversParentTypes["ProjectsAonAlmostOverResponse"],
> = {
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectsResponse"] =
    ResolversParentTypes["ProjectsResponse"],
> = {
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  summary?: Resolver<
    Maybe<ResolversTypes["ProjectsSummary"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectsSummary"] =
    ResolversParentTypes["ProjectsSummary"],
> = {
  fundedTotal?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  fundersCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  projectsCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] =
    ResolversParentTypes["Query"],
> = {
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  acelerandoVipLeaderboard?: Resolver<
    ResolversTypes["AcelerandoVipLeaderboardResponse"],
    ParentType,
    ContextType
  >;
  acelerandoVipMyPosition?: Resolver<
    Maybe<ResolversTypes["AcelerandoVipMyPositionResponse"]>,
    ParentType,
    ContextType
  >;
  activitiesCountGroupedByProject?: Resolver<
    Array<ResolversTypes["ProjectActivitiesCount"]>,
    ParentType,
    ContextType,
    RequireFields<QueryActivitiesCountGroupedByProjectArgs, "input">
  >;
  activitiesGet?: Resolver<
    ResolversTypes["ActivitiesGetResponse"],
    ParentType,
    ContextType,
    Partial<QueryActivitiesGetArgs>
  >;
  aonClaimStatus?: Resolver<
    ResolversTypes["AonClaimStatusResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryAonClaimStatusArgs, "projectId">
  >;
  badges?: Resolver<Array<ResolversTypes["Badge"]>, ParentType, ContextType>;
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType,
    Partial<QueryContributionArgs>
  >;
  contributionsGet?: Resolver<
    Maybe<ResolversTypes["ContributionsGetResponse"]>,
    ParentType,
    ContextType,
    Partial<QueryContributionsGetArgs>
  >;
  contributor?: Resolver<
    ResolversTypes["Funder"],
    ParentType,
    ContextType,
    RequireFields<QueryContributorArgs, "input">
  >;
  currencyQuoteGet?: Resolver<
    ResolversTypes["CurrencyQuoteGetResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryCurrencyQuoteGetArgs, "input">
  >;
  fundersGet?: Resolver<
    Array<ResolversTypes["Funder"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFundersGetArgs, "input">
  >;
  getDashboardFunders?: Resolver<
    Array<ResolversTypes["Funder"]>,
    ParentType,
    ContextType,
    Partial<QueryGetDashboardFundersArgs>
  >;
  getProjectPubkey?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProjectPubkeyArgs, "projectId">
  >;
  getProjectReward?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType,
    RequireFields<QueryGetProjectRewardArgs, "id">
  >;
  getSignedUploadUrl?: Resolver<
    ResolversTypes["SignedUploadUrl"],
    ParentType,
    ContextType,
    RequireFields<QueryGetSignedUploadUrlArgs, "input">
  >;
  getWallet?: Resolver<
    ResolversTypes["Wallet"],
    ParentType,
    ContextType,
    RequireFields<QueryGetWalletArgs, "id">
  >;
  grant?: Resolver<
    ResolversTypes["Grant"],
    ParentType,
    ContextType,
    RequireFields<QueryGrantArgs, "input">
  >;
  grantStatistics?: Resolver<
    ResolversTypes["GrantStatistics"],
    ParentType,
    ContextType
  >;
  grants?: Resolver<Array<ResolversTypes["Grant"]>, ParentType, ContextType>;
  guardianUsersGet?: Resolver<
    Maybe<ResolversTypes["GuardianUsersGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGuardianUsersGetArgs, "input">
  >;
  impactFund?: Resolver<
    ResolversTypes["ImpactFund"],
    ParentType,
    ContextType,
    RequireFields<QueryImpactFundArgs, "input">
  >;
  impactFundApplications?: Resolver<
    ResolversTypes["ImpactFundApplicationsGetResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryImpactFundApplicationsArgs, "input">
  >;
  impactFundDashboardApplications?: Resolver<
    ResolversTypes["ImpactFundDashboardApplicationsResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryImpactFundDashboardApplicationsArgs, "input">
  >;
  impactFundFieldPartnerLeaderboard?: Resolver<
    ResolversTypes["ImpactFundFieldPartnerLeaderboardResponse"],
    ParentType,
    ContextType,
    Partial<QueryImpactFundFieldPartnerLeaderboardArgs>
  >;
  impactFundLabifCountryEligibility?: Resolver<
    ResolversTypes["ImpactFundLabifCountryEligibility"],
    ParentType,
    ContextType,
    Partial<QueryImpactFundLabifCountryEligibilityArgs>
  >;
  impactFunds?: Resolver<
    Array<ResolversTypes["ImpactFund"]>,
    ParentType,
    ContextType,
    Partial<QueryImpactFundsArgs>
  >;
  leaderboardGlobalAmbassadorsGet?: Resolver<
    Array<ResolversTypes["GlobalAmbassadorLeaderboardRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLeaderboardGlobalAmbassadorsGetArgs, "input">
  >;
  leaderboardGlobalContributorsGet?: Resolver<
    Array<ResolversTypes["GlobalContributorLeaderboardRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLeaderboardGlobalContributorsGetArgs, "input">
  >;
  leaderboardGlobalCreatorsGet?: Resolver<
    Array<ResolversTypes["GlobalCreatorLeaderboardRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLeaderboardGlobalCreatorsGetArgs, "input">
  >;
  leaderboardGlobalProjectsGet?: Resolver<
    Array<ResolversTypes["GlobalProjectLeaderboardRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLeaderboardGlobalProjectsGetArgs, "input">
  >;
  lightningAddressVerify?: Resolver<
    ResolversTypes["LightningAddressVerifyResponse"],
    ParentType,
    ContextType,
    Partial<QueryLightningAddressVerifyArgs>
  >;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  newsletterPreferencesGet?: Resolver<
    ResolversTypes["NewsletterPreferences"],
    ParentType,
    ContextType,
    RequireFields<QueryNewsletterPreferencesGetArgs, "userId">
  >;
  orderGet?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderGetArgs, "where">
  >;
  ordersGet?: Resolver<
    Maybe<ResolversTypes["OrdersGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersGetArgs, "input">
  >;
  ordersStatsGet?: Resolver<
    ResolversTypes["OrdersStatsBase"],
    ParentType,
    ContextType,
    RequireFields<QueryOrdersStatsGetArgs, "input">
  >;
  payment?: Resolver<
    ResolversTypes["Payment"],
    ParentType,
    ContextType,
    RequireFields<QueryPaymentArgs, "input">
  >;
  paymentInvoiceSanctionCheckStatusGet?: Resolver<
    ResolversTypes["PaymentInvoiceSanctionCheckStatusResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryPaymentInvoiceSanctionCheckStatusGetArgs, "input">
  >;
  paymentRecoveryByContribution?: Resolver<
    ResolversTypes["PaymentRecoveryByContributionResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryPaymentRecoveryByContributionArgs, "input">
  >;
  paymentRefundsGet?: Resolver<
    Maybe<ResolversTypes["PaymentRefundsGetResponse"]>,
    ParentType,
    ContextType
  >;
  paymentsGet?: Resolver<
    ResolversTypes["PaymentsGetResponse"],
    ParentType,
    ContextType,
    Partial<QueryPaymentsGetArgs>
  >;
  paymentsInProgressGet?: Resolver<
    ResolversTypes["PaymentsInProgressGetResponse"],
    ParentType,
    ContextType
  >;
  paymentsRefundableGet?: Resolver<
    ResolversTypes["RefundablePaymentsGetResponse"],
    ParentType,
    ContextType
  >;
  payoutActive?: Resolver<
    Maybe<ResolversTypes["PayoutGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPayoutActiveArgs, "projectId">
  >;
  payoutGet?: Resolver<
    Maybe<ResolversTypes["PayoutGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPayoutGetArgs, "input">
  >;
  payoutLatest?: Resolver<
    Maybe<ResolversTypes["PayoutGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPayoutLatestArgs, "projectId">
  >;
  payoutProcessing?: Resolver<
    Maybe<ResolversTypes["PayoutGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPayoutProcessingArgs, "projectId">
  >;
  pledgeRefundGet?: Resolver<
    Maybe<ResolversTypes["PledgeRefundGetResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPledgeRefundGetArgs, "input">
  >;
  pledgeRefundsGet?: Resolver<
    Maybe<ResolversTypes["PledgeRefundsGetResponse"]>,
    ParentType,
    ContextType
  >;
  post?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPostArgs, "id">
  >;
  postEmailSegmentSizeGet?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryPostEmailSegmentSizeGetArgs, "input">
  >;
  posts?: Resolver<
    Array<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    Partial<QueryPostsArgs>
  >;
  projectCountriesGet?: Resolver<
    Array<ResolversTypes["ProjectCountriesGetResult"]>,
    ParentType,
    ContextType,
    Partial<QueryProjectCountriesGetArgs>
  >;
  projectGet?: Resolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectGetArgs, "where">
  >;
  projectGoal?: Resolver<
    ResolversTypes["ProjectGoal"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectGoalArgs, "projectGoalId">
  >;
  projectGoals?: Resolver<
    ResolversTypes["ProjectGoals"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectGoalsArgs, "input">
  >;
  projectLeaderboardAmbassadorsGet?: Resolver<
    Array<ResolversTypes["ProjectLeaderboardAmbassadorsRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectLeaderboardAmbassadorsGetArgs, "input">
  >;
  projectLeaderboardContributorsGet?: Resolver<
    Array<ResolversTypes["ProjectLeaderboardContributorsRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectLeaderboardContributorsGetArgs, "input">
  >;
  projectNotificationSettingsGet?: Resolver<
    ResolversTypes["CreatorNotificationSettings"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectNotificationSettingsGetArgs, "projectId">
  >;
  projectRecommendedGet?: Resolver<
    Array<ResolversTypes["ProjectRecommendedGetResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectRecommendedGetArgs, "input">
  >;
  projectReferrersSearch?: Resolver<
    ResolversTypes["ProjectReferrersSearchResult"],
    ParentType,
    ContextType,
    Partial<QueryProjectReferrersSearchArgs>
  >;
  projectRegionsGet?: Resolver<
    Array<ResolversTypes["ProjectRegionsGetResult"]>,
    ParentType,
    ContextType
  >;
  projectRewardCategoriesGet?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  projectRewardGet?: Resolver<
    ResolversTypes["ProjectReward"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectRewardGetArgs, "input">
  >;
  projectRewardsCatalogGet?: Resolver<
    ResolversTypes["ProjectRewardsCatalogGetResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectRewardsCatalogGetArgs, "input">
  >;
  projectRewardsGet?: Resolver<
    Array<ResolversTypes["ProjectReward"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectRewardsGetArgs, "input">
  >;
  projectRewardsMostSoldGet?: Resolver<
    Array<ResolversTypes["ProjectRewardMostSoldGetRow"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectRewardsMostSoldGetArgs, "input">
  >;
  projectRewardsTrendingMonthlyGet?: Resolver<
    Array<ResolversTypes["ProjectRewardTrendingMonthlyGetRow"]>,
    ParentType,
    ContextType
  >;
  projectRewardsTrendingQuarterlyGet?: Resolver<
    Array<ResolversTypes["ProjectRewardTrendingQuarterlyGetRow"]>,
    ParentType,
    ContextType
  >;
  projectRewardsTrendingWeeklyGet?: Resolver<
    Array<ResolversTypes["ProjectRewardTrendingWeeklyGetRow"]>,
    ParentType,
    ContextType
  >;
  projectShippingConfigsGet?: Resolver<
    Array<ResolversTypes["ShippingConfig"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectShippingConfigsGetArgs, "input">
  >;
  projectStatsGet?: Resolver<
    ResolversTypes["ProjectStats"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectStatsGetArgs, "input">
  >;
  projectStripeConnectStatus?: Resolver<
    ResolversTypes["StripeConnectStatus"],
    ParentType,
    ContextType,
    RequireFields<QueryProjectStripeConnectStatusArgs, "projectId">
  >;
  projectsAonAlmostFunded?: Resolver<
    ResolversTypes["ProjectsAonAlmostFundedResponse"],
    ParentType,
    ContextType,
    Partial<QueryProjectsAonAlmostFundedArgs>
  >;
  projectsAonAlmostOver?: Resolver<
    ResolversTypes["ProjectsAonAlmostOverResponse"],
    ParentType,
    ContextType,
    Partial<QueryProjectsAonAlmostOverArgs>
  >;
  projectsGet?: Resolver<
    ResolversTypes["ProjectsResponse"],
    ParentType,
    ContextType,
    Partial<QueryProjectsGetArgs>
  >;
  projectsMostFundedAllOrNothing?: Resolver<
    Array<ResolversTypes["ProjectMostFunded"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsMostFundedAllOrNothingArgs, "input">
  >;
  projectsMostFundedByCategory?: Resolver<
    Array<ResolversTypes["ProjectMostFundedByCategory"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsMostFundedByCategoryArgs, "input">
  >;
  projectsMostFundedByTag?: Resolver<
    Array<ResolversTypes["ProjectMostFundedByTag"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsMostFundedByTagArgs, "input">
  >;
  projectsMostFundedTakeItAll?: Resolver<
    Array<ResolversTypes["ProjectMostFunded"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsMostFundedTakeItAllArgs, "input">
  >;
  projectsSummary?: Resolver<
    ResolversTypes["ProjectsSummary"],
    ParentType,
    ContextType
  >;
  recurringContributionRenewalContext?: Resolver<
    ResolversTypes["RecurringContribution"],
    ParentType,
    ContextType,
    RequireFields<
      QueryRecurringContributionRenewalContextArgs,
      "managementNonce"
    >
  >;
  shippingAddressesGet?: Resolver<
    Array<ResolversTypes["ShippingAddress"]>,
    ParentType,
    ContextType,
    RequireFields<QueryShippingAddressesGetArgs, "input">
  >;
  statusCheck?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  tagsGet?: Resolver<
    Array<ResolversTypes["TagsGetResult"]>,
    ParentType,
    ContextType
  >;
  tagsMostFundedGet?: Resolver<
    Array<ResolversTypes["TagsMostFundedGetResult"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "where">
  >;
  userAccountPasswordFundsSummary?: Resolver<
    ResolversTypes["UserAccountPasswordFundsSummary"],
    ParentType,
    ContextType
  >;
  userBadge?: Resolver<
    Maybe<ResolversTypes["UserBadge"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserBadgeArgs, "userBadgeId">
  >;
  userBadges?: Resolver<
    Array<ResolversTypes["UserBadge"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserBadgesArgs, "input">
  >;
  userEmailIsAvailable?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<QueryUserEmailIsAvailableArgs, "email">
  >;
  userEmailIsValid?: Resolver<
    ResolversTypes["UserEmailIsValidResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryUserEmailIsValidArgs, "email">
  >;
  userIpCountry?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userNotificationSettingsGet?: Resolver<
    ResolversTypes["ProfileNotificationSettings"],
    ParentType,
    ContextType,
    RequireFields<QueryUserNotificationSettingsGetArgs, "userId">
  >;
  userWalletWithdrawActive?: Resolver<
    Maybe<ResolversTypes["UserWalletWithdrawGetResponse"]>,
    ParentType,
    ContextType
  >;
  userWalletWithdrawLatest?: Resolver<
    Maybe<ResolversTypes["UserWalletWithdrawGetResponse"]>,
    ParentType,
    ContextType
  >;
};

export type RecurringContributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RecurringContribution"] =
    ResolversParentTypes["RecurringContribution"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  billingCycleCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  canceledAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  currency?: Resolver<
    ResolversTypes["RecurringContributionCurrency"],
    ParentType,
    ContextType
  >;
  currentPeriodEndAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  currentPeriodStartAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  interval?: Resolver<
    ResolversTypes["RecurringInterval"],
    ParentType,
    ContextType
  >;
  kind?: Resolver<
    ResolversTypes["RecurringContributionKind"],
    ParentType,
    ContextType
  >;
  lastChargeFailedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  lastChargeFailureMessage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  managementNonce?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  nextBillingAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  pauseReason?: Resolver<
    Maybe<ResolversTypes["RecurringPauseReason"]>,
    ParentType,
    ContextType
  >;
  pausedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  paymentMethod?: Resolver<
    ResolversTypes["RecurringPaymentMethod"],
    ParentType,
    ContextType
  >;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectSubscriptionPlan?: Resolver<
    Maybe<ResolversTypes["ProjectSubscriptionPlan"]>,
    ParentType,
    ContextType
  >;
  projectSubscriptionPlanId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["RecurringContributionStatus"],
    ParentType,
    ContextType
  >;
  stripeAccountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeCustomerId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  stripeSubscriptionId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecurringContributionCheckoutResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RecurringContributionCheckoutResponse"] =
    ResolversParentTypes["RecurringContributionCheckoutResponse"],
> = {
  contribution?: Resolver<
    ResolversTypes["Contribution"],
    ParentType,
    ContextType
  >;
  payments?: Resolver<
    ResolversTypes["ContributionPaymentsDetails"],
    ParentType,
    ContextType
  >;
  recurringContribution?: Resolver<
    ResolversTypes["RecurringContribution"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecurringContributionPortalSessionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["RecurringContributionPortalSession"] =
    ResolversParentTypes["RecurringContributionPortalSession"],
> = {
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecurringContributionSupportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RecurringContributionSupport"] =
    ResolversParentTypes["RecurringContributionSupport"],
> = {
  bitcoin?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  stripe?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefundablePaymentsGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RefundablePaymentsGetResponse"] =
    ResolversParentTypes["RefundablePaymentsGetResponse"],
> = {
  refundablePayments?: Resolver<
    Array<ResolversTypes["ProjectRefundablePayment"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskAonClaimPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RskAonClaimPaymentDetails"] =
    ResolversParentTypes["RskAonClaimPaymentDetails"],
> = {
  destinationAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  fromAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  signedTxHex?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  txId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskKeyPairResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RskKeyPair"] =
    ResolversParentTypes["RskKeyPair"],
> = {
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  derivationPath?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskNativeTransferPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RskNativeTransferPaymentDetails"] =
    ResolversParentTypes["RskNativeTransferPaymentDetails"],
> = {
  destinationAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  fromAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  signedTxHex?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  txId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskToLightningSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RskToLightningSwapPaymentDetails"] =
    ResolversParentTypes["RskToLightningSwapPaymentDetails"],
> = {
  lightningInvoiceId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  lightningInvoiceStatus?: Resolver<
    ResolversTypes["LightningInvoiceStatus"],
    ParentType,
    ContextType
  >;
  swapClaimTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapPreimageHash?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  swapRefundTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapServerLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapUserLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RskToOnChainSwapPaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RskToOnChainSwapPaymentDetails"] =
    ResolversParentTypes["RskToOnChainSwapPaymentDetails"],
> = {
  onChainAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  onChainTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapClaimTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapMetadata?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  swapPreimageHash?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  swapRefundTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapServerLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  swapUserLockTxId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingAddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShippingAddress"] =
    ResolversParentTypes["ShippingAddress"],
> = {
  addressLines?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  country?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ShippingConfig"] =
    ResolversParentTypes["ShippingConfig"],
> = {
  globalShipping?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shippingRates?: Resolver<
    Maybe<Array<ResolversTypes["ProjectShippingRate"]>>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    ResolversTypes["ProjectShippingConfigType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignedUploadUrlResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SignedUploadUrl"] =
    ResolversParentTypes["SignedUploadUrl"],
> = {
  distributionUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uploadUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourceResourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SourceResource"] =
    ResolversParentTypes["SourceResource"],
> = {
  __resolveType: TypeResolveFn<
    "Activity" | "Post" | "Project",
    ParentType,
    ContextType
  >;
};

export type SponsorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Sponsor"] =
    ResolversParentTypes["Sponsor"],
> = {
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["SponsorStatus"], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatsInterfaceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StatsInterface"] =
    ResolversParentTypes["StatsInterface"],
> = {
  __resolveType: TypeResolveFn<
    "ProjectContributionsGroupedByMethodStats" | "ProjectContributionsStats",
    ParentType,
    ContextType
  >;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalUsd?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
};

export type StrikePaymentDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StrikePaymentDetails"] =
    ResolversParentTypes["StrikePaymentDetails"],
> = {
  lightningInvoiceId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lightningPaymentRequest?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lightningPaymentRequestExpiresAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  method?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  onChainAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  onChainTransactionId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  strikeReceiveId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  strikeReceiveRequestId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeConnectOnboardingPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StripeConnectOnboardingPayload"] =
    ResolversParentTypes["StripeConnectOnboardingPayload"],
> = {
  accountId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  onboardingUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes["StripeConnectStatus"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeConnectStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StripeConnectStatus"] =
    ResolversParentTypes["StripeConnectStatus"],
> = {
  accountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  chargesEnabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  detailsSubmitted?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  disabledReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isReady?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  payoutsEnabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeInterestNotifyResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StripeInterestNotifyResponse"] =
    ResolversParentTypes["StripeInterestNotifyResponse"],
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] =
    ResolversParentTypes["Subscription"],
> = {
  _?: SubscriptionResolver<
    Maybe<ResolversTypes["Boolean"]>,
    "_",
    ParentType,
    ContextType
  >;
  activityCreated?: SubscriptionResolver<
    ResolversTypes["Activity"],
    "activityCreated",
    ParentType,
    ContextType,
    Partial<SubscriptionActivityCreatedArgs>
  >;
  contributionStatusUpdated?: SubscriptionResolver<
    ResolversTypes["ContributionStatusUpdatedSubscriptionResponse"],
    "contributionStatusUpdated",
    ParentType,
    ContextType,
    Partial<SubscriptionContributionStatusUpdatedArgs>
  >;
  paymentStatusUpdated?: SubscriptionResolver<
    ResolversTypes["Payment"],
    "paymentStatusUpdated",
    ParentType,
    ContextType,
    RequireFields<SubscriptionPaymentStatusUpdatedArgs, "input">
  >;
  postPublished?: SubscriptionResolver<
    ResolversTypes["PostPublishedSubscriptionResponse"],
    "postPublished",
    ParentType,
    ContextType
  >;
  projectActivated?: SubscriptionResolver<
    ResolversTypes["ProjectActivatedSubscriptionResponse"],
    "projectActivated",
    ParentType,
    ContextType
  >;
};

export type SwapResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Swap"] =
    ResolversParentTypes["Swap"],
> = {
  json?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Tag"] = ResolversParentTypes["Tag"],
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsGetResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TagsGetResult"] =
    ResolversParentTypes["TagsGetResult"],
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsMostFundedGetResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TagsMostFundedGetResult"] =
    ResolversParentTypes["TagsMostFundedGetResult"],
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] =
    ResolversParentTypes["User"],
> = {
  accountKeys?: Resolver<
    Maybe<ResolversTypes["UserAccountKeys"]>,
    ParentType,
    ContextType
  >;
  badges?: Resolver<
    Array<ResolversTypes["UserBadge"]>,
    ParentType,
    ContextType
  >;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  complianceDetails?: Resolver<
    ResolversTypes["UserComplianceDetails"],
    ParentType,
    ContextType
  >;
  contributions?: Resolver<
    Array<ResolversTypes["Contribution"]>,
    ParentType,
    ContextType,
    Partial<UserContributionsArgs>
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  creatorTrustStats?: Resolver<
    ResolversTypes["CreatorTrustStats"],
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerifiedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  entityType?: Resolver<
    Maybe<ResolversTypes["UserEntityType"]>,
    ParentType,
    ContextType
  >;
  externalAccounts?: Resolver<
    Array<ResolversTypes["ExternalAccount"]>,
    ParentType,
    ContextType
  >;
  guardianType?: Resolver<
    Maybe<ResolversTypes["GuardianType"]>,
    ParentType,
    ContextType
  >;
  hasSocialAccount?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  heroId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  heroProfile?: Resolver<
    ResolversTypes["UserHeroProfile"],
    ParentType,
    ContextType
  >;
  heroStats?: Resolver<
    ResolversTypes["UserHeroStats"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isEmailVerified?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isFieldPartner?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  orders?: Resolver<
    Maybe<Array<ResolversTypes["Order"]>>,
    ParentType,
    ContextType
  >;
  ownerOf?: Resolver<Array<ResolversTypes["OwnerOf"]>, ParentType, ContextType>;
  posts?: Resolver<
    Array<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    Partial<UserPostsArgs>
  >;
  projectContributions?: Resolver<
    Array<ResolversTypes["UserProjectContribution"]>,
    ParentType,
    ContextType
  >;
  projectFollows?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    Partial<UserProjectsArgs>
  >;
  ranking?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  recurringContributions?: Resolver<
    Array<ResolversTypes["RecurringContribution"]>,
    ParentType,
    ContextType
  >;
  taxProfile?: Resolver<
    Maybe<ResolversTypes["UserTaxProfile"]>,
    ParentType,
    ContextType
  >;
  taxProfileId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes["Wallet"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccountKeysResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAccountKeys"] =
    ResolversParentTypes["UserAccountKeys"],
> = {
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  encryptedMnemonic?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  encryptedSeed?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  rskKeyPair?: Resolver<ResolversTypes["RskKeyPair"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccountPasswordFundsSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAccountPasswordFundsSummary"] =
    ResolversParentTypes["UserAccountPasswordFundsSummary"],
> = {
  affectedTiaProjects?: Resolver<
    Array<ResolversTypes["AccountPasswordAffectedProject"]>,
    ParentType,
    ContextType
  >;
  aonUnclaimedFundsSats?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  legacyTiaProjects?: Resolver<
    Array<ResolversTypes["AccountPasswordAffectedProject"]>,
    ParentType,
    ContextType
  >;
  pledgedSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  tiaUnclaimedFundsSats?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  unclaimedFundsSats?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  userWalletBalanceSats?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserBadgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserBadge"] =
    ResolversParentTypes["UserBadge"],
> = {
  badge?: Resolver<ResolversTypes["Badge"], ParentType, ContextType>;
  badgeAwardEventId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  contributionId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["UserBadgeStatus"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserComplianceDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserComplianceDetails"] =
    ResolversParentTypes["UserComplianceDetails"],
> = {
  contributionLimits?: Resolver<
    ResolversTypes["UserContributionLimits"],
    ParentType,
    ContextType
  >;
  currentVerificationLevel?: Resolver<
    ResolversTypes["UserVerificationLevelStatus"],
    ParentType,
    ContextType
  >;
  verificationLevels?: Resolver<
    Array<ResolversTypes["UserVerificationLevelStatus"]>,
    ParentType,
    ContextType
  >;
  verifiedDetails?: Resolver<
    ResolversTypes["UserVerifiedDetails"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContributionLimitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserContributionLimit"] =
    ResolversParentTypes["UserContributionLimit"],
> = {
  limit?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  nextReset?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  reached?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  remaining?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContributionLimitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserContributionLimits"] =
    ResolversParentTypes["UserContributionLimits"],
> = {
  monthly?: Resolver<
    ResolversTypes["UserContributionLimit"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEmailIsValidResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserEmailIsValidResponse"] =
    ResolversParentTypes["UserEmailIsValidResponse"],
> = {
  isAvailable?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isDeliverable?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroImpactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroImpact"] =
    ResolversParentTypes["UserHeroImpact"],
> = {
  backed?: Resolver<
    ResolversTypes["UserHeroImpactStat"],
    ParentType,
    ContextType
  >;
  built?: Resolver<
    ResolversTypes["UserHeroImpactStat"],
    ParentType,
    ContextType
  >;
  enabled?: Resolver<
    ResolversTypes["UserHeroImpactStat"],
    ParentType,
    ContextType
  >;
  onboarded?: Resolver<
    ResolversTypes["UserHeroImpactStat"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroImpactStatResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroImpactStat"] =
    ResolversParentTypes["UserHeroImpactStat"],
> = {
  amountSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroProfile"] =
    ResolversParentTypes["UserHeroProfile"],
> = {
  impact?: Resolver<ResolversTypes["UserHeroImpact"], ParentType, ContextType>;
  projects?: Resolver<
    ResolversTypes["UserHeroProjectsResponse"],
    ParentType,
    ContextType,
    RequireFields<UserHeroProfileProjectsArgs, "input">
  >;
  trust?: Resolver<ResolversTypes["UserHeroTrust"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroProject"] =
    ResolversParentTypes["UserHeroProject"],
> = {
  contributedSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  enabledSats?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  lastActivityAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  relationships?: Resolver<
    Array<ResolversTypes["HeroProjectRelationship"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroProjectsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroProjectsResponse"] =
    ResolversParentTypes["UserHeroProjectsResponse"],
> = {
  pagination?: Resolver<
    ResolversTypes["CursorPaginationResponse"],
    ParentType,
    ContextType
  >;
  projects?: Resolver<
    Array<ResolversTypes["UserHeroProject"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroStats"] =
    ResolversParentTypes["UserHeroStats"],
> = {
  ambassadorStats?: Resolver<
    ResolversTypes["AmbassadorStats"],
    ParentType,
    ContextType
  >;
  contributorStats?: Resolver<
    ResolversTypes["ContributorStats"],
    ParentType,
    ContextType
  >;
  creatorStats?: Resolver<
    ResolversTypes["CreatorStats"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserHeroTrustResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserHeroTrust"] =
    ResolversParentTypes["UserHeroTrust"],
> = {
  communityRole?: Resolver<
    Maybe<ResolversTypes["HeroCommunityRole"]>,
    ParentType,
    ContextType
  >;
  identityVerified?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserNotificationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserNotificationSettings"] =
    ResolversParentTypes["UserNotificationSettings"],
> = {
  notificationSettings?: Resolver<
    Array<ResolversTypes["NotificationSettings"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProjectContributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserProjectContribution"] =
    ResolversParentTypes["UserProjectContribution"],
> = {
  funder?: Resolver<Maybe<ResolversTypes["Funder"]>, ParentType, ContextType>;
  isAmbassador?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFunder?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isSponsor?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTaxProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserTaxProfile"] =
    ResolversParentTypes["UserTaxProfile"],
> = {
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  legalEntityType?: Resolver<
    ResolversTypes["LegalEntityType"],
    ParentType,
    ContextType
  >;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  taxId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  verified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerificationLevelStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserVerificationLevelStatus"] =
    ResolversParentTypes["UserVerificationLevelStatus"],
> = {
  level?: Resolver<
    ResolversTypes["UserVerificationLevel"],
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["UserVerificationStatus"],
    ParentType,
    ContextType
  >;
  verifiedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerificationTokenGenerateResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserVerificationTokenGenerateResponse"] =
    ResolversParentTypes["UserVerificationTokenGenerateResponse"],
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  verificationLevel?: Resolver<
    ResolversTypes["UserVerificationLevel"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerifiedDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserVerifiedDetails"] =
    ResolversParentTypes["UserVerifiedDetails"],
> = {
  email?: Resolver<
    Maybe<ResolversTypes["VerificationResult"]>,
    ParentType,
    ContextType
  >;
  identity?: Resolver<
    Maybe<ResolversTypes["VerificationResult"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["VerificationResult"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserWalletWithdraw"] =
    ResolversParentTypes["UserWalletWithdraw"],
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  payments?: Resolver<
    Array<ResolversTypes["Payment"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes["UserWalletWithdrawStatus"],
    ParentType,
    ContextType
  >;
  uuid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawGetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserWalletWithdrawGetResponse"] =
    ResolversParentTypes["UserWalletWithdrawGetResponse"],
> = {
  userWalletWithdraw?: Resolver<
    ResolversTypes["UserWalletWithdraw"],
    ParentType,
    ContextType
  >;
  userWalletWithdrawMetadata?: Resolver<
    ResolversTypes["UserWalletWithdrawMetadata"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawInitiateResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserWalletWithdrawInitiateResponse"] =
    ResolversParentTypes["UserWalletWithdrawInitiateResponse"],
> = {
  txHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userWalletWithdraw?: Resolver<
    ResolversTypes["UserWalletWithdraw"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserWalletWithdrawMetadata"] =
    ResolversParentTypes["UserWalletWithdrawMetadata"],
> = {
  contractType?: Resolver<
    ResolversTypes["PayoutContractType"],
    ParentType,
    ContextType
  >;
  nonce?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  requiresUserLockTx?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  swapContractAddress?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawPaymentCreateResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserWalletWithdrawPaymentCreateResponse"] =
    ResolversParentTypes["UserWalletWithdrawPaymentCreateResponse"],
> = {
  payment?: Resolver<ResolversTypes["Payment"], ParentType, ContextType>;
  swap?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userWalletWithdraw?: Resolver<
    ResolversTypes["UserWalletWithdraw"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletWithdrawRequestResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserWalletWithdrawRequestResponse"] =
    ResolversParentTypes["UserWalletWithdrawRequestResponse"],
> = {
  userWalletWithdraw?: Resolver<
    ResolversTypes["UserWalletWithdraw"],
    ParentType,
    ContextType
  >;
  userWalletWithdrawMetadata?: Resolver<
    ResolversTypes["UserWalletWithdrawMetadata"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["VerificationResult"] =
    ResolversParentTypes["VerificationResult"],
> = {
  verified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  verifiedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Wallet"] =
    ResolversParentTypes["Wallet"],
> = {
  connectionDetails?: Resolver<
    Maybe<ResolversTypes["ConnectionDetails"]>,
    ParentType,
    ContextType
  >;
  feePercentage?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  limits?: Resolver<
    Maybe<ResolversTypes["WalletLimits"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes["WalletState"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletContributionLimitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WalletContributionLimits"] =
    ResolversParentTypes["WalletContributionLimits"],
> = {
  max?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  offChain?: Resolver<
    Maybe<ResolversTypes["WalletOffChainContributionLimits"]>,
    ParentType,
    ContextType
  >;
  onChain?: Resolver<
    Maybe<ResolversTypes["WalletOnChainContributionLimits"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletLimitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WalletLimits"] =
    ResolversParentTypes["WalletLimits"],
> = {
  contribution?: Resolver<
    Maybe<ResolversTypes["WalletContributionLimits"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletOffChainContributionLimitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WalletOffChainContributionLimits"] =
    ResolversParentTypes["WalletOffChainContributionLimits"],
> = {
  max?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletOnChainContributionLimitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WalletOnChainContributionLimits"] =
    ResolversParentTypes["WalletOnChainContributionLimits"],
> = {
  max?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletStateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WalletState"] =
    ResolversParentTypes["WalletState"],
> = {
  status?: Resolver<ResolversTypes["WalletStatus"], ParentType, ContextType>;
  statusCode?: Resolver<
    ResolversTypes["WalletStatusCode"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountPasswordAffectedProject?: AccountPasswordAffectedProjectResolvers<ContextType>;
  AcelerandoVipLeaderboardEntry?: AcelerandoVipLeaderboardEntryResolvers<ContextType>;
  AcelerandoVipLeaderboardResponse?: AcelerandoVipLeaderboardResponseResolvers<ContextType>;
  AcelerandoVipMyPositionResponse?: AcelerandoVipMyPositionResponseResolvers<ContextType>;
  ActivitiesGetResponse?: ActivitiesGetResponseResolvers<ContextType>;
  Activity?: ActivityResolvers<ContextType>;
  ActivityResource?: ActivityResourceResolvers<ContextType>;
  Ambassador?: AmbassadorResolvers<ContextType>;
  AmbassadorStats?: AmbassadorStatsResolvers<ContextType>;
  AmountSummary?: AmountSummaryResolvers<ContextType>;
  AonClaimBroadcastResponse?: AonClaimBroadcastResponseResolvers<ContextType>;
  AonClaimPrepareResponse?: AonClaimPrepareResponseResolvers<ContextType>;
  AonClaimStatusResponse?: AonClaimStatusResponseResolvers<ContextType>;
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
  ContributionFiatToLightningSwapPaymentDetails?: ContributionFiatToLightningSwapPaymentDetailsResolvers<ContextType>;
  ContributionLightningPaymentDetails?: ContributionLightningPaymentDetailsResolvers<ContextType>;
  ContributionLightningToRskSwapPaymentDetails?: ContributionLightningToRskSwapPaymentDetailsResolvers<ContextType>;
  ContributionMutationResponse?: ContributionMutationResponseResolvers<ContextType>;
  ContributionOnChainSwapPaymentDetails?: ContributionOnChainSwapPaymentDetailsResolvers<ContextType>;
  ContributionOnChainToRskSwapPaymentDetails?: ContributionOnChainToRskSwapPaymentDetailsResolvers<ContextType>;
  ContributionPaymentsAddResponse?: ContributionPaymentsAddResponseResolvers<ContextType>;
  ContributionPaymentsDetails?: ContributionPaymentsDetailsResolvers<ContextType>;
  ContributionStatusUpdatedSubscriptionResponse?: ContributionStatusUpdatedSubscriptionResponseResolvers<ContextType>;
  ContributionStrikePaymentDetails?: ContributionStrikePaymentDetailsResolvers<ContextType>;
  ContributionsGetResponse?: ContributionsGetResponseResolvers<ContextType>;
  ContributionsSummary?: ContributionsSummaryResolvers<ContextType>;
  ContributorContributionsSummary?: ContributorContributionsSummaryResolvers<ContextType>;
  ContributorStats?: ContributorStatsResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreatorNotificationSettings?: CreatorNotificationSettingsResolvers<ContextType>;
  CreatorNotificationSettingsProject?: CreatorNotificationSettingsProjectResolvers<ContextType>;
  CreatorStats?: CreatorStatsResolvers<ContextType>;
  CreatorTrustStats?: CreatorTrustStatsResolvers<ContextType>;
  CurrencyQuoteGetResponse?: CurrencyQuoteGetResponseResolvers<ContextType>;
  CursorPaginationResponse?: CursorPaginationResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DatetimeRange?: DatetimeRangeResolvers<ContextType>;
  DeleteUserResponse?: DeleteUserResponseResolvers<ContextType>;
  DirectPaymentDetails?: DirectPaymentDetailsResolvers<ContextType>;
  ExternalAccount?: ExternalAccountResolvers<ContextType>;
  FiatPaymentDetails?: FiatPaymentDetailsResolvers<ContextType>;
  FiatPaymentMethods?: FiatPaymentMethodsResolvers<ContextType>;
  FiatToLightningSwapPaymentDetails?: FiatToLightningSwapPaymentDetailsResolvers<ContextType>;
  Funder?: FunderResolvers<ContextType>;
  FunderRewardGraphSum?: FunderRewardGraphSumResolvers<ContextType>;
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
  ImpactFund?: ImpactFundResolvers<ContextType>;
  ImpactFundApplication?: ImpactFundApplicationResolvers<ContextType>;
  ImpactFundApplicationNote?: ImpactFundApplicationNoteResolvers<ContextType>;
  ImpactFundApplicationNoteAuthor?: ImpactFundApplicationNoteAuthorResolvers<ContextType>;
  ImpactFundApplicationsGetResponse?: ImpactFundApplicationsGetResponseResolvers<ContextType>;
  ImpactFundDashboardApplicationRow?: ImpactFundDashboardApplicationRowResolvers<ContextType>;
  ImpactFundDashboardApplicationsResponse?: ImpactFundDashboardApplicationsResponseResolvers<ContextType>;
  ImpactFundDashboardCreator?: ImpactFundDashboardCreatorResolvers<ContextType>;
  ImpactFundDashboardProject?: ImpactFundDashboardProjectResolvers<ContextType>;
  ImpactFundFieldPartnerLeaderboardResponse?: ImpactFundFieldPartnerLeaderboardResponseResolvers<ContextType>;
  ImpactFundFieldPartnerLeaderboardRow?: ImpactFundFieldPartnerLeaderboardRowResolvers<ContextType>;
  ImpactFundFundingSummaryRow?: ImpactFundFundingSummaryRowResolvers<ContextType>;
  ImpactFundLabifCountryEligibility?: ImpactFundLabifCountryEligibilityResolvers<ContextType>;
  ImpactFundMetrics?: ImpactFundMetricsResolvers<ContextType>;
  ImpactFundSponsor?: ImpactFundSponsorResolvers<ContextType>;
  LightningAddressConnectionDetails?: LightningAddressConnectionDetailsResolvers<ContextType>;
  LightningAddressContributionLimits?: LightningAddressContributionLimitsResolvers<ContextType>;
  LightningAddressVerifyResponse?: LightningAddressVerifyResponseResolvers<ContextType>;
  LightningPaymentDetails?: LightningPaymentDetailsResolvers<ContextType>;
  LightningPaymentMethods?: LightningPaymentMethodsResolvers<ContextType>;
  LightningToRskSwapPaymentDetails?: LightningToRskSwapPaymentDetailsResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  ManagedCircularGrantPaymentMethods?: ManagedCircularGrantPaymentMethodsResolvers<ContextType>;
  Milestone?: MilestoneResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  NewsletterPreferences?: NewsletterPreferencesResolvers<ContextType>;
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
  PaymentFeeUpsertResponse?: PaymentFeeUpsertResponseResolvers<ContextType>;
  PaymentInvoiceCancelResponse?: PaymentInvoiceCancelResponseResolvers<ContextType>;
  PaymentInvoiceSanctionCheckStatusResponse?: PaymentInvoiceSanctionCheckStatusResponseResolvers<ContextType>;
  PaymentMethods?: PaymentMethodsResolvers<ContextType>;
  PaymentPendResponse?: PaymentPendResponseResolvers<ContextType>;
  PaymentRecoveryByContributionResponse?: PaymentRecoveryByContributionResponseResolvers<ContextType>;
  PaymentRecoveryPayment?: PaymentRecoveryPaymentResolvers<ContextType>;
  PaymentRefund?: PaymentRefundResolvers<ContextType>;
  PaymentRefundCompleteResponse?: PaymentRefundCompleteResponseResolvers<ContextType>;
  PaymentRefundsGetResponse?: PaymentRefundsGetResponseResolvers<ContextType>;
  PaymentSetClaimableResponse?: PaymentSetClaimableResponseResolvers<ContextType>;
  PaymentSetClaimingResponse?: PaymentSetClaimingResponseResolvers<ContextType>;
  PaymentSetRefundableResponse?: PaymentSetRefundableResponseResolvers<ContextType>;
  PaymentSetRefundedResponse?: PaymentSetRefundedResponseResolvers<ContextType>;
  PaymentSetRefundingResponse?: PaymentSetRefundingResponseResolvers<ContextType>;
  PaymentSwapClaimTxBroadcastResponse?: PaymentSwapClaimTxBroadcastResponseResolvers<ContextType>;
  PaymentSwapClaimTxSetResponse?: PaymentSwapClaimTxSetResponseResolvers<ContextType>;
  PaymentSwapRefundTxBroadcastResponse?: PaymentSwapRefundTxBroadcastResponseResolvers<ContextType>;
  PaymentSwapRefundTxSetResponse?: PaymentSwapRefundTxSetResponseResolvers<ContextType>;
  PaymentsGetResponse?: PaymentsGetResponseResolvers<ContextType>;
  PaymentsInProgressGetResponse?: PaymentsInProgressGetResponseResolvers<ContextType>;
  Payout?: PayoutResolvers<ContextType>;
  PayoutFeeSummary?: PayoutFeeSummaryResolvers<ContextType>;
  PayoutFeeSummaryItem?: PayoutFeeSummaryItemResolvers<ContextType>;
  PayoutGetResponse?: PayoutGetResponseResolvers<ContextType>;
  PayoutInitiateResponse?: PayoutInitiateResponseResolvers<ContextType>;
  PayoutMetadata?: PayoutMetadataResolvers<ContextType>;
  PayoutPaymentCreateResponse?: PayoutPaymentCreateResponseResolvers<ContextType>;
  PayoutRequestResponse?: PayoutRequestResponseResolvers<ContextType>;
  PayoutResponse?: PayoutResponseResolvers<ContextType>;
  PledgeRefund?: PledgeRefundResolvers<ContextType>;
  PledgeRefundGetResponse?: PledgeRefundGetResponseResolvers<ContextType>;
  PledgeRefundInitiateResponse?: PledgeRefundInitiateResponseResolvers<ContextType>;
  PledgeRefundMetadata?: PledgeRefundMetadataResolvers<ContextType>;
  PledgeRefundPaymentCreateResponse?: PledgeRefundPaymentCreateResponseResolvers<ContextType>;
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
  ProjectAonGoal?: ProjectAonGoalResolvers<ContextType>;
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
  ProjectFundingSummary?: ProjectFundingSummaryResolvers<ContextType>;
  ProjectGoal?: ProjectGoalResolvers<ContextType>;
  ProjectGoalDeleteResponse?: ProjectGoalDeleteResponseResolvers<ContextType>;
  ProjectGoalFundingSummary?: ProjectGoalFundingSummaryResolvers<ContextType>;
  ProjectGoals?: ProjectGoalsResolvers<ContextType>;
  ProjectImpactFundRecipient?: ProjectImpactFundRecipientResolvers<ContextType>;
  ProjectLeaderboardAmbassadorsRow?: ProjectLeaderboardAmbassadorsRowResolvers<ContextType>;
  ProjectLeaderboardContributorsRow?: ProjectLeaderboardContributorsRowResolvers<ContextType>;
  ProjectMatching?: ProjectMatchingResolvers<ContextType>;
  ProjectMatchingDeleteResponse?: ProjectMatchingDeleteResponseResolvers<ContextType>;
  ProjectMatchingFundingSummary?: ProjectMatchingFundingSummaryResolvers<ContextType>;
  ProjectMostFunded?: ProjectMostFundedResolvers<ContextType>;
  ProjectMostFundedByCategory?: ProjectMostFundedByCategoryResolvers<ContextType>;
  ProjectMostFundedByTag?: ProjectMostFundedByTagResolvers<ContextType>;
  ProjectRecommendedGetResult?: ProjectRecommendedGetResultResolvers<ContextType>;
  ProjectReferrersSearchResult?: ProjectReferrersSearchResultResolvers<ContextType>;
  ProjectRefundablePayment?: ProjectRefundablePaymentResolvers<ContextType>;
  ProjectRegionsGetResult?: ProjectRegionsGetResultResolvers<ContextType>;
  ProjectReview?: ProjectReviewResolvers<ContextType>;
  ProjectReviewComplianceSuggestion?: ProjectReviewComplianceSuggestionResolvers<ContextType>;
  ProjectReward?: ProjectRewardResolvers<ContextType>;
  ProjectRewardCatalogRow?: ProjectRewardCatalogRowResolvers<ContextType>;
  ProjectRewardMostSoldGetRow?: ProjectRewardMostSoldGetRowResolvers<ContextType>;
  ProjectRewardTrendingMonthlyGetRow?: ProjectRewardTrendingMonthlyGetRowResolvers<ContextType>;
  ProjectRewardTrendingQuarterlyGetRow?: ProjectRewardTrendingQuarterlyGetRowResolvers<ContextType>;
  ProjectRewardTrendingWeeklyGetRow?: ProjectRewardTrendingWeeklyGetRowResolvers<ContextType>;
  ProjectRewardsCatalogGetResponse?: ProjectRewardsCatalogGetResponseResolvers<ContextType>;
  ProjectRewardsGroupedByRewardIdStats?: ProjectRewardsGroupedByRewardIdStatsResolvers<ContextType>;
  ProjectRewardsGroupedByRewardIdStatsProjectReward?: ProjectRewardsGroupedByRewardIdStatsProjectRewardResolvers<ContextType>;
  ProjectRewardsStats?: ProjectRewardsStatsResolvers<ContextType>;
  ProjectRskEoa?: ProjectRskEoaResolvers<ContextType>;
  ProjectShippingRate?: ProjectShippingRateResolvers<ContextType>;
  ProjectStatistics?: ProjectStatisticsResolvers<ContextType>;
  ProjectStats?: ProjectStatsResolvers<ContextType>;
  ProjectStatsBase?: ProjectStatsBaseResolvers<ContextType>;
  ProjectSubscriptionPlan?: ProjectSubscriptionPlanResolvers<ContextType>;
  ProjectViewBaseStats?: ProjectViewBaseStatsResolvers<ContextType>;
  ProjectViewStats?: ProjectViewStatsResolvers<ContextType>;
  ProjectWalletConfigurationContributionAttemptNotifyResponse?: ProjectWalletConfigurationContributionAttemptNotifyResponseResolvers<ContextType>;
  ProjectsAonAlmostFundedResponse?: ProjectsAonAlmostFundedResponseResolvers<ContextType>;
  ProjectsAonAlmostOverResponse?: ProjectsAonAlmostOverResponseResolvers<ContextType>;
  ProjectsResponse?: ProjectsResponseResolvers<ContextType>;
  ProjectsSummary?: ProjectsSummaryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecurringContribution?: RecurringContributionResolvers<ContextType>;
  RecurringContributionCheckoutResponse?: RecurringContributionCheckoutResponseResolvers<ContextType>;
  RecurringContributionPortalSession?: RecurringContributionPortalSessionResolvers<ContextType>;
  RecurringContributionSupport?: RecurringContributionSupportResolvers<ContextType>;
  RefundablePaymentsGetResponse?: RefundablePaymentsGetResponseResolvers<ContextType>;
  RskAonClaimPaymentDetails?: RskAonClaimPaymentDetailsResolvers<ContextType>;
  RskKeyPair?: RskKeyPairResolvers<ContextType>;
  RskNativeTransferPaymentDetails?: RskNativeTransferPaymentDetailsResolvers<ContextType>;
  RskToLightningSwapPaymentDetails?: RskToLightningSwapPaymentDetailsResolvers<ContextType>;
  RskToOnChainSwapPaymentDetails?: RskToOnChainSwapPaymentDetailsResolvers<ContextType>;
  ShippingAddress?: ShippingAddressResolvers<ContextType>;
  ShippingConfig?: ShippingConfigResolvers<ContextType>;
  SignedUploadUrl?: SignedUploadUrlResolvers<ContextType>;
  SourceResource?: SourceResourceResolvers<ContextType>;
  Sponsor?: SponsorResolvers<ContextType>;
  StatsInterface?: StatsInterfaceResolvers<ContextType>;
  StrikePaymentDetails?: StrikePaymentDetailsResolvers<ContextType>;
  StripeConnectOnboardingPayload?: StripeConnectOnboardingPayloadResolvers<ContextType>;
  StripeConnectStatus?: StripeConnectStatusResolvers<ContextType>;
  StripeInterestNotifyResponse?: StripeInterestNotifyResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagsGetResult?: TagsGetResultResolvers<ContextType>;
  TagsMostFundedGetResult?: TagsMostFundedGetResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAccountKeys?: UserAccountKeysResolvers<ContextType>;
  UserAccountPasswordFundsSummary?: UserAccountPasswordFundsSummaryResolvers<ContextType>;
  UserBadge?: UserBadgeResolvers<ContextType>;
  UserComplianceDetails?: UserComplianceDetailsResolvers<ContextType>;
  UserContributionLimit?: UserContributionLimitResolvers<ContextType>;
  UserContributionLimits?: UserContributionLimitsResolvers<ContextType>;
  UserEmailIsValidResponse?: UserEmailIsValidResponseResolvers<ContextType>;
  UserHeroImpact?: UserHeroImpactResolvers<ContextType>;
  UserHeroImpactStat?: UserHeroImpactStatResolvers<ContextType>;
  UserHeroProfile?: UserHeroProfileResolvers<ContextType>;
  UserHeroProject?: UserHeroProjectResolvers<ContextType>;
  UserHeroProjectsResponse?: UserHeroProjectsResponseResolvers<ContextType>;
  UserHeroStats?: UserHeroStatsResolvers<ContextType>;
  UserHeroTrust?: UserHeroTrustResolvers<ContextType>;
  UserNotificationSettings?: UserNotificationSettingsResolvers<ContextType>;
  UserProjectContribution?: UserProjectContributionResolvers<ContextType>;
  UserTaxProfile?: UserTaxProfileResolvers<ContextType>;
  UserVerificationLevelStatus?: UserVerificationLevelStatusResolvers<ContextType>;
  UserVerificationTokenGenerateResponse?: UserVerificationTokenGenerateResponseResolvers<ContextType>;
  UserVerifiedDetails?: UserVerifiedDetailsResolvers<ContextType>;
  UserWalletWithdraw?: UserWalletWithdrawResolvers<ContextType>;
  UserWalletWithdrawGetResponse?: UserWalletWithdrawGetResponseResolvers<ContextType>;
  UserWalletWithdrawInitiateResponse?: UserWalletWithdrawInitiateResponseResolvers<ContextType>;
  UserWalletWithdrawMetadata?: UserWalletWithdrawMetadataResolvers<ContextType>;
  UserWalletWithdrawPaymentCreateResponse?: UserWalletWithdrawPaymentCreateResponseResolvers<ContextType>;
  UserWalletWithdrawRequestResponse?: UserWalletWithdrawRequestResponseResolvers<ContextType>;
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

export type ComplianceDashboardDataQuery = {
  __typename?: "Query";
  projectsGet: {
    __typename?: "ProjectsResponse";
    projects: Array<{
      __typename?: "Project";
      status?: ProjectStatus | null;
      id: any;
    }>;
  };
};

export type ProjectReviewSubmitMutationVariables = Exact<{
  input: ProjectReviewSubmitInput;
}>;

export type ProjectReviewSubmitMutation = {
  __typename?: "Mutation";
  projectReviewSubmit: {
    __typename?: "ProjectReview";
    id: any;
    projectId: any;
    status: ProjectReviewStatus;
    rejectionReasons: Array<string>;
    reviewNotes?: string | null;
    reviewedAt?: any | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type ProjectStatusUpdateMutationVariables = Exact<{
  input: ProjectStatusUpdate;
}>;

export type ProjectStatusUpdateMutation = {
  __typename?: "Mutation";
  projectStatusUpdate: {
    __typename?: "Project";
    id: any;
    status?: ProjectStatus | null;
    launchedAt?: any | null;
    preLaunchedAt?: any | null;
  };
};

export type ProjectFieldsFragment = {
  __typename?: "Project";
  id: any;
  title: string;
  name: string;
  status?: ProjectStatus | null;
  fundingStrategy?: ProjectFundingStrategy | null;
  rejectionReason?: string | null;
  createdAt: any;
  launchedAt?: any | null;
  preLaunchedAt?: any | null;
  owners: Array<{
    __typename?: "Owner";
    user: {
      __typename?: "User";
      id: any;
      username: string;
      email?: string | null;
    };
  }>;
  reviews: Array<{
    __typename?: "ProjectReview";
    id: any;
    projectId: any;
    status: ProjectReviewStatus;
    version: number;
    reviewNotes?: string | null;
    rejectionReasons: Array<string>;
    reviewedAt?: any | null;
    createdAt: any;
    updatedAt: any;
    complianceSuggestion?: {
      __typename?: "ProjectReviewComplianceSuggestion";
      status: ProjectReviewComplianceSuggestionStatus;
      recommendedStatus?: ProjectReviewStatus | null;
      noteToCreator?: string | null;
      reasons: Array<string>;
      feedback: Array<string>;
      model?: string | null;
      termsUrl: string;
      generatedAt?: any | null;
      failureReason?: string | null;
    } | null;
  }>;
};

export type ProjectGetQueryVariables = Exact<{
  where: UniqueProjectQueryInput;
}>;

export type ProjectGetQuery = {
  __typename?: "Query";
  projectGet?:
    | ({
        __typename?: "Project";
        location?: {
          __typename?: "Location";
          country?: {
            __typename?: "Country";
            code: string;
            name: string;
          } | null;
        } | null;
      } & ProjectFieldsFragment)
    | null;
};

export type ProjectsGetQueryVariables = Exact<{
  input: ProjectsGetQueryInput;
}>;

export type ProjectsGetQuery = {
  __typename?: "Query";
  projectsGet: {
    __typename?: "ProjectsResponse";
    projects: Array<{ __typename?: "Project" } & ProjectFieldsFragment>;
  };
};

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
      complianceSuggestion {
        status
        recommendedStatus
        noteToCreator
        reasons
        feedback
        model
        termsUrl
        generatedAt
        failureReason
      }
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
export function useComplianceDashboardDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >(ComplianceDashboardDataDocument, options);
}
export function useComplianceDashboardDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >(ComplianceDashboardDataDocument, options);
}
// @ts-ignore
export function useComplianceDashboardDataSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<
  ComplianceDashboardDataQuery,
  ComplianceDashboardDataQueryVariables
>;
export function useComplianceDashboardDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ComplianceDashboardDataQuery,
        ComplianceDashboardDataQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ComplianceDashboardDataQuery | undefined,
  ComplianceDashboardDataQueryVariables
>;
export function useComplianceDashboardDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ComplianceDashboardDataQuery,
        ComplianceDashboardDataQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ComplianceDashboardDataQuery,
    ComplianceDashboardDataQueryVariables
  >(ComplianceDashboardDataDocument, options);
}
export type ComplianceDashboardDataQueryHookResult = ReturnType<
  typeof useComplianceDashboardDataQuery
>;
export type ComplianceDashboardDataLazyQueryHookResult = ReturnType<
  typeof useComplianceDashboardDataLazyQuery
>;
export type ComplianceDashboardDataSuspenseQueryHookResult = ReturnType<
  typeof useComplianceDashboardDataSuspenseQuery
>;
export type ComplianceDashboardDataQueryResult = Apollo.QueryResult<
  ComplianceDashboardDataQuery,
  ComplianceDashboardDataQueryVariables
>;
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
export type ProjectReviewSubmitMutationFn = Apollo.MutationFunction<
  ProjectReviewSubmitMutation,
  ProjectReviewSubmitMutationVariables
>;

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
export function useProjectReviewSubmitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProjectReviewSubmitMutation,
    ProjectReviewSubmitMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProjectReviewSubmitMutation,
    ProjectReviewSubmitMutationVariables
  >(ProjectReviewSubmitDocument, options);
}
export type ProjectReviewSubmitMutationHookResult = ReturnType<
  typeof useProjectReviewSubmitMutation
>;
export type ProjectReviewSubmitMutationResult =
  Apollo.MutationResult<ProjectReviewSubmitMutation>;
export type ProjectReviewSubmitMutationOptions = Apollo.BaseMutationOptions<
  ProjectReviewSubmitMutation,
  ProjectReviewSubmitMutationVariables
>;
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
export type ProjectStatusUpdateMutationFn = Apollo.MutationFunction<
  ProjectStatusUpdateMutation,
  ProjectStatusUpdateMutationVariables
>;

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
export function useProjectStatusUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProjectStatusUpdateMutation,
    ProjectStatusUpdateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProjectStatusUpdateMutation,
    ProjectStatusUpdateMutationVariables
  >(ProjectStatusUpdateDocument, options);
}
export type ProjectStatusUpdateMutationHookResult = ReturnType<
  typeof useProjectStatusUpdateMutation
>;
export type ProjectStatusUpdateMutationResult =
  Apollo.MutationResult<ProjectStatusUpdateMutation>;
export type ProjectStatusUpdateMutationOptions = Apollo.BaseMutationOptions<
  ProjectStatusUpdateMutation,
  ProjectStatusUpdateMutationVariables
>;
export const ProjectGetDocument = gql`
  query ProjectGet($where: UniqueProjectQueryInput!) {
    projectGet(where: $where) {
      ...ProjectFields
      location {
        country {
          code
          name
        }
      }
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

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
export function useProjectGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProjectGetQuery,
    ProjectGetQueryVariables
  > &
    (
      | { variables: ProjectGetQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectGetQuery, ProjectGetQueryVariables>(
    ProjectGetDocument,
    options,
  );
}
export function useProjectGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectGetQuery,
    ProjectGetQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectGetQuery, ProjectGetQueryVariables>(
    ProjectGetDocument,
    options,
  );
}
// @ts-ignore
export function useProjectGetSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProjectGetQuery,
    ProjectGetQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<ProjectGetQuery, ProjectGetQueryVariables>;
export function useProjectGetSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProjectGetQuery,
        ProjectGetQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ProjectGetQuery | undefined,
  ProjectGetQueryVariables
>;
export function useProjectGetSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProjectGetQuery,
        ProjectGetQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProjectGetQuery, ProjectGetQueryVariables>(
    ProjectGetDocument,
    options,
  );
}
export type ProjectGetQueryHookResult = ReturnType<typeof useProjectGetQuery>;
export type ProjectGetLazyQueryHookResult = ReturnType<
  typeof useProjectGetLazyQuery
>;
export type ProjectGetSuspenseQueryHookResult = ReturnType<
  typeof useProjectGetSuspenseQuery
>;
export type ProjectGetQueryResult = Apollo.QueryResult<
  ProjectGetQuery,
  ProjectGetQueryVariables
>;
export const ProjectsGetDocument = gql`
  query ProjectsGet($input: ProjectsGetQueryInput!) {
    projectsGet(input: $input) {
      projects {
        ...ProjectFields
      }
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

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
export function useProjectsGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProjectsGetQuery,
    ProjectsGetQueryVariables
  > &
    (
      | { variables: ProjectsGetQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(
    ProjectsGetDocument,
    options,
  );
}
export function useProjectsGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectsGetQuery,
    ProjectsGetQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(
    ProjectsGetDocument,
    options,
  );
}
// @ts-ignore
export function useProjectsGetSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProjectsGetQuery,
    ProjectsGetQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<ProjectsGetQuery, ProjectsGetQueryVariables>;
export function useProjectsGetSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProjectsGetQuery,
        ProjectsGetQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ProjectsGetQuery | undefined,
  ProjectsGetQueryVariables
>;
export function useProjectsGetSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProjectsGetQuery,
        ProjectsGetQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProjectsGetQuery, ProjectsGetQueryVariables>(
    ProjectsGetDocument,
    options,
  );
}
export type ProjectsGetQueryHookResult = ReturnType<typeof useProjectsGetQuery>;
export type ProjectsGetLazyQueryHookResult = ReturnType<
  typeof useProjectsGetLazyQuery
>;
export type ProjectsGetSuspenseQueryHookResult = ReturnType<
  typeof useProjectsGetSuspenseQuery
>;
export type ProjectsGetQueryResult = Apollo.QueryResult<
  ProjectsGetQuery,
  ProjectsGetQueryVariables
>;
