import React, { createContext, useCallback, useContext, useState } from "react"

interface IDrawerOption {
    icon: string
    label: string
    path: string
}

interface IDrawerContextData {
    isDrawerOpen: boolean
    drawerOptions: IDrawerOption[]
    toggleDrawerOpen: () => void
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IThemeProviderProps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

    return (
        <DrawerContext.Provider
            value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}
        >
            {children}
        </DrawerContext.Provider>
    )
}
