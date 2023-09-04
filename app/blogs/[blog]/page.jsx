"use client";

import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";
import { BASE_SCREEN } from "@/constants";
import clsx from "clsx";
import React from "react";

const getContent = async ({ slug }) => {
	const content = allBlogs.find((blog) => blog.slug === slug);
	return content;
};

export const generateStaticParams = async () => {
	const paths = [
		{
			blog: "hello-world",
		},
	];

	return paths;
};

const Render = ({ props, params }) => {
	const MDXComponents = useMDXComponents();
	const Component = useMDXComponent(props.body.code);

	return (
		<React.Fragment>
			<Component components={{ ...MDXComponents }} />
		</React.Fragment>
	);
};

const BlogPage = async ({ params }) => {
	const slug = `${params.blog}`;
	const content = await getContent({ slug });
	if (!content) return notFound();

	return (
		<div className={clsx(BASE_SCREEN)}>
			<Render props={content} params={params} />
		</div>
	);
};

export default BlogPage;
