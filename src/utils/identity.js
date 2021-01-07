import { fetchReticulumAuthenticated } from "./phoenix-utils";
import defaultAvatar from "../assets/models/DefaultAvatar.glb";

const names = [
  "Baers-Pochard",
  "Baikal-Teal",
  "Barrows-Goldeneye",
  "Blue-Billed",
  "Blue-Duck",
  "Blue-Winged",
  "Brown-Teal",
  "Bufflehead",
  "Chestnut-Teal",
  "Chiloe-Wigeon",
  "Cinnamon-Teal",
  "Comb-Duck",
  "Common-Eider",
  "Common-Goldeneye",
  "Common-Merganser",
  "Common-Pochard",
  "Common-Scoter",
  "Common-Shelduck",
  "Crested-Duck",
  "Crested-Shelduck",
  "Eatons-Pintail",
  "Falcated",
  "Ferruginous",
  "Freckled-Duck",
  "Gadwall",
  "Garganey",
  "Greater-Scaup",
  "Grey-Teal",
  "Hartlaubs",
  "Hooded-Merganser",
  "Kelp-Goose",
  "King-Eider",
  "Lake-Duck",
  "Laysan-Duck",
  "Lesser-Scaup",
  "Long-Tailed",
  "Maccoa-Duck",
  "Marbled-Teal",
  "Mellers-Duck",
  "Merganser",
  "Northern-Pintail",
  "Orinoco-Goose",
  "Paradise-Shelduck",
  "Plumed-Whistler",
  "Puna-Teal",
  "Red-Billed",
  "Red-Crested",
  "Ringed-Teal",
  "Rosy-Billed",
  "Ruddy-Shelduck",
  "Salvadoris-Teal",
  "Shelduck",
  "Silver-Teal",
  "Smew",
  "Spectacled-Eider",
  "Spot-Billed",
  "Spotted-Whistler",
  "Stellers-Eider",
  "Sunda-Teal",
  "Surf-Scoter",
  "Tufted-Duck",
  "Velvet-Scoter",
  "Wandering-Whistler",
  "Whistling-duck",
  "White-Winged",
  "Wigeon",
  "Wood-Duck",
  "Yellow-Billed",
  "Mountain",
  "Pacific",
  "Sustainable",
  "Inclusive",
  "Visionary",
  "North-West",
  "Fox",
  "Academic",
  "Community",
  "Innovator",
  "Researcher",
  "Futurist",
  "Mentor",
  "Adventurer",
  "Ambassador",
  "Captain",
  "Champion",
  "Cornerstone",
  "Scientist",
  "Artist",
  "Musician",
  "Writer",
  "Entrepreneur",
  "Organizer",
  "Paragon",
  "Pathfinder",
  "Philosopher",
  "Scholar"
];

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName() {
  return `${chooseRandom(names)}-${Math.floor(10000 + Math.random() * 10000)}`;
}

export async function fetchRandomDefaultAvatarId() {
  const defaultAvatarEndpoint = "/api/v1/media/search?filter=default&source=avatar_listings";
  const defaultAvatars = (await fetchReticulumAuthenticated(defaultAvatarEndpoint)).entries || [];
  if (defaultAvatars.length === 0) {
    // If reticulum doesn't return any default avatars, just default to the duck model. This should only happen
    // when running against a fresh reticulum server, e.g. a local ret instance.
    return new URL(defaultAvatar, location.href).href;
  }
  const avatarIds = defaultAvatars.map(avatar => avatar.id);
  return chooseRandom(avatarIds);
}
