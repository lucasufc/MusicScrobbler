import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AppThemeProvider, DrawerProvider } from "./shared/contexts"
import { SideBar } from "./shared/components"

export const App = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>
                <BrowserRouter>
                    <SideBar>
                        <AppRoutes />
                    </SideBar>
                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    )
}
