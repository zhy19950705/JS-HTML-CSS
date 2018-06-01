import {StringValidator} from './Validation'

export class ParseIntBasedZipCodeValidator{
    isAcceptable(s:string){
        return s.length===5&&parseInt(s).toString()===s;
    }
}

// 重新导出
export {ZipCodeValidator as RexExpBasedZipCodeValidator} from './Validation'