import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import certificateData from "../../data/certificatesData";

// Configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ url, name }) => {
  const [loadError, setLoadError] = useState(null);

  function onDocumentLoaded(data) {
    setLoadError(null);
  }

  return (
    // clickable card
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-105 transition-all duration-300 w-[260px]"
    >
      <div className="rounded-xl shadow-lg border border-slate-300 overflow-hidden">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoaded}
          onLoadError={(error) => setLoadError(error)}
          onSourceError={(error) => setLoadError(error)}
        >
          <Page
            pageNumber={1}
            width={300}
            canvasBackground="transparent"
            renderTextLayer={false} // ⬅ removes text under the PDF
            renderAnnotationLayer={false} // ⬅ removes links/comments layer
          />
        </Document>
        <div className="certificate-details">
          <p className="text-xl p-3 text-center">{name}</p>
        </div>
      </div>
    </a>
  );
};

export default PdfViewer;
