/*
* 包含n个接口请求函数的模块
* 函数返回值：promise对象
* */
import ajax from './ajax'

//根据经纬度获取位置信息
export const reqAddress = (geohash)=> ajax(`/position/${geohash}`)

//获取食品分类列表
export const reqFoodTypes = (geohash)=> ajax('/index_category')

//根据经纬度获取商铺列表
export const reqShops = (latitude,longitude)=> ajax('/shops',{latitude,longitude})
