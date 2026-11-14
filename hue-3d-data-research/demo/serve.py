#!/usr/bin/env python3
"""Serve the demo locally: python3 serve.py  ->  http://localhost:8000"""
import functools, http.server, os, sys
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=os.path.dirname(os.path.abspath(__file__)))
print(f"http://localhost:{port}")
http.server.ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()
