"use client"
import type {
  DefaultNodeTypes,
  SerializedHeadingNode,
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import {
  type JSXConvertersFunction,
  RichText,
} from '@payloadcms/richtext-lexical/react'

import textToIdConverter from '@/utils/textToIdConverter'

import React from 'react'

const CustomHeadingComponent: React.FC< {node: SerializedHeadingNode} > = ({node}) => {
    const {id, text} = textToIdConverter(node)

    const Tag = (node.tag)
    return <Tag id={id}>{text}</Tag>
}

const jsxConverters : JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  heading: ({ node }) => {
    return <CustomHeadingComponent node={node} />
  },
})


export const RichTextConverter: React.FC<{
  lexicalData: SerializedEditorState
}> = ({ lexicalData }) => {
  return <RichText converters={jsxConverters} data={lexicalData} />
}


export default RichTextConverter