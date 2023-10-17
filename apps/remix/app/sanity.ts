import { studioUrl, workspaces } from 'apps-common/env'
import {
  type SanityNode,
  encodeSanityNodeData as _encodeSanityNodeData,
} from '@sanity/overlays'

const { projectId, dataset, tool, workspace } = workspaces['remix']

export function encodeSanityNodeData(
  node: Partial<SanityNode> & Pick<SanityNode, 'id' | 'type' | 'path'>,
) {
  return _encodeSanityNodeData({
    projectId,
    dataset,
    // @TODO temporary workaround as overlays fails to find the right workspace
    baseUrl: `${studioUrl}/${workspace}`,
    workspace,
    tool,
    ...node,
  })
}