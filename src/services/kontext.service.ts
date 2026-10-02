// Mock Kontext check - replace with real SDK later
export async function kontextAuthorize(jwt: string, requiredRole: string) {
  // TODO: Replace with real Kontext SDK call
  // const result = await kontextClient.authorize(jwt, requiredRole);
  
  // For pilot: simulate
  if (!jwt) return { allowed: false, reason: "No JWT" };
  if (requiredRole !== "execute:api") return { allowed: false, reason: "Invalid role" };
  
  return { allowed: true, reason: "OK", auditId: "audit_" + Date.now() };
}
