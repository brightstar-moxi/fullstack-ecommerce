

export default function TileComponent({
    data, selected = [], onClick
}) {

    return (
        <div className="mt-3 flex flex-wrap items-center gap-1">
            {
                data.map(dataItem => (
                    <label
                        className="cursor-pointer"
                        key={dataItem.id}></label>
                ))
            }
            <span className={`rounded-lg border border-black px-6 py-2 font-bond ${selected &&
                    selected.length &&
                    selected.map((item) => item.id).indexOf(dataItem.id) !== -1 ? "bg-white"
                    : ""
                }`}
            >
                {DataTransferItem.label}
            </span>
        </div>

    ) : null
}