import { createContext, useState } from "react"

export const NotificationContext = createContext()

export function NotificationProvider({ children }) {

  const [notifications, setNotifications] = useState([])

  const showNotification = (message, type = "info") => {

    const id = Date.now()

    const notification = {
      id,
      message,
      type
    }

    setNotifications((prev) => [...prev, notification])

    setTimeout(() => {
      removeNotification(id)
    }, 3000)

  }

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    )
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showNotification,
        removeNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}