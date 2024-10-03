import { EditBar } from "../../shared/components"
import { Toolbar } from "../../shared/components/toolbar/Toolbar"
import { BaseLayout } from "../../shared/layouts"

export const Home: React.FC = () => {
    return (
        <BaseLayout title="Home" toolbar={<EditBar />}>
            Testando
        </BaseLayout>
    )
}
