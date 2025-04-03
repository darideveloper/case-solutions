import Timeline from "../ui/Timeline";
import Title from "../ui/Title";

export default function ServiceTimeline() {
    return (
        <div className="container text-center md:pt-18 pt-12">
            <Title isH1={false} className="text-primary text-xl md:text-2xl max-w-3xl mx-auto font-bold mb-2">
                El tener un sistema desarrollado a su medida le ayudará a...
            </Title>
            <Timeline />
        </div>
    )
}