class LengthConvertor {
    calculate(value, from, to) {
        if (value == null || from == null || to == null) {
            return null;
        }
        var inches =0;
        switch (to) {
            case 1:
                this.inches = value * from;
                return this.inches / 39370;

            case 2:
                this.inches = value * from;
                return this.inches / 39;
            case 3:
                this.inches = value * from;
                return this.inches * 2.54;
            case 4:
                this.inches = value * from;
                return this.inches * 25.4;
            case 5:
                this.inches= value * from;
                return this.inches * 25400;
            case 6:
               this.inches = value * from;
                return this.inches / 63360;
            case 7:
                this.inches = value * from;
                return this.inches / 12;
            default:
            return null;
        }
    }
}
export default LengthConvertor;