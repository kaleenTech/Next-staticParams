  <!-- "build": "next build && next export", -->

import ProductDetails from "../../../common/ProjectsData.json";
import ProjectDetails from "@/components/ProjectDetails";

async function getProjectsData(name) {
const Projects = ProductDetails?.find((record) => {
return record.infoLink?.toLowerCase() === name?.project?.toLowerCase();
});
return Projects;
}
export async function generateStaticParams() {
return [
{ project: "tripigos" },
{ project: "kloo" },
{ project: "njCapital" },
{ project: "crom" },
{ project: "flex-league" },
{ project: "meeko" },
{ project: "boomio" },
{ project: "beliving" },
{ project: "sitka" },
{ project: "gorewear" },
{ project: "mt-hood" },
{ project: "safespace" },
{ project: "yoloh" },
{ project: "dine-n-dash" },
{ project: "kkpbhadli" },
];
}

export default async function Page({ params }) {
const dataGet = await getProjectsData(params);
return (
<section>
<ProjectDetails projectData={dataGet} />
</section>
);
}
