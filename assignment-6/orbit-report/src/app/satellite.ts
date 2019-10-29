export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
// shouldShowWarning: boolean;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){

    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.launchDate = launchDate;
    this.operational = operational;

  }

  shouldShowWarning() {
    if (this.type.toLowerCase() === 'space debris') {
      return true;
    } else {
      return false;
    }
  }
}

