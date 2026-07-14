import type { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { TextInputs } from "../../../Components/textInputs";
import type { PostEventType } from "../../../Types";
import { TextArea } from "../../../Components/textarea";
import { DropDownSiteSelect } from "../../../Components/dropDownSiteSelect";

type EventInputType = {
    register: UseFormRegister<PostEventType>
    errors: FieldErrors<PostEventType>
    watch: UseFormWatch<PostEventType>
    setOneDayEvent: () => void
    oneDayEvent: boolean
}

export function EventInputs({
    register,
    errors,
    watch,
    setOneDayEvent,
    oneDayEvent
}: EventInputType){

    // const [oneDayEvent, setOneDayEvent] = useState<boolean>(false)

    return(
        <div>
            <TextInputs 
                textType="text"
                placeholder="Please enter event name"
                extraClasses="mt-8 w-200 border-b"
                register={register("name", {
                    required: "Event Name is required"
                })}
                error={errors.name}
            />

            <TextInputs 
                textType="text"
                placeholder="Please enter event image"
                extraClasses="mt-8 w-200 border-b"
                register={register("img", {
                    required: "Event Image is required"
                })}
                error={errors.img}
            />

            <TextInputs 
                textType="date"
                register={register("startDate", {
                    required: "Please enter a start date",
                    validate: (value) => {
                        const today = new Date().toISOString().split("T")[0]
                        return value >= today || "Start date can not be in the past"
                    }
                })}
                error={errors.startDate}
                label="Enter start date"
                extraClasses="dateInputs"
            />

            <div
                className="flex items-center justify-items-center flex-row justify-between mt-6 border-b py-2"
            >
                <label
                    className="font-bold uppercase"
                >
                    Is the event more than one day?
                </label>

                <input 
                    type="checkbox"
                    checked={!oneDayEvent}
                    onChange={setOneDayEvent}
                    className="h-6 w-6"
                />
            </div>

            {!oneDayEvent &&
                <TextInputs 
                    textType="date"
                    register={register("endDate", {
                        required: "Please enter an end date",
                        validate: (value) => {
                            if(!value) return "Please enter an end date"
                            const startDate = watch("startDate")
                            if(!startDate) return true
                            return value > startDate || "End date must be after the start date"
                        }
                    })}
                    error={errors.endDate}
                    label="Enter end date"
                    extraClasses="dateInputs"
                />
            }

            <TextInputs 
                textType="time"
                register={register("startTime", {
                    required: "Please enter a start time"
                })}
                error={errors.startTime}
                label="Enter start time"
                extraClasses="dateInputs"
            />

            <TextInputs 
                textType="time"
                register={register("endTime", {
                    required: "Please enter a end time",
                    validate: (value) => {
                        const endDate = watch("endDate")
                        const startTime = watch("startTime")
                        const isSingleDay = !endDate

                        if(isSingleDay && startTime && value <= startTime){
                            return "End time must be after start time for single day events"
                        }
                        return true
                    }
                })}
                error={errors.endTime}
                label="Enter end time"
                extraClasses="dateInputs"
            />

            <TextArea 
                placeholder="Please enter info about the event"
                register={register("info", {
                    required: "Please enter info for the event"
                })}
                error={errors.info}
                extraClasses="w-200 mt-6 border h-40"
            />

            <DropDownSiteSelect 
                register={register("siteId", {
                    required: "Please select a site",
                    valueAsNumber: true,
                    validate: (value) => !Number.isNaN(value) || "Please select a site"
                })}
                error={errors.siteId}
                extraClasses="w-200 mt-6 border-b"
            />
        </div>
    )
}