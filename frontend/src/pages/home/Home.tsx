import { Toolbar } from "../../shared/components/toolbar/Toolbar"
import { BaseLayout } from "../../shared/layouts"

export const Home: React.FC = () => {
    return (
        <BaseLayout title="Home" toolbar={<Toolbar showSearchField={true} />}>
            Testando
        </BaseLayout>
    )
}
