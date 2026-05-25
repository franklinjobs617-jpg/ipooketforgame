import type { TableBlock } from "@/lib/guides";

export function GuideTable({ table }: { table: TableBlock }) {
  return (
    <section className="table-section">
      <h2>{table.title}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
