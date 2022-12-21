import service from '@/utils/request'

// @Tags Devices
// @Summary 创建Devices
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Devices true "创建Devices"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /devices/createDevices [post]
export const createDevices = (data) => {
  return service({
    url: '/devices/createDevices',
    method: 'post',
    data
  })
}

// @Tags Devices
// @Summary 删除Devices
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Devices true "删除Devices"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /devices/deleteDevices [delete]
export const deleteDevices = (data) => {
  return service({
    url: '/devices/deleteDevices',
    method: 'delete',
    data
  })
}

// @Tags Devices
// @Summary 删除Devices
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Devices"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /devices/deleteDevices [delete]
export const deleteDevicesByIds = (data) => {
  return service({
    url: '/devices/deleteDevicesByIds',
    method: 'delete',
    data
  })
}

// @Tags Devices
// @Summary 更新Devices
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Devices true "更新Devices"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /devices/updateDevices [put]
export const updateDevices = (data) => {
  return service({
    url: '/devices/updateDevices',
    method: 'put',
    data
  })
}

// @Tags Devices
// @Summary 用id查询Devices
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Devices true "用id查询Devices"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /devices/findDevices [get]
export const findDevices = (params) => {
  return service({
    url: '/devices/findDevices',
    method: 'get',
    params
  })
}

// @Tags Devices
// @Summary 分页获取Devices列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Devices列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /devices/getDevicesList [get]
export const getDevicesList = (params) => {
  return service({
    url: '/devices/getDevicesList',
    method: 'get',
    params
  })
}
