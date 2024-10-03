import { Navigate, Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react"
import { Home } from "../pages"

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/home",
                label: "Home",
            },
        ])
    })

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
