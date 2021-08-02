export interface SpriteStyles {
    fillColour: string;
    borderColour: string;
    lineWidth: number;
}

export class StylesRepository {
    public static getStylesForGenericEntity(): SpriteStyles {
        return {
            fillColour:'#FFC92E',
            borderColour: '#000000',
            lineWidth: 1,
        };
    }
}
