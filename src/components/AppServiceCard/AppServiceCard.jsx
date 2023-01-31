import './AppServiceCard.scss'
import {empTypeConverter} from "../../scripts/commonScripts.js";
const AppServiceCard = (service) => {
    return (
        <div className="service-card">
            {service?.service?.name} ({empTypeConverter(service?.service?.type)})
        </div>
    )
}

export default  AppServiceCard;