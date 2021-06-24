export interface ChampSelectSession {
  actions: Array<Action[]>;
  allowBattleBoost: boolean;
  allowDuplicatePicks: boolean;
  allowLockedEvents: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  bans: Bans;
  benchChampionIds: any[];
  benchEnabled: boolean;
  boostableSkinCount: number;
  chatDetails: ChatDetails;
  counter: number;
  entitledFeatureState: EntitledFeatureState;
  gameId: number;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
  isSpectating: boolean;
  localPlayerCellId: number;
  lockedEventIndex: number;
  myTeam: MyTeam[];
  rerollsRemaining: number;
  skipChampionSelect: boolean;
  theirTeam: any[];
  timer: Timer;
  trades: any[];
}

export interface Action {
  actorCellId: number;
  championId: number;
  completed: boolean;
  id: number;
  isAllyAction: boolean;
  isInProgress: boolean;
  pickTurn: number;
  type: string;
}

export interface Bans {
  myTeamBans: number[];
  numBans: number;
  theirTeamBans: any[];
}

export interface ChatDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface EntitledFeatureState {
  additionalRerolls: number;
  unlockedSkinIds: any[];
}

export interface MyTeam {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  entitledFeatureType: string;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
}

export interface Timer {
  adjustedTimeLeftInPhase: number;
  internalNowInEpochMs: number;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: number;
}

export interface ReadyCheck {
  declinerIds: any[];
  dodgeWarning: string;
  playerResponse: string;
  state: string;
  suppressUx: boolean;
  timer: number;
}

export interface RunePage {
  autoModifiedSelections: number[];
  current: boolean;
  id: number;
  isActive: boolean;
  isDeletable: boolean;
  isEditable: boolean;
  isValid: boolean;
  lastModified: number;
  name: string;
  order: number;
  primaryStyleId: string;
  selectedPerkIds: string[];
  subStyleId: string;
}

export interface GridChampion {
  disabled: boolean;
  freeToPlay: boolean;
  freeToPlayForQueue: boolean;
  freeToPlayReward: boolean;
  id: number;
  masteryChestGranted: boolean;
  masteryLevel: number;
  masteryPoints: number;
  name: string;
  owned: boolean;
  positionsFavorited: any[];
  rented: boolean;
  roles: string[];
  selectionStatus: SelectionStatus;
  squarePortraitPath: string;
}

export interface SelectionStatus {
  banIntented: boolean;
  banIntentedByMe: boolean;
  isBanned: boolean;
  pickIntented: boolean;
  pickIntentedByMe: boolean;
  pickIntentedPosition: string;
  pickedByOtherOrBanned: boolean;
  selectedByMe: boolean;
}
