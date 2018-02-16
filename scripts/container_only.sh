#!/usr/bin/env bash
# See http://tuhrig.de/how-to-know-you-are-inside-a-docker-container/ for details on how this works
TEST=`awk -F'[/-]' '$2 == "docker"' /proc/self/cgroup 2>/dev/null`
if [[ $TEST = *[^[:space:]]* ]]; then
    exit 0
else
    echo "This command should only be run inside a container.  Try running yarn container:start"
    exit 1
fi
