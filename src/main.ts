export interface IRocket {
    mission_name: string,
    launch_date_local: string,
    launch_site: ILaunch,
    links: ILinks,
    rocket: IRocketDescr

}

interface ILaunch {
    site_name_long: string
}

interface ILinks {
    article_link: null,
    video_link: string
}

interface IRocketDescr {
    rocket_name: string,
    first_stage: IStage,
    second_stage: ISecondStage
}


interface IStage {
    cores: Array<ICore>
}

interface ICore {
    flight: number,
    core: ISubCore
}

interface ISubCore {
    reuse_count: number,
    status: string
}

interface ISecondStage {
    payloads: Array<PayLoad>
}

interface PayLoad {
    payload_mass_kg: number,
    payload_mass_lbs: number,
    payload_type: string
}