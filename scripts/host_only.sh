#!/usr/bin/env bash
# See http://tuhrig.de/how-to-know-you-are-inside-a-docker-container/ for details on how this works
TEST=`awk -F'[/-]' '$2 == "docker"' /proc/self/cgroup 2>/dev/null`
if [[ $TEST = *[^[:space:]]* ]]; then
    echo "This command cannot be run inside a container."
    exit 1
else
    exit 0
fi
