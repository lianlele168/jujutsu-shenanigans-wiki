export interface ShenanigansCharacter {
  id: string;
  name: string;
  alias: string;
  tier: 'S' | 'A' | 'B';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  awakeningName: string;
  baseHealth: number;
  description: string;
}

export interface CharacterMove {
  id: string;
  name: string;
  character: string;
  keybind: '1' | '2' | '3' | '4' | 'R' | 'G';
  damage: number;
  blockable: boolean;
  cooldown: string;
  description: string;
}

export interface ComboChain {
  id: string;
  name: string;
  character: string;
  sequence: string;
  damagePercent: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ShenanigansCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const CHARACTERS_DATA: ShenanigansCharacter[] = [
  { id: 'honored-one-gojo', name: 'The Honored One (Gojo)', alias: 'Limitless Sorcerer', tier: 'S', difficulty: 'Medium', awakeningName: 'Infinite Void', baseHealth: 100, description: 'Dominant space-manipulating powerhouse with invulnerable counters and high-velocity teleport follow-ups.' },
  { id: 'vessel-sukuna', name: 'Vessel / Sukuna', alias: 'Disgraced One', tier: 'S', difficulty: 'Hard', awakeningName: 'Malevolent Shrine', baseHealth: 100, description: 'Lethal slashing brawler featuring high combo extensions via Dismantle and devastating Fire Arrow executes.' },
  { id: 'restless-gambler-hakari', name: 'Restless Gambler (Hakari)', alias: 'Fever Phenom', tier: 'S', difficulty: 'Medium', awakeningName: 'Idle Death Gamble', baseHealth: 100, description: 'Pachinko domain master capable of achieving unlimited cursed energy and automatic immortality.' },
  { id: 'ten-shadows-megumi', name: 'Ten Shadows (Megumi)', alias: 'Shadow Prodigy', tier: 'A', difficulty: 'Hard', awakeningName: 'Chimera Shadow Garden', baseHealth: 100, description: 'Summons shikigami (Nue, Divine Dog, Toad) for long-range zoning and block-breaking aerial drops.' },
  { id: 'blood-manipulator-choso', name: 'Blood Manipulator (Choso)', alias: 'Cursed Womb Brother', tier: 'A', difficulty: 'Medium', awakeningName: 'Flowing Red Scale Stack', baseHealth: 100, description: 'Fires piercing blood needles and high-velocity blood slicers that punish aggressive rushdowns.' },
  { id: 'perfection-mahito', name: 'Idle Transfiguration (Mahito)', alias: 'True Soul', tier: 'A', difficulty: 'Hard', awakeningName: 'Self-Embodiment of Perfection', baseHealth: 100, description: 'Distorts soul hitbox geometries with erratic blades, spikes, and club morph attacks.' },
  { id: 'boogie-woogie-todo', name: 'Brotherhood (Todo)', alias: 'Best Friend', tier: 'B', difficulty: 'Medium', awakeningName: '120% Potential', baseHealth: 100, description: 'Swaps positions with opponents and objects with claps, causing severe opponent spatial disorientation.' },
  { id: 'sound-sorcerer-gakuganji', name: 'Principal (Gakuganji)', alias: 'Amplified Rock', tier: 'B', difficulty: 'Easy', awakeningName: 'Electric Encore', baseHealth: 100, description: 'Electric guitar soundwaves that disrupt block frames and knock back swarms.' }
];

export const MOVES_DATA: CharacterMove[] = [
  { id: 'lapse-blue', name: 'Lapse: Blue', character: 'The Honored One (Gojo)', keybind: '1', damage: 18, blockable: true, cooldown: '12s', description: 'Creates a magnetic vortex that pulls enemies in and slams them into the pavement.' },
  { id: 'reversal-red', name: 'Reversal: Red', character: 'The Honored One (Gojo)', keybind: '2', damage: 24, blockable: false, cooldown: '15s', description: 'Repulsive blast causing massive knockback and wall splat damage.' },
  { id: 'rapid-punches', name: 'Limitless Flurry', character: 'The Honored One (Gojo)', keybind: '3', damage: 20, blockable: true, cooldown: '10s', description: 'Rapid barrage of infused punches ending in an uppercut.' },
  { id: 'hollow-purple', name: 'Hollow: Purple', character: 'The Honored One (Gojo)', keybind: '4', damage: 45, blockable: false, cooldown: '25s', description: 'Combines Blue and Red into an unstoppable virtual mass beam.' },
  { id: 'dismantle-slash', name: 'Dismantle', character: 'Vessel / Sukuna', keybind: '1', damage: 16, blockable: true, cooldown: '11s', description: 'Invisible flying slash that slices horizontal space.' },
  { id: 'cleave-rush', name: 'Cleave', character: 'Vessel / Sukuna', keybind: '2', damage: 22, blockable: false, cooldown: '14s', description: 'Grabs the target and cuts through armor adjusted to enemy durability.' },
  { id: 'flame-arrow-fuga', name: 'Open (Kamutoke / Fire Arrow)', character: 'Vessel / Sukuna', keybind: '4', damage: 50, blockable: false, cooldown: '30s', description: 'Incinerates the arena in an explosive thermal fireball.' },
  { id: 'shutter-doors', name: 'Train Shutter Slam', character: 'Restless Gambler (Hakari)', keybind: '1', damage: 15, blockable: true, cooldown: '9s', description: 'Summons subway train doors to pin the enemy.' },
  { id: 'pachinko-ball', name: 'Reserve Pachinko Ball', character: 'Restless Gambler (Hakari)', keybind: '2', damage: 18, blockable: true, cooldown: '12s', description: 'Hurls giant metal spheres dealing heavy stun.' },
  { id: 'divine-dog-rush', name: 'Divine Dog Totality', character: 'Ten Shadows (Megumi)', keybind: '1', damage: 22, blockable: true, cooldown: '13s', description: 'Shadow wolf leaps from the floor to shred opponents.' },
  { id: 'nue-lightning', name: 'Nue Thunder Dive', character: 'Ten Shadows (Megumi)', keybind: '2', damage: 25, blockable: false, cooldown: '16s', description: 'Electrified winged beast swoops down with shocking stun.' },
  { id: 'piercing-blood', name: 'Piercing Blood Cannon', character: 'Blood Manipulator (Choso)', keybind: '1', damage: 28, blockable: false, cooldown: '14s', description: 'High-pressure blood jet piercing through block shields.' },
  { id: 'supernova-orbs', name: 'Supernova Burst', character: 'Blood Manipulator (Choso)', keybind: '2', damage: 22, blockable: true, cooldown: '12s', description: 'Detonates blood beads in a 360-degree radius.' },
  { id: 'soul-club-morph', name: 'Soul Hammer Morph', character: 'Idle Transfiguration (Mahito)', keybind: '1', damage: 20, blockable: true, cooldown: '10s', description: 'Morphs arm into a massive spiked meat mallet.' },
  { id: 'boogie-clap', name: 'Position Swap Clap', character: 'Brotherhood (Todo)', keybind: '1', damage: 0, blockable: false, cooldown: '7s', description: 'Instantly swaps positions with the targeted player.' },
  { id: 'black-flash-divergent', name: 'Divergent Black Flash', character: 'Brotherhood (Todo)', keybind: '3', damage: 38, blockable: false, cooldown: '20s', description: 'Critical double-impact strike distorting the spatial fabric.' }
];

export const COMBOS_DATA: ComboChain[] = [
  { id: 'gojo-bnb', name: 'Gojo Bread & Butter BNB', character: 'The Honored One (Gojo)', sequence: '3x M1 -> Lapse Blue -> Dash -> 2x M1 -> Reversal Red', damagePercent: 48, difficulty: 'Beginner' },
  { id: 'gojo-infinite', name: 'Gojo True Infinite Void Burst', character: 'The Honored One (Gojo)', sequence: 'Lapse Blue -> Down Slam -> Teleport M1 -> Infinite Void', damagePercent: 85, difficulty: 'Advanced' },
  { id: 'sukuna-dismantle-extend', name: 'Sukuna Dismantle Wall Splat', character: 'Vessel / Sukuna', sequence: '4x M1 -> Cleave -> Dash Cancel -> Dismantle -> Fire Arrow', damagePercent: 64, difficulty: 'Intermediate' },
  { id: 'sukuna-domain-oneshot', name: 'Sukuna Malevolent Guillotine', character: 'Vessel / Sukuna', sequence: 'Cleave -> Wall Splat -> Malevolent Shrine Activation', damagePercent: 100, difficulty: 'Advanced' },
  { id: 'hakari-jackpot-loop', name: 'Hakari Fever Jackpot Setup', character: 'Restless Gambler (Hakari)', sequence: 'Shutter Door -> 3x M1 -> Reserve Ball -> Idle Death Gamble', damagePercent: 55, difficulty: 'Beginner' },
  { id: 'megumi-nue-combo', name: 'Megumi Shadow Trap Loop', character: 'Ten Shadows (Megumi)', sequence: 'Toad Grab -> 2x M1 -> Divine Dog -> Nue Thunder Dive', damagePercent: 58, difficulty: 'Intermediate' },
  { id: 'choso-pierce-chain', name: 'Choso Blood Sniper Chain', character: 'Blood Manipulator (Choso)', sequence: 'Supernova Stun -> Dash -> 3x M1 -> Piercing Blood', damagePercent: 52, difficulty: 'Intermediate' },
  { id: 'todo-swap-uppercut', name: 'Todo Confusion Slam', character: 'Brotherhood (Todo)', sequence: 'Clap Swap -> 4x M1 -> Down Slam -> Black Flash', damagePercent: 60, difficulty: 'Advanced' }
];

export const SHENANIGANS_CODES_DATA: ShenanigansCode[] = [
  { id: 'code-nep', code: 'A7D2L26RNEPG74A3Q', reward: 'Free Emote (unlocks the Nep achievement emote)', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-x6x31', code: 'X6X31F47UN8JM1NEP', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-ripbowe', code: 'RIPBOWE', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-jjs1year', code: 'JJS1YEAR', reward: '50 Cash and an Emote (1st anniversary)', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-whyemote', code: 'WHYEMOTEDISSAPEAR', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-slate', code: 'SLATECONCRETE', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-67', code: '67', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-370m', code: '370MVISITS', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-120m', code: '120MVISITS', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-20m', code: '20MVISITS', reward: '200 Cash (2024 milestone)', status: 'EXPIRED', dateAdded: '' }
];
