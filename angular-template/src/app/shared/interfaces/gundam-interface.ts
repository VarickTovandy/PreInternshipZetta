export interface Gundam {
    id: number;
    name: string;
    modelNumber: string;
    series: string;
    description: string;
    imageUrl: string;
    armaments: GundamArmaments;
}

export interface GundamPilot {
    id: number;
    name: string;
    nationality: string;
    gundamName: string;
    imageUrl: string;
    affiliations: PilotAffiliations
}

interface GundamArmaments {
    fixed: string[];
    handheld: string[];
}

interface PilotAffiliations {
    affiliation: string[];
}