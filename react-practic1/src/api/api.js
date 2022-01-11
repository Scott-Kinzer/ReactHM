const ApiShips = 'https://api.spacexdata.com/v3/launches/';

export function ApiRequest() {

    this.shipsFetch = async () => {
        return await fetch(ApiShips).then(data => data.json());
    }

    this.shipInfoFetch = async (id) => {
        return await fetch(`https://api.spacexdata.com/v3/launches/${id}`).then(data => data.json())
            .then(dataShip => {
            const {rocket: {rocket_id, rocket_name}, launch_date_utc, launch_site: {site_id} } = dataShip;
            return {
                rocket_id,
                rocket_name,
                launch_date_utc,
                site_id
            }
        })
    }

}