const DNAMatch = (dna) => {
    return dna.replace(/(A|T|G|C)/gi, ($1) => {
        return {
            A: 'T',
            T: 'A',
            C: 'G',
            G: 'C'
        }[$1]
    })
}