import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (session) {
        return res.send({
            content: "This is protected content. You can access this because you are signed in!",
        })
    }

    res.send({
        error: 'You must be logged in to view this protected content.'
    })
}