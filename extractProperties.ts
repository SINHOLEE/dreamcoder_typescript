export type FixedIPsType = {
	subnet_id: string;
	ip_address: string;
};
export type externalGateway_InfoType = {
	network_id: string;
	enable_snat: boolean;
	external_fixed_ips: FixedIPsType[];
};

export type RouteType = {
	nexthop: string;
	destination: string;
};

interface RouterItemProps {
	id: string;
	name: string;
	description: string;
	flavor_id: string | null;
	ha: boolean;
	revision_number: number;
	routes: RouteType[];
	status: string;
	tags: string[];
	created_at: string;
	updated_at: string;
	project_id: string;
	zone_id: string;
	tenant_id: string;
	availability_zone_hints: string[];
	admin_state_up: boolean;
	availability_zones: string[];
	distributed: boolean;
	zone_name: string;
	external_gateway_info: externalGateway_InfoType;
	ixc_project_id: string;
}

const object: RouterItemProps = {
	admin_state_up: true,
	availability_zone_hints: [],
	availability_zones: ["nova"],
	created_at: "2019-12-09T06:41:21Z",
	description: "",
	distributed: true,
	external_gateway_info: {
		network_id: "cd5f26dd-5595-486a-8d3a-09fe4c83bc01",
		enable_snat: true,
		external_fixed_ips: [
			{
				subnet_id: "f9e33484-c9d5-41b4-8cc3-d434b2f00c15",
				ip_address: "182.161.115.8",
			},
		],
	},
	flavor_id: null,
	ha: false,
	id: "d0a2ad45-715f-4b59-8340-268fdff9aaf3",
	name: "kinx-test-pz-20191209-dufxjyav-router",
	project_id: "54f44136118d41288971214a0181f317",
	revision_number: 11,
	routes: [
		{
			nexthop: "192.168.40.254",
			destination: "172.16.0.0/12",
		},
		{
			nexthop: "192.168.40.254",
			destination: "192.168.0.0/16",
		},
		{
			nexthop: "192.168.40.254",
			destination: "10.0.0.0/8",
		},
	],
	status: "ACTIVE",
	tags: [],
	tenant_id: "54f44136118d41288971214a0181f317",
	updated_at: "2021-01-22T00:25:13Z",
	zone_id: "b63797d8-ed3b-11e8-bc07-fa163e0989c9",
	zone_name: "pz-01",
	ixc_project_id: "e888af4d-7383-4f9b-8f8b-ff323d6d14c7",
};
Object.keys(object);

console.log(Object.keys(object));
