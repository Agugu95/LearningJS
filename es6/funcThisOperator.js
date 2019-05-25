const o = {
    name: 'Juile',
    gereetBackwards() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) { // Cannot read property 'length' of undefiend d
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },

};
console.log(o.gereetBackwards());