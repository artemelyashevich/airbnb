export function FirstStep() {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Select a country</DialogTitle>
                <DialogDescription>Please choose a country</DialogDescription>
            </DialogHeader>
            <Select required onValueChange={(value: string) => setLocationValue(value)} value={locationValue}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            Countries
                        </SelectLabel>
                        {
                            getAllCountries().map((item, index: number) => (
                                <SelectItem key={index} value={item.value}>
                                    <div className="flex gap-5 items-center">
                                        <img className="w-8" src={`https://flagsapi.com/${item.value}/flat/64.png`} alt={item.region} />
                                        | {item.label}
                                    </div>
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <HomeMap locationValue={locationValue} />
        </>
    )
}