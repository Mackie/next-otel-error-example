import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPHttpProtoTraceExporter, registerOTel } from "@vercel/otel";

registerOTel({
    spanProcessors: [
        new BatchSpanProcessor(
            new OTLPHttpProtoTraceExporter(
                {
                    url: 'some-url',
                }
            )
        )
    ]
})