import { Toaster } from "react-hot-toast"
import NewBook from "./NewBook/NewBook"
import Offer from "./Offer/Offer"
import Introduction from "./introduction/Introduction"

const HomePage = () => {
    return (
        <>
            {/* toaster error shwo */}
            <Toaster />
            {/* toaster error shwo */}

            <NewBook />
            <Offer key={1}>
                <h3>ارزان ترین ها</h3>
            </Offer>
            <Offer key={2}>
                <h3>جدید ترین ها</h3>
            </Offer>
            <Offer key={3}>
                <h3>خواندنی ترین رمان های دنیا</h3>
            </Offer>
            <Introduction />
        </>
    )
}

export default HomePage