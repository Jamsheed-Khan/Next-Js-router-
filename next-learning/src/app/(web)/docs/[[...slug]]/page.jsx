import React from 'react'

function DocsPage({ params }) {
    if (params.slug) {
        const [feature, concept, example] = params?.slug

        if (feature && !concept && !example) {
            return <div>
                <h1>
                    Viewing docs for feature {feature}
                </h1>
            </div>
        }
        if (feature && concept && !example) {
            return <div>
                <h1>
                    Viewing docs for feature {feature} and concept {concept}
                </h1>
            </div>
        }
        return (
            <div>
                <h1>
                    Viewing docs for feature {feature} and concept {concept} and example {example}
                </h1>
            </div>
        )
    }else{
        return <div>
            <h1>Docs home page</h1>
        </div>
    }
}

export default DocsPage