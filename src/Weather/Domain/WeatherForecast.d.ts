import { WMOCodes } from './WMOCodes'

export type Temperature = number

export type WeatherForecast = {
    maxTemperature: Temperature
    wmo: WMOCodes
}
