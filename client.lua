postMessage = function(data)
    SendNUIMessage(data)
end

RegisterNetEvent('ricky-client:openSpawnLocation')
AddEventHandler('ricky-client:openSpawnLocation', function()
  OpenMenu()
end)

RegisterNUICallback('spawn', function(data, cb)
   local point = data.point
   local coordinate = point.coordinate
   local heading = point.heading
   local ped = PlayerPedId()
   DoScreenFadeOut(500)
   Wait(800)
   SetEntityCoords(ped, coordinate.x, coordinate.y, coordinate.z)
   SetEntityHeading(ped, heading)
   DoScreenFadeIn(500)
   SetNuiFocus(false, false)
   TriggerEvent('ricky-client:chooseSpawnLocation')
end)

OpenMenu = function()
    SetNuiFocus(true, true)
    postMessage({
        type = "OPEN",
        location = Config.Location
    })
end
