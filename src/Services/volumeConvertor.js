class VolumeConvertor {
    Calculate(value, from, to) {
        if (value == null || from == null || to == null) {
            return null;
        }
        var liter =0;
        switch (to) {
            case 1:
                this.liter = value;
                return this.liter;
            case 2:
                this.liter = value * from;
                return this.liter * 1000
            case 3:
                this.liter = value * from;
                return this.liter / 3.785;
            default:
                return null;
            }
        }
    }
    export default VolumeConvertor;
