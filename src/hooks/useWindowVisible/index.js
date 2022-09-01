/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/1 20:49
 * @File: index.js
 * @Description
 */
import { useCallback, useEffect, useState } from 'react'
import { getMapViewer } from '../../components/MapContainer'

const useWindowVisible = ({ prefix = [], initVisible = true }) => {

  const [windowEntity, setWindowEntity] = useState([])

  useEffect(() => {
    if (windowEntity.length > 0) {
      setVisible(initVisible)
    }
  }, [windowEntity])

  const init = () => {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.drawer.getObjectsVisible().then(res => {
        setWindowEntity(res.filter(entity => {
          const entityGid = entity.gid
          if (Array.isArray(prefix)) {
            return prefix.some(pre => entityGid.startsWith(pre))
          }

          return entityGid.startsWith(prefix)
        }))
      })
    }
  }

  const setVisible = useCallback((visible) => {
    if (windowEntity.length > 0) {
      const mapViewer = getMapViewer()
      windowEntity.forEach(entity => {
        mapViewer.drawer.updateObjectVisible(entity.gid, visible)
      })

    }
  }, [windowEntity])


  return {
    init,
    setVisible
  }
}

export default useWindowVisible
