export interface StringValidator{
    isAcceptable(s:string):boolean
}
export default class ZipCodeValidator implements StringValidator{
    static numberRegexp=/^[0-9]+$/
    isAcceptable(s:string){
        return s.length===5&&ZipCodeValidator.numberRegexp.test(s);
    }
}
export {ZipCodeValidator}
export {ZipCodeValidator as mainValidator}
